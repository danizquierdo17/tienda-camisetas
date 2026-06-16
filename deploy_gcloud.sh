#!/bin/bash

# Script de despliegue automatizado para Google Cloud
# Despliega la tienda de camisetas en shirts.d8t.dev

set -e  # Salir si hay algún error

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuración
VM_NAME="shirts-vm"
VM_ZONE="europe-west1-b"
DOMAIN="shirts.d8t.dev"
PROJECT_DIR="tienda"

echo -e "${BLUE}🚀 Script de Despliegue - shirts.d8t.dev${NC}"
echo ""

# Función para mostrar mensajes
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar que gcloud está instalado
if ! command -v gcloud &> /dev/null; then
    log_error "Google Cloud SDK no está instalado"
    echo "Instálalo desde: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

log_success "Google Cloud SDK encontrado"

# Preguntar nombre de la VM si no existe
read -p "Nombre de tu VM en Google Cloud [$VM_NAME]: " input_vm
VM_NAME="${input_vm:-$VM_NAME}"

read -p "Zona de tu VM [$VM_ZONE]: " input_zone
VM_ZONE="${input_zone:-$VM_ZONE}"

echo ""
log_info "Configuración:"
echo "  VM: $VM_NAME"
echo "  Zona: $VM_ZONE"
echo "  Dominio: $DOMAIN"
echo ""

read -p "¿Continuar con el despliegue? (s/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    log_warning "Despliegue cancelado"
    exit 0
fi

# Paso 1: Empaquetar proyecto
log_info "Paso 1/6: Empaquetando proyecto..."
tar -czf tienda-deploy.tar.gz \
    tienda.html tienda.css tienda.js productos.js \
    server.py requirements.txt \
    futbolmodaes_img/ \
    --exclude='*.pyc' --exclude='__pycache__' \
    --exclude='venv' --exclude='backup_*' \
    2>/dev/null || true

log_success "Proyecto empaquetado: tienda-deploy.tar.gz"

# Paso 2: Subir a VM
log_info "Paso 2/6: Subiendo archivos a la VM..."
gcloud compute scp tienda-deploy.tar.gz ${VM_NAME}:~ --zone=${VM_ZONE}
log_success "Archivos subidos"

# Paso 3: Configurar VM
log_info "Paso 3/6: Configurando VM..."

gcloud compute ssh ${VM_NAME} --zone=${VM_ZONE} --command="
    set -e
    
    # Limpiar despliegue anterior si existe
    rm -rf ${PROJECT_DIR}
    mkdir -p ${PROJECT_DIR}
    
    # Descomprimir
    tar -xzf tienda-deploy.tar.gz -C ${PROJECT_DIR}
    cd ${PROJECT_DIR}
    
    # Crear entorno virtual si no existe
    if [ ! -d 'venv' ]; then
        python3 -m venv venv
    fi
    
    # Activar e instalar dependencias
    source venv/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    
    echo '✅ Proyecto configurado'
"

log_success "VM configurada"

# Paso 4: Configurar servicio systemd
log_info "Paso 4/6: Configurando servicio backend..."

# Obtener el usuario de la VM
VM_USER=$(gcloud compute ssh ${VM_NAME} --zone=${VM_ZONE} --command="whoami" 2>/dev/null | tr -d '\r')

# Crear archivo de servicio temporal
cat > /tmp/shirts-backend.service << EOF
[Unit]
Description=Shirts Backend Flask Service
After=network.target

[Service]
Type=simple
User=${VM_USER}
WorkingDirectory=/home/${VM_USER}/${PROJECT_DIR}
Environment="PATH=/home/${VM_USER}/${PROJECT_DIR}/venv/bin"
Environment="FLASK_RUN_PORT=5001"
ExecStart=/home/${VM_USER}/${PROJECT_DIR}/venv/bin/python3 /home/${VM_USER}/${PROJECT_DIR}/server.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# Subir y configurar servicio
gcloud compute scp /tmp/shirts-backend.service ${VM_NAME}:/tmp/ --zone=${VM_ZONE}

gcloud compute ssh ${VM_NAME} --zone=${VM_ZONE} --command="
    sudo mv /tmp/shirts-backend.service /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl enable shirts-backend
    sudo systemctl restart shirts-backend
    sleep 2
    sudo systemctl status shirts-backend --no-pager
"

log_success "Servicio backend configurado"

# Paso 5: Configurar Nginx
log_info "Paso 5/6: Configurando Nginx..."

# Crear configuración de Nginx temporal
cat > /tmp/shirts-nginx.conf << EOF
server {
    listen 80;
    server_name ${DOMAIN};
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ${DOMAIN};

    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    access_log /var/log/nginx/shirts_access.log;
    error_log /var/log/nginx/shirts_error.log;

    root /home/${VM_USER}/${PROJECT_DIR};
    index tienda.html;

    location / {
        try_files \$uri \$uri/ =404;
    }

    location /api/ {
        proxy_pass http://localhost:5001;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(css|js)$ {
        expires 7d;
        add_header Cache-Control "public";
    }
}
EOF

# Subir y configurar Nginx
gcloud compute scp /tmp/shirts-nginx.conf ${VM_NAME}:/tmp/ --zone=${VM_ZONE}

gcloud compute ssh ${VM_NAME} --zone=${VM_ZONE} --command="
    # Instalar Nginx si no está instalado
    if ! command -v nginx &> /dev/null; then
        sudo apt update
        sudo apt install -y nginx
    fi
    
    # Configurar sitio
    sudo mv /tmp/shirts-nginx.conf /etc/nginx/sites-available/${DOMAIN}
    sudo ln -sf /etc/nginx/sites-available/${DOMAIN} /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    
    # Verificar configuración
    sudo nginx -t
    
    # Reiniciar Nginx
    sudo systemctl restart nginx
"

log_success "Nginx configurado"

# Paso 6: Obtener IP pública
log_info "Paso 6/6: Obteniendo información de despliegue..."

VM_IP=$(gcloud compute instances describe ${VM_NAME} \
    --zone=${VM_ZONE} \
    --format='get(networkInterfaces[0].accessConfigs[0].natIP)')

echo ""
log_success "¡Despliegue completado!"
echo ""
echo -e "${BLUE}📊 Información del Despliegue:${NC}"
echo "  🌐 Dominio: https://${DOMAIN}"
echo "  🖥️  VM: ${VM_NAME}"
echo "  📍 Zona: ${VM_ZONE}"
echo "  🔢 IP Pública: ${VM_IP}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANTE - Configuración DNS:${NC}"
echo ""
echo "  1. Ve a Cloudflare → d8t.dev → DNS"
echo "  2. Añade un registro A:"
echo "     Type: A"
echo "     Name: shirts"
echo "     IPv4: ${VM_IP}"
echo "     Proxy: Activado (naranja)"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANTE - Configurar SSL:${NC}"
echo ""
echo "  Conecta a la VM y ejecuta:"
echo "  gcloud compute ssh ${VM_NAME} --zone=${VM_ZONE}"
echo "  sudo certbot --nginx -d ${DOMAIN}"
echo ""
echo -e "${BLUE}📝 Comandos Útiles:${NC}"
echo "  Ver logs backend: gcloud compute ssh ${VM_NAME} --zone=${VM_ZONE} --command='sudo journalctl -u shirts-backend -f'"
echo "  Ver logs Nginx: gcloud compute ssh ${VM_NAME} --zone=${VM_ZONE} --command='sudo tail -f /var/log/nginx/shirts_error.log'"
echo "  Reiniciar backend: gcloud compute ssh ${VM_NAME} --zone=${VM_ZONE} --command='sudo systemctl restart shirts-backend'"
echo ""

# Limpiar archivos temporales
rm -f tienda-deploy.tar.gz /tmp/shirts-backend.service /tmp/shirts-nginx.conf

log_success "Script completado"

# Made with Bob

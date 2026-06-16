# 🚀 Guía de Despliegue en Google Cloud

Despliegue de la tienda de camisetas en Google Cloud VM con dominio **shirts.d8t.dev**

## 📋 Requisitos Previos

- Cuenta de Google Cloud Platform
- Dominio d8t.dev configurado en Cloudflare
- Google Cloud SDK instalado localmente
- Acceso SSH a la VM de Google Cloud

## 🏗️ Arquitectura del Despliegue

```
Internet
    ↓
Cloudflare DNS (shirts.d8t.dev)
    ↓
Google Cloud VM (IP pública)
    ↓
Nginx (Reverse Proxy)
    ↓
├── Frontend (Puerto 8001) → Archivos estáticos
└── Backend Flask (Puerto 5001) → API de emails
```

## 🔧 Paso 1: Preparar la VM en Google Cloud

### 1.1 Crear/Acceder a la VM

```bash
# Conectar a tu VM existente
gcloud compute ssh [NOMBRE-VM] --zone=[ZONA]

# O crear una nueva VM
gcloud compute instances create shirts-vm \
    --zone=europe-west1-b \
    --machine-type=e2-micro \
    --image-family=ubuntu-2204-lts \
    --image-project=ubuntu-os-cloud \
    --boot-disk-size=10GB \
    --tags=http-server,https-server
```

### 1.2 Configurar Firewall

```bash
# Permitir tráfico HTTP y HTTPS
gcloud compute firewall-rules create allow-http \
    --allow tcp:80 \
    --target-tags http-server

gcloud compute firewall-rules create allow-https \
    --allow tcp:443 \
    --target-tags https-server
```

### 1.3 Obtener IP Pública

```bash
gcloud compute instances describe [NOMBRE-VM] \
    --zone=[ZONA] \
    --format='get(networkInterfaces[0].accessConfigs[0].natIP)'
```

**Guarda esta IP para configurar Cloudflare**

## 🌐 Paso 2: Configurar DNS en Cloudflare

1. Accede a tu panel de Cloudflare
2. Selecciona el dominio **d8t.dev**
3. Ve a **DNS** → **Records**
4. Añade un nuevo registro:

```
Type: A
Name: shirts
IPv4 address: [IP-PUBLICA-DE-TU-VM]
Proxy status: Proxied (naranja) ✅
TTL: Auto
```

5. Guarda los cambios

## 📦 Paso 3: Instalar Dependencias en la VM

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Python y pip
sudo apt install python3 python3-pip python3-venv -y

# Instalar Nginx
sudo apt install nginx -y

# Instalar certbot para SSL
sudo apt install certbot python3-certbot-nginx -y

# Instalar Git
sudo apt install git -y
```

## 📁 Paso 4: Subir el Proyecto a la VM

### Opción A: Usando SCP (Recomendado)

Desde tu máquina local:

```bash
# Comprimir el proyecto (excluyendo archivos innecesarios)
cd /Users/dizq/Documents/DaniPersonal/Camisetas
tar -czf tienda.tar.gz \
    tienda.html tienda.css tienda.js productos.js \
    server.py requirements.txt \
    futbolmodaes_img/ \
    --exclude='*.pyc' --exclude='__pycache__'

# Subir a la VM
gcloud compute scp tienda.tar.gz [NOMBRE-VM]:~ --zone=[ZONA]
```

### Opción B: Usando Git

En la VM:

```bash
# Clonar repositorio (si tienes uno)
cd ~
git clone [URL-REPOSITORIO] tienda
cd tienda
```

## 🔨 Paso 5: Configurar el Proyecto en la VM

```bash
# Descomprimir (si usaste SCP)
cd ~
tar -xzf tienda.tar.gz
cd tienda

# Crear entorno virtual
python3 -m venv venv
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Verificar que todo funciona
python3 server.py
# Presiona Ctrl+C para detener
```

## 🔧 Paso 6: Configurar Servicios Systemd

### 6.1 Servicio para Flask Backend

```bash
sudo nano /etc/systemd/system/shirts-backend.service
```

Contenido:

```ini
[Unit]
Description=Shirts Backend Flask Service
After=network.target

[Service]
Type=simple
User=YOUR_USERNAME
WorkingDirectory=/home/YOUR_USERNAME/tienda
Environment="PATH=/home/YOUR_USERNAME/tienda/venv/bin"
Environment="FLASK_RUN_PORT=5001"
ExecStart=/home/YOUR_USERNAME/tienda/venv/bin/python3 /home/YOUR_USERNAME/tienda/server.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

**Reemplaza `YOUR_USERNAME` con tu usuario de la VM**

### 6.2 Habilitar y Iniciar el Servicio

```bash
# Recargar systemd
sudo systemctl daemon-reload

# Habilitar servicio
sudo systemctl enable shirts-backend

# Iniciar servicio
sudo systemctl start shirts-backend

# Verificar estado
sudo systemctl status shirts-backend
```

## 🌐 Paso 7: Configurar Nginx

### 7.1 Crear Configuración de Nginx

```bash
sudo nano /etc/nginx/sites-available/shirts.d8t.dev
```

Contenido:

```nginx
server {
    listen 80;
    server_name shirts.d8t.dev;

    # Redirigir a HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name shirts.d8t.dev;

    # Certificados SSL (se configurarán con certbot)
    ssl_certificate /etc/letsencrypt/live/shirts.d8t.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/shirts.d8t.dev/privkey.pem;

    # Configuración SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Logs
    access_log /var/log/nginx/shirts_access.log;
    error_log /var/log/nginx/shirts_error.log;

    # Root directory para archivos estáticos
    root /home/YOUR_USERNAME/tienda;
    index tienda.html;

    # Servir archivos estáticos
    location / {
        try_files $uri $uri/ =404;
    }

    # Proxy para API Flask
    location /api/ {
        proxy_pass http://localhost:5001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Cache para imágenes
    location ~* \.(jpg|jpeg|png|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Cache para CSS y JS
    location ~* \.(css|js)$ {
        expires 7d;
        add_header Cache-Control "public";
    }
}
```

**Reemplaza `YOUR_USERNAME` con tu usuario**

### 7.2 Habilitar el Sitio

```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/shirts.d8t.dev /etc/nginx/sites-enabled/

# Eliminar configuración por defecto
sudo rm /etc/nginx/sites-enabled/default

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

## 🔒 Paso 8: Configurar SSL con Let's Encrypt

```bash
# Obtener certificado SSL
sudo certbot --nginx -d shirts.d8t.dev

# Seguir las instrucciones:
# 1. Ingresa tu email
# 2. Acepta los términos
# 3. Elige si quieres compartir tu email
# 4. Certbot configurará automáticamente Nginx

# Verificar renovación automática
sudo certbot renew --dry-run
```

## 🔄 Paso 9: Actualizar URL del Backend en Frontend

Edita `tienda.js` en la VM:

```bash
nano ~/tienda/tienda.js
```

Busca y cambia:

```javascript
// De:
const response = await fetch('http://localhost:5001/api/send-order', {

// A:
const response = await fetch('https://shirts.d8t.dev/api/send-order', {
```

Reinicia Nginx:

```bash
sudo systemctl restart nginx
```

## ✅ Paso 10: Verificar el Despliegue

1. Accede a: **https://shirts.d8t.dev**
2. Verifica que la tienda carga correctamente
3. Prueba añadir productos al carrito
4. Prueba el proceso de checkout (sin enviar pedido real)

### Comandos Útiles de Verificación

```bash
# Ver logs del backend
sudo journalctl -u shirts-backend -f

# Ver logs de Nginx
sudo tail -f /var/log/nginx/shirts_access.log
sudo tail -f /var/log/nginx/shirts_error.log

# Verificar estado de servicios
sudo systemctl status shirts-backend
sudo systemctl status nginx

# Reiniciar servicios si es necesario
sudo systemctl restart shirts-backend
sudo systemctl restart nginx
```

## 🔧 Mantenimiento

### Actualizar el Código

```bash
# Conectar a la VM
gcloud compute ssh [NOMBRE-VM] --zone=[ZONA]

# Ir al directorio
cd ~/tienda

# Actualizar archivos (subir nuevos con SCP o git pull)

# Reiniciar backend
sudo systemctl restart shirts-backend

# Reiniciar Nginx
sudo systemctl restart nginx
```

### Monitoreo

```bash
# Ver uso de recursos
htop

# Ver espacio en disco
df -h

# Ver logs en tiempo real
sudo journalctl -u shirts-backend -f
```

## 🐛 Solución de Problemas

### El sitio no carga

```bash
# Verificar Nginx
sudo nginx -t
sudo systemctl status nginx

# Verificar backend
sudo systemctl status shirts-backend
sudo journalctl -u shirts-backend -n 50
```

### Error de SSL

```bash
# Renovar certificado
sudo certbot renew --force-renewal
sudo systemctl restart nginx
```

### Backend no responde

```bash
# Ver logs
sudo journalctl -u shirts-backend -n 100

# Reiniciar servicio
sudo systemctl restart shirts-backend
```

## 📊 Costos Estimados

- **VM e2-micro:** ~$7/mes (incluido en free tier si es tu primera VM)
- **Tráfico de red:** Primeros 1GB gratis/mes
- **Certificado SSL:** Gratis (Let's Encrypt)
- **Dominio:** Ya tienes d8t.dev

**Total estimado:** $0-7/mes

## 🔐 Seguridad

- ✅ SSL/TLS habilitado
- ✅ Firewall configurado
- ✅ Actualizaciones automáticas de certificados
- ✅ Logs habilitados
- ⚠️ Considera configurar fail2ban para protección adicional

## 📝 Notas Importantes

1. **Backup:** Haz backups regulares de la VM
2. **Monitoreo:** Configura alertas en Google Cloud Console
3. **Actualizaciones:** Mantén el sistema actualizado
4. **Logs:** Revisa logs regularmente

---

**¿Necesitas ayuda?** Consulta los logs o contacta con soporte.
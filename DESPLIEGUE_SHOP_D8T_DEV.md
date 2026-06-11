# Despliegue en shop.d8t.dev

Guía completa para desplegar la tienda en tu dominio con seguridad y buenas prácticas.

## Arquitectura Recomendada

```
Internet
    ↓
Cloudflare (DNS + CDN + DDoS Protection)
    ↓
shop.d8t.dev (HTTPS)
    ↓
Nginx (Reverse Proxy + SSL)
    ↓
    ├─→ Archivos estáticos (HTML, CSS, JS, imágenes)
    └─→ Flask Backend (puerto 5000) para emails
```

## Paso 1: Preparar la Máquina Virtual

### 1.1 Crear VM
Recomendado: **Ubuntu 22.04 LTS**
- **DigitalOcean Droplet**: $6/mes (1GB RAM)
- **AWS Lightsail**: $3.50/mes
- **Hetzner Cloud**: €4/mes (mejor precio/rendimiento)

### 1.2 Conectar por SSH
```bash
ssh root@TU_IP_VM
```

### 1.3 Actualizar sistema
```bash
apt update && apt upgrade -y
```

### 1.4 Instalar dependencias
```bash
apt install -y python3 python3-pip python3-venv nginx certbot python3-certbot-nginx ufw git
```

### 1.5 Crear usuario no-root
```bash
adduser tienda
usermod -aG sudo tienda
su - tienda
```

## Paso 2: Subir Archivos a la VM

### Opción A: SCP (Recomendado)
```bash
# Desde tu Mac
cd /Users/dizq/Documents/DaniPersonal/Camisetas
tar -czf tienda.tar.gz --exclude='venv' --exclude='.git' --exclude='*.pyc' --exclude='futbolmodaes_img' .
scp tienda.tar.gz tienda@TU_IP_VM:/home/tienda/

# En la VM
ssh tienda@TU_IP_VM
mkdir -p /home/tienda/tienda
cd /home/tienda/tienda
tar -xzf ../tienda.tar.gz
rm ../tienda.tar.gz
```

**⚠️ IMPORTANTE - Seguridad de Imágenes:**
- Las imágenes ahora están en el directorio `images/` con nombres simples (ej: `30022.jpg`)
- Esto oculta la estructura de equipos/directorios del servidor
- El directorio antiguo `futbolmodaes_img/` ya no se usa en producción
- Si inspeccionan el HTML solo verán rutas como `/images/30022.jpg` sin revelar la organización interna

### Opción B: Git (Si tienes repo)
```bash
# En la VM
cd /home/tienda
git clone https://github.com/tu-usuario/tienda.git
cd tienda
```

## Paso 3: Configurar Backend Flask

### 3.1 Crear entorno virtual
```bash
cd /home/tienda/tienda
python3 -m venv venv
source venv/bin/activate
pip install Flask flask-cors gunicorn
```

### 3.2 Crear servicio systemd
```bash
sudo nano /etc/systemd/system/tienda-backend.service
```

Contenido:
```ini
[Unit]
Description=Tienda Backend Flask con Gunicorn
After=network.target

[Service]
User=tienda
Group=www-data
WorkingDirectory=/home/tienda/tienda
Environment="PATH=/home/tienda/tienda/venv/bin"
ExecStart=/home/tienda/tienda/venv/bin/gunicorn --workers 2 --bind 127.0.0.1:5000 server:app

[Install]
WantedBy=multi-user.target
```

### 3.3 Activar servicio
```bash
sudo systemctl daemon-reload
sudo systemctl enable tienda-backend
sudo systemctl start tienda-backend
sudo systemctl status tienda-backend
```

## Paso 4: Configurar Nginx

### 4.1 Crear configuración
```bash
sudo nano /etc/nginx/sites-available/shop.d8t.dev
```

Contenido:
```nginx
# Redirigir HTTP a HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name shop.d8t.dev;
    return 301 https://$server_name$request_uri;
}

# Configuración HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name shop.d8t.dev;

    # SSL (Certbot lo configurará automáticamente)
    # ssl_certificate /etc/letsencrypt/live/shop.d8t.dev/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/shop.d8t.dev/privkey.pem;

    # Seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Root y archivos estáticos
    root /home/tienda/tienda;
    index tienda.html;

    # Logs
    access_log /var/log/nginx/shop.d8t.dev.access.log;
    error_log /var/log/nginx/shop.d8t.dev.error.log;

    # Página principal
    location / {
        try_files $uri $uri/ =404;
    }

    # Servir imágenes con caché
    location /futbolmodaes_img/ {
        alias /home/tienda/tienda/futbolmodaes_img/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # API Backend Flask
    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Comprimir archivos
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;
}
```

### 4.2 Activar sitio
```bash
sudo ln -s /etc/nginx/sites-available/shop.d8t.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Paso 5: Configurar DNS en Cloudflare

### 5.1 Agregar registro A
1. Ve a Cloudflare Dashboard
2. Selecciona `d8t.dev`
3. DNS → Add record:
   - **Type:** A
   - **Name:** shop
   - **IPv4 address:** TU_IP_VM
   - **Proxy status:** ✅ Proxied (naranja)
   - **TTL:** Auto

### 5.2 Configurar SSL en Cloudflare
1. SSL/TLS → Overview
2. Selecciona: **Full (strict)**

## Paso 6: Instalar SSL con Let's Encrypt

```bash
sudo certbot --nginx -d shop.d8t.dev
```

Responde las preguntas:
- Email: d8t.dev@gmail.com
- Acepta términos: Yes
- Compartir email: No (opcional)

Certbot configurará automáticamente SSL en Nginx.

### 6.1 Verificar renovación automática
```bash
sudo certbot renew --dry-run
```

## Paso 7: Configurar Firewall

```bash
# Permitir SSH, HTTP, HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## Paso 8: Optimizar Imágenes (Opcional pero Recomendado)

Las imágenes ocupan mucho espacio. Optimízalas:

```bash
# Instalar herramientas
sudo apt install -y jpegoptim optipng

# Optimizar JPGs (sin pérdida de calidad visible)
find /home/tienda/tienda/futbolmodaes_img -name "*.jpg" -exec jpegoptim --max=85 {} \;

# Optimizar PNGs
find /home/tienda/tienda/futbolmodaes_img -name "*.png" -exec optipng -o2 {} \;
```

Esto puede reducir el tamaño de las imágenes en 30-50%.

## Paso 9: Monitoreo y Logs

### Ver logs del backend
```bash
sudo journalctl -u tienda-backend -f
```

### Ver logs de Nginx
```bash
sudo tail -f /var/log/nginx/shop.d8t.dev.access.log
sudo tail -f /var/log/nginx/shop.d8t.dev.error.log
```

### Ver emails enviados
Revisa tu email: d8t.dev@gmail.com

## Paso 10: Backup Automático

### 10.1 Crear script de backup
```bash
nano /home/tienda/backup.sh
```

Contenido:
```bash
#!/bin/bash
BACKUP_DIR="/home/tienda/backups"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

# Backup de archivos
tar -czf $BACKUP_DIR/tienda_$DATE.tar.gz \
    --exclude='venv' \
    --exclude='*.pyc' \
    /home/tienda/tienda

# Mantener solo últimos 7 backups
ls -t $BACKUP_DIR/tienda_*.tar.gz | tail -n +8 | xargs rm -f

echo "Backup completado: tienda_$DATE.tar.gz"
```

```bash
chmod +x /home/tienda/backup.sh
```

### 10.2 Programar backup diario
```bash
crontab -e
```

Agregar:
```
0 3 * * * /home/tienda/backup.sh >> /home/tienda/backup.log 2>&1
```

## Seguridad Adicional

### 1. Rate Limiting en Nginx
Agregar antes del bloque `server`:
```nginx
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/m;

# Dentro del location /api/
location /api/ {
    limit_req zone=api_limit burst=5;
    # ... resto de configuración
}
```

### 2. Fail2ban para proteger SSH
```bash
sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 3. Actualizar contraseña SMTP
Si la contraseña está en el código, considera usar variables de entorno:

```bash
nano /etc/systemd/system/tienda-backend.service
```

Agregar en `[Service]`:
```ini
Environment="SMTP_PASSWORD=zhyn ydes zmch regn"
```

Y en `server.py` usar:
```python
import os
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD', 'zhyn ydes zmch regn')
```

## Verificación Final

1. **Accede a:** https://shop.d8t.dev
2. **Verifica:**
   - ✅ Página carga correctamente
   - ✅ Imágenes se ven
   - ✅ Puedes agregar productos al carrito
   - ✅ El checkout funciona
   - ✅ Recibes emails de prueba

## Mantenimiento

### Actualizar la tienda
```bash
# En tu Mac, hacer cambios y crear nuevo tar.gz
cd /Users/dizq/Documents/DaniPersonal/Camisetas
tar -czf tienda.tar.gz --exclude='venv' .
scp tienda.tar.gz tienda@TU_IP_VM:/home/tienda/

# En la VM
ssh tienda@TU_IP_VM
cd /home/tienda/tienda
tar -xzf ../tienda.tar.gz
sudo systemctl restart tienda-backend
```

### Actualizar precios
```bash
# Subir nuevo catalogo.csv
scp futbolmodaes_img/catalogo.csv tienda@TU_IP_VM:/home/tienda/tienda/futbolmodaes_img/

# En la VM
ssh tienda@TU_IP_VM
cd /home/tienda/tienda
source venv/bin/activate
python3 combinar_datos.py
```

## Costos Estimados

- **VM:** $3.50-6/mes
- **Dominio d8t.dev:** Ya lo tienes
- **Cloudflare:** Gratis
- **SSL:** Gratis (Let's Encrypt)
- **Total:** ~$5/mes

## Soporte

Si algo falla:
1. Revisa logs: `sudo journalctl -u tienda-backend -f`
2. Verifica Nginx: `sudo nginx -t`
3. Verifica DNS: `dig shop.d8t.dev`
4. Verifica SSL: `curl -I https://shop.d8t.dev`
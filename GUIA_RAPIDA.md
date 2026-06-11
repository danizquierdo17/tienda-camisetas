# 🚀 Guía Rápida - Tienda de Camisetas

## 📋 ¿Qué es esto?

Una tienda online de camisetas de fútbol con:
- 2,452 productos con imágenes
- Carrito de compras con personalización (talla, nombre, dorsal, parches)
- Sistema de emails automático
- Actualización automática del catálogo cada 15 días

## 🗂️ Estructura del Proyecto

```
Frontend (lo que ve el usuario):
├── tienda.html          # Página web
├── tienda.css           # Estilos
├── tienda.js            # Carrito y checkout
└── productos.js         # Catálogo (generado automáticamente)

Backend (servidor):
└── server.py            # API Flask para enviar emails

Imágenes:
└── images/              # 2,452 imágenes (30022.jpg, 29861.jpg, ...)

Scripts de actualización:
├── scraper_futbolmodaes.py           # Descarga productos de la web
├── combinar_datos.py                 # Combina datos y calcula precios
├── reorganizar_imagenes.py           # Organiza imágenes
├── actualizar_rutas_imagenes.py      # Actualiza productos.js
└── actualizar_catalogo_automatico.sh # Ejecuta todo automáticamente
```

## 🔄 Flujo Completo

### 1. Usuario Compra
```
Usuario → Navega tienda → Agrega al carrito → Personaliza → Checkout
→ Flask envía 2 emails (admin + cliente) → Listo
```

### 2. Actualización Automática (cada 15 días)
```
Cron ejecuta script → Scraper descarga nuevos productos → 
Combina datos → Reorganiza imágenes → Actualiza productos.js → 
Reinicia servidor → Email de notificación
```

## 🚀 Desplegar en Google Cloud

### Paso 1: Subir Código (ya hecho ✅)
```bash
# Ya está en: https://github.com/danizquierdo17/tienda-camisetas
```

### Paso 2: Transferir Imágenes
```bash
# En tu Mac
cd /Users/dizq/Documents/DaniPersonal/Camisetas
tar -czf images.tar.gz images/

# Subir a VM
gcloud compute scp images.tar.gz dehesa-vm:/tmp/ \
  --zone="europe-southwest1-a" \
  --project="mercadodeploy"
```

### Paso 3: Configurar VM
```bash
# Conectar
gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"

# Instalar dependencias
sudo apt update
sudo apt install -y python3 python3-pip python3-venv git nginx certbot python3-certbot-nginx

# Crear usuario
sudo adduser tienda
sudo usermod -aG sudo tienda
sudo su - tienda

# Clonar repo
cd /home/tienda
git clone https://github.com/danizquierdo17/tienda-camisetas.git tienda
cd tienda

# Descomprimir imágenes
sudo mv /tmp/images.tar.gz .
tar -xzf images.tar.gz
rm images.tar.gz

# Python
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Generar productos.js inicial
python3 combinar_datos.py
```

### Paso 4: Configurar Flask como Servicio
```bash
sudo nano /etc/systemd/system/tienda-backend.service
```

Contenido:
```ini
[Unit]
Description=Tienda Backend Flask
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

Activar:
```bash
sudo systemctl daemon-reload
sudo systemctl enable tienda-backend
sudo systemctl start tienda-backend
```

### Paso 5: Configurar Nginx
```bash
sudo nano /etc/nginx/sites-available/shop.d8t.dev
```

Contenido:
```nginx
server {
    listen 80;
    server_name shop.d8t.dev;
    root /home/tienda/tienda;
    index tienda.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:5000/api/;
        proxy_set_header Host $host;
    }

    location /images/ {
        expires 30d;
    }
}
```

Activar:
```bash
sudo ln -s /etc/nginx/sites-available/shop.d8t.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Paso 6: SSL
```bash
sudo certbot --nginx -d shop.d8t.dev
```

### Paso 7: Firewall
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### Paso 8: Actualización Automática
```bash
chmod +x actualizar_catalogo_automatico.sh
crontab -e
# Agregar: 0 3 */15 * * /home/tienda/tienda/actualizar_catalogo_automatico.sh
```

### Paso 9: DNS en Cloudflare
1. Ve a Cloudflare → DNS
2. Agrega registro A:
   - Nombre: `shop`
   - IPv4: [IP de dehesa-vm]
   - Proxy: Activado

Para obtener IP:
```bash
gcloud compute instances describe dehesa-vm \
  --zone=europe-southwest1-a \
  --project=mercadodeploy \
  --format='get(networkInterfaces[0].accessConfigs[0].natIP)'
```

## 🔄 Actualizar Código (Futuro)

```bash
# En tu Mac
git add .
git commit -m "Cambios"
git push

# En la VM
ssh dehesa-vm
cd /home/tienda/tienda
git pull
sudo systemctl restart tienda-backend
```

## 🛠️ Comandos Útiles

```bash
# Conectar a VM
gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"

# Ver logs
sudo journalctl -u tienda-backend -f
tail -f logs/actualizacion_catalogo.log

# Estado
sudo systemctl status tienda-backend
sudo systemctl status nginx

# Reiniciar
sudo systemctl restart tienda-backend
sudo systemctl restart nginx
```

## 📝 Archivos Importantes

- **tienda.html/css/js** - Frontend de la tienda
- **server.py** - Backend Flask (emails)
- **productos.js** - Catálogo (se genera automáticamente)
- **scraper_futbolmodaes.py** - Obtiene productos de la web
- **combinar_datos.py** - Combina datos y calcula precios
- **actualizar_catalogo_automatico.sh** - Script de actualización automática

## 🎯 Resultado Final

Una vez completado:
- ✅ Tienda en https://shop.d8t.dev
- ✅ Código en GitHub
- ✅ Imágenes en la VM
- ✅ Actualización automática cada 15 días
- ✅ Emails funcionando
- ✅ SSL/HTTPS

## 🆘 Problemas Comunes

**Flask no inicia:**
```bash
sudo journalctl -u tienda-backend -n 50
```

**Imágenes no cargan:**
```bash
sudo chown -R tienda:www-data /home/tienda/tienda/images/
sudo chmod -R 755 /home/tienda/tienda/images/
```

**Actualizar código:**
```bash
cd /home/tienda/tienda && git pull && sudo systemctl restart tienda-backend
```

---

**Eso es todo.** Sigue los pasos en orden y tendrás la tienda funcionando en shop.d8t.dev.
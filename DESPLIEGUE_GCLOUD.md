# 🚀 Despliegue en Google Cloud (dehesa-vm)

Guía para desplegar la tienda en tu VM de Google Cloud usando GitHub para el código y transferencia directa para las imágenes.

## 📋 Información de la VM

```bash
Proyecto: mercadodeploy
Zona: europe-southwest1-a
VM: dehesa-vm
Acceso: gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"
```

## 🎯 Estrategia de Despliegue

### Código → GitHub
- HTML, CSS, JavaScript
- Backend Python (Flask)
- Scripts de actualización
- Documentación

### Imágenes → Transferencia Directa
- `images/` (2,452 archivos, ~150 MB)
- Se transfieren una sola vez
- El scraper valida existencia antes de descargar

## 📦 Paso 1: Preparar Repositorio GitHub

### 1.1 Inicializar Git (si no está inicializado)

```bash
cd /Users/dizq/Documents/DaniPersonal/Camisetas

# Inicializar repositorio
git init

# Agregar archivos (el .gitignore ya excluye images/ y productos.js)
git add .
git commit -m "Initial commit: Tienda de camisetas con actualización automática"
```

### 1.2 Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `tienda-camisetas` (o el que prefieras)
3. Privado o Público (recomiendo Privado)
4. NO inicialices con README (ya tienes uno)

### 1.3 Conectar y Subir

```bash
# Agregar remote (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/tienda-camisetas.git

# Subir código
git branch -M main
git push -u origin main
```

## 🖼️ Paso 2: Generar productos.js Inicial

Como `productos.js` está en `.gitignore`, necesitas generarlo antes de subirlo:

```bash
# Asegúrate de tener productos.js actualizado
python3 combinar_datos.py

# Crear una versión inicial para el repo
cp productos.js productos.js.template

# Agregar al repo
git add -f productos.js.template
git commit -m "Add productos.js template"
git push
```

## 📤 Paso 3: Transferir Imágenes a la VM

### 3.1 Comprimir Imágenes

```bash
cd /Users/dizq/Documents/DaniPersonal/Camisetas
tar -czf images.tar.gz images/
```

### 3.2 Transferir a VM

```bash
# Opción A: Usando gcloud compute scp
gcloud compute scp images.tar.gz dehesa-vm:/tmp/ \
  --zone="europe-southwest1-a" \
  --project="mercadodeploy"

# Opción B: Primero conectar, luego usar scp normal
gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"
# Desde otra terminal en tu Mac:
# scp images.tar.gz usuario@IP_EXTERNA:/tmp/
```

## 🔧 Paso 4: Configurar la VM

### 4.1 Conectar a la VM

```bash
gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"
```

### 4.2 Instalar Dependencias del Sistema

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Python, pip, git, nginx
sudo apt install -y python3 python3-pip python3-venv git nginx

# Instalar certbot para SSL
sudo apt install -y certbot python3-certbot-nginx
```

### 4.3 Crear Usuario para la Aplicación

```bash
sudo adduser tienda
sudo usermod -aG sudo tienda
sudo su - tienda
```

### 4.4 Clonar Repositorio

```bash
cd /home/tienda
git clone https://github.com/TU_USUARIO/tienda-camisetas.git tienda
cd tienda
```

### 4.5 Descomprimir Imágenes

```bash
# Mover y descomprimir imágenes
sudo mv /tmp/images.tar.gz /home/tienda/tienda/
tar -xzf images.tar.gz
rm images.tar.gz

# Verificar
ls -lh images/ | head
```

### 4.6 Configurar Entorno Python

```bash
# Crear entorno virtual
python3 -m venv venv
source venv/bin/activate

# Instalar dependencias
pip install --upgrade pip
pip install -r requirements.txt
```

### 4.7 Generar productos.js Inicial

```bash
# Copiar template si existe
if [ -f productos.js.template ]; then
    cp productos.js.template productos.js
fi

# O generar desde cero si tienes los CSVs
# python3 combinar_datos.py
```

## 🔄 Paso 5: Modificar Scraper para Validar Imágenes

Vamos a actualizar el scraper para que no descargue imágenes que ya existen:

```python
# En scraper_futbolmodaes.py, modificar la función de descarga de imágenes:

def descargar_imagen(url, ruta_destino):
    """Descarga imagen solo si no existe"""
    if os.path.exists(ruta_destino):
        print(f"⏭️  Imagen ya existe: {ruta_destino}")
        return True
    
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(ruta_destino, 'wb') as f:
                f.write(response.content)
            print(f"✅ Descargada: {ruta_destino}")
            return True
    except Exception as e:
        print(f"❌ Error descargando {url}: {e}")
    return False
```

## 🚀 Paso 6: Configurar Servicios

### 6.1 Crear Servicio systemd para Flask

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
sudo systemctl status tienda-backend
```

### 6.2 Configurar Nginx

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

    # Archivos estáticos
    location / {
        try_files $uri $uri/ =404;
    }

    # API Flask
    location /api/ {
        proxy_pass http://127.0.0.1:5000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Imágenes con cache
    location /images/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

Activar:
```bash
sudo ln -s /etc/nginx/sites-available/shop.d8t.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6.3 Configurar SSL con Let's Encrypt

```bash
sudo certbot --nginx -d shop.d8t.dev
```

### 6.4 Configurar Firewall

```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 🔄 Paso 7: Configurar Actualización Automática

### 7.1 Dar Permisos

```bash
chmod +x /home/tienda/tienda/actualizar_catalogo_automatico.sh
```

### 7.2 Configurar Cron

```bash
crontab -e
```

Agregar:
```cron
# Actualizar catálogo cada 15 días a las 3:00 AM
0 3 */15 * * /home/tienda/tienda/actualizar_catalogo_automatico.sh
```

### 7.3 Probar Manualmente

```bash
cd /home/tienda/tienda
./actualizar_catalogo_automatico.sh
```

## 🔄 Paso 8: Workflow de Actualización de Código

### Desde tu Mac (desarrollo)

```bash
cd /Users/dizq/Documents/DaniPersonal/Camisetas

# Hacer cambios en el código
# ...

# Commit y push
git add .
git commit -m "Descripción de cambios"
git push
```

### En la VM (producción)

```bash
# Conectar a VM
gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"

# Actualizar código
cd /home/tienda/tienda
git pull

# Reiniciar servicios si es necesario
sudo systemctl restart tienda-backend
```

## 📊 Paso 9: Monitoreo

### Ver Logs

```bash
# Logs de Flask
sudo journalctl -u tienda-backend -f

# Logs de Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Logs de actualización automática
tail -f /home/tienda/tienda/logs/actualizacion_catalogo.log
```

### Verificar Estado

```bash
# Estado de servicios
sudo systemctl status tienda-backend
sudo systemctl status nginx

# Espacio en disco
df -h

# Uso de memoria
free -h
```

## 🔐 Paso 10: Configurar DNS en Cloudflare

1. Ve a Cloudflare → DNS
2. Agrega registro A:
   - Nombre: `shop`
   - IPv4: [IP externa de dehesa-vm]
   - Proxy: Activado (nube naranja)

Para obtener la IP externa:
```bash
gcloud compute instances describe dehesa-vm \
  --zone=europe-southwest1-a \
  --project=mercadodeploy \
  --format='get(networkInterfaces[0].accessConfigs[0].natIP)'
```

## ✅ Checklist de Despliegue

### Preparación Local
- [ ] `.gitignore` creado
- [ ] Repositorio GitHub creado
- [ ] Código subido a GitHub
- [ ] `productos.js.template` en el repo
- [ ] Imágenes comprimidas (`images.tar.gz`)

### En la VM
- [ ] Dependencias del sistema instaladas
- [ ] Usuario `tienda` creado
- [ ] Repositorio clonado
- [ ] Imágenes descomprimidas en `/home/tienda/tienda/images/`
- [ ] Entorno virtual creado
- [ ] Dependencias Python instaladas
- [ ] `productos.js` generado
- [ ] Servicio Flask configurado y corriendo
- [ ] Nginx configurado
- [ ] SSL instalado
- [ ] Firewall configurado
- [ ] Cron configurado
- [ ] DNS apuntando a la VM

### Verificación
- [ ] https://shop.d8t.dev carga correctamente
- [ ] Imágenes se muestran
- [ ] Carrito funciona
- [ ] Checkout envía emails
- [ ] Actualización automática probada

## 🆘 Solución de Problemas

### Error: "Permission denied" al clonar repo privado

```bash
# Generar SSH key en la VM
ssh-keygen -t ed25519 -C "tienda@dehesa-vm"

# Mostrar clave pública
cat ~/.ssh/id_ed25519.pub

# Agregar a GitHub: Settings → SSH Keys → New SSH Key
# Luego clonar con SSH:
git clone git@github.com:TU_USUARIO/tienda-camisetas.git tienda
```

### Error: Imágenes no cargan

```bash
# Verificar permisos
ls -la /home/tienda/tienda/images/
sudo chown -R tienda:www-data /home/tienda/tienda/images/
sudo chmod -R 755 /home/tienda/tienda/images/
```

### Error: Flask no inicia

```bash
# Ver logs detallados
sudo journalctl -u tienda-backend -n 50

# Verificar que el puerto 5000 esté libre
sudo netstat -tlnp | grep 5000

# Probar manualmente
cd /home/tienda/tienda
source venv/bin/activate
python3 server.py
```

## 📝 Comandos Útiles

```bash
# Conectar a VM
gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"

# Ver IP externa
gcloud compute instances describe dehesa-vm --zone=europe-southwest1-a --project=mercadodeploy --format='get(networkInterfaces[0].accessConfigs[0].natIP)'

# Transferir archivo
gcloud compute scp archivo.txt dehesa-vm:/tmp/ --zone="europe-southwest1-a" --project="mercadodeploy"

# Actualizar código desde GitHub
cd /home/tienda/tienda && git pull && sudo systemctl restart tienda-backend
```

## 🎉 Resultado Final

Una vez completado, tendrás:
- ✅ Código en GitHub con control de versiones
- ✅ Imágenes en la VM (no en GitHub)
- ✅ Tienda accesible en https://shop.d8t.dev
- ✅ Actualización automática cada 15 días
- ✅ Sistema de backups
- ✅ SSL/HTTPS configurado
- ✅ Emails funcionando
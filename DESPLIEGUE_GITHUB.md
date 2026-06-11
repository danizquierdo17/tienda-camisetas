# 🚀 Guía Rápida: Despliegue con GitHub + Google Cloud

## 📋 Resumen

**Estrategia:**
- 💻 **Código** → GitHub (control de versiones)
- 🖼️ **Imágenes** → Transferencia directa a VM (una sola vez)
- 🔄 **Actualizaciones** → `git pull` en la VM

## 🎯 Paso a Paso

### 1️⃣ Preparar Repositorio Local

```bash
cd /Users/dizq/Documents/DaniPersonal/Camisetas

# Verificar .gitignore (ya creado)
cat .gitignore

# Inicializar git si no está
git init

# Agregar archivos
git add .
git commit -m "Initial commit: Tienda de camisetas"
```

### 2️⃣ Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `tienda-camisetas`
3. Privado ✅
4. NO inicializar con README

```bash
# Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/tienda-camisetas.git
git branch -M main
git push -u origin main
```

### 3️⃣ Preparar Imágenes

```bash
# Comprimir imágenes
tar -czf images.tar.gz images/

# Ver tamaño
ls -lh images.tar.gz
```

### 4️⃣ Transferir a Google Cloud VM

```bash
# Subir imágenes
gcloud compute scp images.tar.gz dehesa-vm:/tmp/ \
  --zone="europe-southwest1-a" \
  --project="mercadodeploy"
```

### 5️⃣ Configurar VM

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

# Clonar repositorio
cd /home/tienda
git clone https://github.com/TU_USUARIO/tienda-camisetas.git tienda
cd tienda

# Descomprimir imágenes
sudo mv /tmp/images.tar.gz .
tar -xzf images.tar.gz
rm images.tar.gz

# Configurar Python
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Generar productos.js inicial
cp productos.js.template productos.js  # Si existe
# O ejecutar: python3 combinar_datos.py
```

### 6️⃣ Configurar Servicios

Ver guía completa: [`DESPLIEGUE_GCLOUD.md`](DESPLIEGUE_GCLOUD.md:1)

**Resumen:**
- Servicio systemd para Flask
- Nginx como reverse proxy
- SSL con Let's Encrypt
- Cron para actualización automática

### 7️⃣ Actualizar Código (Futuro)

```bash
# En tu Mac
git add .
git commit -m "Descripción de cambios"
git push

# En la VM
ssh dehesa-vm
cd /home/tienda/tienda
git pull
sudo systemctl restart tienda-backend
```

## 📊 Archivos en GitHub vs VM

### En GitHub (Control de Versiones)
```
✅ tienda.html
✅ tienda.css
✅ tienda.js
✅ server.py
✅ requirements.txt
✅ scraper_futbolmodaes.py
✅ combinar_datos.py
✅ reorganizar_imagenes.py
✅ actualizar_rutas_imagenes.py
✅ actualizar_catalogo_automatico.sh
✅ *.md (documentación)
✅ .gitignore
```

### Solo en VM (No en GitHub)
```
❌ images/ (2,452 archivos, ~150 MB)
❌ productos.js (generado)
❌ futbolmodaes_img/ (generado por scraper)
❌ venv/ (entorno virtual)
❌ logs/ (logs de actualización)
❌ backups/ (backups automáticos)
```

## 🔄 Mejora del Scraper

El scraper ahora valida si las imágenes ya existen:

```python
# En scraper_futbolmodaes.py (línea 372)
def download_image(session, img_url, dest_path):
    # Verifica si ya existe en futbolmodaes_img/
    if os.path.exists(dest_path):
        print(f"⏭️  Imagen ya existe: {dest_path}")
        return True
    
    # También verifica en images/ (estructura plana)
    images_path = os.path.join("images", os.path.basename(dest_path))
    if os.path.exists(images_path):
        print(f"⏭️  Imagen ya existe en images/")
        # Copia a la ubicación esperada
        shutil.copy2(images_path, dest_path)
        return True
    
    # Solo descarga si no existe
    # ...
```

**Beneficios:**
- ⚡ Actualizaciones más rápidas
- 💾 Ahorra ancho de banda
- 🔄 Solo descarga imágenes nuevas

## ✅ Checklist Completo

### Preparación Local
- [ ] `.gitignore` creado
- [ ] Git inicializado
- [ ] Repositorio GitHub creado
- [ ] Código subido a GitHub
- [ ] Imágenes comprimidas

### En la VM
- [ ] Dependencias instaladas
- [ ] Usuario `tienda` creado
- [ ] Repositorio clonado
- [ ] Imágenes descomprimidas
- [ ] Entorno virtual configurado
- [ ] `productos.js` generado
- [ ] Flask configurado
- [ ] Nginx configurado
- [ ] SSL instalado
- [ ] Cron configurado

### Verificación
- [ ] https://shop.d8t.dev accesible
- [ ] Imágenes cargan
- [ ] Carrito funciona
- [ ] Emails funcionan
- [ ] `git pull` actualiza código

## 🆘 Comandos Útiles

```bash
# Conectar a VM
gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"

# Ver IP externa
gcloud compute instances describe dehesa-vm \
  --zone=europe-southwest1-a \
  --project=mercadodeploy \
  --format='get(networkInterfaces[0].accessConfigs[0].natIP)'

# Actualizar código
cd /home/tienda/tienda && git pull && sudo systemctl restart tienda-backend

# Ver logs
sudo journalctl -u tienda-backend -f
tail -f logs/actualizacion_catalogo.log

# Estado de servicios
sudo systemctl status tienda-backend
sudo systemctl status nginx
```

## 📚 Documentación Completa

- [`DESPLIEGUE_GCLOUD.md`](DESPLIEGUE_GCLOUD.md:1) - Guía detallada paso a paso
- [`ACTUALIZACION_AUTOMATICA.md`](ACTUALIZACION_AUTOMATICA.md:1) - Sistema de actualización con cron
- [`SEGURIDAD_IMAGENES.md`](SEGURIDAD_IMAGENES.md:1) - Estructura segura de imágenes
- [`ARCHIVOS_PRODUCCION.md`](ARCHIVOS_PRODUCCION.md:1) - Qué archivos llevar a producción

## 🎉 Resultado

Una vez completado:
- ✅ Código en GitHub con control de versiones
- ✅ Imágenes en la VM (no en GitHub)
- ✅ Actualizaciones con `git pull`
- ✅ Scraper inteligente (no re-descarga imágenes)
- ✅ Tienda en https://shop.d8t.dev
- ✅ Actualización automática cada 15 días
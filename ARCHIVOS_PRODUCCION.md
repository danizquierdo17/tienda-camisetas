# 📦 Archivos Imprescindibles para Producción

## 🚀 Empaquetado Rápido

```bash
./empaquetar_para_produccion.sh
```

Esto crea `tienda_produccion.tar.gz` con solo lo necesario.

## ✅ Archivos Incluidos (12 archivos + 1 directorio)

### Frontend (4 archivos)
```
tienda.html       # Página principal (HTML)
tienda.css        # Estilos visuales
tienda.js         # Lógica del carrito y checkout
productos.js      # Catálogo de 2,452 productos (1.2 MB)
```

### Backend (2 archivos)
```
server.py         # Flask API para envío de emails
requirements.txt  # Dependencias: Flask, flask-cors, beautifulsoup4, requests
```

### Actualización Automática (5 archivos)
```
scraper_futbolmodaes.py           # Web scraper para obtener productos
combinar_datos.py                 # Combina manifest y catálogo
reorganizar_imagenes.py           # Reorganiza imágenes a directorio plano
actualizar_rutas_imagenes.py      # Actualiza rutas en productos.js
actualizar_catalogo_automatico.sh # Script principal de actualización (cron)
```

### Imágenes (1 directorio)
```
images/           # 2,452 imágenes de productos (~150 MB)
├── 30022.jpg
├── 29861.jpg
└── ...
```

## ❌ Archivos NO Necesarios (Solo Desarrollo)

```
futbolmodaes_img/              # Estructura antigua de imágenes (solo desarrollo)
convertir_csv_a_js.py          # Obsoleto
iniciar_tienda.sh              # Solo para desarrollo local
venv/                          # Se crea en el servidor
*.md                           # Documentación
.git/                          # Control de versiones
__pycache__/                   # Cache de Python
```

## 📊 Tamaño Total

- **Comprimido:** ~50-60 MB
- **Descomprimido:** ~150-160 MB

## 🔧 Estructura en el Servidor

```
/home/tienda/tienda/
├── tienda.html
├── tienda.css
├── tienda.js
├── productos.js
├── server.py
├── requirements.txt
├── scraper_futbolmodaes.py
├── combinar_datos.py
├── reorganizar_imagenes.py
├── actualizar_rutas_imagenes.py
├── actualizar_catalogo_automatico.sh
├── images/
│   ├── 30022.jpg
│   ├── 29861.jpg
│   └── ... (2,452 imágenes)
├── futbolmodaes_img/          # Se crea por el scraper
│   ├── manifest.csv
│   ├── catalogo.csv
│   └── [equipos]/
├── logs/                      # Logs de actualización automática
│   └── actualizacion_catalogo.log
├── backups/                   # Backups automáticos
│   └── backup_*.tar.gz
└── venv/                      # Entorno virtual Python
    └── ...
```

## 📤 Proceso de Despliegue

### 1. Empaquetar (en tu Mac)
```bash
cd /Users/dizq/Documents/DaniPersonal/Camisetas
./empaquetar_para_produccion.sh
```

### 2. Subir a VM
```bash
scp tienda_produccion.tar.gz usuario@IP_VM:/home/usuario/
```

### 3. Descomprimir en VM
```bash
ssh usuario@IP_VM
tar -xzf tienda_produccion.tar.gz
cd tienda_produccion
```

### 4. Configurar Backend
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 5. Configurar Actualización Automática
```bash
# Dar permisos de ejecución
chmod +x actualizar_catalogo_automatico.sh

# Configurar cron para ejecutar cada 15 días
crontab -e
# Agregar: 0 3 */15 * * /home/tienda/tienda/actualizar_catalogo_automatico.sh
```

Ver guía completa: [`ACTUALIZACION_AUTOMATICA.md`](ACTUALIZACION_AUTOMATICA.md)

### 6. Configurar Nginx + SSL
Sigue la guía completa en [`DESPLIEGUE_SHOP_D8T_DEV.md`](DESPLIEGUE_SHOP_D8T_DEV.md)

## 🔍 Verificación

### Checklist Pre-Despliegue
- [ ] Ejecutado `./empaquetar_para_produccion.sh`
- [ ] Archivo `tienda_produccion.tar.gz` creado
- [ ] Tamaño del archivo ~50-60 MB
- [ ] Verificado que `images/` contiene 2,452 archivos
- [ ] Scripts de actualización incluidos

### Checklist Post-Despliegue
- [ ] Archivos descomprimidos en `/home/tienda/tienda/`
- [ ] Entorno virtual creado y activado
- [ ] Dependencias instaladas (`pip install -r requirements.txt`)
- [ ] Flask corriendo en puerto 5000
- [ ] Nginx configurado y corriendo
- [ ] SSL instalado (Let's Encrypt)
- [ ] DNS apuntando a la VM (shop.d8t.dev)
- [ ] Tienda accesible en https://shop.d8t.dev
- [ ] Imágenes cargando correctamente
- [ ] Emails funcionando (prueba de pedido)
- [ ] Cron configurado para actualización automática
- [ ] Prueba manual de actualización exitosa

## 💡 Consejos

### Optimización de Transferencia
Si la conexión es lenta, puedes comprimir más:
```bash
tar -czf tienda_produccion.tar.gz tienda_produccion/ --use-compress-program="gzip -9"
```

### Actualización Rápida
Para actualizar solo el código (sin imágenes):
```bash
# En tu Mac
tar -czf tienda_codigo.tar.gz tienda.html tienda.css tienda.js productos.js server.py

# Subir y descomprimir en VM
scp tienda_codigo.tar.gz usuario@IP_VM:/home/tienda/tienda/
ssh usuario@IP_VM
cd /home/tienda/tienda
tar -xzf tienda_codigo.tar.gz
sudo systemctl restart tienda-backend
```

### Backup en VM
```bash
# Crear backup antes de actualizar
cd /home/tienda
tar -czf backup_$(date +%Y%m%d_%H%M%S).tar.gz tienda/
```

## 🔐 Seguridad

### Archivos con Credenciales
- `server.py` contiene credenciales SMTP (líneas 13-16)
- Asegúrate de que los permisos sean restrictivos:
  ```bash
  chmod 600 server.py
  ```

### Variables de Entorno (Opcional)
Para mayor seguridad, puedes usar variables de entorno:
```bash
export SMTP_USER="d8t.dev@gmail.com"
export SMTP_PASS="zhyn ydes zmch regn"
```

Y modificar `server.py` para leerlas:
```python
import os
SMTP_USER = os.getenv('SMTP_USER')
SMTP_PASS = os.getenv('SMTP_PASS')
```

## 📞 Soporte

Si tienes problemas durante el despliegue:
1. Revisa [`DESPLIEGUE_SHOP_D8T_DEV.md`](DESPLIEGUE_SHOP_D8T_DEV.md)
2. Verifica logs: `sudo journalctl -u tienda-backend -f`
3. Verifica Nginx: `sudo nginx -t`
4. Email: d8t.dev@gmail.com
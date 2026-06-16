# 📁 Estructura del Proyecto - Tienda de Camisetas

## 🎯 Archivos Esenciales para Producción

### Frontend (Aplicación Web)
```
tienda.html          # Página principal de la tienda
tienda.css           # Estilos y diseño responsive
tienda.js            # Lógica del carrito, filtros y checkout
productos.js         # Catálogo de productos (datos JSON)
```

### Backend (Servidor de Emails)
```
server.py            # Servidor Flask para envío de emails
requirements.txt     # Dependencias Python (Flask, flask-cors)
```

### Scripts de Inicio
```
iniciar_tienda.sh    # Script para iniciar toda la aplicación
```

### Recursos
```
futbolmodaes_img/              # Directorio de imágenes
├── placeholder.svg            # Imagen por defecto
└── [equipos]/                 # Subdirectorios por equipo
    └── [id_producto].jpg      # Imágenes de productos
```

### Configuración
```
.gitignore           # Archivos ignorados por Git
README.md            # Documentación principal
```

---

## 🗂️ Estructura Completa

```
/
├── 📄 tienda.html              ⭐ ESENCIAL - Frontend principal
├── 🎨 tienda.css               ⭐ ESENCIAL - Estilos
├── ⚙️ tienda.js                ⭐ ESENCIAL - Lógica del carrito
├── 📦 productos.js             ⭐ ESENCIAL - Catálogo de productos
│
├── 🐍 server.py                ⭐ ESENCIAL - Backend Flask
├── 📋 requirements.txt         ⭐ ESENCIAL - Dependencias Python
│
├── 🚀 iniciar_tienda.sh        ⭐ ESENCIAL - Script de inicio
│
├── 📖 README.md                ⭐ ESENCIAL - Documentación
├── 🚫 .gitignore               ⭐ ESENCIAL - Configuración Git
├── 📁 ESTRUCTURA_PROYECTO.md   📚 DOCUMENTACIÓN - Este archivo
│
├── 🧹 limpiar_proyecto.sh      🛠️ UTILIDAD - Script de limpieza
│
└── 🖼️ futbolmodaes_img/        ⭐ ESENCIAL - Imágenes
    ├── placeholder.svg         ⭐ ESENCIAL - Imagen por defecto
    └── [equipos]/              ⭐ ESENCIAL - Imágenes por equipo
        └── *.jpg
```

---

## 📊 Tamaño Aproximado de Archivos

| Archivo/Directorio | Tamaño | Descripción |
|-------------------|--------|-------------|
| `tienda.html` | ~6 KB | HTML principal |
| `tienda.css` | ~15 KB | Estilos CSS |
| `tienda.js` | ~15 KB | JavaScript frontend |
| `productos.js` | Variable | Depende del catálogo |
| `server.py` | ~6 KB | Backend Flask |
| `requirements.txt` | <1 KB | Dependencias |
| `iniciar_tienda.sh` | ~1 KB | Script bash |
| `futbolmodaes_img/` | Variable | Depende de las imágenes |

**Total (sin imágenes):** ~50 KB  
**Total (con imágenes):** Depende del número de productos

---

## 🔄 Flujo de la Aplicación

```
┌─────────────────────────────────────────────────────────────┐
│                    USUARIO ACCEDE                           │
│              http://localhost:8000/tienda.html              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (tienda.html)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  tienda.css  │  │  tienda.js   │  │ productos.js │     │
│  │   (estilos)  │  │   (lógica)   │  │  (catálogo)  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                             │
│  • Muestra productos                                        │
│  • Filtros y búsqueda                                       │
│  • Carrito de compras                                       │
│  • Formulario de checkout                                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ (Al confirmar pedido)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              BACKEND (server.py - Flask)                    │
│              http://localhost:5000/api/send-order           │
│                                                             │
│  • Recibe datos del pedido                                  │
│  • Envía email al administrador                             │
│  • Envía email de confirmación al cliente                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    SERVIDOR SMTP (Gmail)                    │
│                                                             │
│  • Envía emails                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Cómo Iniciar la Aplicación

### Método 1: Script Automático (Recomendado)
```bash
chmod +x iniciar_tienda.sh
./iniciar_tienda.sh
```

### Método 2: Manual
```bash
# Terminal 1: Backend
source venv/bin/activate
python3 server.py

# Terminal 2: Frontend
python3 -m http.server 8000
```

---

## 🧹 Limpieza del Proyecto

Para eliminar archivos de desarrollo y mantener solo los esenciales:

```bash
chmod +x limpiar_proyecto.sh
./limpiar_proyecto.sh
```

Este script:
- ✅ Crea un backup de todos los archivos eliminados
- ✅ Elimina scripts de desarrollo (scrapers, tests, etc.)
- ✅ Opcionalmente elimina documentación de desarrollo
- ✅ Limpia cache de Python
- ✅ Mantiene todos los archivos esenciales

---

## 📦 Archivos NO Esenciales (Desarrollo)

Estos archivos son útiles para desarrollo pero NO necesarios para producción:

### Scripts de Desarrollo
- `test_precio_scraper.py` - Testing de scraper
- `scraper_futbolmodaes.py` - Scraper de productos
- `limpiar_catalogo.py` - Limpieza de datos
- `combinar_datos.py` - Procesamiento de datos
- `convertir_csv_a_js.py` - Conversión de formatos
- `reorganizar_imagenes.py` - Organización de imágenes
- `actualizar_rutas_imagenes.py` - Actualización de rutas
- `actualizar_catalogo_automatico.sh` - Automatización
- `empaquetar_para_produccion.sh` - Empaquetado
- `deploy_to_gcloud.sh` - Despliegue en cloud

### Documentación de Desarrollo
- `ACTUALIZAR_CATALOGO.md`
- `ACTUALIZACION_AUTOMATICA.md`
- `DESPLIEGUE_GCLOUD_D8T.md`
- `DESPLIEGUE_PUBLICO.md`
- `DESPLIEGUE_SHOP_D8T_DEV.md`
- `GUIA_RAPIDA.md`
- `SEGURIDAD_IMAGENES.md`
- `SISTEMA_PRECIOS.md`

### Archivos de Test
- `test_producto_*.html`
- `scraper_log_*.txt`

---

## 🎯 Checklist de Producción

Antes de desplegar en producción, verifica:

- [ ] Entorno virtual Python creado (`venv/`)
- [ ] Dependencias instaladas (`pip install -r requirements.txt`)
- [ ] Configuración SMTP actualizada en [`server.py`](server.py:12-15)
- [ ] Archivo [`productos.js`](productos.js:1-6) actualizado con catálogo
- [ ] Imágenes en `futbolmodaes_img/` correctamente organizadas
- [ ] [`placeholder.svg`](futbolmodaes_img/placeholder.svg) disponible
- [ ] Scripts tienen permisos de ejecución (`chmod +x *.sh`)
- [ ] Puertos 5000 y 8000 disponibles
- [ ] Archivos de desarrollo eliminados (opcional)

---

## 💡 Consejos

1. **Backup Regular:** Usa [`limpiar_proyecto.sh`](limpiar_proyecto.sh:1) que crea backups automáticos
2. **Git:** El [`.gitignore`](.gitignore:1) ya está configurado correctamente
3. **Imágenes:** Mantén las imágenes optimizadas para web (<500KB por imagen)
4. **Catálogo:** Actualiza [`productos.js`](productos.js:1-6) cuando agregues nuevos productos
5. **Testing:** Prueba localmente antes de desplegar

---

## 📞 Soporte

Para problemas o dudas, consulta el [`README.md`](README.md:1) principal.

---

**Última actualización:** 2026-06-16  
**Versión:** 1.0
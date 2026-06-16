# 🛍️ Tienda de Camisetas de Fútbol

Aplicación web para venta de camisetas de fútbol con carrito de compras y sistema de pedidos por email.

## 📋 Archivos Esenciales

### Archivos de la Aplicación Web
```
tienda.html          # Página principal de la tienda
tienda.css           # Estilos de la aplicación
tienda.js            # Lógica del frontend
productos.js         # Catálogo de productos (generado automáticamente)
```

### Backend y Servidor
```
server.py            # Servidor Flask para envío de emails
requirements.txt     # Dependencias Python
```

### Scripts de Utilidad
```
iniciar_tienda.sh    # Script para iniciar la aplicación completa
```

### Imágenes
```
futbolmodaes_img/    # Directorio con imágenes de productos
  ├── placeholder.svg    # Imagen por defecto
  └── [equipos]/         # Subdirectorios por equipo
```

## 🚀 Inicio Rápido

### 1. Configurar el Entorno

```bash
# Crear entorno virtual Python
python3 -m venv venv

# Activar entorno virtual
source venv/bin/activate  # En macOS/Linux
# o
venv\Scripts\activate     # En Windows

# Instalar dependencias
pip install -r requirements.txt
```

### 2. Iniciar la Aplicación

**Opción A: Script Automático (Recomendado)**
```bash
chmod +x iniciar_tienda.sh
./iniciar_tienda.sh
```

**Opción B: Manual**
```bash
# Terminal 1: Iniciar servidor Flask (emails)
source venv/bin/activate
python3 server.py

# Terminal 2: Iniciar servidor web
python3 -m http.server 8000
```

### 3. Acceder a la Tienda

Abre tu navegador en: **http://localhost:8001/tienda.html**

**Nota:** Si los puertos 5001 u 8001 están ocupados, puedes cambiarlos manualmente en [`iniciar_tienda.sh`](iniciar_tienda.sh:1) y [`tienda.js`](tienda.js:465)

## 📧 Configuración de Emails

El archivo [`server.py`](server.py:12-15) contiene la configuración SMTP:

```python
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_EMAIL = "tu-email@gmail.com"
SMTP_PASSWORD = "tu-contraseña-de-aplicación"
```

**Nota:** Para Gmail, necesitas crear una "Contraseña de aplicación" en tu cuenta de Google.

## 🛠️ Estructura del Proyecto

```
/
├── tienda.html              # Frontend principal
├── tienda.css               # Estilos
├── tienda.js                # Lógica del carrito y filtros
├── productos.js             # Catálogo de productos
├── server.py                # Backend Flask
├── requirements.txt         # Dependencias Python
├── iniciar_tienda.sh        # Script de inicio
├── .gitignore              # Archivos ignorados por Git
└── futbolmodaes_img/       # Imágenes de productos
    ├── placeholder.svg
    └── [equipos]/
```

## 🎯 Funcionalidades

### Frontend
- ✅ Catálogo de productos con imágenes
- ✅ Filtros por tipo de producto y equipo
- ✅ Búsqueda de productos
- ✅ Carrito de compras con localStorage
- ✅ Personalización (talla, nombre, dorsal, parches)
- ✅ Cálculo automático de extras
- ✅ Formulario de checkout

### Backend
- ✅ Envío de emails con detalles del pedido
- ✅ Email de confirmación al cliente
- ✅ Email de notificación al administrador
- ✅ API REST con Flask

## 💰 Sistema de Precios

Los precios se calculan automáticamente:
- **Precio base:** Definido en [`productos.js`](productos.js:1-6)
- **Extras:**
  - Tallas XXL/XXXL: +1.50€
  - Nombre y/o dorsal: +2.50€
  - Parche simple: +1.50€
  - Parche doble: +2.50€

## 🔧 Mantenimiento

### Actualizar Catálogo de Productos

El archivo [`productos.js`](productos.js:1-6) contiene el catálogo. Para actualizarlo:

1. Edita el archivo directamente, o
2. Usa scripts de scraping (si están disponibles)

### Añadir Nuevas Imágenes

1. Coloca las imágenes en `futbolmodaes_img/[equipo]/`
2. Actualiza las rutas en [`productos.js`](productos.js:1-6)
3. Usa [`placeholder.svg`](futbolmodaes_img/placeholder.svg) como fallback

## 🌐 Despliegue en Producción

### Opción 1: Servidor Simple
```bash
# Usar un servidor web como Nginx o Apache
# Servir archivos estáticos desde el directorio raíz
```

### Opción 2: Hosting Estático
- GitHub Pages
- Netlify
- Vercel

**Nota:** El backend Flask necesita un servidor separado para el envío de emails.

## 📝 Notas Importantes

1. **Entorno Virtual:** Siempre activa el entorno virtual antes de ejecutar scripts Python
2. **Puerto 5001:** El servidor Flask usa el puerto 5001 (configurable en [`server.py`](server.py:189))
3. **Puerto 8001:** El servidor web usa el puerto 8001 (configurable en [`iniciar_tienda.sh`](iniciar_tienda.sh:1))
4. **CORS:** Habilitado para desarrollo local
5. **Imágenes:** Las imágenes deben estar en `futbolmodaes_img/` para que funcionen correctamente

## 🐛 Solución de Problemas

### El servidor Flask no inicia
```bash
# Verifica que el entorno virtual esté activo
source venv/bin/activate

# Reinstala dependencias
pip install -r requirements.txt
```

### Las imágenes no se cargan
- Verifica que existan en `futbolmodaes_img/`
- Comprueba las rutas en [`productos.js`](productos.js:1-6)
- El placeholder se usa automáticamente si falta la imagen

### Los emails no se envían
- Verifica la configuración SMTP en [`server.py`](server.py:12-15)
- Comprueba que uses una "Contraseña de aplicación" de Gmail
- Revisa los logs del servidor Flask

## 📄 Licencia

Este proyecto es de uso privado.

---

**Hecho con ❤️ y Bob**
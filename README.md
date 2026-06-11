# 🛍️ Tienda de Camisetas de Fútbol

Tienda online completa con catálogo de 2,452 camisetas, carrito de compras, personalización y envío automático de emails.

## 🚀 Inicio Rápido

### Opción 1: Script Automático (Recomendado)
```bash
./iniciar_tienda.sh
```

Luego abre en tu navegador: **http://localhost:8000/tienda.html**

### Opción 2: Manual

1. **Iniciar servidor de emails:**
```bash
source venv/bin/activate
python3 server.py
```

2. **En otra terminal, iniciar servidor web:**
```bash
python3 -m http.server 8000
```

3. **Abrir en navegador:**
```
http://localhost:8000/tienda.html
```

## 📋 Características

### Catálogo
- 2,452 productos de 68 equipos diferentes
- Imágenes reales de cada producto
- Sistema de precios dual (precio lista + precio venta)
- Filtro por equipo
- Buscador de productos

### Personalización
- **Tallas:** S, M, L, XL, XXL, XXXL
- **Nombre personalizado:** Hasta 20 caracteres
- **Dorsal:** Números del 0 al 99
- **Parches:** 
  - Sin parche
  - 2026 Mundial
  - FairPlay
  - 2026 Mundial + FairPlay

### Carrito de Compras
- Agregar/eliminar productos
- Persistencia en localStorage
- Cálculo automático de totales
- Vista detallada de cada producto

### Sistema de Emails
- Email automático al administrador (d8t.dev@gmail.com) con detalles del pedido
- Email de confirmación al cliente
- Emails en formato HTML profesional
- Usa SMTP de Gmail directamente

## 📁 Estructura de Archivos

```
├── tienda.html                  # Página principal de la tienda
├── tienda.css                   # Estilos
├── tienda.js                    # Lógica del carrito y checkout
├── productos.js                 # Catálogo de 2,452 productos
├── server.py                    # Backend Flask para envío de emails
├── combinar_datos.py            # Script para generar productos con precios
├── reorganizar_imagenes.py      # Script para reorganizar imágenes (seguridad)
├── actualizar_rutas_imagenes.py # Script para actualizar rutas en productos.js
├── iniciar_tienda.sh            # Script para iniciar todo automáticamente
├── requirements.txt             # Dependencias Python
├── venv/                        # Entorno virtual Python
├── images/                      # 🔒 Imágenes públicas (solo IDs como nombres)
│   ├── 30022.jpg
│   ├── 29861.jpg
│   └── ...
└── futbolmodaes_img/            # Imágenes originales (solo desarrollo)
    ├── manifest.csv             # IDs y rutas de imágenes
    ├── catalogo.csv             # Nombres y precios
    └── [equipos]/               # Subdirectorios por equipo
```

### 🔒 Seguridad de Imágenes

Las imágenes ahora se sirven desde el directorio `images/` con nombres simples (solo ID) en lugar de exponer la estructura de equipos. Esto mejora la seguridad al no revelar la organización interna del servidor.

**Ver:** [`SEGURIDAD_IMAGENES.md`](SEGURIDAD_IMAGENES.md) para más detalles.

## 💰 Sistema de Precios

Cada producto tiene dos precios:
- **precio_lista:** Precio original del proveedor
- **precio_venta:** Precio mostrado al cliente (calculado con fórmula)

### Fórmula Actual
```
Precio Venta = Precio Lista × 2 (100% de margen)
```

### Cambiar la Fórmula
Edita la función `calcular_precio_venta()` en [`combinar_datos.py`](combinar_datos.py:13) y ejecuta:
```bash
python3 combinar_datos.py
```

Ver [`SISTEMA_PRECIOS.md`](SISTEMA_PRECIOS.md) para más opciones de fórmulas.

## 📧 Configuración de Emails

El sistema usa SMTP de Gmail con las credenciales ya configuradas en [`server.py`](server.py:1):

- **Email:** d8t.dev@gmail.com
- **Contraseña de aplicación:** zhyn ydes zmch regn

### Emails que se Envían

1. **Al Administrador (d8t.dev@gmail.com):**
   - Datos completos del cliente
   - Detalles del pedido con personalizaciones
   - Total del pedido
   - Fecha y hora

2. **Al Cliente:**
   - Confirmación del pedido
   - Resumen de productos
   - Total
   - Mensaje de que se contactará pronto

## 🛠️ Requisitos

- Python 3.x
- Flask
- flask-cors

Las dependencias se instalan automáticamente en el entorno virtual.

## 📝 Flujo de Compra

1. Cliente navega por el catálogo
2. Selecciona producto y personaliza (talla, nombre, dorsal, parche)
3. Agrega al carrito
4. Repite para más productos
5. Hace clic en "Proceder al Pago"
6. Completa formulario con sus datos
7. Confirma pedido
8. Sistema envía emails automáticamente:
   - Email al administrador con todos los detalles
   - Email de confirmación al cliente
9. Administrador contacta al cliente para coordinar pago y envío

## 🔧 Mantenimiento

### Actualizar Catálogo
Si cambias los precios en `catalogo.csv`:
```bash
python3 combinar_datos.py
```

### Ver Logs del Servidor
Los logs aparecen en la terminal donde ejecutaste `server.py`

### Detener Servidores
Presiona `Ctrl+C` en las terminales donde están corriendo

## 📚 Documentación Adicional

- [`SISTEMA_PRECIOS.md`](SISTEMA_PRECIOS.md) - Cómo funcionan y cambiar los precios
- [`CONFIGURACION_EMAIL.md`](CONFIGURACION_EMAIL.md) - Configuración de EmailJS (alternativa)
- [`SEGURIDAD_IMAGENES.md`](SEGURIDAD_IMAGENES.md) - Estructura segura de imágenes
- [`DESPLIEGUE_SHOP_D8T_DEV.md`](DESPLIEGUE_SHOP_D8T_DEV.md) - Guía completa para desplegar en shop.d8t.dev
- [`ACTUALIZAR_CATALOGO.md`](ACTUALIZAR_CATALOGO.md) - Cómo actualizar el catálogo de productos

## 🐛 Solución de Problemas

### Error: "Failed to fetch" al enviar pedido
**Causa:** El servidor Flask no está ejecutándose  
**Solución:** Ejecuta `python3 server.py` o usa `./iniciar_tienda.sh`

### Error: "ModuleNotFoundError: No module named 'flask'"
**Causa:** Entorno virtual no activado  
**Solución:** Ejecuta `source venv/bin/activate`

### Las imágenes no cargan
**Causa:** Servidor web no está en el directorio correcto  
**Solución:** Ejecuta `python3 -m http.server 8000` desde el directorio del proyecto

### Email no se envía
**Causa:** Credenciales SMTP incorrectas o bloqueadas  
**Solución:** Verifica las credenciales en `server.py` líneas 13-14

## 🎯 Próximas Mejoras

- [ ] Integración con pasarela de pago (Stripe, PayPal)
- [ ] Panel de administración para gestionar pedidos
- [ ] Sistema de tracking de envíos
- [ ] Descuentos y cupones
- [ ] Múltiples idiomas
- [ ] Modo oscuro

## 📞 Soporte

Para cualquier problema o pregunta:
- Email: d8t.dev@gmail.com

---

**Hecho con ❤️ por Bob**
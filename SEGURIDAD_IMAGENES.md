# 🔒 Seguridad de Imágenes - Estructura Simplificada

## Problema Identificado

**Antes:** Las rutas de imágenes exponían la estructura interna del servidor:
```javascript
"imagen": "futbolmodaes_img/bundesliga-bayern-munchen/27150_00.jpg"
```

Si alguien inspeccionaba el HTML, podía ver:
- La estructura de directorios (`futbolmodaes_img/`)
- Los nombres de equipos (`bundesliga-bayern-munchen/`)
- El patrón de nomenclatura (`ID_00.jpg`)

Esto permitía:
1. Descubrir la organización interna del servidor
2. Potencialmente acceder a otros archivos navegando por directorios
3. Obtener información sobre la estructura del proyecto

## Solución Implementada

**Ahora:** Rutas simplificadas que solo muestran el ID del producto:
```javascript
"imagen": "images/30022.jpg"
```

### Ventajas de Seguridad

1. **Oculta la estructura interna**: No se revela cómo organizas los equipos
2. **Rutas genéricas**: Solo se ve un directorio plano `/images/`
3. **Sin información sensible**: Los nombres de archivo son solo IDs numéricos
4. **Más difícil de explorar**: No hay pistas sobre otros archivos o directorios

### Estructura de Archivos

```
Proyecto/
├── images/                    # ✅ Directorio público (servido por Nginx)
│   ├── 30022.jpg             # Solo IDs como nombres
│   ├── 29861.jpg
│   └── ...
│
├── futbolmodaes_img/         # ❌ Directorio privado (NO se sube al servidor)
│   ├── bundesliga-dortmund/  # Estructura interna solo en desarrollo
│   ├── la-liga-barcelona/
│   └── ...
│
├── tienda.html
├── productos.js              # Rutas apuntan a images/ID.jpg
└── server.py
```

## Scripts de Reorganización

### 1. reorganizar_imagenes.py
Copia todas las imágenes de `futbolmodaes_img/equipo/ID_00.jpg` a `images/ID.jpg`

```bash
python3 reorganizar_imagenes.py
```

**Resultado:**
- ✅ 2,452 imágenes copiadas a `images/`
- ⏭️ 511 archivos sin imagen ignorados
- 📂 Directorio plano sin subdirectorios

### 2. actualizar_rutas_imagenes.py
Actualiza `productos.js` con las nuevas rutas simplificadas

```bash
python3 actualizar_rutas_imagenes.py
```

**Resultado:**
- ✅ 2,452 rutas actualizadas en productos.js
- 🔄 De: `futbolmodaes_img/equipo/ID_00.jpg`
- 🔄 A: `images/ID.jpg`

## Configuración de Nginx

En el servidor, Nginx sirve el directorio `images/` como archivos estáticos:

```nginx
location /images/ {
    alias /home/tienda/tienda/images/;
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

**Características:**
- Solo se sirve el directorio `images/`
- No se permite listar directorios (`autoindex off` por defecto)
- Cache de 30 días para mejor rendimiento
- No se expone ninguna otra estructura de archivos

## Comparación Antes/Después

### Antes (Inseguro)
```html
<img src="futbolmodaes_img/bundesliga-bayern-munchen/27150_00.jpg">
```
**Información expuesta:**
- Directorio base: `futbolmodaes_img`
- Categoría: `bundesliga-bayern-munchen`
- Patrón: `ID_00.jpg`

### Después (Seguro)
```html
<img src="images/30022.jpg">
```
**Información expuesta:**
- Solo el ID del producto
- Sin pistas sobre estructura interna

## Mantenimiento

### Agregar Nuevas Imágenes

1. Agregar imagen a `futbolmodaes_img/equipo/` (solo en desarrollo)
2. Ejecutar `reorganizar_imagenes.py` para copiar a `images/`
3. Ejecutar `actualizar_rutas_imagenes.py` para actualizar productos.js
4. Subir solo el directorio `images/` al servidor

### Actualizar Catálogo

```bash
# 1. Scraper obtiene nuevos productos
python3 scraper_futbolmodaes.py

# 2. Combinar datos
python3 combinar_datos.py

# 3. Reorganizar imágenes
python3 reorganizar_imagenes.py

# 4. Actualizar rutas
python3 actualizar_rutas_imagenes.py

# 5. Subir al servidor
scp -r images/ tienda@servidor:/home/tienda/tienda/
scp productos.js tienda@servidor:/home/tienda/tienda/
```

## Verificación de Seguridad

### ✅ Checklist

- [ ] Las rutas en `productos.js` son `images/ID.jpg`
- [ ] El directorio `images/` existe y contiene todas las imágenes
- [ ] El directorio `futbolmodaes_img/` NO se sube al servidor
- [ ] Nginx solo sirve el directorio `images/`
- [ ] No se permite listar directorios en Nginx
- [ ] Las imágenes cargan correctamente en el navegador

### Prueba de Seguridad

1. Abre la tienda en el navegador
2. Inspecciona una imagen (F12 → Elements)
3. Verifica que la ruta sea: `images/ID.jpg`
4. Intenta acceder a: `https://shop.d8t.dev/futbolmodaes_img/`
   - Debe dar error 404 (no existe)
5. Intenta listar: `https://shop.d8t.dev/images/`
   - Debe dar error 403 (prohibido)

## Resumen

✅ **Implementado:**
- Rutas simplificadas sin exponer estructura
- Directorio plano de imágenes
- Scripts automáticos de reorganización
- Documentación de seguridad

🔒 **Seguridad mejorada:**
- No se revela organización interna
- Dificulta exploración de archivos
- Reduce superficie de ataque
- Cumple mejores prácticas web

📝 **Mantenimiento:**
- Scripts automatizados
- Proceso documentado
- Fácil de actualizar
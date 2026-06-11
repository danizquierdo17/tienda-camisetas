# Cómo Obtener Precios Correctos de la Web Original

## Problema Actual

Actualmente, los precios se asignan **por orden** dentro de cada equipo, no por correlación exacta con cada producto. Esto significa que el precio puede no corresponder exactamente con el producto correcto.

## Solución: Regenerar el Catálogo con pID

He actualizado el scraper para que incluya el **pID** (ID del producto) en el catálogo, lo que permite una correlación exacta entre productos y precios.

### Pasos para Obtener Precios Correctos

#### 1. Eliminar el catálogo antiguo
```bash
rm futbolmodaes_img/catalogo.csv
```

#### 2. Regenerar el catálogo con el scraper actualizado
```bash
# Opción A: Solo regenerar el catálogo (sin descargar imágenes de nuevo)
python3 scraper_futbolmodaes.py --catalog-only

# Opción B: Regenerar catálogo para un equipo específico
python3 scraper_futbolmodaes.py --catalog-only --only Espana

# Opción C: Regenerar todo (catálogo + imágenes)
python3 scraper_futbolmodaes.py
```

**Nota:** El scraper tarda bastante porque debe visitar cada página de producto para obtener el precio real. Con `--catalog-only` es más rápido porque no descarga imágenes.

#### 3. Combinar los datos
```bash
python3 combinar_datos.py
```

El script detectará automáticamente si el catálogo tiene pID y usará correlación exacta.

#### 4. Recargar la tienda
Recarga la página en el navegador (F5) para ver los precios correctos.

## Formato del Catálogo

### Formato Antiguo (sin pID)
```csv
equipo|nombre|precio
nacional-espana|Camiseta Nacional Espana|17.90
nacional-espana|Camiseta Nacional Espana|20.43
```
**Problema:** No se puede saber qué precio va con qué producto exactamente.

### Formato Nuevo (con pID)
```csv
equipo|pID|nombre|precio
nacional-espana|30022|Espana 2026-27 2a Equipacion Thai Camisetas|17.90
nacional-espana|29861|Espana 2026-27 1a Equipacion Thai Camisetas|20.43
```
**Ventaja:** Correlación exacta por pID.

## Verificación

Después de regenerar el catálogo, verifica que tiene el formato correcto:

```bash
head -5 futbolmodaes_img/catalogo.csv
```

Deberías ver 4 columnas: `equipo|pID|nombre|precio`

## Tiempo Estimado

- **Solo catálogo** (`--catalog-only`): ~30-60 minutos para 2,452 productos
- **Catálogo + imágenes**: Varias horas

## Alternativa Rápida

Si no quieres esperar, el sistema actual funciona con precios aproximados:
- Los precios son reales de la web
- Están asignados por orden dentro de cada equipo
- La mayoría coinciden correctamente
- Solo algunos pueden estar intercambiados dentro del mismo equipo

## Recomendación

Para una tienda en producción, es mejor regenerar el catálogo con pID para tener precios 100% correctos. Para pruebas o desarrollo, el sistema actual es suficiente.
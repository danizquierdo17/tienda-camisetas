# Sistema de Precios - Tienda de Camisetas

## Estructura de Precios

Cada producto en la tienda tiene dos precios:

1. **Precio Lista** (`precio_lista`): El precio original del catálogo/proveedor
2. **Precio Venta** (`precio_venta`): El precio que se muestra al cliente (calculado con fórmula)

## Fórmula Actual

**Precio de Venta = Precio Lista × 2**

Esto significa un **100% de margen** sobre el precio de lista.

### Ejemplos:
- Precio lista: 15.00€ → Precio venta: **30.00€**
- Precio lista: 20.00€ → Precio venta: **40.00€**
- Precio lista: 25.00€ → Precio venta: **50.00€**

## Cómo Cambiar la Fórmula

Para modificar el cálculo del precio de venta, edita el archivo [`combinar_datos.py`](combinar_datos.py:1):

### Ubicación de la Fórmula

Busca la función `calcular_precio_venta()` (línea ~13):

```python
def calcular_precio_venta(precio_lista):
    """
    Calcula el precio de venta basado en el precio de lista.
    Modifica esta función para cambiar la fórmula de cálculo.
    """
    # Fórmula actual: Precio de venta = Precio lista × 2 (100% de margen)
    precio_venta = precio_lista * 2.0
    
    # Redondear a 2 decimales
    return round(precio_venta, 2)
```

### Opciones de Fórmulas Comunes

#### Opción 1: Margen Fijo en Euros
Agregar una cantidad fija al precio de lista:

```python
def calcular_precio_venta(precio_lista):
    # Agregar 10€ al precio de lista
    precio_venta = precio_lista + 10.0
    return round(precio_venta, 2)
```

**Ejemplo:**
- 15€ → 25€
- 20€ → 30€
- 25€ → 35€

#### Opción 2: Margen Porcentual (50%)
Multiplicar por 1.5 para obtener 50% de margen:

```python
def calcular_precio_venta(precio_lista):
    # 50% de margen
    precio_venta = precio_lista * 1.5
    return round(precio_venta, 2)
```

**Ejemplo:**
- 15€ → 22.50€
- 20€ → 30.00€
- 25€ → 37.50€

#### Opción 3: Margen Porcentual (75%)
Multiplicar por 1.75 para obtener 75% de margen:

```python
def calcular_precio_venta(precio_lista):
    # 75% de margen
    precio_venta = precio_lista * 1.75
    return round(precio_venta, 2)
```

**Ejemplo:**
- 15€ → 26.25€
- 20€ → 35.00€
- 25€ → 43.75€

#### Opción 4: Margen Variable por Rango de Precio
Aplicar diferentes márgenes según el precio:

```python
def calcular_precio_venta(precio_lista):
    if precio_lista < 20:
        # Productos baratos: 100% de margen
        precio_venta = precio_lista * 2.0
    elif precio_lista < 30:
        # Productos medios: 75% de margen
        precio_venta = precio_lista * 1.75
    else:
        # Productos caros: 50% de margen
        precio_venta = precio_lista * 1.5
    
    return round(precio_venta, 2)
```

**Ejemplo:**
- 15€ → 30.00€ (×2)
- 25€ → 43.75€ (×1.75)
- 35€ → 52.50€ (×1.5)

#### Opción 5: Precios Psicológicos (.99)
Redondear a .99 para precios más atractivos:

```python
def calcular_precio_venta(precio_lista):
    # Aplicar margen del 100%
    precio_venta = precio_lista * 2.0
    
    # Redondear al .99 más cercano
    precio_redondeado = int(precio_venta) + 0.99
    
    return round(precio_redondeado, 2)
```

**Ejemplo:**
- 15€ → 30.99€
- 20€ → 40.99€
- 25€ → 50.99€

## Aplicar los Cambios

Después de modificar la fórmula en `combinar_datos.py`:

1. Guarda el archivo
2. Ejecuta el script para regenerar los productos:
   ```bash
   python3 combinar_datos.py
   ```
3. Recarga la página de la tienda en el navegador (F5)

Los nuevos precios se aplicarán inmediatamente.

## Datos en el Sistema

### Archivo productos.js
Cada producto tiene esta estructura:

```javascript
{
  "id": "30022",
  "equipo": "nacional-espana",
  "imagen": "futbolmodaes_img/nacional-espana/30022_00.jpg",
  "nombre": "Camiseta Nacional Espana",
  "precio_lista": 22.13,      // Precio original del proveedor
  "precio_venta": 44.26        // Precio mostrado al cliente
}
```

### Lo que ve el cliente
- En la tienda: Solo ve el **precio_venta**
- En el carrito: Solo ve el **precio_venta**
- En el email de pedido: Solo ve el **precio_venta**

### Lo que guardas internamente
El sistema guarda ambos precios en el carrito, por si en el futuro necesitas:
- Calcular márgenes de ganancia
- Generar reportes de ventas
- Analizar rentabilidad por producto

## Recomendaciones

1. **Margen mínimo recomendado**: 50% (×1.5) para cubrir gastos operativos
2. **Margen estándar retail**: 100% (×2) es común en ropa y accesorios
3. **Considera**: Costos de envío, personalización, y tiempo de gestión
4. **Precios competitivos**: Revisa precios de competidores antes de decidir

## Notas Importantes

- Los cambios en la fórmula NO afectan pedidos ya realizados
- Puedes cambiar la fórmula en cualquier momento
- Los precios se recalculan cada vez que ejecutas `combinar_datos.py`
- El precio_lista original siempre se mantiene en el CSV
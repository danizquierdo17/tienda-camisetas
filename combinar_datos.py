import csv
import json
import random

# CONFIGURACIÓN: Ajusta esta fórmula según necesites
def calcular_precio_venta(precio_lista):
    """
    Calcula el precio de venta basado en el precio de lista.
    Modifica esta función para cambiar la fórmula de cálculo.
    """
    # Fórmula actual: Precio de venta = Precio lista × 2 (100% de margen)
    precio_venta = precio_lista * 2.0
    
    # Redondear a 2 decimales
    return round(precio_venta, 2)

# Leer manifest.csv (tiene pID e imágenes)
productos_manifest = {}
with open('futbolmodaes_img/manifest.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        pid = row['pID']
        productos_manifest[pid] = {
            'id': pid,
            'equipo': row['equipo_slug'],
            'imagen': row['fichero'],
            'nombre': None,
            'precio_lista': None,
            'precio_venta': None
        }

# Leer catalogo.csv (tiene pID, nombres y precios)
# Verificar si el catálogo tiene pID (nuevo formato) o no (formato antiguo)
catalogo_por_pid = {}
catalogo_por_equipo = {}  # Fallback para formato antiguo

with open('futbolmodaes_img/catalogo.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='|')
    headers = reader.fieldnames
    
    # Verificar si tiene columna pID
    tiene_pid = 'pID' in headers
    
    for row in reader:
        equipo = row['equipo'].strip()
        precio_lista = float(row['precio'].strip())
        nombre = row['nombre'].strip()
        
        if tiene_pid:
            # Nuevo formato: usar pID como clave
            pid = row['pID'].strip()
            catalogo_por_pid[pid] = {
                'nombre': nombre,
                'precio_lista': precio_lista,
                'precio_venta': calcular_precio_venta(precio_lista)
            }
        else:
            # Formato antiguo: agrupar por equipo
            if equipo not in catalogo_por_equipo:
                catalogo_por_equipo[equipo] = []
            catalogo_por_equipo[equipo].append({
                'nombre': nombre,
                'precio_lista': precio_lista,
                'precio_venta': calcular_precio_venta(precio_lista)
            })

# Asignar nombres y precios a los productos
productos_sin_precio = 0

if catalogo_por_pid:
    # Usar correlación directa por pID (más preciso)
    print("✓ Usando catálogo con pID (correlación exacta)")
    for pid, producto in productos_manifest.items():
        if pid in catalogo_por_pid:
            producto['nombre'] = catalogo_por_pid[pid]['nombre']
            producto['precio_lista'] = catalogo_por_pid[pid]['precio_lista']
            producto['precio_venta'] = catalogo_por_pid[pid]['precio_venta']
        else:
            # Producto sin datos en catálogo
            equipo_formateado = producto['equipo'].replace('-', ' ').title()
            producto['nombre'] = f"{equipo_formateado} - Ref. {pid}"
            precio_lista = round(random.uniform(15.0, 25.0), 2)
            producto['precio_lista'] = precio_lista
            producto['precio_venta'] = calcular_precio_venta(precio_lista)
            productos_sin_precio += 1
else:
    # Fallback: usar correlación por orden dentro de cada equipo (menos preciso)
    print("⚠ Usando catálogo sin pID (correlación por orden, menos preciso)")
    productos_por_equipo = {}
    for pid, producto in productos_manifest.items():
        equipo = producto['equipo']
        if equipo not in productos_por_equipo:
            productos_por_equipo[equipo] = []
        productos_por_equipo[equipo].append(pid)
    
    for equipo, pids in productos_por_equipo.items():
        if equipo in catalogo_por_equipo:
            catalogo_items = catalogo_por_equipo[equipo]
            for i, pid in enumerate(pids):
                if i < len(catalogo_items):
                    nombre_base = catalogo_items[i]['nombre']
                    if nombre_base.count(' ') < 3 or 'Cheap' in nombre_base:
                        equipo_formateado = equipo.replace('-', ' ').title()
                        productos_manifest[pid]['nombre'] = f"{equipo_formateado} - Ref. {pid}"
                    else:
                        productos_manifest[pid]['nombre'] = nombre_base
                    productos_manifest[pid]['precio_lista'] = catalogo_items[i]['precio_lista']
                    productos_manifest[pid]['precio_venta'] = catalogo_items[i]['precio_venta']
                else:
                    equipo_formateado = equipo.replace('-', ' ').title()
                    productos_manifest[pid]['nombre'] = f"{equipo_formateado} - Ref. {pid}"
                    precio_lista = round(random.uniform(15.0, 25.0), 2)
                    productos_manifest[pid]['precio_lista'] = precio_lista
                    productos_manifest[pid]['precio_venta'] = calcular_precio_venta(precio_lista)
                    productos_sin_precio += 1
        else:
            for pid in pids:
                equipo_formateado = equipo.replace('-', ' ').title()
                productos_manifest[pid]['nombre'] = f"{equipo_formateado} - Ref. {pid}"
                precio_lista = round(random.uniform(15.0, 25.0), 2)
                productos_manifest[pid]['precio_lista'] = precio_lista
                productos_manifest[pid]['precio_venta'] = calcular_precio_venta(precio_lista)
                productos_sin_precio += 1

# Convertir a lista
productos = list(productos_manifest.values())

# Escribir el archivo JS
with open('productos.js', 'w', encoding='utf-8') as f:
    f.write('// Productos cargados desde manifest.csv y catalogo.csv\n')
    f.write('// precio_lista: Precio original del catálogo\n')
    f.write('// precio_venta: Precio calculado con fórmula (actualmente: precio_lista × 2)\n')
    f.write('// Para cambiar la fórmula, edita la función calcular_precio_venta() en combinar_datos.py\n')
    f.write('const productosData = ')
    f.write(json.dumps(productos, ensure_ascii=False, indent=2))
    f.write(';\n')

print(f"✅ Combinados {len(productos)} productos")
print(f"   Productos con datos del catálogo: {len(productos) - productos_sin_precio}")
print(f"   Productos sin datos (precio asignado): {productos_sin_precio}")
print(f"\n📊 Ejemplo de precios:")
print(f"   Precio lista: 15.00€ → Precio venta: {calcular_precio_venta(15.0)}€")
print(f"   Precio lista: 20.00€ → Precio venta: {calcular_precio_venta(20.0)}€")
print(f"   Precio lista: 25.00€ → Precio venta: {calcular_precio_venta(25.0)}€")

# Made with Bob
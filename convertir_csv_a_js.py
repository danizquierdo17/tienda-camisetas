import csv
import json

# Leer el manifest.csv que tiene los IDs reales y las rutas de imágenes
productos_dict = {}

with open('futbolmodaes_img/manifest.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        pid = row['pID']
        equipo_slug = row['equipo_slug']
        fichero = row['fichero']
        
        # Solo agregar si no existe ya (evitar duplicados)
        if pid not in productos_dict:
            productos_dict[pid] = {
                'id': pid,
                'equipo': equipo_slug,
                'imagen': fichero,
                'nombre': f"Camiseta {equipo_slug}",  # Nombre por defecto
                'precio': 15.00
            }

# Leer el catalogo.csv para obtener nombres y precios reales
nombres_por_equipo = {}
with open('futbolmodaes_img/catalogo.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='|')
    for row in reader:
        equipo = row['equipo'].strip()
        if equipo not in nombres_por_equipo:
            nombres_por_equipo[equipo] = []
        nombres_por_equipo[equipo].append({
            'nombre': row['nombre'].strip(),
            'precio': float(row['precio'].strip())
        })

# Asignar nombres y precios a los productos del manifest
for pid, producto in productos_dict.items():
    equipo = producto['equipo']
    if equipo in nombres_por_equipo and nombres_por_equipo[equipo]:
        # Tomar el primer nombre disponible para este equipo
        info = nombres_por_equipo[equipo].pop(0)
        producto['nombre'] = info['nombre']
        producto['precio'] = info['precio']

productos = list(productos_dict.values())

# Escribir el archivo JS
with open('productos.js', 'w', encoding='utf-8') as f:
    f.write('// Productos cargados desde el catálogo con imágenes reales\n')
    f.write('const productosData = ')
    f.write(json.dumps(productos, ensure_ascii=False, indent=2))
    f.write(';\n')

print(f"✅ Convertidos {len(productos)} productos a productos.js")
print(f"   Productos con imágenes del manifest")

# Made with Bob

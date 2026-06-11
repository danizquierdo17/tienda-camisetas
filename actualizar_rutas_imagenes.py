#!/usr/bin/env python3
"""
Script para actualizar productos.js con rutas de imágenes simplificadas
Cambia de: futbolmodaes_img/equipo/ID_00.jpg
A: images/ID.jpg
"""

import json
import re
from pathlib import Path

def actualizar_rutas():
    """Lee productos.js y actualiza las rutas de imágenes"""
    
    # Leer el archivo productos.js
    with open('productos.js', 'r', encoding='utf-8') as f:
        contenido = f.read()
    
    # Extraer el array JSON (está después de "const productosData = ")
    match = re.search(r'const productosData = (\[.*\]);', contenido, re.DOTALL)
    if not match:
        print("❌ Error: No se pudo encontrar productosData en productos.js")
        return
    
    productos = json.loads(match.group(1))
    
    # Actualizar rutas de imágenes
    actualizados = 0
    for producto in productos:
        ruta_antigua = producto['imagen']
        
        # Extraer el ID del producto y la extensión
        # De: futbolmodaes_img/equipo/12345_00.jpg
        # A: images/12345.jpg
        
        nombre_archivo = Path(ruta_antigua).name  # 12345_00.jpg
        producto_id = nombre_archivo.split('_')[0]  # 12345
        extension = Path(ruta_antigua).suffix  # .jpg
        
        # Nueva ruta simplificada
        nueva_ruta = f"images/{producto_id}{extension}"
        producto['imagen'] = nueva_ruta
        actualizados += 1
    
    # Escribir el archivo actualizado
    with open('productos.js', 'w', encoding='utf-8') as f:
        f.write('// Productos cargados desde manifest.csv y catalogo.csv\n')
        f.write('// precio_lista: Precio original del catálogo\n')
        f.write('// precio_venta: Precio calculado con fórmula (actualmente: precio_lista × 2)\n')
        f.write('// Para cambiar la fórmula, edita la función calcular_precio_venta() en combinar_datos.py\n')
        f.write('const productosData = ')
        f.write(json.dumps(productos, ensure_ascii=False, indent=2))
        f.write(';\n')
    
    print(f"✅ Actualizadas {actualizados} rutas de imágenes en productos.js")
    print(f"   Rutas cambiadas de: futbolmodaes_img/equipo/ID_00.jpg")
    print(f"   A: images/ID.jpg")
    print(f"\n📝 Ahora las rutas son simples y no exponen la estructura de directorios")

if __name__ == '__main__':
    actualizar_rutas()

# Made with Bob

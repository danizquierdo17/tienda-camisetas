#!/usr/bin/env python3
"""
Script para reorganizar imágenes en un directorio plano
Esto oculta la estructura de equipos y mejora la seguridad
"""

import os
import shutil
from pathlib import Path

# Directorios
SOURCE_DIR = 'futbolmodaes_img'
TARGET_DIR = 'images'

def reorganizar_imagenes():
    """Copia todas las imágenes a un directorio plano usando solo el ID como nombre"""
    
    # Crear directorio de destino si no existe
    Path(TARGET_DIR).mkdir(exist_ok=True)
    
    # Contadores
    copiadas = 0
    sin_imagen = 0
    errores = 0
    
    print(f"🔄 Reorganizando imágenes de {SOURCE_DIR}/ a {TARGET_DIR}/")
    print("-" * 60)
    
    # Recorrer todos los subdirectorios de equipos
    for equipo_dir in Path(SOURCE_DIR).iterdir():
        if not equipo_dir.is_dir():
            continue
            
        equipo_nombre = equipo_dir.name
        print(f"📁 Procesando {equipo_nombre}...")
        
        # Procesar cada archivo en el directorio del equipo
        for archivo in equipo_dir.iterdir():
            if not archivo.is_file():
                continue
                
            nombre_archivo = archivo.name
            
            # Saltar archivos sin imagen
            if 'no_image' in nombre_archivo:
                sin_imagen += 1
                continue
            
            # Extraer el ID del producto (parte antes del _)
            try:
                producto_id = nombre_archivo.split('_')[0]
                extension = archivo.suffix  # .jpg, .png, etc.
                
                # Nuevo nombre: solo el ID + extensión
                nuevo_nombre = f"{producto_id}{extension}"
                destino = Path(TARGET_DIR) / nuevo_nombre
                
                # Copiar archivo
                shutil.copy2(archivo, destino)
                copiadas += 1
                
            except Exception as e:
                print(f"  ⚠️  Error con {nombre_archivo}: {e}")
                errores += 1
    
    print("-" * 60)
    print(f"✅ Imágenes copiadas: {copiadas}")
    print(f"⏭️  Sin imagen (ignoradas): {sin_imagen}")
    if errores > 0:
        print(f"❌ Errores: {errores}")
    print(f"\n📂 Todas las imágenes están ahora en: {TARGET_DIR}/")
    
    return copiadas

if __name__ == '__main__':
    total = reorganizar_imagenes()
    print(f"\n🎉 Proceso completado. {total} imágenes reorganizadas.")
    print("\n📝 Siguiente paso: Ejecuta 'python actualizar_rutas_imagenes.py' para actualizar productos.js")

# Made with Bob

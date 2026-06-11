#!/bin/bash

# Script para empaquetar solo los archivos necesarios para producción
# Excluye archivos de desarrollo, scripts de scraping, etc.

echo "📦 Empaquetando archivos para producción..."
echo ""

# Crear directorio temporal
TEMP_DIR="tienda_produccion"
rm -rf $TEMP_DIR
mkdir -p $TEMP_DIR

echo "✅ Copiando archivos esenciales..."

# Frontend (HTML, CSS, JS)
cp tienda.html $TEMP_DIR/
cp tienda.css $TEMP_DIR/
cp tienda.js $TEMP_DIR/
cp productos.js $TEMP_DIR/

# Backend Flask
cp server.py $TEMP_DIR/
cp requirements.txt $TEMP_DIR/

# Scripts de actualización automática
echo "🔄 Copiando scripts de actualización..."
cp scraper_futbolmodaes.py $TEMP_DIR/
cp combinar_datos.py $TEMP_DIR/
cp reorganizar_imagenes.py $TEMP_DIR/
cp actualizar_rutas_imagenes.py $TEMP_DIR/
cp actualizar_catalogo_automatico.sh $TEMP_DIR/
chmod +x $TEMP_DIR/actualizar_catalogo_automatico.sh

# Imágenes (solo el directorio images/)
echo "📸 Copiando imágenes (esto puede tardar un poco)..."
cp -r images/ $TEMP_DIR/

# Crear archivo .gitignore para el paquete
cat > $TEMP_DIR/.gitignore << 'EOF'
venv/
__pycache__/
*.pyc
*.pyo
*.log
.DS_Store
EOF

echo ""
echo "📊 Resumen de archivos incluidos:"
echo "   Frontend:"
echo "   - tienda.html"
echo "   - tienda.css"
echo "   - tienda.js"
echo "   - productos.js (2,452 productos)"
echo ""
echo "   Backend:"
echo "   - server.py (Flask API)"
echo "   - requirements.txt"
echo ""
echo "   Actualización Automática:"
echo "   - scraper_futbolmodaes.py"
echo "   - combinar_datos.py"
echo "   - reorganizar_imagenes.py"
echo "   - actualizar_rutas_imagenes.py"
echo "   - actualizar_catalogo_automatico.sh"
echo ""
echo "   Imágenes:"
echo "   - images/ (2,452 archivos)"
echo ""

# Comprimir
echo "🗜️  Comprimiendo archivos..."
tar -czf tienda_produccion.tar.gz $TEMP_DIR/

# Calcular tamaño
SIZE=$(du -h tienda_produccion.tar.gz | cut -f1)

echo ""
echo "✅ ¡Listo! Archivo creado: tienda_produccion.tar.gz"
echo "📦 Tamaño: $SIZE"
echo ""
echo "📤 Para subir a tu VM:"
echo "   scp tienda_produccion.tar.gz usuario@IP_VM:/home/usuario/"
echo ""
echo "📂 En la VM, descomprimir con:"
echo "   tar -xzf tienda_produccion.tar.gz"
echo "   cd tienda_produccion"
echo ""
echo "🚀 Luego sigue la guía: DESPLIEGUE_SHOP_D8T_DEV.md"
echo ""

# Limpiar directorio temporal
rm -rf $TEMP_DIR

echo "🗑️  Directorio temporal limpiado"
echo ""
echo "📋 Archivos NO incluidos (solo desarrollo):"
echo "   ❌ futbolmodaes_img/ (estructura antigua de imágenes)"
echo "   ❌ convertir_csv_a_js.py (obsoleto)"
echo "   ❌ venv/ (se crea en el servidor)"
echo "   ❌ *.md (documentación)"
echo "   ❌ iniciar_tienda.sh (solo desarrollo local)"
echo "   ❌ .git/ (control de versiones)"
echo "   ❌ __pycache__/ (cache de Python)"

# Made with Bob

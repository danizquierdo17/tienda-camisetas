#!/bin/bash

echo "🧹 Limpiando archivos innecesarios del proyecto..."
echo ""

# Crear directorio de backup
BACKUP_DIR="backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📦 Creando backup en: $BACKUP_DIR"

# Lista de archivos a eliminar (scripts de desarrollo)
ARCHIVOS_DESARROLLO=(
    "test_precio_scraper.py"
    "scraper_futbolmodaes.py"
    "limpiar_catalogo.py"
    "combinar_datos.py"
    "convertir_csv_a_js.py"
    "reorganizar_imagenes.py"
    "actualizar_rutas_imagenes.py"
    "actualizar_catalogo_automatico.sh"
    "empaquetar_para_produccion.sh"
    "deploy_to_gcloud.sh"
    "test_producto_29155.html"
    "test_producto_29706.html"
)

# Lista de documentación de desarrollo (opcional)
DOCS_DESARROLLO=(
    "ACTUALIZAR_CATALOGO.md"
    "ACTUALIZACION_AUTOMATICA.md"
    "DESPLIEGUE_GCLOUD_D8T.md"
    "DESPLIEGUE_PUBLICO.md"
    "DESPLIEGUE_SHOP_D8T_DEV.md"
    "GUIA_RAPIDA.md"
    "SEGURIDAD_IMAGENES.md"
    "SISTEMA_PRECIOS.md"
)

# Mover archivos de desarrollo a backup
echo ""
echo "📝 Moviendo archivos de desarrollo a backup..."
for archivo in "${ARCHIVOS_DESARROLLO[@]}"; do
    if [ -f "$archivo" ]; then
        mv "$archivo" "$BACKUP_DIR/"
        echo "  ✓ $archivo"
    fi
done

# Mover logs a backup
echo ""
echo "📋 Moviendo logs a backup..."
if ls scraper_log*.txt 1> /dev/null 2>&1; then
    mv scraper_log*.txt "$BACKUP_DIR/"
    echo "  ✓ scraper_log*.txt"
fi

# Preguntar si eliminar documentación de desarrollo
echo ""
read -p "¿Deseas mover también la documentación de desarrollo a backup? (s/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Ss]$ ]]; then
    echo ""
    echo "📚 Moviendo documentación de desarrollo a backup..."
    for doc in "${DOCS_DESARROLLO[@]}"; do
        if [ -f "$doc" ]; then
            mv "$doc" "$BACKUP_DIR/"
            echo "  ✓ $doc"
        fi
    done
fi

# Eliminar directorio España si existe (imágenes antiguas)
if [ -d "España" ]; then
    echo ""
    read -p "¿Deseas mover el directorio 'España/' a backup? (s/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        mv "España" "$BACKUP_DIR/"
        echo "  ✓ España/"
    fi
fi

# Limpiar cache de Python
echo ""
echo "🗑️  Limpiando cache de Python..."
find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null
find . -type f -name "*.pyc" -delete 2>/dev/null
find . -type f -name "*.pyo" -delete 2>/dev/null
echo "  ✓ Cache de Python eliminado"

# Resumen
echo ""
echo "✅ Limpieza completada!"
echo ""
echo "📂 Archivos esenciales mantenidos:"
echo "   - tienda.html"
echo "   - tienda.css"
echo "   - tienda.js"
echo "   - productos.js"
echo "   - server.py"
echo "   - requirements.txt"
echo "   - iniciar_tienda.sh"
echo "   - README.md"
echo "   - .gitignore"
echo "   - futbolmodaes_img/"
echo ""
echo "💾 Backup creado en: $BACKUP_DIR"
echo ""
echo "Para restaurar archivos, cópialos desde el directorio de backup."
echo ""

# Made with Bob

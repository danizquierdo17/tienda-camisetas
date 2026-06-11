#!/bin/bash

# Script para actualizar automáticamente el catálogo desde el servidor
# Se ejecuta cada 15 días mediante cron

# Configuración
TIENDA_DIR="/home/tienda/tienda"
LOG_FILE="$TIENDA_DIR/logs/actualizacion_catalogo.log"
BACKUP_DIR="$TIENDA_DIR/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Crear directorios si no existen
mkdir -p "$TIENDA_DIR/logs"
mkdir -p "$BACKUP_DIR"
mkdir -p "$TIENDA_DIR/futbolmodaes_img"

# Función de logging
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "=========================================="
log "Iniciando actualización automática del catálogo"
log "=========================================="

cd "$TIENDA_DIR" || exit 1

# Activar entorno virtual
source venv/bin/activate

# 1. Backup de archivos actuales
log "📦 Creando backup de archivos actuales..."
tar -czf "$BACKUP_DIR/backup_$DATE.tar.gz" productos.js images/ futbolmodaes_img/ 2>/dev/null
log "✅ Backup creado: backup_$DATE.tar.gz"

# 2. Ejecutar scraper
log "🔍 Ejecutando scraper de futbolmodaes.com..."
python3 scraper_futbolmodaes.py >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    log "✅ Scraper ejecutado correctamente"
else
    log "❌ Error en el scraper. Abortando actualización."
    exit 1
fi

# 3. Combinar datos (manifest + catálogo)
log "🔄 Combinando datos de manifest y catálogo..."
python3 combinar_datos.py >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    log "✅ Datos combinados correctamente"
else
    log "❌ Error al combinar datos. Restaurando backup..."
    tar -xzf "$BACKUP_DIR/backup_$DATE.tar.gz" -C "$TIENDA_DIR"
    exit 1
fi

# 4. Reorganizar imágenes
log "📸 Reorganizando imágenes..."
python3 reorganizar_imagenes.py >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    log "✅ Imágenes reorganizadas"
else
    log "⚠️  Advertencia: Error al reorganizar imágenes"
fi

# 5. Actualizar rutas en productos.js
log "🔄 Actualizando rutas de imágenes..."
python3 actualizar_rutas_imagenes.py >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    log "✅ Rutas actualizadas en productos.js"
else
    log "❌ Error al actualizar rutas. Restaurando backup..."
    tar -xzf "$BACKUP_DIR/backup_$DATE.tar.gz" -C "$TIENDA_DIR"
    exit 1
fi

# 6. Verificar que productos.js es válido
log "🔍 Verificando productos.js..."
if grep -q "const productosData" productos.js; then
    PRODUCTOS_COUNT=$(grep -o '"id":' productos.js | wc -l)
    log "✅ productos.js válido con $PRODUCTOS_COUNT productos"
else
    log "❌ productos.js inválido. Restaurando backup..."
    tar -xzf "$BACKUP_DIR/backup_$DATE.tar.gz" -C "$TIENDA_DIR"
    exit 1
fi

# 7. Reiniciar servidor Flask (si está corriendo como servicio)
if systemctl is-active --quiet tienda-backend; then
    log "🔄 Reiniciando servicio Flask..."
    sudo systemctl restart tienda-backend
    log "✅ Servicio reiniciado"
fi

# 8. Limpiar backups antiguos (mantener solo últimos 5)
log "🗑️  Limpiando backups antiguos..."
cd "$BACKUP_DIR"
ls -t backup_*.tar.gz | tail -n +6 | xargs -r rm
BACKUPS_COUNT=$(ls -1 backup_*.tar.gz 2>/dev/null | wc -l)
log "✅ Manteniendo $BACKUPS_COUNT backups más recientes"

# 9. Enviar notificación por email (opcional)
log "📧 Enviando notificación de actualización..."
python3 - << 'PYTHON_SCRIPT'
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

# Configuración SMTP
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "d8t.dev@gmail.com"
SMTP_PASS = "zhyn ydes zmch regn"

# Crear mensaje
msg = MIMEMultipart()
msg['From'] = SMTP_USER
msg['To'] = SMTP_USER
msg['Subject'] = f"✅ Catálogo Actualizado - {datetime.now().strftime('%d/%m/%Y %H:%M')}"

body = f"""
Actualización automática del catálogo completada exitosamente.

Fecha: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}
Servidor: shop.d8t.dev

Revisa los logs para más detalles:
/home/tienda/tienda/logs/actualizacion_catalogo.log

---
Sistema de actualización automática
"""

msg.attach(MIMEText(body, 'plain'))

try:
    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.starttls()
    server.login(SMTP_USER, SMTP_PASS)
    server.send_message(msg)
    server.quit()
    print("✅ Email de notificación enviado")
except Exception as e:
    print(f"⚠️  No se pudo enviar email: {e}")
PYTHON_SCRIPT

log "=========================================="
log "✅ Actualización completada exitosamente"
log "=========================================="
log ""

# Desactivar entorno virtual
deactivate

# Made with Bob

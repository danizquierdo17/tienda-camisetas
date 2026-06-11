# 🔄 Actualización Automática del Catálogo

Sistema para actualizar automáticamente el catálogo cada 15 días, obteniendo nuevos productos y precios de futbolmodaes.com.

## 📋 Componentes

### 1. Script de Actualización
[`actualizar_catalogo_automatico.sh`](actualizar_catalogo_automatico.sh:1) - Script principal que:
- Hace backup de archivos actuales
- Ejecuta el scraper
- Combina datos (manifest + catálogo)
- Reorganiza imágenes
- Actualiza productos.js
- Reinicia el servidor Flask
- Limpia backups antiguos
- Envía email de notificación

### 2. Scripts de Procesamiento
Estos scripts deben estar en el servidor:
- `scraper_futbolmodaes.py` - Obtiene productos de la web
- `combinar_datos.py` - Combina manifest y catálogo
- `reorganizar_imagenes.py` - Reorganiza imágenes a directorio plano
- `actualizar_rutas_imagenes.py` - Actualiza rutas en productos.js

## 🚀 Instalación en el Servidor

### Paso 1: Subir Scripts de Procesamiento

```bash
# Desde tu Mac
cd /Users/dizq/Documents/DaniPersonal/Camisetas

# Crear paquete con scripts de actualización
tar -czf scripts_actualizacion.tar.gz \
    scraper_futbolmodaes.py \
    combinar_datos.py \
    reorganizar_imagenes.py \
    actualizar_rutas_imagenes.py \
    actualizar_catalogo_automatico.sh

# Subir al servidor
scp scripts_actualizacion.tar.gz tienda@IP_VM:/home/tienda/

# En el servidor
ssh tienda@IP_VM
cd /home/tienda/tienda
tar -xzf ../scripts_actualizacion.tar.gz
chmod +x actualizar_catalogo_automatico.sh
```

### Paso 2: Instalar Dependencias Adicionales

```bash
cd /home/tienda/tienda
source venv/bin/activate
pip install beautifulsoup4 requests lxml
```

### Paso 3: Probar Manualmente

```bash
# Ejecutar una vez manualmente para verificar
./actualizar_catalogo_automatico.sh
```

Revisa el log:
```bash
cat logs/actualizacion_catalogo.log
```

### Paso 4: Configurar Cron

```bash
# Editar crontab
crontab -e
```

Agregar esta línea para ejecutar cada 15 días a las 3:00 AM:
```cron
0 3 */15 * * /home/tienda/tienda/actualizar_catalogo_automatico.sh
```

**Opciones de frecuencia:**

```cron
# Cada 15 días a las 3:00 AM
0 3 */15 * * /home/tienda/tienda/actualizar_catalogo_automatico.sh

# Cada domingo a las 2:00 AM
0 2 * * 0 /home/tienda/tienda/actualizar_catalogo_automatico.sh

# El día 1 y 15 de cada mes a las 3:00 AM
0 3 1,15 * * /home/tienda/tienda/actualizar_catalogo_automatico.sh

# Cada lunes a las 4:00 AM
0 4 * * 1 /home/tienda/tienda/actualizar_catalogo_automatico.sh
```

### Paso 5: Verificar Cron

```bash
# Ver tareas programadas
crontab -l

# Ver logs de cron
grep CRON /var/log/syslog | tail -20
```

## 📊 Monitoreo

### Ver Logs de Actualización

```bash
# Log más reciente
tail -f /home/tienda/tienda/logs/actualizacion_catalogo.log

# Últimas 50 líneas
tail -50 /home/tienda/tienda/logs/actualizacion_catalogo.log

# Buscar errores
grep "❌" /home/tienda/tienda/logs/actualizacion_catalogo.log
```

### Ver Backups

```bash
ls -lh /home/tienda/tienda/backups/
```

### Restaurar Backup

Si algo sale mal:
```bash
cd /home/tienda/tienda
tar -xzf backups/backup_YYYYMMDD_HHMMSS.tar.gz
sudo systemctl restart tienda-backend
```

## 📧 Notificaciones por Email

El script envía un email a `d8t.dev@gmail.com` después de cada actualización con:
- Fecha y hora de la actualización
- Estado (exitoso o fallido)
- Ubicación de los logs

### Personalizar Email

Edita la sección de Python en [`actualizar_catalogo_automatico.sh`](actualizar_catalogo_automatico.sh:100) para cambiar:
- Destinatario
- Asunto
- Contenido del mensaje

## 🔧 Proceso de Actualización

### Flujo Completo

```
1. Backup de archivos actuales
   ├── productos.js
   ├── images/
   └── futbolmodaes_img/

2. Scraper obtiene nuevos datos
   ├── Descarga catálogo de futbolmodaes.com
   ├── Descarga imágenes nuevas
   └── Genera manifest.csv y catalogo.csv

3. Combinar datos
   ├── Lee manifest.csv (IDs e imágenes)
   ├── Lee catalogo.csv (nombres y precios)
   └── Genera productos.js con precios actualizados

4. Reorganizar imágenes
   ├── Copia de futbolmodaes_img/equipo/ID.jpg
   └── A images/ID.jpg (estructura plana)

5. Actualizar rutas
   └── Cambia rutas en productos.js a images/ID.jpg

6. Verificación
   ├── Valida productos.js
   └── Cuenta productos

7. Reiniciar servidor
   └── systemctl restart tienda-backend

8. Limpieza
   └── Mantiene solo últimos 5 backups

9. Notificación
   └── Envía email con resultado
```

## 🛡️ Seguridad y Rollback

### Sistema de Backups

- Se crea backup antes de cada actualización
- Se mantienen los últimos 5 backups
- Formato: `backup_YYYYMMDD_HHMMSS.tar.gz`
- Ubicación: `/home/tienda/tienda/backups/`

### Rollback Automático

Si hay error en:
- Combinar datos
- Actualizar rutas
- Validación de productos.js

El script automáticamente restaura el backup más reciente.

### Rollback Manual

```bash
cd /home/tienda/tienda

# Listar backups disponibles
ls -lh backups/

# Restaurar backup específico
tar -xzf backups/backup_20260611_030000.tar.gz

# Reiniciar servidor
sudo systemctl restart tienda-backend
```

## 📈 Estadísticas

### Ver Historial de Actualizaciones

```bash
# Contar actualizaciones exitosas
grep "✅ Actualización completada" logs/actualizacion_catalogo.log | wc -l

# Ver fechas de actualizaciones
grep "Iniciando actualización" logs/actualizacion_catalogo.log

# Ver productos por actualización
grep "productos.js válido con" logs/actualizacion_catalogo.log
```

### Espacio en Disco

```bash
# Ver espacio usado por backups
du -sh /home/tienda/tienda/backups/

# Ver espacio usado por imágenes
du -sh /home/tienda/tienda/images/
du -sh /home/tienda/tienda/futbolmodaes_img/
```

## 🔍 Solución de Problemas

### Error: "Scraper failed"

**Causa:** La web de futbolmodaes.com no responde o cambió estructura

**Solución:**
1. Verificar que la web esté accesible: `curl -I https://www.futbolmodaes.com`
2. Revisar logs del scraper
3. Actualizar selectores CSS en `scraper_futbolmodaes.py` si cambió la estructura

### Error: "No se pudo enviar email"

**Causa:** Credenciales SMTP incorrectas o bloqueadas

**Solución:**
1. Verificar credenciales en el script
2. Verificar que Gmail permita "aplicaciones menos seguras"
3. Generar nueva contraseña de aplicación

### Cron no ejecuta el script

**Causa:** Permisos o ruta incorrecta

**Solución:**
```bash
# Verificar permisos
chmod +x /home/tienda/tienda/actualizar_catalogo_automatico.sh

# Verificar ruta en crontab
crontab -l

# Ver logs de cron
grep CRON /var/log/syslog
```

### Backup ocupa mucho espacio

**Solución:**
```bash
# Reducir número de backups mantenidos
# Editar línea 130 en actualizar_catalogo_automatico.sh
# Cambiar de 5 a 3 backups:
ls -t backup_*.tar.gz | tail -n +4 | xargs -r rm
```

## 📝 Mantenimiento

### Actualizar Scripts

```bash
# Desde tu Mac, después de modificar scripts
cd /Users/dizq/Documents/DaniPersonal/Camisetas
tar -czf scripts_actualizacion.tar.gz \
    scraper_futbolmodaes.py \
    combinar_datos.py \
    reorganizar_imagenes.py \
    actualizar_rutas_imagenes.py \
    actualizar_catalogo_automatico.sh

scp scripts_actualizacion.tar.gz tienda@IP_VM:/home/tienda/

# En el servidor
ssh tienda@IP_VM
cd /home/tienda/tienda
tar -xzf ../scripts_actualizacion.tar.gz
chmod +x actualizar_catalogo_automatico.sh
```

### Limpiar Logs Antiguos

```bash
# Mantener solo últimos 30 días de logs
find /home/tienda/tienda/logs/ -name "*.log" -mtime +30 -delete
```

## 🎯 Checklist de Instalación

- [ ] Scripts subidos al servidor
- [ ] Dependencias instaladas (beautifulsoup4, requests, lxml)
- [ ] Script ejecutable (`chmod +x`)
- [ ] Prueba manual exitosa
- [ ] Cron configurado
- [ ] Email de notificación funcionando
- [ ] Backups creándose correctamente
- [ ] Logs generándose en `/home/tienda/tienda/logs/`

## 📞 Soporte

Si tienes problemas con la actualización automática:
1. Revisa los logs: `tail -100 /home/tienda/tienda/logs/actualizacion_catalogo.log`
2. Verifica cron: `crontab -l`
3. Prueba manualmente: `./actualizar_catalogo_automatico.sh`
4. Email: d8t.dev@gmail.com
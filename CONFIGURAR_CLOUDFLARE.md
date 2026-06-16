# ☁️ Configurar DNS en Cloudflare para shirts.d8t.dev

Guía paso a paso para configurar el subdominio shirts.d8t.dev en Cloudflare.

## 📋 Requisitos Previos

- Cuenta de Cloudflare con el dominio d8t.dev configurado
- IP pública de tu VM de Google Cloud
- Acceso al panel de Cloudflare

## 🎯 Pasos para Configurar DNS

### Paso 1: Acceder a Cloudflare

1. Ve a [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Inicia sesión con tu cuenta
3. Selecciona el dominio **d8t.dev** de la lista

### Paso 2: Ir a la Sección DNS

1. En el menú lateral izquierdo, haz clic en **DNS**
2. Verás la sección **DNS Records** (Registros DNS)

### Paso 3: Añadir Registro A

Haz clic en el botón **Add record** (Añadir registro) y configura:

```
┌─────────────────────────────────────────────────────────┐
│ Type: A                                                 │
│ Name: shirts                                            │
│ IPv4 address: [IP-DE-TU-VM-GOOGLE-CLOUD]               │
│ Proxy status: ✅ Proxied (icono naranja)               │
│ TTL: Auto                                               │
└─────────────────────────────────────────────────────────┘
```

**Detalles de cada campo:**

- **Type:** Selecciona `A` del menú desplegable
- **Name:** Escribe `shirts` (esto creará shirts.d8t.dev)
- **IPv4 address:** Pega la IP pública de tu VM (ejemplo: 34.77.123.45)
- **Proxy status:** 
  - ✅ **Activado (naranja):** Recomendado - Cloudflare protegerá tu sitio
  - ⚪ **Desactivado (gris):** DNS only - Sin protección de Cloudflare
- **TTL:** Deja en `Auto`

### Paso 4: Guardar el Registro

1. Haz clic en el botón **Save** (Guardar)
2. El registro aparecerá en la lista de DNS Records

### Paso 5: Verificar la Configuración

Después de guardar, deberías ver algo como:

```
Type    Name     Content              Proxy Status    TTL
────────────────────────────────────────────────────────────
A       shirts   34.77.123.45         Proxied         Auto
```

## ⏱️ Tiempo de Propagación

- **Con Proxy activado:** 1-5 minutos
- **Sin Proxy (DNS only):** 5-30 minutos

## ✅ Verificar que Funciona

### Opción 1: Desde la Terminal

```bash
# Verificar resolución DNS
dig shirts.d8t.dev

# O con nslookup
nslookup shirts.d8t.dev

# Verificar que responde
curl -I https://shirts.d8t.dev
```

### Opción 2: Desde el Navegador

1. Abre tu navegador
2. Ve a: `https://shirts.d8t.dev`
3. Deberías ver tu tienda de camisetas

**Nota:** Si ves un error de SSL, es porque aún no has configurado el certificado. Continúa con el siguiente paso.

## 🔒 Configurar SSL (Certificado HTTPS)

### Opción A: Con Cloudflare Proxy Activado (Recomendado)

Si activaste el proxy de Cloudflare (icono naranja), el SSL se configura automáticamente:

1. En Cloudflare, ve a **SSL/TLS**
2. Selecciona el modo de cifrado:
   - **Flexible:** HTTP entre Cloudflare y tu servidor (menos seguro)
   - **Full:** HTTPS entre Cloudflare y tu servidor (requiere certificado)
   - **Full (strict):** HTTPS con certificado válido (más seguro)

3. Para usar **Full (strict)**, necesitas configurar Let's Encrypt en tu VM:

```bash
# Conectar a tu VM
gcloud compute ssh [NOMBRE-VM] --zone=[ZONA]

# Instalar certbot si no está instalado
sudo apt install certbot python3-certbot-nginx -y

# Obtener certificado SSL
sudo certbot --nginx -d shirts.d8t.dev

# Seguir las instrucciones en pantalla
```

### Opción B: Sin Cloudflare Proxy

Si desactivaste el proxy (icono gris), configura Let's Encrypt directamente:

```bash
# En tu VM
sudo certbot --nginx -d shirts.d8t.dev
```

## 🔧 Configuración Adicional en Cloudflare

### Activar HTTPS Automático

1. Ve a **SSL/TLS** → **Edge Certificates**
2. Activa:
   - ✅ **Always Use HTTPS:** Redirige HTTP a HTTPS
   - ✅ **Automatic HTTPS Rewrites:** Corrige enlaces HTTP
   - ✅ **Minimum TLS Version:** TLS 1.2 o superior

### Configurar Caché

1. Ve a **Caching** → **Configuration**
2. Configura:
   - **Browser Cache TTL:** 4 hours (o más)
   - **Caching Level:** Standard

### Activar Compresión

1. Ve a **Speed** → **Optimization**
2. Activa:
   - ✅ **Auto Minify:** CSS, JavaScript, HTML
   - ✅ **Brotli:** Compresión mejorada

## 📊 Monitoreo

### Ver Estadísticas

1. Ve a **Analytics** → **Traffic**
2. Verás:
   - Visitantes únicos
   - Peticiones totales
   - Ancho de banda usado
   - Amenazas bloqueadas

### Configurar Alertas

1. Ve a **Notifications**
2. Configura alertas para:
   - Caídas del sitio
   - Ataques DDoS
   - Cambios en DNS

## 🐛 Solución de Problemas

### El sitio no carga

1. **Verifica la IP:**
   ```bash
   gcloud compute instances describe [NOMBRE-VM] \
       --zone=[ZONA] \
       --format='get(networkInterfaces[0].accessConfigs[0].natIP)'
   ```

2. **Verifica el registro DNS:**
   ```bash
   dig shirts.d8t.dev
   ```

3. **Verifica que Nginx está corriendo:**
   ```bash
   gcloud compute ssh [NOMBRE-VM] --zone=[ZONA] \
       --command="sudo systemctl status nginx"
   ```

### Error de SSL/TLS

1. **Verifica el modo SSL en Cloudflare:**
   - Debe ser "Full" o "Full (strict)"

2. **Verifica el certificado en la VM:**
   ```bash
   sudo certbot certificates
   ```

3. **Renueva el certificado si es necesario:**
   ```bash
   sudo certbot renew --force-renewal
   ```

### El sitio carga pero sin estilos

1. **Verifica la configuración de Nginx**
2. **Limpia la caché de Cloudflare:**
   - Ve a **Caching** → **Configuration**
   - Haz clic en **Purge Everything**

### Cambios DNS no se reflejan

1. **Espera 5-10 minutos**
2. **Limpia la caché DNS local:**
   ```bash
   # En macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # En Linux
   sudo systemd-resolve --flush-caches
   
   # En Windows
   ipconfig /flushdns
   ```

## 📝 Resumen de Configuración

```
┌──────────────────────────────────────────────────────┐
│ Dominio: shirts.d8t.dev                              │
│ Tipo de Registro: A                                  │
│ IP: [Tu IP de Google Cloud]                          │
│ Proxy: ✅ Activado (Recomendado)                     │
│ SSL: Full (strict) con Let's Encrypt                 │
│ HTTPS: Forzado (Always Use HTTPS)                    │
│ Caché: Activado                                      │
│ Compresión: Brotli + Minify                          │
└──────────────────────────────────────────────────────┘
```

## 🎯 Checklist Final

Antes de considerar el despliegue completo, verifica:

- [ ] Registro A creado en Cloudflare
- [ ] IP correcta configurada
- [ ] Proxy de Cloudflare activado (naranja)
- [ ] SSL configurado (Full o Full strict)
- [ ] Certificado Let's Encrypt instalado en VM
- [ ] Always Use HTTPS activado
- [ ] Sitio accesible en https://shirts.d8t.dev
- [ ] Estilos y recursos cargan correctamente
- [ ] Backend Flask responde en /api/
- [ ] Formulario de checkout funciona

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs de Nginx en la VM
2. Verifica el estado del servicio backend
3. Consulta la documentación de Cloudflare
4. Revisa [`DESPLIEGUE_GCLOUD.md`](DESPLIEGUE_GCLOUD.md) para más detalles

---

**¡Listo!** Tu tienda debería estar accesible en https://shirts.d8t.dev
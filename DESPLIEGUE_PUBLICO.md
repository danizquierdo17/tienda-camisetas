# Desplegar Tienda al Público

## Opción 1: ngrok (Más Rápido - Recomendado)

### Ventajas
- ✅ Configuración en 2 minutos
- ✅ HTTPS automático
- ✅ No requiere configurar firewall
- ✅ Perfecto para demos y pruebas
- ✅ Gratis hasta 1 GB de transferencia/mes

### Pasos

#### 1. Instalar ngrok
```bash
# Mac con Homebrew
brew install ngrok

# O descargar desde https://ngrok.com/download
```

#### 2. Crear cuenta gratuita
- Ve a https://dashboard.ngrok.com/signup
- Copia tu authtoken

#### 3. Configurar authtoken
```bash
ngrok config add-authtoken TU_TOKEN_AQUI
```

#### 4. Iniciar la tienda
```bash
./iniciar_tienda.sh
```

#### 5. En otra terminal, exponer con ngrok
```bash
# Exponer el servidor web (puerto 8000)
ngrok http 8000
```

#### 6. Compartir la URL
ngrok te dará una URL pública como:
```
https://abc123.ngrok-free.app
```

Comparte esa URL y cualquiera podrá acceder a tu tienda.

**Nota:** El backend Flask (puerto 5000) solo necesita ser accesible desde el servidor web, no desde internet.

---

## Opción 2: Servidor VPS (Producción)

### Proveedores Recomendados
- **DigitalOcean** - $6/mes
- **Linode** - $5/mes  
- **AWS Lightsail** - $3.50/mes
- **Hetzner** - €4/mes

### Pasos Generales

#### 1. Crear servidor Ubuntu 22.04

#### 2. Conectar por SSH
```bash
ssh root@TU_IP
```

#### 3. Instalar dependencias
```bash
apt update
apt install -y python3 python3-pip python3-venv nginx
```

#### 4. Subir archivos
```bash
# Desde tu Mac
scp -r /Users/dizq/Documents/DaniPersonal/Camisetas root@TU_IP:/var/www/tienda
```

#### 5. Configurar en el servidor
```bash
cd /var/www/tienda
python3 -m venv venv
source venv/bin/activate
pip install Flask flask-cors
```

#### 6. Crear servicio systemd para Flask
```bash
nano /etc/systemd/system/tienda-backend.service
```

Contenido:
```ini
[Unit]
Description=Tienda Backend Flask
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/tienda
Environment="PATH=/var/www/tienda/venv/bin"
ExecStart=/var/www/tienda/venv/bin/python server.py

[Install]
WantedBy=multi-user.target
```

#### 7. Configurar Nginx
```bash
nano /etc/nginx/sites-available/tienda
```

Contenido:
```nginx
server {
    listen 80;
    server_name tu-dominio.com;  # O tu IP

    root /var/www/tienda;
    index tienda.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### 8. Activar y reiniciar servicios
```bash
ln -s /etc/nginx/sites-available/tienda /etc/nginx/sites-enabled/
systemctl enable tienda-backend
systemctl start tienda-backend
systemctl restart nginx
```

#### 9. Configurar dominio (opcional)
- Compra un dominio en Namecheap, GoDaddy, etc.
- Apunta el DNS A record a la IP de tu servidor
- Instala SSL con Let's Encrypt:
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d tu-dominio.com
```

---

## Opción 3: Vercel/Netlify (Solo Frontend)

**Limitación:** No puedes usar el backend Flask (emails no funcionarán).

### Vercel

#### 1. Instalar Vercel CLI
```bash
npm install -g vercel
```

#### 2. Desplegar
```bash
cd /Users/dizq/Documents/DaniPersonal/Camisetas
vercel
```

#### 3. Configurar
- Selecciona el proyecto
- Vercel detectará automáticamente los archivos HTML

**Nota:** Tendrás que volver a usar EmailJS en lugar del backend Flask.

---

## Recomendación

**Para pruebas/demos:** Usa **ngrok** (Opción 1)
- Rápido y fácil
- Perfecto para mostrar a clientes
- No requiere servidor

**Para producción:** Usa **VPS** (Opción 2)
- Control total
- Emails funcionan
- Más profesional
- Dominio propio

---

## Seguridad

Si expones al público, considera:

1. **Limitar rate de emails** en server.py
2. **Agregar CAPTCHA** al formulario de checkout
3. **Validación de datos** más estricta
4. **HTTPS** obligatorio (ngrok lo da gratis, VPS usa Let's Encrypt)
5. **Backup** de la base de datos de pedidos

---

## Monitoreo

Para ver los pedidos que llegan:
- Revisa tu email d8t.dev@gmail.com
- Logs del servidor Flask: `tail -f /var/log/tienda-backend.log`
# Configuración de EmailJS para la Tienda de Camisetas

Este documento explica cómo configurar EmailJS para que la tienda pueda enviar correos automáticamente cuando se realiza un pedido.

## Credenciales de Gmail

**Email:** d8t.dev@gmail.com
**Contraseña de aplicación:** zhyn ydes zmch regn

## Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Usa el email: d8t.dev@gmail.com
4. Verifica tu email

## Paso 2: Configurar el servicio de email Gmail

1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona **Gmail**
4. Configura:
   - **Service ID:** Elige un nombre (ej: "gmail_service")
   - **Email:** d8t.dev@gmail.com
   - **Password:** zhyn ydes zmch regn (contraseña de aplicación de Google)
5. Haz clic en "Create Service"
6. Guarda el **Service ID** que aparece (lo necesitarás después)

## Paso 3: Crear plantillas de email

### Plantilla 1: Email al administrador (cuando llega un pedido)

1. Ve a "Email Templates" en el dashboard
2. Haz clic en "Create New Template"
3. Configura la plantilla con estos campos:

**Subject:** Nuevo Pedido - {{customer_name}}

**Content:**
```
Nuevo pedido recibido:

DATOS DEL CLIENTE:
- Nombre: {{customer_name}}
- Email: {{customer_email}}
- Teléfono: {{customer_phone}}
- Dirección: {{customer_address}}
- Ciudad: {{customer_city}}
- Código Postal: {{customer_postal}}
- Notas: {{customer_notes}}

DETALLES DEL PEDIDO:
{{order_details}}

TOTAL: {{order_total}}€

Fecha del pedido: {{order_date}}
```

4. En "Settings":
   - To Email: d8t.dev@gmail.com
   - From Name: Tienda de Camisetas
   - Reply To: {{customer_email}}

5. Guarda y copia el **Template ID**

### Plantilla 2: Email de confirmación al cliente

1. Crea otra plantilla nueva
2. Configura:

**Subject:** Confirmación de Pedido - Tienda de Camisetas

**Content:**
```
Hola {{customer_name}},

¡Gracias por tu pedido!

Hemos recibido tu solicitud y estamos procesándola. Te contactaremos pronto para coordinar el pago y envío.

RESUMEN DE TU PEDIDO:
{{order_details}}

TOTAL: {{order_total}}€

Fecha: {{order_date}}

Si tienes alguna pregunta, no dudes en contactarnos.

Saludos,
Tienda de Camisetas
```

3. En "Settings":
   - To Email: {{customer_email}}
   - From Name: Tienda de Camisetas
   - Reply To: d8t.dev@gmail.com

4. Guarda y copia el **Template ID**

## Paso 4: Obtener la clave pública (Public Key)

1. Ve a "Account" en el menú
2. Copia tu **Public Key**

## Paso 5: Actualizar el código

Abre el archivo `tienda.html` y reemplaza los siguientes valores:

### En la línea 11 (dentro del `<head>`):
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Reemplazar con tu Public Key
```

### En el archivo `tienda.js`, función `submitOrder`:

Línea ~290:
```javascript
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
```
Reemplaza:
- `YOUR_SERVICE_ID` con tu Service ID
- `YOUR_TEMPLATE_ID` con el Template ID del email al administrador

Línea ~300:
```javascript
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_CUSTOMER_TEMPLATE_ID', customerTemplateParams);
```
Reemplaza:
- `YOUR_SERVICE_ID` con tu Service ID (el mismo)
- `YOUR_CUSTOMER_TEMPLATE_ID` con el Template ID del email al cliente

## Ejemplo de configuración completa:

**tienda.html:**
```javascript
emailjs.init("abcd1234efgh5678"); // Tu Public Key
```

**tienda.js:**
```javascript
// Email al administrador
await emailjs.send('service_xyz123', 'template_admin_abc', templateParams);

// Email al cliente
await emailjs.send('service_xyz123', 'template_customer_def', customerTemplateParams);
```

## Límites del plan gratuito

EmailJS ofrece:
- 200 emails por mes gratis
- Sin tarjeta de crédito requerida
- Suficiente para empezar

Si necesitas más, puedes actualizar a un plan de pago.

## Probar la configuración

1. Abre `tienda.html` en tu navegador
2. Añade un producto al carrito
3. Haz clic en "Proceder al Pago"
4. Completa el formulario con tus datos
5. Haz clic en "Confirmar Pedido"
6. Deberías recibir:
   - Un email en d8t.dev@gmail.com con los detalles del pedido
   - Un email de confirmación en el correo que pusiste en el formulario

## Solución de problemas

Si los emails no se envían:
1. Verifica que las claves estén correctamente copiadas
2. Revisa la consola del navegador (F12) para ver errores
3. Asegúrate de que el servicio de email esté activo en EmailJS
4. Verifica que las plantillas tengan los nombres de variables correctos

## Soporte

Para más ayuda, consulta la documentación oficial: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
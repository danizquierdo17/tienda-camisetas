from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Permitir peticiones desde el navegador

# Configuración SMTP de Gmail
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_EMAIL = "d8t.dev@gmail.com"
SMTP_PASSWORD = "zhyn ydes zmch regn"

@app.route('/api/send-order', methods=['POST'])
def send_order():
    try:
        data = request.json
        
        # Extraer datos del pedido
        customer_name = data.get('customer_name')
        customer_email = data.get('customer_email')
        customer_phone = data.get('customer_phone')
        customer_address = data.get('customer_address')
        customer_city = data.get('customer_city')
        customer_postal = data.get('customer_postal')
        customer_notes = data.get('customer_notes', 'Sin notas adicionales')
        order_details = data.get('order_details')
        order_total = data.get('order_total')
        order_date = data.get('order_date')
        
        # Enviar email al administrador
        send_admin_email(
            customer_name, customer_email, customer_phone,
            customer_address, customer_city, customer_postal,
            customer_notes, order_details, order_total, order_date
        )
        
        # Enviar email de confirmación al cliente
        send_customer_email(
            customer_name, customer_email, order_details,
            order_total, order_date
        )
        
        return jsonify({
            'success': True,
            'message': 'Pedido enviado correctamente'
        }), 200
        
    except Exception as e:
        print(f"Error al enviar pedido: {str(e)}")
        return jsonify({
            'success': False,
            'message': f'Error al enviar el pedido: {str(e)}'
        }), 500

def send_admin_email(name, email, phone, address, city, postal, notes, details, total, date):
    """Enviar email al administrador con los detalles del pedido"""
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Nuevo Pedido - {name}'
    msg['From'] = SMTP_EMAIL
    msg['To'] = SMTP_EMAIL
    msg['Reply-To'] = email
    
    # Crear el cuerpo del email en HTML
    html = f"""
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: #667eea; color: white; padding: 20px; text-align: center; }}
            .section {{ background: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; }}
            .section h3 {{ margin-top: 0; color: #667eea; }}
            .detail {{ margin: 8px 0; }}
            .label {{ font-weight: bold; }}
            .total {{ font-size: 20px; font-weight: bold; color: #667eea; margin-top: 15px; }}
            .product {{ background: white; padding: 10px; margin: 10px 0; border-left: 3px solid #667eea; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>⚽ Nuevo Pedido Recibido</h2>
            </div>
            
            <div class="section">
                <h3>📋 Datos del Cliente</h3>
                <div class="detail"><span class="label">Nombre:</span> {name}</div>
                <div class="detail"><span class="label">Email:</span> {email}</div>
                <div class="detail"><span class="label">Teléfono:</span> {phone}</div>
                <div class="detail"><span class="label">Dirección:</span> {address}</div>
                <div class="detail"><span class="label">Ciudad:</span> {city}</div>
                <div class="detail"><span class="label">Código Postal:</span> {postal}</div>
                <div class="detail"><span class="label">Notas:</span> {notes}</div>
            </div>
            
            <div class="section">
                <h3>🛍️ Detalles del Pedido</h3>
                <pre style="white-space: pre-wrap; font-family: Arial;">{details}</pre>
                <div class="total">💰 TOTAL: {total}€</div>
            </div>
            
            <div class="section">
                <div class="detail"><span class="label">📅 Fecha del pedido:</span> {date}</div>
            </div>
        </div>
    </body>
    </html>
    """
    
    part = MIMEText(html, 'html')
    msg.attach(part)
    
    # Enviar email
    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_EMAIL, SMTP_PASSWORD)
        server.send_message(msg)

def send_customer_email(name, email, details, total, date):
    """Enviar email de confirmación al cliente"""
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'Confirmación de Pedido - Tienda de Camisetas'
    msg['From'] = SMTP_EMAIL
    msg['To'] = email
    msg['Reply-To'] = SMTP_EMAIL
    
    # Crear el cuerpo del email en HTML
    html = f"""
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: #667eea; color: white; padding: 20px; text-align: center; }}
            .section {{ background: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; }}
            .section h3 {{ margin-top: 0; color: #667eea; }}
            .total {{ font-size: 20px; font-weight: bold; color: #667eea; margin-top: 15px; }}
            .footer {{ text-align: center; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>⚽ Confirmación de Pedido</h2>
            </div>
            
            <div class="section">
                <p>Hola <strong>{name}</strong>,</p>
                <p>¡Gracias por tu pedido!</p>
                <p>Hemos recibido tu solicitud y estamos procesándola. Te contactaremos pronto para coordinar el pago y envío.</p>
            </div>
            
            <div class="section">
                <h3>📦 Resumen de tu Pedido</h3>
                <pre style="white-space: pre-wrap; font-family: Arial;">{details}</pre>
                <div class="total">💰 TOTAL: {total}€</div>
            </div>
            
            <div class="section">
                <p><strong>📅 Fecha:</strong> {date}</p>
            </div>
            
            <div class="footer">
                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
                <p><strong>Tienda de Camisetas</strong><br>
                Email: d8t.dev@gmail.com</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    part = MIMEText(html, 'html')
    msg.attach(part)
    
    # Enviar email
    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_EMAIL, SMTP_PASSWORD)
        server.send_message(msg)

if __name__ == '__main__':
    import os
    port = int(os.environ.get('FLASK_RUN_PORT', 5001))
    print(f"🚀 Servidor Flask iniciado en http://localhost:{port}")
    print("📧 Configurado para enviar emails desde:", SMTP_EMAIL)
    print("\nPara detener el servidor, presiona Ctrl+C")
    app.run(debug=True, port=port)

# Made with Bob

#!/bin/bash

echo "🚀 Iniciando Tienda de Camisetas..."
echo ""

# Activar entorno virtual
source venv/bin/activate

# Iniciar servidor Flask en segundo plano
echo "📧 Iniciando servidor de emails..."
python3 server.py &
SERVER_PID=$!

# Esperar a que el servidor inicie
sleep 2

# Iniciar servidor web para la tienda
echo "🌐 Iniciando servidor web..."
echo ""
echo "✅ Tienda disponible en: http://localhost:8000/tienda.html"
echo "✅ Servidor de emails en: http://localhost:5000"
echo ""
echo "Presiona Ctrl+C para detener ambos servidores"
echo ""

# Iniciar servidor HTTP
python3 -m http.server 8000

# Cuando se detiene el servidor HTTP, también detener Flask
kill $SERVER_PID

# Made with Bob

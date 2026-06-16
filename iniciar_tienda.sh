#!/bin/bash

echo "🚀 Iniciando Tienda de Camisetas..."
echo ""

# Verificar si el entorno virtual existe
if [ ! -d "venv" ]; then
    echo "⚠️  Entorno virtual no encontrado. Creándolo..."
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
else
    # Activar entorno virtual
    source venv/bin/activate
fi

# Función para limpiar procesos al salir
cleanup() {
    echo ""
    echo "🛑 Deteniendo servidores..."
    if [ ! -z "$SERVER_PID" ]; then
        kill $SERVER_PID 2>/dev/null
    fi
    exit 0
}

trap cleanup SIGINT SIGTERM

# Iniciar servidor Flask en segundo plano con puerto alternativo
echo "📧 Iniciando servidor de emails en puerto 5001..."
FLASK_RUN_PORT=5001 python3 server.py &
SERVER_PID=$!

# Esperar a que el servidor inicie
sleep 2

# Iniciar servidor web para la tienda en puerto alternativo
echo "🌐 Iniciando servidor web en puerto 8001..."
echo ""
echo "✅ Tienda disponible en: http://localhost:8001/tienda.html"
echo "✅ Servidor de emails en: http://localhost:5001"
echo ""
echo "Presiona Ctrl+C para detener ambos servidores"
echo ""

# Iniciar servidor HTTP
python3 -m http.server 8001

# Cuando se detiene el servidor HTTP, también detener Flask
cleanup

# Made with Bob

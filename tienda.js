// Variables globales
let allProducts = [];
let cart = [];
let currentProduct = null;

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadCart();
});

// Extraer tipo de producto del slug del equipo
function getProductType(equipoSlug) {
    // Mapeo de prefijos a tipos de productos
    const typeMap = {
        'chandales': 'Chandal',
        'nacional': 'Camiseta Selección',
        'premier-league': 'Camiseta Premier League',
        'la-liga': 'Camiseta La Liga',
        'serie-a': 'Camiseta Serie A',
        'bundesliga': 'Camiseta Bundesliga',
        'ligue-1': 'Camiseta Ligue 1',
        'nba': 'Camiseta NBA',
        'nfl': 'Camiseta NFL',
        'polo': 'Polo',
        'otro-club': 'Camiseta Club',
        'ninos': 'Niños',
        'retro': 'Retro'
    };
    
    // Buscar el tipo basado en el prefijo del slug
    for (const [prefix, type] of Object.entries(typeMap)) {
        if (equipoSlug.startsWith(prefix)) {
            return type;
        }
    }
    
    return 'Camiseta Fútbol'; // Tipo por defecto
}

// Cargar productos desde el archivo productos.js
function loadProducts() {
    try {
        // Los productos ya vienen con la ruta de imagen correcta desde productos.js
        allProducts = productosData.map(p => ({
            ...p,
            tipo: getProductType(p.equipo)
        }));
        displayProducts(allProducts);
        populateTeamFilter(allProducts);
        populateTypeFilter(allProducts);
        
    } catch (error) {
        console.error('Error cargando productos:', error);
        document.getElementById('products-grid').innerHTML =
            '<div class="loading">Error al cargar los productos. Por favor, recarga la página.</div>';
    }
}

// Mostrar productos en el grid
function displayProducts(products) {
    const grid = document.getElementById('products-grid');
    
    if (products.length === 0) {
        grid.innerHTML = '<div class="no-products">No se encontraron productos</div>';
        return;
    }
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductModal('${product.id}')">
            <img src="${product.imagen}"
                 alt="${product.nombre}"
                 class="product-image"
                 onerror="this.onerror=null; this.src='futbolmodaes_img/placeholder.svg';">
            <div class="product-info">
                <div class="product-name">${product.nombre}</div>
                <div class="product-team">${formatTeamName(product.equipo)}</div>
                <div class="product-price">${product.precio_venta.toFixed(2)}€</div>
            </div>
        </div>
    `).join('');
}

// Formatear nombre del equipo
function formatTeamName(teamSlug) {
    return teamSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Poblar filtro de tipos
function populateTypeFilter(products, selectedValue = '') {
    const types = [...new Set(products.map(p => p.tipo))].sort();
    const select = document.getElementById('type-filter');
    const currentValue = selectedValue || select.value;
    
    // Limpiar opciones excepto la primera
    select.innerHTML = '<option value="">Todos los tipos</option>';
    
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        if (type === currentValue) {
            option.selected = true;
        }
        select.appendChild(option);
    });
}

// Poblar filtro de equipos
function populateTeamFilter(products, selectedValue = '') {
    const teams = [...new Set(products.map(p => p.equipo))].sort();
    const select = document.getElementById('team-filter');
    const currentValue = selectedValue || select.value;
    
    // Limpiar opciones excepto la primera
    select.innerHTML = '<option value="">Todos los equipos</option>';
    
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = formatTeamName(team);
        if (team === currentValue) {
            option.selected = true;
        }
        select.appendChild(option);
    });
}

// Filtrar productos y actualizar filtros dinámicamente
function filterProducts() {
    const typeFilter = document.getElementById('type-filter').value;
    const teamFilter = document.getElementById('team-filter').value;
    const searchText = document.getElementById('search-input').value.toLowerCase();
    
    let filtered = allProducts;
    
    // Aplicar filtros
    if (typeFilter) {
        filtered = filtered.filter(p => p.tipo === typeFilter);
    }
    
    if (teamFilter) {
        filtered = filtered.filter(p => p.equipo === teamFilter);
    }
    
    if (searchText) {
        filtered = filtered.filter(p =>
            p.nombre.toLowerCase().includes(searchText) ||
            p.equipo.toLowerCase().includes(searchText) ||
            p.tipo.toLowerCase().includes(searchText)
        );
    }
    
    // Mostrar productos filtrados
    displayProducts(filtered);
    
    // Actualizar opciones de filtros basándose en productos disponibles
    updateFilterOptions(typeFilter, teamFilter, searchText);
}

// Actualizar opciones de filtros dinámicamente
function updateFilterOptions(currentType, currentTeam, searchText) {
    let availableProducts = allProducts;
    
    // Si hay búsqueda de texto, filtrar primero por eso
    if (searchText) {
        availableProducts = availableProducts.filter(p =>
            p.nombre.toLowerCase().includes(searchText) ||
            p.equipo.toLowerCase().includes(searchText) ||
            p.tipo.toLowerCase().includes(searchText)
        );
    }
    
    // Para el filtro de tipos, solo aplicar el filtro de equipo.
    // No limitar por el tipo actual evita que desaparezca la opción seleccionada.
    if (currentTeam) {
        const productsForTeam = availableProducts.filter(p => p.equipo === currentTeam);
        populateTypeFilter(productsForTeam, currentType);
    } else {
        populateTypeFilter(availableProducts, currentType);
    }
    
    // Para el filtro de equipos, solo aplicar el filtro de tipo.
    // No limitar por el equipo actual evita que el selector se quede "encerrado".
    if (currentType) {
        const productsForType = availableProducts.filter(p => p.tipo === currentType);
        populateTeamFilter(productsForType, currentTeam);
    } else {
        populateTeamFilter(availableProducts, currentTeam);
    }
}

// Abrir modal de producto
function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    document.getElementById('modal-product-name').textContent = product.nombre;
    document.getElementById('modal-product-price').textContent = product.precio_venta.toFixed(2);
    document.getElementById('modal-product-team').textContent = formatTeamName(product.equipo);
    document.getElementById('modal-product-image').src = product.imagen;
    
    // Reset form
    document.getElementById('add-to-cart-form').reset();
    
    document.getElementById('product-modal').style.display = 'block';
}

// Cerrar modal de producto
function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
    currentProduct = null;
}

// Calcular costos adicionales
function calculateExtras(size, name, number, patch) {
    let extras = 0;
    
    // Talla XXL o XXXL: +1.50€
    if (size === 'XXL' || size === 'XXXL') {
        extras += 1.50;
    }
    
    // Nombre o dorsal: +2.50€ (si se proporciona al menos uno)
    if (name || number) {
        extras += 2.50;
    }
    
    // Parches
    if (patch === '2026 Mundial' || patch === 'FairPlay') {
        extras += 1.50;
    } else if (patch === '2026 Mundial+FairPlay') {
        extras += 2.50;
    }
    
    return extras;
}

// Añadir al carrito
function addToCart(event) {
    event.preventDefault();
    
    if (!currentProduct) return;
    
    const size = document.getElementById('size').value;
    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value;
    const patch = document.getElementById('patch').value;
    
    if (!size) {
        alert('Por favor selecciona una talla');
        return;
    }
    
    // Calcular extras
    const extras = calculateExtras(size, name, number, patch);
    const precioFinal = currentProduct.precio_venta + extras;
    
    const cartItem = {
        id: Date.now(),
        productId: currentProduct.id,
        nombre: currentProduct.nombre,
        equipo: currentProduct.equipo,
        precio_base: currentProduct.precio_venta,
        extras: extras,
        precio: precioFinal,
        precio_lista: currentProduct.precio_lista,
        imagen: currentProduct.imagen,
        talla: size,
        nombrePersonalizado: name,
        dorsal: number,
        parche: patch
    };
    
    cart.push(cartItem);
    saveCart();
    updateCartDisplay();
    closeProductModal();
    
    // Mostrar mensaje de éxito
    alert('✅ Producto añadido al carrito');
}

// Actualizar visualización del carrito
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.precio, 0);
    cartTotal.textContent = total.toFixed(2);
    
    cartItems.innerHTML = cart.map(item => {
        const precioBase = item.precio_base || item.precio;
        const extras = item.extras || 0;
        
        return `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nombre}</div>
                <div class="cart-item-details">Talla: ${item.talla}</div>
                ${item.nombrePersonalizado ? `<div class="cart-item-details">Nombre: ${item.nombrePersonalizado}</div>` : ''}
                ${item.dorsal ? `<div class="cart-item-details">Dorsal: ${item.dorsal}</div>` : ''}
                ${item.parche ? `<div class="cart-item-details">Parche: ${item.parche}</div>` : ''}
                <div class="cart-item-price-breakdown">
                    <div class="price-base">Precio base: ${precioBase.toFixed(2)}€</div>
                    ${extras > 0 ? `<div class="price-extras">Extras: +${extras.toFixed(2)}€</div>` : ''}
                    <div class="price-total"><strong>Total: ${item.precio.toFixed(2)}€</strong></div>
                </div>
            </div>
            <button class="btn-remove" onclick="removeFromCart(${item.id})">Eliminar</button>
        </div>
        `;
    }).join('');
}

// Eliminar del carrito
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartDisplay();
}

// Vaciar carrito
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        cart = [];
        saveCart();
        updateCartDisplay();
    }
}

// Toggle carrito
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        updateCartDisplay();
    }
}

// Proceder al pago - Abrir modal de checkout
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Cerrar modal del carrito
    document.getElementById('cart-modal').style.display = 'none';
    
    // Mostrar modal de checkout
    document.getElementById('checkout-modal').style.display = 'block';
    
    // Llenar resumen del pedido
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    
    const total = cart.reduce((sum, item) => sum + item.precio, 0);
    checkoutTotal.textContent = total.toFixed(2);
    
    checkoutItems.innerHTML = cart.map((item, index) => {
        const precioBase = item.precio_base || item.precio;
        const extras = item.extras || 0;
        
        return `
        <div class="checkout-item">
            <div class="checkout-item-name">${index + 1}. ${item.nombre}</div>
            <div class="checkout-item-details"><strong>ID:</strong> ${item.productId}</div>
            <div class="checkout-item-details">Equipo: ${formatTeamName(item.equipo)}</div>
            <div class="checkout-item-details">Talla: ${item.talla}</div>
            ${item.nombrePersonalizado ? `<div class="checkout-item-details">Nombre: ${item.nombrePersonalizado}</div>` : ''}
            ${item.dorsal ? `<div class="checkout-item-details">Dorsal: ${item.dorsal}</div>` : ''}
            ${item.parche ? `<div class="checkout-item-details">Parche: ${item.parche}</div>` : ''}
            ${extras > 0 ? `
                <div class="checkout-item-price-breakdown">
                    <div>Precio base: ${precioBase.toFixed(2)}€</div>
                    <div>Extras: +${extras.toFixed(2)}€</div>
                </div>
            ` : ''}
            <div class="checkout-item-price"><strong>Total: ${item.precio.toFixed(2)}€</strong></div>
        </div>
        `;
    }).join('');
}

// Cerrar modal de checkout
function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Enviar pedido
async function submitOrder(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerAddress = document.getElementById('customer-address').value;
    const customerCity = document.getElementById('customer-city').value;
    const customerPostal = document.getElementById('customer-postal').value;
    const customerNotes = document.getElementById('customer-notes').value;
    
    // Calcular total
    const total = cart.reduce((sum, item) => sum + item.precio, 0);
    
    // Preparar detalles del pedido
    let orderDetails = '';
    cart.forEach((item, index) => {
        orderDetails += `\n${index + 1}. ${item.nombre}`;
        orderDetails += `\n   ID Producto: ${item.productId}`;
        orderDetails += `\n   Equipo: ${formatTeamName(item.equipo)}`;
        orderDetails += `\n   Talla: ${item.talla}`;
        if (item.nombrePersonalizado) orderDetails += `\n   Nombre: ${item.nombrePersonalizado}`;
        if (item.dorsal) orderDetails += `\n   Dorsal: ${item.dorsal}`;
        if (item.parche) orderDetails += `\n   Parche: ${item.parche}`;
        
        // Mostrar desglose de precio si hay extras
        const precioBase = item.precio_base || item.precio;
        const extras = item.extras || 0;
        if (extras > 0) {
            orderDetails += `\n   Precio base: ${precioBase.toFixed(2)}€`;
            orderDetails += `\n   Extras: +${extras.toFixed(2)}€`;
        }
        orderDetails += `\n   Precio total: ${item.precio.toFixed(2)}€\n`;
    });
    
    // Preparar datos para enviar al backend
    const orderData = {
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        customer_address: customerAddress,
        customer_city: customerCity,
        customer_postal: customerPostal,
        customer_notes: customerNotes || 'Sin notas adicionales',
        order_details: orderDetails,
        order_total: total.toFixed(2),
        order_date: new Date().toLocaleString('es-ES')
    };
    
    try {
        // Deshabilitar botón de envío
        const submitBtn = event.target.querySelector('.btn-submit-order');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando pedido...';
        
        // Enviar pedido al backend Flask
        const response = await fetch('http://localhost:5001/api/send-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            // Mostrar mensaje de éxito
            alert('✅ ¡Pedido enviado con éxito!\n\nRecibirás un email de confirmación en breve.\nNos pondremos en contacto contigo para coordinar el pago y envío.');
            
            // Limpiar carrito y cerrar modal
            cart = [];
            saveCart();
            updateCartDisplay();
            closeCheckout();
            
            // Resetear formulario
            document.getElementById('checkout-form').reset();
        } else {
            throw new Error(result.message || 'Error al enviar el pedido');
        }
        
    } catch (error) {
        console.error('Error al enviar el pedido:', error);
        alert('❌ Error al enviar el pedido. Por favor, asegúrate de que el servidor está ejecutándose (python3 server.py) o contacta con nosotros directamente.');
        
        // Rehabilitar botón
        const submitBtn = event.target.querySelector('.btn-submit-order');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirmar Pedido';
    }
}

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cargar carrito desde localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Cerrar modales al hacer clic fuera
window.onclick = function(event) {
    const productModal = document.getElementById('product-modal');
    const cartModal = document.getElementById('cart-modal');
    
    if (event.target === productModal) {
        closeProductModal();
    }
    if (event.target === cartModal) {
        toggleCart();
    }
}

// Made with Bob

console.log('Atencón!!: Si la proporcón horizontal de la pantalla cambia la página será recargada');
var windowWidth = window.innerWidth;
setInterval(() => {
    let windowWidthChecker = window.innerWidth;
    if(windowWidth != windowWidthChecker) {
        location.reload();
    }
}, 1000);

const cartItemsContainer = document.querySelector('#cartItemsContainer');
const cartBuyButton = document.querySelector('#shopping-cart-buy');
cartItemsContainer.innerHTML = localStorage.getItem('cartStorage');


// cartStorage
// Botón de eliminar item
var itemDeleteButtons = document.querySelectorAll('.btn-delete')
    itemDeleteButtons.forEach((itemDeleteButton) => {
      itemDeleteButton.addEventListener('click', itemDeleteButtonClicked);  
})

// Botón de aumentar cantidad
var moreValueInput = document.querySelectorAll('.moreValueInput');
moreValueInput.forEach((button) => {
    button.addEventListener('click', moreValueInputClicked);
});

// Botón de disminuir cantidad
var lessValueInput = document.querySelectorAll('.lessValueInput');
lessValueInput.forEach((button) => {
    button.addEventListener('click', lessValueInputClicked);
})

// Texto de carrito vacío
let cartItems = document.querySelectorAll('.shoppingCartItem');
var nothingPart = document.querySelector('#cartNothingPart');
if (cartItems.length == 0) {
    nothingPart.innerHTML = `<h2>No hay nada en su carrito.</h2>`;
    cartItemsContainer.style.marginTop = '0'
} else if (cartItems.length > 0) {
    nothingPart.innerHTML = '';
    cartItemsContainer.style.marginTop = '25px';
}

// Slider del carrito
const cartArrows = document.querySelector('#cartArrows');
if (cartItems.length > 3) {
    cartArrows.style.display = 'flex';
} else if (cartItems.length <= 3) {
    cartArrows.style.display = 'none';
}

// Contador de items
let cartItemCounter = document.querySelector('#cartItemCounter');
cartItemCounter.innerHTML = `Items: ${cartItems.length}`;

// Total del carrito
const firstTotalText = document.querySelector('#shopping-cart-total');
const firstCartItems = document.querySelectorAll('.shoppingCartItem');

let firstTotal = 0;

if (firstCartItems.length == 0) {
    firstTotalText.innerHTML = '$0';
} else {
    cartItems.forEach((cartItem) => {
        const firstCartItemPrice = cartItem.querySelector('.shopping-cart-item-price');
        const firstCartItemPriceRepaired = Number(firstCartItemPrice.textContent.replace("$", ""));

        const firstCartItemQuantity = cartItem.querySelector('.shopping-cart-quantity-input');
        const firstCartItemQuantityRepaired = Number(firstCartItemQuantity.value);

        firstTotal += firstCartItemPriceRepaired * firstCartItemQuantityRepaired;
        firstTotalText.innerHTML = `$${firstTotal.toFixed(0)}`;
    });
}

// Burbuja del carrito
const cartBubble = document.querySelector('#cartBubble');
if (cartItems.length == 0) {
    cartBubble.style.display = 'none';
    cartBubble.style.opacity = '0';
} else if (cartItems.length > 0) {
    cartBubble.style.display = 'block';
    setTimeout(() => {
        cartBubble.style.opacity = '1'; 
     }, 100);
    
}
//

// Actualizar el carrito
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.shoppingCartItem');

    const totalText = document.querySelector('#shopping-cart-total');
    let total = 0;

    if (cartItems.length == 0) {
        totalText.innerHTML = '$0';
    } else {
        cartItems.forEach((cartItem) => {
            const cartItemPrice = cartItem.querySelector('.shopping-cart-item-price');
            const cartItemPriceRepaired = Number(cartItemPrice.textContent.replace("$", ""));

            const cartItemQuantity = cartItem.querySelector('.shopping-cart-quantity-input');
            const cartItemQuantityRepaired = Number(cartItemQuantity.value);

            total += cartItemPriceRepaired * cartItemQuantityRepaired;
            totalText.innerHTML = `$${total.toFixed(0)}`;
        });
    }

    // Actualizar funciones //   


    localStorage.setItem('cartStorage', cartItemsContainer.innerHTML);

    // Texto carrito vacío
    if (cartItems.length == 0) {
        nothingPart.innerHTML = `<h2>No hay nada en su carrito.</h2>`;
        cartItemsContainer.style.marginTop = '0';
    } else if (cartItems.length > 0) {
        nothingPart.innerHTML = '';
        cartItemsContainer.style.marginTop = '25px';
    }    

    // Actualizar slide items carrito
    if (cartItems.length > 3) {
        cartArrows.style.display = 'flex';
    } else if (cartItems.length <= 3) {
        cartArrows.style.display = 'none';
    }

    // Actualizar los botones de eliminar item
    var itemDeleteButtons = document.querySelectorAll('.btn-delete')
    itemDeleteButtons.forEach((itemDeleteButton) => {
      itemDeleteButton.addEventListener('click', itemDeleteButtonClicked);  
    })
    
    // Actualizar burbuja del carrito
    if (cartItems.length == 0) {
        cartBubble.style.opacity = '0';
        setTimeout(() => {
            cartBubble.style.display = 'none';
        }, 200);
        
    } else if (cartItems.length > 0) {
        cartBubble.style.display = 'block';
        setTimeout(() => {
           cartBubble.style.opacity = '1'; 
        }, 100);
        
    }

    // Contador de items
    cartItemCounter = document.querySelector('#cartItemCounter');
    cartItemCounter.innerHTML = `Items: ${cartItems.length}`;

    // Actualizar botones del contador de los items
    var moreValueInput = document.querySelectorAll('.moreValueInput');
    moreValueInput.forEach((button) => {
        button.addEventListener('click', moreValueInputClicked);
    });

    var lessValueInput = document.querySelectorAll('.lessValueInput');
    lessValueInput.forEach((button) => {
        button.addEventListener('click', lessValueInputClicked);
    })
}

// Eliminar item carrito
function itemDeleteButtonClicked(event) {
    const button = event.target;
    const item = button.closest('.shoppingCartItem').parentElement;

    item.remove();
    updateCartTotal();
}

// Aumentar cantidad item
function moreValueInputClicked(event) {
    const button = event.target;
    const item = button.closest('.shoppingCartItem');
    const input = item.querySelector('.shopping-cart-quantity-input');

    if (input.value < 10) {
        input.value++;
        
    } else {
        input.value = 10;
    };
    
    input.parentElement.innerHTML = `<input class="shopping-cart-quantity-input" readonly="" type="number" value="${input.value}">`;
    updateCartTotal();
}

// Disminuir cantidad item
function lessValueInputClicked(event) {
    const button = event.target;
    const item = button.closest('.shoppingCartItem');
    const input = item.querySelector('.shopping-cart-quantity-input');

    if (input.value > 1) {
        input.value--;
        
    } else {
        input.value = 1;
    };

    input.parentElement.innerHTML = `<input class="shopping-cart-quantity-input" readonly="" type="number" value="${input.value}">`;

    updateCartTotal();
}

// Abrir carrito
const cartButton = document.querySelector('#cartButtonContainer');
cartButton.addEventListener('click', cartButtonClicked);

function cartButtonClicked() {
    cartButton.removeEventListener('click', cartButtonClicked);
    const cart = document.querySelector('#cart');
    let visualWidth = window.outerWidth;

    if (visualWidth <= 620) {
        const cartItems = document.querySelectorAll('.shoppingCartItem');
        if (cartItems.length == 0) {
            alert('Por favor seleccione un producto.');
        } else if (cartItems.length >= 1) {
            const pathname = window.location.pathname;
            const pathnameChecker = pathname.includes('products');
            if (pathnameChecker == true) {
                window.open("../mobileCart.html", "_self")
            } else {
                window.open("./mobileCart.html", "_self");
            }
        }
            
    } else if (visualWidth > 620) {
        if (cart.style.animationName == 'cartClose') {
            cart.style.animationName = 'cartOpen';
        } else if (cart.style.animationName == 'cartOpen') {
            cart.style.animationName = 'cartClose';
        } else {
            cart.style.animationName = 'cartOpen';
        }
    }

    setTimeout(function() {
        cartButton.addEventListener('click', cartButtonClicked);
    }, 1000); 
    
}

const cartCloser = document.querySelector('#closeCart');
cartCloser.addEventListener('click', cartCloserClicked);

function cartCloserClicked() {
    cartButton.removeEventListener('click', cartButtonClicked);
    const cart = document.querySelector('#cart');

    cart.style.animationName = 'cartClose';

    setTimeout(function() {
        cartButton.addEventListener('click', cartButtonClicked);
    }, 1000);
}

// Slide items carrito
const mostrarMas = document.querySelector('#mostrarMas');
const mostrarMenos = document.querySelector('#mostrarMenos');

mostrarMas.addEventListener('click', mostrarMasClicked);
mostrarMenos.addEventListener('click', mostrarMenosClicked);

function mostrarMasClicked() {
    mostrarMas.removeEventListener('click', mostrarMasClicked);
    cartItemsContainer.scrollTop += 79;
    setTimeout(() => {
        mostrarMas.addEventListener('click', mostrarMasClicked);
    }, 250);
};

function mostrarMenosClicked() {
    mostrarMenos.removeEventListener('click', mostrarMenosClicked);
    cartItemsContainer.scrollTop -= 79;
    setTimeout(() => {
        mostrarMenos.addEventListener('click', mostrarMenosClicked);
    }, 250);
};

// Comprar
cartBuyButton.addEventListener('click', cartBuyButtonClicked);

function cartBuyButtonClicked() {
    const cartItems = document.querySelectorAll('.shoppingCartItem');

    if (cartItems.length == 0) {
        alert('Por favor, seleccione un producto.')
    } else {
        cartItemsContainer.innerHTML = '';
        updateCartTotal();
        setTimeout(() => {
            alert('Su pedido llegará pronto.')
        }, 200);
    }
    
}
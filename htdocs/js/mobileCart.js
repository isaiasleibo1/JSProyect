// Carrito telefono //

const cartMain = document.querySelector('#cartMain');
cartMain.innerHTML = localStorage.getItem('cartStorage');

setInterval(() => {
    let windowWidthChecker2 = window.innerWidth;
    if(windowWidthChecker2 > 620) {
        window.open(".", "_self");
    }
}, 500);

// Comprueba si hay algún item y si no te redirecciona
const cartItemsLengthChecker = setInterval(() => {
    const cartItems2 = document.querySelectorAll('.shoppingCartItem');
    if (cartItems2.length <= 0) {
        window.open(".", "_self");
    }
}, 1000);

// Elementos precargados del carrito para cuando se carga la página
setTimeout(() => {
    // Eliminar item
    const itemDeleteButtons = document.querySelectorAll('.btn-delete');
    itemDeleteButtons.forEach((itemDeleteButton) => {
        itemDeleteButton.addEventListener('click', itemDeleteButtonClicked);  
    })

    // Aumentar y disminuir cantidad
    const moreValueInput = document.querySelectorAll('.moreValueInput');
    moreValueInput.forEach((button) => {
        button.addEventListener('click', moreValueInputClicked);
    });

    var lessValueInput = document.querySelectorAll('.lessValueInput');
    lessValueInput.forEach((button) => {
        button.addEventListener('click', lessValueInputClicked);
    });
}, 50);

// Total
setTimeout(() => {
    const firstTotalText = document.querySelector('#shopping-cart-total');
    const firstCartItems = document.querySelectorAll('.shoppingCartItem');

    let firstTotal = 0;

    if (firstCartItems.length == 0) {
        firstTotalText.innerHTML = '$0';
    } else {
        firstCartItems.forEach((cartItem) => {
            const firstCartItemPrice = cartItem.querySelector('.shopping-cart-item-price');
            const firstCartItemPriceRepaired = Number(firstCartItemPrice.textContent.replace("$", "").replace(".", ""));

            const firstCartItemQuantity = cartItem.querySelector('.shopping-cart-quantity-input');
            const firstCartItemQuantityRepaired = Number(firstCartItemQuantity.value);

            firstTotal += firstCartItemPriceRepaired * firstCartItemQuantityRepaired;
            firstTotalText.innerHTML = `$${firstTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        });
    }
}, 50);
//

// Función para eliminar item
function itemDeleteButtonClicked(event) {
    const button = event.target;
    console.log(button)
    const item = button.closest('.shoppingCartItem').parentElement;

    item.remove();
    
    const cartItems = document.querySelectorAll('.shoppingCartItem');
    
    if (cartItems.length == 0) {
        setTimeout(() => {
            window.open(".", "_self");
        }, 100)
    }
    
    updateCartTotal();
}

// Función para aumentar y disminuir cantidad
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

// Actualizar carrito
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.shoppingCartItem');

    // Total
    const totalText = document.querySelector('#shopping-cart-total');
    let total = 0;

    if (cartItems.length == 0) {
        totalText.innerHTML = '$0';
    } else {
        cartItems.forEach((cartItem) => {
            const cartItemPrice = cartItem.querySelector('.shopping-cart-item-price');
            const cartItemPriceRepaired = Number(cartItemPrice.textContent.replace("$", "").replace(".", ""));

            const cartItemQuantity = cartItem.querySelector('.shopping-cart-quantity-input');
            const cartItemQuantityRepaired = Number(cartItemQuantity.value);

            total += cartItemPriceRepaired * cartItemQuantityRepaired;
            totalText.innerHTML = `$${total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        });
    }

    // Añadir carrito al localStorage
    localStorage.setItem('cartStorage', cartMain.innerHTML);
}

// Función para comprar
const cartBuyButton = document.querySelector('#buyButton');
cartBuyButton.addEventListener('click', cartBuyButtonClicked);

function cartBuyButtonClicked() {
    const cartItems = document.querySelectorAll('.shoppingCartItem');

    if (cartItems.length == 0) {
        window.open(".", "_self");
    } else {
        const cartBuyDiv = document.querySelector('#cartBuy');
        cartBuyDiv.style.display = 'block';
        setTimeout(() => {
            cartBuyDiv.style.opacity = '1';
        }, 20) 
    } 
}
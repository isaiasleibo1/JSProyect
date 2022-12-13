const cartMain = document.querySelector('#cartMain');
cartMain.innerHTML = localStorage.getItem('cartStorage');

// cartStorage
// Botón de eliminar item
setTimeout(() => {
    const itemDeleteButtons = document.querySelectorAll('.btn-delete');
    itemDeleteButtons.forEach((itemDeleteButton) => {
        itemDeleteButton.addEventListener('click', itemDeleteButtonClicked);  
    })

    const moreValueInput = document.querySelectorAll('.moreValueInput');
    moreValueInput.forEach((button) => {
        button.addEventListener('click', moreValueInputClicked);
    });

    var lessValueInput = document.querySelectorAll('.lessValueInput');
    lessValueInput.forEach((button) => {
        button.addEventListener('click', lessValueInputClicked);
    });
}, 50);

    

// Botón de aumentar cantidad

// Botón de disminuir cantidad


// Total del carrito
setTimeout(() => {
    const firstTotalText = document.querySelector('#shopping-cart-total');
    const firstCartItems = document.querySelectorAll('.shoppingCartItem');

    let firstTotal = 0;

    if (firstCartItems.length == 0) {
        firstTotalText.innerHTML = '$0';
    } else {
        firstCartItems.forEach((cartItem) => {
            const firstCartItemPrice = cartItem.querySelector('.shopping-cart-item-price');
            const firstCartItemPriceRepaired = Number(firstCartItemPrice.textContent.replace("$", ""));

            const firstCartItemQuantity = cartItem.querySelector('.shopping-cart-quantity-input');
            const firstCartItemQuantityRepaired = Number(firstCartItemQuantity.value);

            firstTotal += firstCartItemPriceRepaired * firstCartItemQuantityRepaired;
            firstTotalText.innerHTML = `$${firstTotal.toFixed(0)}`;
        });
    }
}, 50);


function itemDeleteButtonClicked(event) {
    const button = event.target;
    console.log(button)
    const item = button.closest('.shoppingCartItem').parentElement;

    item.remove();
    updateCartTotal();
}

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

    localStorage.setItem('cartStorage', cartMain.innerHTML);
}
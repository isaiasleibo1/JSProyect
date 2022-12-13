const itemToCartButtons = document.querySelectorAll('.item-button-cart');
const cartItemsContainer = document.querySelector('#cartItemsContainer');
const cartBuyButton = document.querySelector('#shopping-cart-buy');


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


// Total del carrito
setTimeout(() => {
    const firstTotalText = document.querySelector('#shopping-cart-total');
    const firstCartItems = document.querySelectorAll('.shoppingCartItem');
    console.log("🚀 ~ file: mobileCart.js:29 ~ firstCartItems", firstCartItems)

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
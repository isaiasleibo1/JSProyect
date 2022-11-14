const itemToCartButtons = document.querySelectorAll('.item-button-cart');
const cartItemsContainer = document.querySelector('#cartItemsContainer');
const cartBuyButton = document.querySelector('#shopping-cart-buy');

itemToCartButtons.forEach((itemToCartButton) => {
    itemToCartButton.addEventListener('click', itemToCartButtonClicked);
});

function itemToCartButtonClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-img').src;

    addItemToCart(itemTitle, itemPrice, itemImage);
}

function addItemToCart(itemTitle, itemPrice, itemImage) {
    const cartElementsTitle = cartItemsContainer.getElementsByClassName('shopping-cart-item-title');
    for (let i = 0; i < cartElementsTitle.length; i++) {
        if (cartElementsTitle[i].innerText === itemTitle) {
            let cartElementQuantity = cartElementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shopping-cart-quantity-input');

            if (cartElementQuantity.value < 10) {
                cartElementQuantity.value++;
            }
            
            updateCartTotal();
            return;
        }
    }


    const createElement = document.createElement('div');
    const elementContent = `
    <div class="shoppingCartItem">
        <img src=${itemImage} class="shopping-cart-image">
        <div>
            <h3 class="shopping-cart-item-title">${itemTitle}</h3>
        </div>
        <div class="price">
            <p class="shopping-cart-item-price">${itemPrice}</p>
        </div>
        <div class="input-container">
            <input class="shopping-cart-quantity-input" readonly type="number" value="1">
        </div>
        <div>
            <div class="moreValueInput">
                <i class="fa fa-plus fa-2xs" aria-hidden="true"></i>
            </div>
            <div class="lessValueInput">
                <i class="fa fa-minus fa-2xs" aria-hidden="true"></i>
            </div>
        </div>
        <div>
            <button class="btn-delete" type="button"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>`;

      createElement.innerHTML = elementContent;
      cartItemsContainer.append(createElement);

      const itemDeleteButton = createElement.querySelector('.btn-delete');
      const moreValueInput = createElement.querySelector('.moreValueInput');
      const lessValueInput = createElement.querySelector('.lessValueInput');

      itemDeleteButton.addEventListener('click', itemDeleteButtonClicked);
      moreValueInput.addEventListener('click', moreValueInputClicked);
      lessValueInput.addEventListener('click', lessValueInputClicked);
      updateCartTotal();
}

function updateCartTotal() {
    const totalText = document.querySelector('#shopping-cart-total');
    let total = 0;

    const cartItems = document.querySelectorAll('.shoppingCartItem');

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
    const nothingPart = document.querySelector('#cartNothingPart');
    if (cartItems.length == 0) {
        nothingPart.innerHTML = `<h2>No hay nada en su carrito.</h2>`;
    } else if (cartItems.length > 0) {
        nothingPart.innerHTML = '';
    }

    const cartArrows = document.querySelector('#cartArrows');

    if (cartItems.length > 3) {
        cartArrows.style.display = 'flex';
    } else if (cartItems.length <= 3) {
        cartArrows.style.display = 'none';
    }

    const cartBubble = document.querySelector('#cartBubble');
    if (cartItems.length == 0) {
        cartBubble.style.display = 'none';
    } else if (cartItems.length > 0) {
        cartBubble.style.display = 'block';
    }

    const cartItemCounter = document.querySelector('#cartItemCounter');
    cartItemCounter.innerHTML = `Items: ${cartItems.length}`;
}

function itemDeleteButtonClicked(event) {
    const button = event.target;
    const item = button.closest('.shoppingCartItem');

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

    updateCartTotal();
}

const cartButton = document.querySelector('#cartButton');
cartButton.addEventListener('click', cartButtonClicked);

function cartButtonClicked() {
    cartButton.removeEventListener('click', cartButtonClicked);
    const cart = document.querySelector('#cart');

    if (cart.style.animationName == 'cartClose') {
        cart.style.animationName = 'cartOpen';
    } else if (cart.style.animationName == 'cartOpen') {
        cart.style.animationName = 'cartClose';
    } else {
        cart.style.animationName = 'cartOpen';
    }

    setTimeout(function() {
        cartButton.addEventListener('click', cartButtonClicked);
    }, 1000); 
    
}

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
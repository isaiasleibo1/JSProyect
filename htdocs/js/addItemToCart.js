// Botón para añadir alcarrito
const itemToCartButton = document.querySelector('#addToCart');
itemToCartButton.addEventListener('click', itemToCartButtonClicked);

// Funcion para cuando se clickea el boton de añadir al carrito
function itemToCartButtonClicked(event) {
    const button = event.target;
    const item = button.closest('main');

    const itemObject = {
        itemTitle: item.querySelector('#itemTitle').textContent,
        itemPrice: item.querySelector('#itemPrice').textContent,
        itemImage: item.querySelector('.item-img').src
    };

    addItemToCart(itemObject.itemTitle, itemObject.itemPrice, itemObject.itemImage);
}

// Funcion para añadir item al carrito
function addItemToCart(itemTitle, itemPrice, itemImage) {

    // Comprueba si el elemento ya existe dentro del carrito
    let cartElementsTitle = cartItemsContainer.getElementsByClassName('shopping-cart-item-title');
    for (let i = 0; i < cartElementsTitle.length; i++) {    
        if (cartElementsTitle[i].innerText === itemTitle) {
            let cartElementQuantity = cartElementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shopping-cart-quantity-input');

            if (cartElementQuantity.value < 10) {
                cartElementQuantity.value++;
            }
                
            // Aumenta la cantidad si el elemento ya existe
            cartElementQuantity.parentElement.innerHTML = `<input class="shopping-cart-quantity-input" readonly="" type="number" value="${cartElementQuantity.value}">`;
            
            updateCartTotal();
            return;
        }
    }

    // Crea el elemento dentro del carrito
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

    updateCartTotal();

    alertModified('Su producto se ha añadido correctamente.');
}
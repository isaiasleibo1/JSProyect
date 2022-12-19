const itemToCartButton = document.querySelector('#addToCart');

itemToCartButton.addEventListener('click', itemToCartButtonClicked);

function itemToCartButtonClicked(event) {
    const button = event.target;
    const item = button.closest('main');

    const itemTitle = item.querySelector('#itemTitle').textContent;
    const itemPrice = item.querySelector('#itemPrice').textContent;
    const itemImage = item.querySelector('.item-img').src;

    addItemToCart(itemTitle, itemPrice, itemImage);
}

function addItemToCart(itemTitle, itemPrice, itemImage) {
    let cartElementsTitle = cartItemsContainer.getElementsByClassName('shopping-cart-item-title');

    for (let i = 0; i < cartElementsTitle.length; i++) {
        if (cartElementsTitle[i].innerText === itemTitle) {
            let cartElementQuantity = cartElementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shopping-cart-quantity-input');

            if (cartElementQuantity.value < 10) {
                cartElementQuantity.value++;
            }
                
            cartElementQuantity.parentElement.innerHTML = `<input class="shopping-cart-quantity-input" readonly="" type="number" value="${cartElementQuantity.value}">`;
            
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

    const cartAlert = document.querySelector('#cartAlert');
    setTimeout(() => {
        if(window.scrollY == 0) {
            cartAlert.style.top = '40px';
        } else if (window.scrollY < 40) {
            cartAlert.style.top = `calc(40px - ${window.scrollY}px)`;
        } else {
            cartAlert.style.top = '0px';
        }

        cartAlert.style.opacity = 1;
        cartAlert.innerHTML = '<p>Su producto se ha añadido correctamente.</p>'

        setTimeout(() => {
            cartAlert.style.opacity = 0;
        }, 2000)
    }, 50);


    createElement.innerHTML = elementContent;
    cartItemsContainer.append(createElement);

    const itemDeleteButton = createElement.querySelector('.btn-delete');
      
    updateCartTotal();
}
const cardDivCloser = document.querySelector('#cartBuyCloser');
cardDivCloser.addEventListener('click', cardDivCloserClicked);
const cartBuyDiv = document.querySelector('#cartBuy');

function cardDivCloserClicked() {
    cartBuyDiv.style.opacity = '0';
    setTimeout(() => {
        cartBuyDiv.style.display = 'none';
    }, 200)
}

setInterval(() => {
    const cartItems = document.querySelectorAll('.shoppingCartItem');
    if (cartItems.length == 0) {
        cartBuyDiv.style.opacity = '0';
    setTimeout(() => {
        cartBuyDiv.style.display = 'none';
    }, 200)
    }
}, 500)

const cardSubmit = document.querySelector('#cardSubmit');
cardSubmit.addEventListener('click', cardSubmitClicked);

function cardSubmitClicked() {

    const cardNumber = document.querySelector('#cardNumber');
    const cardOwner = document.querySelector('#cardOwner');
    const cardExpiration = document.querySelector('#cardExpiration');
    const cardCVC = document.querySelector('#cardCVC');

    if (cardNumber.value != "" && cardOwner.value != "" && cardExpiration.value != "" && cardCVC.value != "") {
        cartBuyDiv.style.opacity = '0';
        
        if (typeof cartItemsContainer == 'undefined') {
            cartMain.innerHTML = '';
        } else {
            cartItemsContainer.innerHTML = '';
        }


        updateCartTotal();
        setTimeout(() => {
            cartBuyDiv.style.display = 'none';
        }, 200)

        if (cartItemsLengthChecker) {
            clearInterval(cartItemsLengthChecker);
        } 
            
        alertModified('Su pedido llegara pronto!!');

        setTimeout(() => {
            const pathname = window.location.pathname;

            if (pathname.includes('products') || pathname.includes('error')) {
                window.open("..", "_self");
            } else {
                window.open(".", "_self");
            }
        }, 2400)
    };
}
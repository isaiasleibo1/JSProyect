let alert1IsRunning = false;
let alert2IsRunning = false;

function alertModified(string) {
    console.log(string);
    const alert1 = (string == 'Por favor, seleccione un producto.' || 'Su pedido llegara pronto!!');
    const alert2 = (string == 'Su producto se ha añadido correctamente.');
    let cartAlert; 

    if (alert1) {
        if (alert1IsRunning) {return};
        cartAlert = document.querySelector('#cartAlert1');
        alert1IsRunning = true;
    } else if (alert2) {
        if (alert2IsRunning) {return};
        cartAlert = document.querySelector('#cartAlert2');
        alert2IsRunning = true;
    } 

        setTimeout(() => {

            cartAlert.style.display = 'block';

            setTimeout(() => {
                cartAlert.style.opacity = 1;
                cartAlert.innerHTML = `<p>${string}</p>`
            }, 10);

            const intervalFunction = setInterval(() => {
                if(window.scrollY >= 40) {
                    cartAlert.style.top = '0';
                    cartAlert.style.position = 'fixed';
                } else {
                    if(window.innerWidth >= 620) {
                        cartAlert.style.top = '50px';
                    } else {
                        cartAlert.style.top = '40px';
                    }
                    cartAlert.style.position = 'absolute';
                }
            }, 20);

            timeoutID = setTimeout(() => {
                cartAlert.style.opacity = 0;
                
                setTimeout(() => {
                    if (alert1) {
                        alert1IsRunning = false;
                    } else if (alert2) {
                        alert2IsRunning = false;
                    }

                    cartAlert.style.display = 'none';
                }, 200)
                
                clearInterval(intervalFunction);
            }, 2000)
        }, 10);
}
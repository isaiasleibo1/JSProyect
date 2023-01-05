function alertModified(string) {
    console.log(string);
    
    const alert1 = (string == 'Por favor, seleccione un producto.');
    const alert2 = (string == 'Su producto se ha añadido correctamente.');
    let cartAlert; 

    if (alert1) {
        cartAlert = document.querySelector('#cartAlert1');
    } else if (alert2) {
        cartAlert = document.querySelector('#cartAlert2');
    } else {
        console.log(new Error('No hay un alert'));
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
                    cartAlert.style.display = 'none';
                }, 200)
                
                clearInterval(intervalFunction);
            }, 2000)
        }, 10);
}
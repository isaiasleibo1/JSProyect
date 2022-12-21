function alertModified(string) {
    const cartAlert = document.querySelector('#cartAlert');
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

            setTimeout(() => {
                cartAlert.style.opacity = 0;
                
                setTimeout(() => {
                    cartAlert.style.display = 'none';
                }, 200)
                
                clearInterval(intervalFunction);
            }, 2000)
        }, 10);
}
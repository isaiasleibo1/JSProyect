const mobileMenuOpener = document.querySelector('.mobileMenuOpener');
const mobileMenuCloser = document.querySelector('.mobileMenuCloser');
mobileMenuOpener.addEventListener('click', mobileMenuOpenerClicked);

function mobileMenuOpenerClicked() {
    
    mobileMenuOpener.style.opacity = '0';

    setTimeout(() => {
        mobileMenuOpener.style.display = 'none';
        mobileMenuCloser.style.display = 'inline';

        setTimeout(() => {
            mobileMenuCloser.style.opacity = '1';
        }, 50);
        
    }, 200)
    
}
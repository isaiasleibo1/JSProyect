// Script del menu header para celular
const mobileMenuOpener = document.querySelector('.mobileMenuOpener');
const mobileMenuCloser = document.querySelector('.mobileMenuCloser');
const mobileMenu = document.querySelector('#mobileMenu');
mobileMenuOpener.addEventListener('click', mobileMenuOpenerClicked);
mobileMenuOpener.addEventListener('click', openMobileMenu);
mobileMenuCloser.addEventListener('click', mobileMenuCloserClicked);
mobileMenuCloser.addEventListener('click', closeMobileMenu);
const body = document.querySelector('body'); 


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

function mobileMenuCloserClicked() {

    mobileMenuCloser.style.opacity = '0';
    mobileMenuOpener.style.opacity = '0';

    setTimeout(() => {
        mobileMenuCloser.style.display = 'none';
        mobileMenuOpener.style.display = 'inline';

        setTimeout(() => {
            mobileMenuOpener.style.opacity = '1';
        }, 50);
        
    }, 200)
}

function openMobileMenu() {
    mobileMenu.style.animationName = 'mobileMenuOpen';
    
}

function closeMobileMenu() {
    mobileMenu.style.animationName = 'mobileMenuClose';
}
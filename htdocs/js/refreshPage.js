// Esta script recarga la página si el width de la pantalla cambia
console.log('Atencón!!: Si la proporcón horizontal de la pantalla cambia la página será recargada.');
console.log('Esto lo hacemos para evitar errores, disculpe las molestias.');

window.addEventListener('resize', () => {
    location.reload();
})
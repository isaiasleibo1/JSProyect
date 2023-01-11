## Abrir el proyecto
El proyecto debe abrirse en [Mi dominio](https://mastershop.gq) alojado en InfinityFree.
Ya que debido al uso del [mod_rewrite] no funciona en un servidor local a menos que lo tengas instalado. 
Si igualmente querés probarlo localmente deberías usar la extensión [Five server] en vez de [Live server] y abrir el proyecto directamente desde la carpeta "htdocs" (ya que si no tira errores).

## Que es mi proyecto
Mi proyecto es una tienda de tecnología online llamada [MasterShop] con un carrito de compras, la pagina tiene un total de 24 productos y cada uno tiene su página independiente.

## Optimización
El proyecto está optimizado para que tenga la carga más rápida posible, el tamaño y el tipo de las imagenes están echos para que ocupen el menor espacio posible, y si una imagen no está en la pantalla no se cargará hasta que aparezca **Esto lo hago usando la propiedad loading="lazy"**.

## Errores
En [Mi dominio](https://mastershop.gq) tengo coniguradas 5 páginas de errores en el caso de que el servidor esté fallando o la solicitud del usuario sea erronea **Lo tengo en la carpeta ./htdocs/error/**. Estos errores son: 400, 401, 403, 404 y 503. **Podés probarlo poniendo en el navegador (https://mastershop.gq/prueba/)**

## Contacto
La página de contacto es funcional, no funciona con js ni con otro lenguaje. Actualmente estoy usando [Formspree] el cual me envía el formulario a mi [Email](isaias@leibovich.ar). 

Espero que disfruten la página.
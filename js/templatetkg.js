'use strict';
//Funcion que se encargara de generar el menu de navegacion
function makeNav() {
    var nav = document.getElementById("navegacion");
    nav.innerHTML = '<ul>' +
    '<a href="index.html"><li>Home</li></a>' +
    '<a href="juegos.html"><li>¿Qué Jugamos?</li></a>' +
    '<a href="contacto.html"><li class="liright">Contacto</li></a>' +             
    '</ul>';
}
//Funcion que se encargara de generar el pie de pagina
function makeFooter() {
    var footer = document.getElementById("piedepagina");
    footer.innerHTML =
    '<small>© CopyRight 2018. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países. No afiliados con ninguna organización religiosa.</small>';
}

window.addEventListener("load", makeNav);
window.addEventListener("load", makeFooter);

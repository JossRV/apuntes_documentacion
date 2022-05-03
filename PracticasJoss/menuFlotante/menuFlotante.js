// $(document).ready(function(){
    const menu_desplegable = document.querySelector('.menu_desplegable');
    const navegacion = document.querySelector('.navegacion');

    menu_desplegable.onclick = function(){
        navegacion.classList.toggle('active');
    }
// });
const boton = document.querySelector('#boton_dark');
const presentacion = document.querySelector('#presentacion');
const proyectos = document.querySelector('#proyectos');
const conocimientos = document.querySelector('#conocimientos');

boton.addEventListener('click', e =>{
    presentacion.classList.toggle('dark')
})

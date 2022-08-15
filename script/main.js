const boton = document.querySelector('#boton_dark');
const presentacion = document.querySelector('#presentacion');
const proyectos = document.querySelector('#proyectos');
const conocimientos = document.querySelector('#conocimientos');
const cuerpo = document.querySelector('body')


boton.addEventListener('click', e =>{
    presentacion.classList.toggle('dark')
    proyectos.classList.toggle('dark')
    conocimientos.classList.toggle('dark')
    body.classList.toggle('change')
})

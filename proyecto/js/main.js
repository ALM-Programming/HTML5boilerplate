const botonVerContenido = document.getElementById('ver-contenido')
const botonVerHome = document.getElementById('ver-home')
const botonVerEstilos = document.getElementById('ver-estilos')
const botonVerAtributos = document.getElementById('ver-atributos')

botonVerContenido.addEventListener('click', () => {
    window.location.href ='./contenidoHTML.html'
})
botonVerHome.addEventListener('click', () => {
    window.location.href ='./index.html'
})
botonVerEstilos.addEventListener('click', () => {
    window.location.href ='./estilosCSS.html'
})
botonVerAtributos.addEventListener('click', () => {
    window.location.href ='./atributosHTML.html'
})
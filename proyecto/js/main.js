const botonVerContenido = document.getElementById('ver-contenido')
const botonVerHome = document.getElementById('ver-home')
const botonVerEstilos = document.getElementById('ver-estilos')
const botonVerAtributos = document.getElementById('ver-atributos')

const botonDeshacer = document.getElementById('botonDeshacer')

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


botonDeshacer.addEventListener('click', () => {
    parrafoContenido.textContent = 'Texto que se va a modificar con JS.'
    parrafoContenido.style.color = '#000000'
    parrafoContenido.style.border = 'none'
})
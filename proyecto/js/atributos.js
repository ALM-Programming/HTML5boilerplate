const parrafoContenido = document.querySelector('p')
const botonAtributos = document.getElementById('botonAtributos')
const botonDeshacer3 = document.getElementById('botonDeshacer3')

botonAtributos.addEventListener('click', () => {
    parrafoContenido.style.border = '1px solid black'
})

botonDeshacer3.addEventListener('click', () => {
    parrafoContenido.textContent = 'Texto que se va a modificar con JS.'
    parrafoContenido.style.color = '#000000'
    parrafoContenido.style.border = 'none'
})
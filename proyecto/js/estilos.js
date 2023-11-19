const parrafoContenido = document.querySelector('p')
const botonEstilos = document.getElementById('botonEstilos')
const botonDeshacer2 = document.getElementById('botonDeshacer2')

botonEstilos.addEventListener('click', () => {
    parrafoContenido.style.color = '#ff0000'
})

botonDeshacer2.addEventListener('click', () => {
    parrafoContenido.textContent = 'Texto que se va a modificar con JS.'
    parrafoContenido.style.color = '#000000'
    parrafoContenido.style.border = 'none'
})
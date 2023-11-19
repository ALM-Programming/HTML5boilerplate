const parrafoContenido = document.querySelector('p')
const botonContenido = document.getElementById('botonContenido')
const botonDeshacer1 = document.getElementById('botonDeshacer1')

botonContenido.addEventListener('click', () => {
    parrafoContenido.textContent = 'El texto ha sido modificado.'
})

botonDeshacer1.addEventListener('click', () => {
    parrafoContenido.textContent = 'Texto que se va a modificar con JS.'
    parrafoContenido.style.color = '#000000'
    parrafoContenido.style.border = 'none'
})

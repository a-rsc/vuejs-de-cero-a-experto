const filename = '-------------file: 02-template-literal.js'
console.log(filename)

const nombre = 'Tony'
const apellido = 'Stark'

// Dentro de $() se coloca una expresión de javascript
const nombreApellido = `${nombre} ${apellido}`

console.log(nombreApellido)
console.log(`Suma: ${1 + 1}`)

function getSaludo(nombre) {
    return `Hola ${nombre}`
}

console.log(`Este es un texto: ${getSaludo(nombreApellido)}`)

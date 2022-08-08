const filename = '-------------file: 05-functions.js'
console.log(filename)

function saludar(palabra){
    return `Hola ${palabra}`
}

console.log(saludar)
console.log(saludar())
console.log(saludar('Tony'))

// MEJOR MANERA +++++++++++++++++++++++++++++++++++++++++
// Asignación a una variable (función anónima)
const saludo = function(palabra){
    return `Hola ${palabra}`
}
// más común de definir funciones, así evitamos asignar por error la constante o variable saludo
// saludo = true
console.log(saludo('Tony'))

// Funciones de FLECHA
// const hola = (palabra) => { return `Hola ${palabra}`}
// const hola = (palabra) => `Hola ${palabra}` // una única sentencia
const hola = palabra => `Hola ${palabra}` // un único argumento, una única sentencia. En caso de tener más argumentos, los paréntesis son obligatorios
// const hola = (palabra = 'Peter') => `Hola ${palabra}` // un único argumento, una única sentencia. En caso de tener más argumentos, los paréntesis son obligatorios

console.log(hola('Tony'))

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Tony Stark'
//     }
// }
const getUser = () => ({uid: 'ABC123', username: 'Tony Stark'}) // De este modo no se confunde el cuerpo de una función

console.log(getUser())

let ids = 0

// Ejercicio
const heroes = [
    {
        id: ++ids,
        name: 'Batman'
    },
    {
        id: ++ids,
        name: 'Superman'
    },
    {
        id: ++ids,
        name: 'Ironman'
    },
    {
        id: ++ids,
        name: 'Ironman'
    },
]

// existe algun heroe con el id igual a 2
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const existe = heroes.some((heroe, index, array) => {
    return index === 0 && heroe.name === 'Batman' && array.length === 4
})
// const existe = heroes.some(heroe => heroe.id === 2)
console.log('exite: ', existe) // me devuelve un boleano

// encuentra algun heroe con el id igual a 2
const heroe = heroes.find(heroe => heroe.id === 2)
console.log('heroe: ', heroe) // me devuelve el objeto

// encuentra algun heroe con el id igual a 2
const ironmans = heroes.filter(heroe => heroe.name === 'Ironman')
console.log('ironmans: ', ironmans) // me devuelve el objeto

// encuentra algun heroe con el id igual a 2 DESESTRUCTURADO
const {id, name} = heroes.find(heroe => heroe.id === 2)
console.log('id, name: ', id, name) // me devuelve el id y el name

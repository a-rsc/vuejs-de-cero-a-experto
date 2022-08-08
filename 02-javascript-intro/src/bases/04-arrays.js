const filename = '-------------file: 04-arrays.js'
console.log(filename)

const array = [1, 2, 3, 4]

console.log(array)

array.push(5) // no error - utilizamos métodos del prototipo de los arreglos
// array = [1, 2, 3, 4, 5] // error - pq reasignamos una constante

const array2 = array

array2.push(6)

// Los objetos son pasados por referencia, no por valor
console.log(array)
console.log(array2)

// Utilizamos el operador SPREAD (otra ubicación en memoria - ROMPE la REFERENCIA)
const array3 = [...array]

array3.push(7)

console.log(array)
console.log(array2)
console.log(array3)

// Métodos dentro del objeto array que ROMPE la REFERENCIA
const array4 = array3.map(function(n) {
    return 2*n
})

console.log(array)
console.log(array2)
console.log(array3)
console.log(array4)

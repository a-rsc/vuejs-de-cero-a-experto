/*
No se usa -> var (ya que puede leerse en cualquier parte del código)
Mejor no terminar en punto y coma ; (recomendaciones de Vue.js)
Si NO se cambia el valor, mejor utilizar const y javascript busca scope por scope la variable citada...
*/

const filename = '-------------file: 01-const-let.js'
console.log(filename)

const nombre = 'Tony'
const apellido = 'Stark'

if (true) {
    const nombre = 'Peter'
    const apellido = 'Parker'
}

console.log(nombre, apellido) // muestra Tony Stark

// ------------------------------------------

let nombre2 = 'Tony'
let apellido2 = 'Stark'

if (true) {
    nombre2 = 'Peter'
    apellido2 = 'Parker'
}

console.log(nombre2, apellido2) // muestra Peter Parker

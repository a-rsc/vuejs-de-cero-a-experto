const filename = '-------------file: 03-objects.js'
console.log(filename)

const birthDay = '1978-02-15'
console.log(Date.now(), new Date(birthDay), new Date(birthDay).getTime())
const diff = Date.now() - new Date(birthDay).getTime()
const age = new Date(diff)
console.log(diff, age)

// Objeto literal
let persona = {
    name: 'Tony',
    surname: 'Stark',
    age: Math.abs(age.getUTCFullYear()-1970),
    address: {
        city: 'Nueva York',
        zip: 23423,
        lat: 14.343243,
        lng: 34.234234
    }
}
// Los objetos son pasados por REFERENCIA, no por valor

let persona2 = persona

persona2.name = 'Peter'
persona2.surname = 'Parker'

console.log('##por referencia: Persona', persona) // Se ha modificado el name (por referencia) -> sólo se memoriza el espacio en memoria
console.log('Persona2', persona2)

// Utilizamos el operador SPREAD (otra ubicación en memoria - ROMPE la REFERENCIA)
// SPREAD: esparce las propiedades
persona2 = {...persona}

persona2.name = 'Bruce'
persona2.surname = 'Wayne'

console.log('##otra ubicación en memoria: Persona', persona)
console.log('Persona2', persona2)

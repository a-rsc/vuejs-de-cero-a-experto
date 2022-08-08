const filename = '-------------file: 09a-promesas.js'
console.log(filename)

console.log('Inicio')

// Recibe un callback
// Tanto el resolve como el reject son funciones
new Promise((resolve, reject) => {
    // El cuerpo de la promesa se ejecuta inmediatamente, pero la resolución se ejecuta en otro hilo (en una pila diferente de callbacks) para que
    // cuando termina el proceso principal llama a las promesas resueltas/rechazadas y las va a llamar en el mismo orden...
    console.log('Cuerpo de la promesa')
    // Puedo resolver tantas variables como quiera
    resolve('Promesa resuelta')
    reject({err: 'Promesa con error', code: 2})
})
.then(msg => console.log(`then: ${msg}`)) // función de flecha - callback
.catch(({err, code}) => console.log(`catch: ${err} con código ${code}`)) // función de flecha - callback
// .catch(console.log) // se podía haber escrito así, ya que se trata de un callback

// Si no programase el then o el catch la consola mostraría un error de 'promesa no atrapada', no se trataría de un error de javascript

console.log('Fin')
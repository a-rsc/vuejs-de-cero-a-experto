const filename = '-------------file: 12a-async-await.js'
console.log(filename)

// MY INTERESANTE

const myPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa')
        }, 1000)
    })
}

/*
console.log('Inicio')

myPromise().then(console.log)

console.log('Fin')
 */

// -----------------------------------------------------------------

// async: hace que la función devuelva una promesa
const medirTiempoAsync = async() => {
    console.log('Inicio')

    // await myPromise()
    // .then(console.log)
    // .catch(console.log)

    myPromise()
    .then(console.log)
    .catch(console.log)

    console.log('Fin')

    // return 'Fin de medir tiempo async'
    throw 'Error en medirTiempoAsync'
}

medirTiempoAsync()
    .then(valor => console.log(valor))
    .catch(err => console.log('error: ', err))

const filename = '-------------file: 10-fetch.js'
console.log(filename)

import apiKey from '../data/giphy'

// Docs / endpoints
// https://api.giphy.com/v1/gifs/random?api_key=rihfh0Ahb71UXMpBSUK4YacwaGqehz4W

// función propia
// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//     .then(console.log)
//     .catch(console.log)
// .then(resp => {
//         console.log(resp)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// .then(resp => {
//     console.log(resp.body) // ReadableStrem {locked: false} // Sólo se puede leer una vez
// })
// .catch(err => {
//     console.log(err)
// })

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// .then(resp => {
//     // console.log(resp.json()) // Serializamos la respuesta con el método json (Promise)

//     // Como es una promesa debería hacer
//     resp.json().then(resp => console.log(resp))
// })
// .catch(err => {
//     console.log(err)
// })

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// .then(resp => {
//     resp.json().then(resp => console.log(resp)) // data
// })
// .catch(err => {
//     console.log(err)
// })

// mismo resultado anterior
// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// .then(resp => resp.json()) // return
// .then(img => {
//     console.log(img)
// })
// .catch(err => {
//     console.log(err)
// })

// Desestructurado
// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// .then(resp => resp.json()) // return
// .then(({data}) => {
//     // console.log(data)
//     const {url} = data.images.original

//     console.log(url)
//     const img = document.createElement('img')
//     img.src = url

//     document.body.append(img)
// })
// .catch(err => {
//     console.log(err)
// })

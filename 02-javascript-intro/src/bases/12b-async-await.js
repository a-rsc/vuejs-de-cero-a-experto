const filename = '-------------file: 12b-async-await.js'
console.log(filename)

import giphyApi from "../bases/11-axios"

console.log('Inicio')

const getImage = async() => {

    // El await permite obtener el valor de la promesa de forma síncrona pero del mismo hilo

    try {
        // const {data} = await giphyApi.get('/random')
        // const {url} = data.data.images.original
        const {data} = (await giphyApi.get('/random')).data

        console.log('Fin 1')

        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)

        console.log(`url: ${url}`)
        // throw 'Error en getImage'
    } catch (error) {
        console.log('Error en la petición', error)
        throw error
    }
}

getImage()
.then(res => console.log('res: '))
.catch(err => console.log('err: ', err))

console.log('Fin 2')

const filename = '-------------file: 11-axios.js'
// console.log(filename)

// Paquete utilizado para realizar peticiones http
// https://www.npmjs.com/package/axios
// npm i axios

import axios from 'axios'

import apiKey from '../data/giphy'
// `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

// Creamos una instancia si tenemos que realizar distintas peticiones
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

// lección 12b
export default giphyApi

// Comentado para realizar la lección 12b
// giphyApi.get('/random')
//     .then(({data}) => {
//         // viene parseado o serializado
//         // console.log(resp.data.data)
//         const {url} = data.data.images.original

//         console.log(url)
//         const img = document.createElement('img')
//         img.src = url

//         document.body.append(img)
//     })
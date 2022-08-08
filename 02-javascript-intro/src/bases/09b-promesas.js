const filename = '-------------file: 09b-promesas.js'
console.log(filename)

import { getHeroById } from "../bases/08a-imp-exp"

const getHeroByIdAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id)

            if (heroe) {
                resolve(heroe)
            } else {
                reject(`¡Heroe no existe! - ${id}`)
            }
        // }, 0)
        }, 2000)
    })
}

// Returns a random integer from 0 to 9:
const heroe = Math.floor(Math.random() * 10)
getHeroByIdAsync(heroe)
    .then(heroe => console.log(`El heroe es: ${heroe.name} - ${heroe.id}`))
    .catch(console.log)


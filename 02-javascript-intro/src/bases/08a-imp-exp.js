const filename = '-------------file: 08a-imp-exp.js'
console.log(filename)

// No se puede importar nada que antes no haya sido explícitamente exportado (ruta relativa)
// Cuando trabajamos con importaciones y exportaciones, el archivo se ejecuta. Si tuviésemos un console.log() antes de la variable owners en el archivo heroes.js se ejecutaría...
import {heroes, owners} from '../data/heroes' // Cuando trabajemos con vue tendremos la @

console.log(heroes, owners)

const [dc, marvel] = owners

console.log(dc)
console.log(marvel)

// En la exportación por defecto, la importación puede llamarse de cualquier modo
import names from '../data/heroes'

console.log(names)

// tarea video: exportar funciones

// funciones de flecha
// getHeroById(id)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
export const getHeroById = (identificador) => heroes.find(heroe => heroe.id == identificador)

console.log(getHeroById(2)) // {Spiderman}

// getHeroesByOwner(owner)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner == owner)

console.log(getHeroesByOwner('DC')) // [{'Batman'}, {'Superman'}, {'Flash'}]
console.log(getHeroesByOwner('Marvel')) // [{'Spiderman'}, {'Wolverine'}]

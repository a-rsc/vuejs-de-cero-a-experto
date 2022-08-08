const filename = '-------------file: 08b-imp-exp.js'
console.log(filename)

import {getHeroById, getHeroesByOwner} from './08a-imp-exp'

console.log(getHeroById(2)) // {Spiderman}
console.log(getHeroesByOwner('DC')) // [{'Batman'}, {'Superman'}, {'Flash'}]
console.log(getHeroesByOwner('Marvel')) // [{'Batman'}, {'Superman'}, {'Flash'}]
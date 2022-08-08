const filename = '-------------file: 07-desestructuracion-arrays.js'
console.log(filename)

const characters = ['Goku', 'Vegeta', 'Trunks']

const g = characters[0]
const v = characters[1]
const t = characters[2]

console.log(g, v, t)

const [a, b, c] = characters

console.log(a, b, c)

// Sólo quiero tomar el 3 elemento
const [,, trunks] = characters

console.log(trunks)

const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()

console.log(letters, numbers)

// Es diferente el concepto
const returnArray2 = (arr) => {
    return [arr[0], arr[1]]
}

const [pos1, pos2] = returnArray2(['alvaro', 'rodriguez'])

console.log(pos1, pos2)

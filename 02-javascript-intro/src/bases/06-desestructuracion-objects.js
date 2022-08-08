const filename = '-------------file: 06-desestructuracion-objects.js'
console.log(filename)

const person = {
    firstname: 'Tony',
    surname: 'Stark',
    age: 45,
    codeName: 'Ironman',
    power: 23
}

console.log(person.firstname)
console.log(person.surname)
console.log(person.age)
console.log(person.codeName)

const {firstname, surname, age, codeName, power = 97, defense1, defense2 = 100} = person

console.log(firstname)
console.log(surname)
console.log(age)
console.log(codeName)
console.log(power)
console.log(defense1)
console.log(defense2)

// opción 1
// const createHero = (person) => {

//     const {firstname, surname, age, codeName, power = 97, fire} = person

//     return {
//         id: 2342342,
//         firstname: firstname,
//         surname: surname,
//         age: age,
//         codeName: codeName,
//         power: power,
//         fire: fire
//     }
// }

// opción 2
// const createHero = ({firstname, surname, age, codeName, power = 97, fire}) => {

//     return {
//         id: 2342342,
//         firstname,
//         surname,
//         age,
//         codeName,
//         power,
//         fire
//     }
// }

// opción 3
const createHero = ({firstname, surname, age, codeName, power = 97, fire}) => ({
    id: 2342342,
    firstname,
    surname,
    age,
    codeName,
    power,
    fire
})

console.log(createHero(person))

// Se observa en el archivo original que existen funciones no exportadas, entonces las // import getPokemonOptions from '@/helpers/getPokemonOptions'

// A continuación realizamos las exportaciones de las funciones del archivo
// La exportación por defecto va fuera de las llaves
import getPokemonOptions, {getPokemons, getPokemonNames} from '@/helpers/getPokemonOptions'

// Exportamos las funciones en src/helpers/getPokemonNames.js
// npm run test:unit getPokemonOptions
describe('getPokemonOptions helpers', () => {
    // la función it es muy parecida
    test('debe de regresar un array de numeros', () => {
        // verificar que el array tiene la longitud
        const pokemons = getPokemons() // 1r ejecutamos la función

        expect(pokemons.length).toBe(650) // su tamaño es el correcto

        expect(pokemons[0]).toBe(1)
        expect(pokemons[100]).toBe(101)
        expect(pokemons[200]).toBe(201)
        expect(pokemons[300]).toBe(301)
        expect(pokemons[400]).toBe(401)
        expect(pokemons[500]).toBe(501)
        // ...
        // expect(pokemons[649]).toBe(0) // la prueba falla
    })

    test('debe de retornar un array de 4 elementos con nombres de pokemons', async() => {

        // const pokemons = getPokemonNames([1, 2, 3, 4])
        // console.log(pokemons) // Promise {<pending>}

        // Si añadimos el async y el await se espera a ejectuar la promesa
        const pokemons = await getPokemonNames([1, 2, 3, 4]) // Ahora sí tenemos el array de los primeros 4 pokemons
        // console.log(pokemons)

        // La lógica es correcta, pero cuando tenemos un objeto en JS y lo comparamos con otro objeto, a pesar de que sean iguales como apuntan a distintos valores de memoria
        // La prueba es la siguiente, si ejecutamos por consola:
        // const a = {}
        // const b = {}
        // a===b devuelve false
        // expect(pokemons).toBe([{name: 'Bulbasaur', id: 1}, {name: 'Ivysaur', id: 2}, {name: 'Venusaur', id: 3}, {name: 'Charmander', id: 4}, ])
        expect(pokemons).toStrictEqual([
            {name: 'Bulbasaur', id: 1},
            {name: 'Ivysaur', id: 2},
            {name: 'Venusaur', id: 3},
            {name: 'Charmander', id: 4}
        ]) // Es correcto


    })

    test('getPokemonOptions debe de retornar un array mezclado', async() => {
        const pokemons = await getPokemonOptions()

        // console.log(pokemons) // aparece un listado de 4 pokemons aleatorios

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)}
        ])
    })
})

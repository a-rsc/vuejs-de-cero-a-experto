import pokemonApi from '@/api/pokemonApi' // src

// esta función crea el array
export const getPokemons = () => {
    // numero de pokemons en la api - https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/649.svg
    // const pokemonArray = Array(650) // crea un array - cada una de las posiciones empty
    const pokemonArray = Array.from(Array(650)) // crea un array a partir de Array(650) - cada una de las posiciones undefined

    return pokemonArray.map((value, index) => index + 1) // (_, index) _ se refiere a la primera posición que no se utiliza (value)
} // se realiza la exportación - para el test

const getPokemonOptions = async() => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5) // mezcla aleatoria
    // return mixedPokemons;

    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4)) // se obtienen los nombres de los cuatro primeros elementos

    // console.table(pokemons)

    return pokemons
} // no se realiza la exportación, por que es la exportación por defecto

// recibo un array llamado pokemons y construye los nombres
// const getPokemonNames = (pokemons = []) => {
//     return pokemons
// }
// desestructurado
export const getPokemonNames = async([a, b, c, d] = []) => {
    // utilizamos la api https://pokeapi.co para añadir nombres de diferentes pokemons
    // return [a, b, c, d]

    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp.data.name, resp.data.id)

    const promiseArray = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    // const respuestas = await Promise.all(promiseArray)
    // console.log(respuestas);

    const [p1, p2, p3, p4] = await Promise.all(promiseArray)

    return [
        {name: p1.data.name.charAt(0).toUpperCase() + p1.data.name.slice(1).toLowerCase(), id: p1.data.id},
        {name: p2.data.name.charAt(0).toUpperCase() + p2.data.name.slice(1).toLowerCase(), id: p2.data.id},
        {name: p3.data.name.charAt(0).toUpperCase() + p3.data.name.slice(1).toLowerCase(), id: p3.data.id},
        {name: p4.data.name.charAt(0).toUpperCase() + p4.data.name.slice(1).toLowerCase(), id: p4.data.id},
    ]
} // se realiza la exportación - para el test

export default getPokemonOptions
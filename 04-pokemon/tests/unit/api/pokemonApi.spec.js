import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {
    // la función it es muy parecida
    // npm run test:unit getPokemonOptions
    test('axios debe de estar configurado con el api de pokemon', () => {
        // console.log(pokemonApi) // instancia de axios en nuestro pokemonApi
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})

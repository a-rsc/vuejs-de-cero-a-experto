import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import {pokemons} from '../mocks/pokemons.mock'

// npm run test:unit /PokemonOptions
describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                // pokemons: pokemons // ECMAScript6
                pokemons
            }
        })
    })

    // la función it es muy parecida
    test('Debe de hacer match con el snapshot', () => {
        // console.log(wrapper.html()) // vemos lo que se está renderizando
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrar las 4 opciones correctamente', () => {
        // que existan 4 li
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)

        // cada li debe de tener su nombre del pokemon
        expect(liTags[0].text()).toBe('Bulbasaur')
        expect(liTags[1].text()).toBe('Ivysaur')
        expect(liTags[2].text()).toBe('Venusaur')
        expect(liTags[3].text()).toBe('Charmander')
    })

    test('Debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        // console.log(wrapper.emitted('selectionPokemon'))
        expect(wrapper.emitted('selectionPokemon').length).toBe([1]) // el evento se emitió una vez
        // expect(wrapper.emitted(selectionPokemon)[0]).toBe(1)
        // [] === [] // false
        // {} === {} // false

        expect(wrapper.emitted(selectionPokemon)[0]).toEqual([1])
    })

})

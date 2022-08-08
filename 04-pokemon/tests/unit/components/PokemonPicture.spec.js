import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture Component', () => {

    // No hacemos match con el beforeEach porque cada una de estas pruebas tiene props diferentes
    beforeEach(() => {
    })

    // la función it es muy parecida
    test('Debe de hacer match con el snapshot', () => {

        // No sé por qué da error
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        }) // aplicación que corre independientemente

        console.log(wrapper.html())
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrar la imagen oculta y el pokemon 100', () => {

        // No sé por qué da error
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        }) // aplicación que corre independientemente
        expect(wrapper.html()).toMatchSnapshot()

        const [img1, img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)

        // console.log(img1.classes())
        expect(img1.classes('hidden-pokemon')).toBeTruthy()

        // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg

        // console.log(img1.attributes())
        // https://vue-test-utils.vuejs.org/api/wrapper/attributes.html
        expect(img1.attributes('src')).toBeTruthy('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg')
    })

    test('Debe de mostrar el pokemon si showPokemon:true', () => {
        // No sé por qué da error
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        }) // aplicación que corre independientemente
        expect(wrapper.html()).toMatchSnapshot()

        // const [img1, img2] = wrapper.findAll('img')

        // expect(img1).toBe(undefined)
        // expect(img2.exists()).toBeTruthy()

        // // console.log(img1.classes())
        // expects(img2.classes('hidden-pokemon')).toBe(false)

        const img1 = wrapper.find('img')

        expect(img1.exists()).toBeTruthy()

        expect(img1.classes('hidden-pokemon')).toBe(false)
        expect(img1.classes('fade-in')).toBeTruthy()

    })
})

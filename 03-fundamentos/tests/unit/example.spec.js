import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Example Component', () => {

  // la función it es muy parecida
  test('Debe de ser mayor a 10', () => {

    // AAAA
    // Arreglar
    let value = 5

    // Estímulo
    value = value + 2

/*
    // Aserción
    if (value > 10) {
      // TODO: todo bien!
    } else {
      // Las excepciones son consideradas como pruebas fallidas!
      throw `${value} no es mayor a 10`
    }
 */

    // Aserción
    expect(value).toBeGreaterThan(10);
  })



})
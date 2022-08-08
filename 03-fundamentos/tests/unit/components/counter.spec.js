// npm run test:unit counter
// Ha aparecido una carpeta __snapshots___
// Si cambiamos se producirá un error

// Si el cambio es nuevo -> npm run test:unit -u counter

// mount -> monta todo el componente
// shallowMount -> parecido pero menos algunas propiedades y funciones...
// import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

// Material adjunto
// https://jestjs.io/docs/setup-teardown
describe('Counter Component', () => {
/*
  // la función it es muy parecida
  test('Debe de hacer match con el snapshot', () => {

    // AAAA
    // Arreglar
    const wrapper = shallowMount(Counter)

    // Estímulo

    // Aserción
    expect( wrapper.html() ).toMatchSnapshot()
  })
*/

  // let wrapper;

  // beforeEach(() => {
  //   wrapper = shallowMount(Counter) // aplicación que corre independientemente
  // })

  test('h3 debe contener "Counter - valor por defecto"', () => {

    const wrapper = shallowMount(Counter) // aplicación que corre independientemente

    expect(wrapper.find('h3').exists()).toBeTruthy()

    const h3 = wrapper.find('h3')

    // console.log(h3.text())

    expect(h3.text()).toBe('Counter - valor por defecto')
  })

  test('el valor por defecto debe de ser 100 en el p', () => {
/*
    const wrapper = shallowMount(Counter) // aplicación que corre independientemente

    const pTags = wrapper.findAll('p')

    // console.log(pTags[1].text())

    expect(pTags[1].text()).toBe('100')

*/
  })

  test('el elemento title debe contener "Counter - valor por defecto"', () => {

    const wrapper = shallowMount(Counter) // aplicación que corre independientemente

    const h3 = wrapper.find('[data-testid="title"]')

    expect(h3.text()).toBe('Counter - valor por defecto')
  })

  // Hay que esperar que el DOM se actualice, necesitamos el async y await
  test('debe de incrementar y decrementar el contador', async() => {

    const wrapper = shallowMount(Counter) // aplicación que corre independientemente

    const buttons = wrapper.findAll('button')

    // Hay que esperar que el DOM se actualice
    await buttons[0].trigger('click') // +1

    let value = wrapper.find('[data-testid="counter"]')

    expect(value.text()).toBe('31')

    // Hay que esperar que el DOM se actualice
    await buttons[1].trigger('click') // -1
    await buttons[1].trigger('click') // -1

    expect(value.text()).toBe('29')
  })

  // Hay que esperar que el DOM se actualice, necesitamos el async y await
  test('debe de incrementar y decrementar el contador', async() => {

    const wrapper = shallowMount(Counter) // aplicación que corre independientemente

    const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

    // Hay que esperar que el DOM se actualice
    await increaseBtn.trigger('click') // +1
    await increaseBtn.trigger('click') // +1
    await decreaseBtn.trigger('click') // -1
    await decreaseBtn.trigger('click') // -1
    await decreaseBtn.trigger('click') // -1

    const value = wrapper.find('[data-testid="counter"]').text()

    expect(value).toBe('29')
  })

  test('debe de establecer el valor por defecto', () => {

    const wrapper = shallowMount(Counter) // aplicación que corre independientemente

    // console.log(wrapper.props())
    // const {start} = wrapper.props()
    // console.log(start)

    const start = wrapper.props('start')
    // console.log(typeof start)

    const value = wrapper.find('[data-testid="counter"]').text()

    // Comprobación de tipos
    expect(Number(value)).toBe(start)
  })

  test('debe de mostrar la prop title', () => {

    const title = 'Hola mundo!!!!!'

    const wrapper = shallowMount(Counter, {
      props: {
        title: title
      }
    })

    expect(wrapper.find('h3').text()).toBe(`Counter - ${title}`)
  })
})
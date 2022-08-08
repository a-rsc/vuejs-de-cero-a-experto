// npm run test:unit indecision
// Ha aparecido una carpeta __snapshots___
// Si cambiamos se producirá un error

// Si el cambio es nuevo -> npm run test:unit -u indecision

// mount -> monta todo el componente de pruebas
// shallowMount -> parecido pero menos algunas propiedades y funciones...
// import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import App from '@/App'

describe('App Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(App) // aplicación que corre independientemente
    })

    // la función it es muy parecida
    test('Debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })
})

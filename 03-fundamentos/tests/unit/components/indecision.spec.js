// npm run test:unit indecision
// Ha aparecido una carpeta __snapshots___
// Si cambiamos se producirá un error

// Si el cambio es nuevo -> npm run test:unit -u indecision

// mount -> monta todo el componente de pruebas
// shallowMount -> parecido pero menos algunas propiedades y funciones...
// import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

/*
    Cuando realizamos pruebas el código del componente literalmente es ejecutado. Es decir, cuando ejecutemos la función getAnswer la prueba va a lanzar la petición fetch físicamente. Lo que sucede es que como trabajamos en el lado de pruebas y éstas corren al lado de node, node no cuenta con el fetch API. Entonces, se disparará un error con lo cual deberemos hacer un tipo de simulación (MOCK) para simular la petición fetch...
    Se recomienda que cualquier iteracción con un endpoint sea mediante un MOCK... si tenemos límites de consumo, cada vez que disparamos las pruebas consumimos la cuota...
*/

// Material adjunto
// https://jestjs.io/docs/setup-teardown
describe('Indecision Component', () => {

    let wrapper;
    let clgSpy; // estan pendientes de cualquier suceso

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif'
        })
    }) )

    beforeEach(() => {
        wrapper = shallowMount(Indecision) // aplicación que corre independientemente

        clgSpy = jest.spyOn(console, 'log') // Mock
        jest.clearAllMocks()
    })

    // la función it es muy parecida
    test('Debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.log)', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo') // cuando ejecutemos las pruebas veremos { value: 'Hola Mundo' }

        // Es muy parecido
        expect(clgSpy).toHaveBeenCalled()
        // expect(clgSpy).toHaveBeenCalledTimes(2)

        // Es muy parecido
        expect(getAnswerSpy).not.toHaveBeenCalled()
        // expect(getAnswerSpy).toHaveReturnedTimes(0)
    })

    test('Escribir el símbolo de (?) debe dispara el getAnswer', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?') // cuando ejecutemos las pruebas veremos { value: 'Hola Mundo?' }

        // Es muy parecido
        expect(clgSpy).toHaveBeenCalled()
        // expect(clgSpy).toHaveBeenCalledTimes(2)

        // Es muy parecido
        expect(getAnswerSpy).toHaveBeenCalled()
        // expect(getAnswerSpy).toHaveReturnedTimes(0)
    })

    test('Pruebas en getAnswer()', async() => {

        await wrapper.vm.getAnswer()

        // console.log(wrapper.vm.img)
        // console.log(wrapper.vm.answer)

        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif')
        expect(wrapper.vm.answer).toBe('Sí!')
    })

    test('Pruebas en getAnswer() - fallo en el API', async() => {

        fetch.mockImplementationOnce(() => Promise.reject('API is down!'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API!')
    })

})

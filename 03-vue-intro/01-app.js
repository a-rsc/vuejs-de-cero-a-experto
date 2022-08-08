// console.log(Vue)

// Creamos nuestra aplicación de VueJs
const app = Vue.createApp({
    template: `
        <h1 style="color: red;">Hola Mundo!</h1>
        <p><b>Expresión matemática:</b> {{ 1 + 2 }}</p>
        <p><b>Concatenación:</b> {{ '1' + '1' }}</p>
        <p>{{ [1, 2, 3, 4, 5] }}</p>
        <p>Transformativa nativa a un json: {{ {a: 1, b: 2} }} Javascript o VueJs lo transforma a un json de forma nativa</p>
        <p>{{ [{}, {}, []] }}</p>
        <p>{{ /* if (true) 'Activo' */ }} Dentro de esta representación declarativa hay expresiones javascript que no funcionan como if, for, while...</p>
        <p>{{ !true ? 'Activo' : 'Inactivo' }} -> En cambio un ternario sí que lo acepta...</p>
        <p>{{ undefined }}</p>
        <p>{{ null }}</p>
    `
})

app.mount('#app')

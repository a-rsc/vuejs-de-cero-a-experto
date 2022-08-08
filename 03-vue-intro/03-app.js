// console.log(Vue)

// Creamos nuestra aplicación de VueJs

// Tenemos diferentes opciones:
// 1.
// Diferentes elementos: template, data, methods, watch... (options api)

// 2.
// También está el setup (composition api)
const app = Vue.createApp({
    data() {
        // Este objeto es reactivo y sus propiedades también
        return {
            message: 'Hola mundo!',
            quote: 'I\'m Batman!',
            author: 'Bruce Wayne',
            count: 0
        }
    },
    methods: {
        changeQuote() {
            this.quote = `Sí, padre. Me convertiré en murciélago.`

            this.capitalize()
            console.log(event)
        },
        changeQuote2(event) {
            console.log(event)
        },
        capitalize() {
            this.author = this.author.toUpperCase()
        }
    },
    watch: {
        quote(val, oldVal) {
            console.log(`new: ${val}, old: ${oldVal}`)
        },
        count(val, oldVal) {
            console.log(`new: ${val}, old: ${oldVal}`)
        },
    },
})

app.mount('#app')
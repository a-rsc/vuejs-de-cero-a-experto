// console.log(Vue)
const example = 'example'

const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

console.log(quotes);

// Component Options API
// https://v3.vuejs.org/api/options-api.html
const app = Vue.createApp({
    data() {
        return {
            // quotes: quotes,
            example: example,
            quotes: quotes.slice(),
            newQuote: this.initNewQuote()
        }
    },
    methods: {
        // AddQuote(event) {
        //     if (event.code === "Enter") {
        //         this.quotes.push({
        //             quote: this.newQuote.quote,
        //             author: 'Batman'
        //         })
        //     }
        // }
        AddQuote() {
            console.log('example: ', typeof this.example);
            console.log('addQuote: ', typeof this.quotes);
            if (this.newQuote.quote) {
                // this.quotes.push({
                //     quote: this.newQuote.quote,
                //     author: this.newQuote.author || 'Batman'
                //     // author: 'Batman'
                // })
                this.quotes.push(this.newQuote)

            this.newQuote = this.initNewQuote()
            }

            document.getElementById('quote').focus();
        },

        initNewQuote() {
            return {
                quote: null,
                author: null || 'Batman'
            }
        }
    },
    created() {
        console.log('created: ', this.example);
        console.log('created: ', this.quotes);
    },
    mounted() {
        console.log('mounted: ', this.example);
        console.log('mounted: ', this.quotes);
        document.getElementById('quote').focus();
    },
})

app.mount('#app')

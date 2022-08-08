<template>
    <div>
        <img v-if="image" :src="image" alt="bg">
        <div class="bg-dark"></div>
        <div class="indecision-container">
            <input type="text" v-model="editQuestion" placeholder="Realiza una pregunta (?)">
            <p>Recuerda terminar con un signo de interrogación (?)</p>
            <div v-if="isValidQuestion">
                <h2 v-text="question"></h2>
                <h1 v-text="answer"></h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editQuestion: null,
            // question: '¿Seré millonario?',
            question: null,
            answer: null,
            image: null,
            isValidQuestion: false
        }
    },
    methods: {
        async getAnswer() {

            // Realmente se tiene que hacer entre un try y catch

/*
             this.answer = 'Pensando...'

            // const data = await fetch('https://yesno.wtf/api')
            //         .then(resp => resp.json())
            // console.log(data);
            const {answer, image} = await fetch('https://yesno.wtf/api')
                    .then(resp => resp.json())

            // console.log(answer, image)

            this.answer = answer === 'yes' ? 'Sí!' : 'No!'
            this.image = image
 */

            try {
                this.answer = 'Pensando...'

                // const data = await fetch('https://yesno.wtf/api')
                //         .then(resp => resp.json())
                // console.log(data);
                const {answer, image} = await fetch('https://yesno.wtf/api')
                        .then(resp => resp.json())

                // console.log(answer, image)

                this.answer = answer === 'yes' ? 'Sí!' : 'No!'
                this.image = image

            } catch (error) {
                this.answer = 'No se pudo cargar del API!'
                this.image = null
            }

        }
    },
    watch: {
        editQuestion(value, oldValue) {
            // console.log({value: value, oldValue: oldValue})
            // console.log(value.includes('?'))

            this.isValidQuestion = false

            console.log({value})

            if (!value.includes('?')) return

            this.isValidQuestion = true
            this.question = value
            // https:// yesno.wtf
            // https://yesno.wtf/#api
            // https://yesno.wtf/api
            // https://yesno.wtf/api?force=maybe -> respuesta forzada

            this.getAnswer()
        }
    }
}
</script>

<style scoped>
    img, .bg-dark {
        position: fixed;

        width: 100vw;
        height: 100vh;
        max-height: 100%;
        max-width: 100%;

        left: 0px;
        top: 0px;
    }
    .bg-dark {
        background-color: rgba(0, 0, 0, 0.2);
    }
    .indecision-container {
        position: relative;
        z-index: 99;
    }
    h1, h2 {
        color: white;
    }
    h2 {
        margin-top: 150px;
    }
    input {
        width: 250px;

        margin-bottom: 10px;
        padding: 10px 15px;

        border: none;
        border-radius: 5px;
    }
    input:focus {
        outline: none;
    }
    p {
        margin-top: 0px;

        font-size: 12px;
        color: white;
    }
</style>
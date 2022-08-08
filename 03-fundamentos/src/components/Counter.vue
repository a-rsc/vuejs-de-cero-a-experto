<template>
    <div>
        <h3>Counter - {{ title || 'valor por defecto'}}</h3>
        <h3 data-testid="title">Counter - {{ CustomTitle }}</h3>
        <p style="text-align: justify;">Mientras se edita el template se mantiene el estado,es decir, el valor de la variable no se modifica.</p>
        <p data-testid="counter">{{ counter }}</p>
        <p>{{ counter }}<sup>2</sup> = {{ getSquareValue() }} (no guardado en memoria)</p>
        <p>{{ counter }}<sup>2</sup> = {{ getSquareValue() }} (no guardado en memoria)</p>
        <p>{{ counter }}<sup>2</sup> = {{ getSquareValue() }} (no guardado en memoria)</p>
        <p>{{ counter }}<sup>2</sup> = {{ getSquareValue() }} (no guardado en memoria)</p>

        <p>{{ counter }}<sup>2</sup> = {{ SquareCounter }} (guardado en memoria - propiedad computada)</p>
        <p>{{ counter }}<sup>2</sup> = {{ SquareCounter }} (guardado en memoria - propiedad computada)</p>
        <p>{{ counter }}<sup>2</sup> = {{ SquareCounter }} (guardado en memoria - propiedad computada)</p>
        <p>{{ counter }}<sup>2</sup> = {{ SquareCounter }} (guardado en memoria - propiedad computada)</p>

        <div class="buttons">
            <button @click="AddCounter">+ 1</button>
            <button @click="SubtractCounter">- 1</button>
            <button @click="ResetCounter">Reset</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            required: false,
            default: 30,
            // https://v3.vuejs.org/guide/component-props.html#prop-validation
            validator(value) {
                return value > 10
            }
        }
    },
    name: 'Snipper',
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        AddCounter() {
            this.counter += 1
        },
        SubtractCounter() {
            this.counter -= 1
        },
        ResetCounter() {
            this.counter = this.start
        },
        getSquareValue() {
            // console.log('getSquareValue()')
            return this.counter * this.counter
        }
    },
    computed: {
        CustomTitle() {
            // return this.title ?? 'valor por defecto'
            return this.title || 'valor por defecto'
        },
        // Propiedad que se maneja en cache (memoria)
        SquareCounter() {
            // console.log('SquareCounter()')
            return this.counter * this.counter
        }
    }
}
</script>

<style>
button {
    /* ordenar líneas ascendente */
    background-color: #64B687;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}
button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>
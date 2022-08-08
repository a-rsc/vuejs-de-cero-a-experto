<template>
    <div class="options-container">
        <!-- Utilizaremos la api https://pokeapi.co para añadir nombres de diferentes pokemons -->
        <ul>
            <!-- $emit: el símbolo de $ es un caracter normal y corriente. ¿Por qué empieza con el símbolo de $? El símbolo de $ representa las propiedades y eventos propios de Vue, para evitar que un desarrollador los utilice.  -->
            <!-- https://v3.vuejs.org/guide/component-custom-events.html#event-names -->
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selectedPokemon', pokemon.id)">{{ pokemon.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Options',
    components: {
    },
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
        hola() {
            // this.$emit = ...
        }
    }
}
</script>

<style scoped>
.options-container {
    display: flex;
    justify-content: center;
}
ul {
    padding: 0;
    list-style-type: none;
}
li {
    line-height: 32px;

    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}
li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
</style>
<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon" class="hidden-pokemon" :src="imgSrc" alt="pokemon">
        <img v-else class="fade-in" :src="imgSrc" alt="pokemon">
    </div>
</template>

<script>
export default {
    name: 'Picture',
    components: {
    },
    props: {
        pokemonId: {
            type: Number,
            required: true,
            validator(value) {
                return value > 0
            }
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>
.pokemon-container {
    position: relative; /* Se usa para que no se salga la imagen de la caja, ya que la imagen tiene position absolute */

    height: 230px;

    background-color: #ddd;
}
img {
    position: absolute; /* se usa en caso de este div, donde tiene la altura y el ancho definido, sin esto top, right y left no funcionarían */

    top: 15px;
    right: 0; /* se debe usar para que margin 0 auto funcione */
    left: 0; /* se debe usar para que margin 0 auto funcione */
    margin: 0 auto; /* Esto lo centra */

    height: 200px;

    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>
<template>
  <div>
    <h1 v-if="!pokemon.id">Espere por favor...</h1>
    <div v-else>
        <h1>¿Cómo se llama este POKÉMON?</h1>

        <Picture :pokemonId="pokemon.id" :showPokemon="showPokemon"></Picture>
        <!-- Este componente debe recibir un array de 4 pokemons y no debe saber cuál es la opción correcta -->
        <!-- <Options :pokemons="pokemonArray" @selection="checkAnswer(1, $event)"></Options> -->
        <!-- El parámetro se manda directamente y la función puede estar en kebab-case o lowerCamelCase -->
        <!-- <Options :pokemons="pokemonArray" @selectedPokemon="checkAnswer"></Options> -->
        <Options :pokemons="pokemonArray" @selected-pokemon="checkAnswer"></Options>

        <!-- <div v-if="showAnswer" class="fade-in">
          <h2 :class="correctAnswer ? 'txt-green' : 'txt-red'">{{ message }}</h2>
          <button @click="newGame">
            Nuevo juego
          </button>
        </div> -->

        <!-- Quizás no se desea tener el div, entonces podemos modificarlo a template y analizará todos los elementos -->
        <template v-if="showAnswer">
          <h2 :class="correctAnswer ? 'txt-green fade-in' : 'txt-red fade-in'">{{ message }}</h2>
          <button class="fade-in" @click="newGame">
            Nuevo juego
          </button>
        </template>

        <div>
          <p>Si no colocamos el condicional v-if="pokemon" aparece un error cuando aún no se ha cargado!!! Aún así, la aplicación queda en blanco hasta que obtenemos la respuesta.</p>
          <p>Hay distintas formas de solucionar la línea <b>this.pokemon = this.pokemonArray[randInt]</b></p>
        </div>
    </div>
  </div>
</template>

<script>
import Picture from '@/components/PokemonPicture' // src
import Options from '@/components/PokemonOptions' // src

import getPokemonOptions from '@/helpers/getPokemonOptions' // helper

// getPokemonOptions() // Promise

export default {
  name: 'Page',
  components: {
    Picture,
    Options
  },
  data() {
    return {
      pokemonArray: [],
      pokemon: {},
      showPokemon: false,
      answered: false,
      showAnswer: false,
      correctAnswer: false,
      message: null
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArray = await getPokemonOptions() // No es exactamente un array de pokemons como esperábamos. Cuando vemos HANDLER, TARGET y ISREVOKED es la referencia a nuestra propiedad, pero es REACTIVO. En el TARGET tenemos el objeto.
      console.log(this.pokemonArray)

      const randInt = Math.floor(Math.random()*4) // Aleatorio desde 0 a 3
      this.pokemon = this.pokemonArray[randInt]
    },
    // checkAnswer(numero, pokemonId) {
    checkAnswer(selectedId) {
      // console.log('Pokemon Page llamado' + selectedId)
      this.showPokemon = true
      this.showAnswer = true

      if (!this.answered) {
        if (selectedId == this.pokemon.id) {
          this.correctAnswer = true
          this.message = `¡Correcto! Este pokemon se llama ${this.pokemon.name}`
        } else {
          this.message = `Oops, ¡Has fallado! Este pokemon se llama ${this.pokemon.name}`
        }
      }

      this.answered = true
    },
    newGame() {
      this.show = []
      this.pokemon = {}
      this.showPokemon = false
      this.answered = false
      this.showAnswer = false
      this.correctAnswer = false
      this.message = null

      this.mixPokemonArray()
    }
  },
  // LIFECYCLE HOOKS: beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed
  mounted() {
    // console.log(`mounted`)
    this.mixPokemonArray()
  },
}
</script>

<style scoped>
button {
  width: 200px;

  padding: 10px;

  font-size: 1rem;
  background-color: #ddd;
  /* border: 1px solid black; */
  cursor: pointer
}
.txt-green {
  color: green;
}
.txt-red {
  color: red
}
</style>
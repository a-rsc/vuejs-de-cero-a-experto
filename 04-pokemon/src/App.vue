<template>
  <Page></Page>
</template>

<script>
/* Importación tradicional, pero cuando se construye forma parte del bundle. Se puede hacer de otras maneras. */
import Page from '@/components/PokemonPage' // src

export default {
  name: 'App',
  components: {
    Page
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

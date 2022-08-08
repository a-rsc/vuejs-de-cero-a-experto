<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <CounterVue title="1r componente" atributo="15" v-bind:start="15" />
    <CounterVue /> -->
    <IndecisionVue />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import CounterVue from '@/components/Counter.vue'
import IndecisionVue from '@/components/Indecision.vue'

export default {
  name: 'App',
  components: {
    CounterVue,
    IndecisionVue
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

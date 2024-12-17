<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="a=!a">点</button>
    <HelloWorld v-if="a" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './examples/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return  {
      a:true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

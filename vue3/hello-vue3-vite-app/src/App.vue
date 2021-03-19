<template>
<div>
  <div>
    path: {{path.fullPath}}<br/>
    globalCount: {{globalCount}}
    <button type="button" @click="add">add</button>
  </div>
  <HelloWorld />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {getCurrentInstance, computed} from "vue"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    const {ctx} = getCurrentInstance()
    
    return {
      path: computed(() => ctx.$router.currentRoute.value),
      globalCount: computed(() => ctx.$store.state.globalCount),
      add: () => ctx.$store.commit('increment')
    }
  }
}
</script>

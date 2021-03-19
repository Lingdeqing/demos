<template>
<div>
  <button @click="add">count is: {{ count }}, doubleCount is: {{ doubleCount }}</button>
  <router-link to="/">
    home
  </router-link>
  <router-link to="/about">
    about
  </router-link>
  <router-view></router-view>
</div>
</template>

<script>
import {ref, computed, watch} from "vue"
export default {
  setup(){
    const count = ref(0)
    const add = () => {
      count.value ++
    }

    const doubleCount = computed(() => count.value*2)

    watch(count, () => {
      console.log('count is ', count.value)
    })
    return {
      count,
      add,
      doubleCount
    }
  }
}
</script>

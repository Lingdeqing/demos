<script setup lang="ts">
import TTSEditor from "../components/TTSEditor/TTSEditor.vue"
</script>

<template>
  <main>
    <TTSEditor />


    <h3 class="mt-30px">todo list</h3>
    <ul>
      <li><input type="checkbox"> 特效()</li>
      <li><input type="checkbox"> 特效[]</li>
      <li><input type="checkbox"> 特效|</li>
      <li><input type="checkbox"> 特效+</li>
      <li><input type="checkbox"> 特效嵌套</li>
      <li><input type="checkbox"> 高亮</li>
    </ul>
  </main>
</template>
<style lang="less" scoped>
li:has(:checked) {
  text-decoration: line-through;
}
</style>

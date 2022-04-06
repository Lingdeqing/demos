<template>
  <div class="bar">
    bar
    <a href="#anchor">anchor</a>
    <div style="height:500px"></div>
    <p id="anchor" style="height:500px"><a name="anchor">Anchor</a></p>
    <p id="anchor2">Anchor2</p>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  props: {}
}
</script>

<style scoped>
</style>

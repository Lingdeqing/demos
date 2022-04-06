<template>
<div>
  UserId: {{$route.params.id}}
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'User',
  props: {},
}
</script>

<style scoped>
</style>

<template>
<div>
  UserId: {{id}}
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'User',
  props: {
    id: {
      type: String,
      default: '0'
    }
  },
}
</script>

<style scoped>
</style>

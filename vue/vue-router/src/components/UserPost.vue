<template>
<div>
  <User />
  Post: {{$route.params.postId}}
</div>
</template>

<script>


import User from '@/components/User';
export default {
  name: 'Post',
  props: {},
  components: {
    User
  }
}
</script>

<style scoped>
</style>

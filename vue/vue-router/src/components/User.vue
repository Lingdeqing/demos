<template>
<div>
  UserId: {{$route.params.id}}
  Username: {{username}}

  <p>
    用户名 要随路由响应, 写在data或者生命周期函数中是无效的,用compute或者watch 或者路由守卫
    <p>
      最稳的是data加watch,最简单的是compute,路由守卫不太稳
    </p>
  </p>
</div>
</template>

<script>
const users = {
  1: {
    name: 'Franklin'
  },
  2: {
    name: 'Frankzhu'
  },
  3: {
    name: 'Longzhu'
  },
  4: {
    name: 'Lidan'
  },
}
export default {
  name: 'User',
  props: {},
  
  // data(){
  //   return {
  //     username: users[this.$route.params.id].name
  //   }
  // },

  // computed: {
  //   username(){
  //     return users[this.$route.params.id].name;
  //   }
  // },

  data(){
    return {
      username: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(){
        this.username = users[this.$route.params.id].name;
      }
    }
  },

  // beforeRouteUpdate (to, from, next) {
  //   this.username = users[to.params.id].name;
  //   next();
  // },
}
</script>

<style scoped>
</style>

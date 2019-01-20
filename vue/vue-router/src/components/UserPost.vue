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
  props: {
    postId2: {
      type: String,
      default(){
        console.log('props')
        return ''
      }
    }
  },
  beforeRouteEnter (to, from ,next){
    console.log('beforeRouteEnter')
    next();
  },
  beforeRouteUpdate(to, from ,next){
    console.log('beforeRouteUpdate')
    next();
  },
  beforeRouteLeave(to, from ,next){
    console.log('beforeRouteLeave')
    next();
  },

  beforeCreate(){
    console.log('beforeCreate')
  },
  updated(){
    console.log('updated')
  },
  beforeDestroy(){
    console.log('beforeDestroy')
  },
  components: {
    User
  }
}
</script>

<style scoped>
</style>

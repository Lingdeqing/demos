<template>
<div>
<h1>Foo: {{id}}</h1>
</div>
</template>

<script>

/* eslint-disable */
export default {
  name: 'Foo',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('beforeRouteEnter');
    next();
  },
  beforeRouteUpdate(to, from, next){
    console.log('beforeRouteUpdate')
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('beforeRouteLeave');
    const answer = window.confirm('确定离开吗?');
    if(answer){
      next();
    }  else {
      next(false);
    }
  }
}
</script>

<style scoped>
</style>

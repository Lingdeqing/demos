<template>
<div>
<h1>Foo</h1>
<p>
<button @click="goBack">返回上一页</button>
</p>
</div>
</template>

<script>
export default {
  name: 'Foo',
  mounted(){
    console.log(this.$router) // eslint-disable-line
  }, 
  methods: {
    goBack(){
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>

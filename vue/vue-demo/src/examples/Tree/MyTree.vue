<template>
  <ul v-if="data && data.length > 0">
    <li v-for="item in data" :key="item.id">
      <div>{{ item.title }}</div>
      <MyTree :data="item.children" />
    </li>
  </ul>
</template>
<script>
export default {
  name: "MyTree",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
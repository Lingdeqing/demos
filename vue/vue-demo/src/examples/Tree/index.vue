<template>
  <MyTree :data="treeData" />
</template>
<script>
import MyTree from "./MyTree.vue";
export default {
  components: {
    MyTree,
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          title: "水果",
          children: [
            {
              id: 11,
              title: "苹果",
            },
            {
              id: 12,
              title: "香蕉",
            },
            {
              id: 13,
              title: "李子",
            },
          ],
        },
        {
          id: 2,
          title: "编程语言",
          children: [
            {
              id: 21,
              title: "js",
            },
            {
              id: 22,
              title: "php",
            },
            {
              id: 23,
              title: "python",
            },
          ],
        },
      ],
    };
  },
};
</script>
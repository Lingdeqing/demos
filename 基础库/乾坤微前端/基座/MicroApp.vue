<template>
  <div class="qiankun-micro-app">
    <!-- 回退 -->
    <slot v-if="!app" />
    <!-- 子应用挂载点 -->
    <div v-else :id="app.containerId" />
  </div>
</template>
<script>
import { checkActivityFunctions } from 'single-spa'
import { start } from 'qiankun'
import { apps } from './config'

export default {
  props: {
    appName: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      app: null
    }
  },
  watch: {
    $route: {
      handler() {
        if (!this.appName) {
          console.warn('请确认传入的子应用名称！！！')
          this.app = null
          return
        }
        const matchedNames = checkActivityFunctions()
        console.log(matchedNames, 'matchedNames', this.appName)
        if (matchedNames.length === 0) {
          this.app = null
          return
        }
        if (!matchedNames.includes(this.appName)) {
          console.warn(
            '子应用名称匹配失败，请确认传入的子应用名称是否正确！！！'
          )
          this.app = null
          return
        }
        this.app = apps.find(app => app.name === this.appName)
        this.$nextTick(() => {
          this.app && start()
        })
      },
      deep: true,
      immediate: true
    }
  },
  computed: {},
  mounted() { }
}
</script>

<style lang="less" scoped>
.micro-app {
  width: 100%;
}
</style>

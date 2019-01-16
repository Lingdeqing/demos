import Vue from 'vue'
import App from './examples/嵌套命名视图.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

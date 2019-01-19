import Vue from 'vue'
import App from './examples/过度效果1.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

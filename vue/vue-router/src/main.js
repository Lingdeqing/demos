import Vue from 'vue'
import App from './examples/起步.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

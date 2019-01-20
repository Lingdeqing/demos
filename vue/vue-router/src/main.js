import Vue from 'vue'
import App from './examples/导航守卫.vue'

Vue.config.productionTip = false

import $ from 'jquery';
window.$ = $;

new Vue({
  render: h => h(App),
}).$mount('#app')

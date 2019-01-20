import Vue from 'vue'
import App from './examples/路由懒加载.vue'

Vue.config.productionTip = false

import $ from 'jquery';
window.$ = $;

new Vue({
  render: h => h(App),
}).$mount('#app')

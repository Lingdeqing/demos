import Vue from 'vue'
import App from './examples/在导航完成前获取数据.vue'

Vue.config.productionTip = false

import $ from 'jquery';
window.$ = $;

new Vue({
  render: h => h(App),
}).$mount('#app')

import "./publicPath"
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

let instance = null;
function render() {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#dupdub-editor-app')
}

export async function bootstrap() {
  console.log("editor bootstraped")
}

export async function mount(props) {
  render(props)
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}


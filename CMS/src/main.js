import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局样式
import './assets/css/global.css'
// 导入element组件
import './plugins/element.js'
// 导入 vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

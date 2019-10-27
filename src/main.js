import Vue from 'vue'
import App from './App'
import router from './router'
import './main.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router, // アプリケーションに登録
  render: h => h(App)
})
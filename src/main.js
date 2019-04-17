// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
Vue.config.devtools = true
//为vue原型绑定axios
Vue.prototype.$axios=axios
//为vue原型绑定固定值
Vue.prototype.baseUrl='https://data.xinxueshuo.cn/nsi-1.0'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

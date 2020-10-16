// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import '../src/assets/js/rem'
import '../src/assets/css/reset.css'
import './components/index'
import '../src/filters/index'
import 'swiper/swiper-bundle.css';
Vue.prototype.$axios = axios
Vue.config.productionTip = false
import 'swiper/swiper-bundle.css'
import store from './store'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

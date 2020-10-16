import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login.vue'
import list from '../pages/list.vue'
import detail from '../pages/detail.vue'
import register from '../pages/register.vue'
import home from '../pages/home/home.vue'
import index from '../pages/home/index.vue'
import fenlei from '../pages/home/fenlei.vue'
import mine from '../pages/home/mine.vue'
import shop from '../pages/home/shop.vue'
Vue.use(Router)
const routes = [
  { path: '/login', component: login },
  { path: '/register', component: register },
  {
    path: '/index', component: index,
    children: [
      { path: '/index/home', component: home },
      { path: '/index/fenlei', component: fenlei },
      { path: '/index/mine', component: mine },
      { path: '/index/shop', component: shop }
    ]
  },
  { path: '/list', component: list },
  { path: '/detail', component: detail },
  { path: '*', component: login },
]
export default new Router({
  routes
})

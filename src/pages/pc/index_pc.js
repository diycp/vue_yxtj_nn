// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import index from './comps/index'
import promise from 'es6-promise'
import config from '../../assets/config'
Vue.use(Router)
promise.polyfill();
Vue.config.productionTip = false
document.title = config.name;
const router = new Router({
  routes: [
    {
      path: '/pc',
      name: 'index',
      component: index
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

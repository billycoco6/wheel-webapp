// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

import Axios from 'axios'
Vue.$http = Axios
Axios.defaults.baseURL = 'https://webapp-project-server.herokuapp.com'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('====== before each -> next =====')
    console.log(store.getters.loggedIn)
    if (!store.getters.loggedIn) {
      next({
        name: 'main.SignIn'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

// import userLogin from '@/api/users.js'
// userLogin.checkLoggedIn()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

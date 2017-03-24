import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Home from '@/components/Home'
import Men from '@/components/Men'
import Women from '@/components/Women'
import Fashion from '@/components/Fashion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main.SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'main.SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'main.Home',
      component: Home
    },
    {
      path: '/men',
      name: 'main.Men',
      component: Men
    },
    {
      path: '/women',
      name: 'main.Women',
      component: Women
    },
    {
      path: '/fashion',
      name: 'Fashion',
      component: Fashion
    }
  ]
})

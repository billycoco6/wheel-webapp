import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Home from '@/components/Home'
import Men from '@/components/Men'
import Women from '@/components/Women'
import Category from '@/components/Category'
import Spinning from '@/components/Spinning'
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
      path: '/category',
      name: 'main.Category',
      component: Category
    },
    {
      path: '/spinning',
      name: 'main.Spinning',
      component: Spinning
    }
  ]
})

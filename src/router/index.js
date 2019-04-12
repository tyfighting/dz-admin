import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Agreement from '@/components/Login/Agreement'
import Index from '@/components/Index/Index'
import Personal from '@/components/Personal/Personal'

Vue.use(Router)

export default new Router({
  // linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path:'/Login/Agreement',
      name:'Agreement',
      component:Agreement
    },
    {
      path:'/Personal/Personal',
      name:'Personal',
      component:Personal
    }
  ]
})

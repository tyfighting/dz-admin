import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Agreement from '@/components/Login/Agreement'
import Index from '@/components/Index/Index'
import Personal from '@/components/Personal/Personal'
import Calendar from '@/components/Calendar/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/login/agreement',
      name:'Agreement',
      component:Agreement
    },
    {
      path:'/personal',
      name:'Personal',
      component:Personal
    },
    {
      path:'/calendar',
      name:'Calendar',
      component:Calendar
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Agreement from '@/components/Login/Agreement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:'/Agreement',
    	name:'Agreement',
    	component:Agreement
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Agreement from '@/components/Login/Agreement'
import Index from '@/components/Index/Index'
import Personal from '@/components/Personal/Personal'
import Discover from '@/components/Discover/Discover'
import Order from '@/components/Order/Order'
import helloVue from '@/components/helloVue'

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
      component:Personal,
      meta:{
        auth:true
      }
    },
    {
      path:'/discover',
      name:'Discover',
      component:Discover,
      // meta:{
      //   auth:true
      // },
      // beforeEnter: (to, from, next) => {
      //   if(to.meta.auth){
      //     if(localStorage.getItem("mobile")){
      //       next();
      //     }else{
      //       next({path:'/login'})
      //     }          
      //   }else{
      //     next()
      //   }        
      // }
    },
    {
      path:'/order',
      name:'Order',
      component:Order
    },
    {
      path:'/helloVue',
      name:'helloVue',
      component:helloVue
    }
  ]
})

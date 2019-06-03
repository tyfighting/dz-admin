import Vue from 'vue'
import Router from 'vue-router'
const Login=()=>import('@/components/Login/Login')
const Agreement=()=>import ('@/components/Login/Agreement')
const Index=()=>import ('@/components/Index/Index')
const Personal=()=>import ('@/components/Personal/Personal')
const Discover=()=>import ('@/components/Discover/Discover')
const Order=()=>import ('@/components/Order/Order')
const helloVue=()=>import ('@/components/helloVue')

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

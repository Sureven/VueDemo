import Vue from 'vue'
import Router from 'vue-router'
import Car from "../components/car"
import List from  "../components/list"
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/car',
      name: 'car',
      component:Car
    },
    {
      path:'/list',
      name:'list',
      component:List
    },
    {
      path:'/',
      redirect: '/car'
    },
  ]
})

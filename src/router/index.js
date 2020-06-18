import Vue from 'vue'
import Router from 'vue-router'

const home=()=>import("../views/home/home")
const category=()=>import("../views/category/category")
const cart=()=>import("../views/cart/cart")
const user=()=>import("../views/user/user")
const detail=()=>import("../views/detail/detail")

Vue.use(Router)

const routes=[
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:home
  },
  {
    path:"/detail/:iid",
    component:detail
  },
  {
    path:"/category",
    component:category
  },
  {
    path:"/shoppingcart",
    component:cart
  },
  {
    path:"/user",
    component:user
  },
]

const router = new Router({
  routes,
  mode:"history"
})
export default router

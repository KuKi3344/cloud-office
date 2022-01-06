import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/login",
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/home',
    name: '主页',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router

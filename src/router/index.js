import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  name: '登录',
	  component: Login,
	},
  {
    path: '/userlogin',
    name: '登录',
    component: Login,
	hidden:true
  },
  {
    path: '/home',
    name: '主页',
    component: Home,
  },

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import test1 from '../views/test1'
import test2 from '../views/test2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/login",
	hidden:true
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
	hidden:true
  },
  {
    path: '/home',
    name: '主页',
    component: Home,
	children:[
		{
		  path: '/test1',
		  name: 'test1',
		  component: test1
		},
		{
		  path: '/test2',
		  name: 'test2',
		  component: test2
		}
	]
	
  },

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import none from '../views/none'
import error from '../views/error'
import game from '../views/game.vue'
import welcome from '../views/welcome.vue'


Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

return originalPush.call(this, location).catch(err => err)

}



const routes = [
	{
	  path: '/',
	  name: '登录',
	  redirect:'/userlogin'
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
	redirect:'/wel',
	children:[
		{
		  path: '/game',
		  name: '2048',
		  component: game,
		},
		{
		  path: '/wel',
		  name: '欢迎您',
		  component: welcome,
		},
	]
  },
  {
    path: '/404',
    name: '404',
    component: none,
  },
   { 
	   path: '*',
	   name:'error',
	   component:error
	   }

]


const router = new VueRouter({
  routes
})

export default router

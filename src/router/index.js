import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import none from '../views/none'
import error from '../views/error'

Vue.use(VueRouter)

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

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}


const router = new VueRouter({
  routes
})

export default router

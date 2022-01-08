import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SlideVerify from 'vue-monoplasty-slide-verify';
import VueParticles from 'vue-particles';
import store from './store';
import {initMenu} from './utils/menus';
import dayjs from 'dayjs'
import 'font-awesome/css/font-awesome.css'

import{
		getRequest,
		putRequest,
		deleteRequest,
		postRequest
	}from './utils/api'
Vue.use(VueParticles)
Vue.use(ElementUI)
Vue.use(SlideVerify)

Vue.config.productionTip = false;


//为了全局使用封装的请求
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;

//准备一个路由前置导航守卫
router.beforeEach((to,from,next)=>{
	//如果有token，不拦截
	if(window.sessionStorage.getItem('tokenStr')){
		initMenu(router,store);
		//通过前置路由守卫获取用户信息
			//判断用户信息是否存在不存在就去获取
		if(!window.sessionStorage.getItem('user')){
			//没有用封装的方法是因为路由特殊所以需要单独写
			return getRequest('/user/info').then(resp=>{
				if(resp){
					window.sessionStorage.setItem('user',JSON.stringify(resp));
				}
				next();
			})
		}
		next();
	}else{
		//如果没有token就拦截，如果去登录页面不拦截，如果去别的就给调到404页面
		if(to.path=='/'||to.path=='/userlogin'||to.path=='/404'){
			next();
		}
		else{
			next({ path: '/404' })
		}
		next();
		
	}
	
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
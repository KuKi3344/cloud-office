import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SlideVerify from 'vue-monoplasty-slide-verify';
import VueParticles from 'vue-particles';
import store from './store';
import {initMenu} from './utils/menus';
import axios from 'axios'
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

Vue.prototype.$axios = axios;

//为了全局使用封装的请求
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;

//准备一个路由前置导航守卫
router.beforeEach((to,from,next)=>{
	if(window.sessionStorage.getItem('tokenStr')){
		initMenu(router,store);
		//通过前置路由守卫获取用户信息
			//判断用户信息是否存在
		if(!window.sessionStorage.getItem('user')){
			//没有用封装的方法是因为路由特殊所以需要单独写
			return axios({
							method:'get',
							url:'/user/info',
						}).then(resp=>{
				if(resp){
					window.sessionStorage.setItem('user',JSON.stringify(resp));
				}
				next();
			})
		}
		next();
	}else{
		if(to.path=='/'||to.path=='/login'){
			next();
		}
	}
	
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
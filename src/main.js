import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SlideVerify from 'vue-monoplasty-slide-verify';
import VueParticles from 'vue-particles';
import store from './store';
import {initMenu} from './utils/menus';
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
	if(window.sessionStorage.getItem('tokenStr')){
		initMenu(router,store);
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
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SlideVerify from 'vue-monoplasty-slide-verify';
import VueParticles from 'vue-particles'
import axios from 'axios'

import{
		getRequest,
		putRequest,
		deleteRequest,
		postRequest
	}from './utils/api.js'

Vue.use(VueParticles)
Vue.use(ElementUI)
Vue.use(SlideVerify)

Vue.config.productionTip = false;

//为了全局使用封装的请求
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

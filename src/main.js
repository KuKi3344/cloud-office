import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SlideVerify from 'vue-monoplasty-slide-verify';
import VueParticles from 'vue-particles'
import axios from 'axios'

Vue.use(VueParticles)
Vue.use(ElementUI)
Vue.use(SlideVerify)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

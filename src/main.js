import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resource from 'vue-resource'
import '../font/iconfont.css'
import '../font/iconfont.js'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
Vue.use(resource)


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

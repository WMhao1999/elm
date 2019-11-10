import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../font/iconfont.css'
import '../font/iconfont.js'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
Vue.use(VueAxios,Axios)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resource from 'vue-resource'
import '../font/iconfont.css'
import '../font/iconfont.js'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Mint from 'mint-ui';
Vue.use(Mint);



Vue.use(resource)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

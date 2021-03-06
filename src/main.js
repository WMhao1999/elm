import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import resource from 'vue-resource'
import '../font/iconfont.css'
import '../font/iconfont.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// Vue.use(resource)
Vue.use(ElementUI)
import '../font/iconfont.css'
import '../font/iconfont.js'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

// Vue.use(resource)
Vue.use(ElementUI);

Vue.config.productionTip = false
// Vue.http.options.xhr = { withCredentials: true }
axios.defaults.withCredentials = true

import Alert from './components/alert/alert'
Vue.prototype.$alert = Alert

import Loading from './components/loading/loading'
Vue.prototype.$loading = Loading


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
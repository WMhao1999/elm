import Vue from 'vue'
import Loading from './loading.vue'

var loadingInstance = Vue.extend(Loading)
export default function(type){
	var Loadingince = new loadingInstance()
	if(type){
		document.body.appendChild(Loadingince.$mount().$el)
	}else{
		document.body.removeChild(document.querySelector('#loading'))
	}
}
import Vue from 'vue'
import Loading from './loading.vue'

var loadingInstance = Vue.extend(Loading)
export default function(type, haveBg) {
	var Loadingince = new loadingInstance({
		data() {
			return {
				isShow: haveBg
			}
		}
	})
	if (type) {
		document.body.appendChild(Loadingince.$mount().$el)
	} else {
		document.body.removeChild(document.querySelector('#loading'))
	}
}

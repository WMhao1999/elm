import Vue from 'vue'
import Alert from './alert.vue'

var alertInstance = Vue.extend(Alert)
export default function (types, options, callback) {
	var instance = new alertInstance({
		data() {
			return {
				msg: options,
				type: types,
				confrimCallback: callback
			}
		}
	},function(res){
		console.log(1)
	})
	var el = instance.$mount().$el
	document.body.appendChild(el)
}
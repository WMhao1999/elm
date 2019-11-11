import Vue from 'vue'
import Alter from './alter.vue'

var alertInstance = Vue.extend(Alter)
export default function(types,options,callback){
	var instance = new alertInstance({
		data(){
			return{
				msg:options,
				type:types,
				optCallback:callback
			}
		}
	})
	var el = instance.$mount().$el
	document.body.appendChild(el)
}



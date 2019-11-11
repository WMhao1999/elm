import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		City: '',
		stroyList: [],
		userid: ''
	},
	mutations: {
		GetCity(state, all) {
			state.City = all
		},
		GetStroy(state, items) {
			var type = true
			state.stroyList.map((item) => {
				if (items.name == item.name) {
					type = false
				} else {
					type = true
				}
			})
			if (type) {
				state.stroyList.unshift(items)
			}
		},
		user_id(state, userid) {
			state.userid = userid
		}
	},
	actions: {},
	modules: {}
})

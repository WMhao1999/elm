import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		City: '',
		userid: {},
		seadd: {},
		stroyList: [],
		StroyShopArr: [],
		s: ''
	},
	mutations: {
		GetCity(state, all) {
			state.City = all
		},
		GetStroyShop(state, items) {
			var type = true
			state.StroyShopArr.map((item) => {
				if (items == item) {
					type = false
				} else {
					type = true
				}
			})
			if (type) {
				state.StroyShopArr.unshift(items)
			}
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
		},
		cadd(state, seadd) {
			state.seadd = seadd
		}
	},
	actions: {},
	modules: {}
})

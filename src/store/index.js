import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
<<<<<<< HEAD
		City: '',
		stroyList: [],
		userid: ''
=======
		City: [],
		stroyList:[],
		StroyShopArr:[]
>>>>>>> 2b33cc97952e044c5de44fb1150f6a9842d79b0e
	},
	mutations: {
		GetCity(state, all) {
			state.City = all
		},
		GetStroyShop(state,items){
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
		}
	},
	actions: {},
	modules: {}
})

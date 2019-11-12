import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		City: [],
		stroyList: [],
		StroyShopArr: [],
		sort_data: {
			offset: 0,
			limit: 20,
			order_by: 4,
			delivery_mode: 1,
			restaurant_category_ids: '',
			num: 0,
			a: 0
		},


		// data: [
		// 	{
		// 		name: '店铺名',
		// 		id: 1,
		// 		foods: [{ name: "食物名", pic: '价格' }],
		// 		zpic: 1
		// 	}
		// ]
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
		}
	},
	actions: {},
	modules: {}
})

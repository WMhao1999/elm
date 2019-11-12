import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		n: 0,
		City: [],
		stroyList: [],
		StroyShopArr: [],
		Shopitem: [],
		NowItem:{}
	},
	mutations: {
		GetCity(state, all) {
			state.City = all
		},
		GetShopitem(state, items) {
			state.NowItem = items
			state.n++
			var type = true
			state.Shopitem.map((item) => {
				if (items == item) {
					item.count++
					type = false
				} else {
					type = true
				}
			})
			if (type) {
				items.count = 1
				state.Shopitem.push(items)
			}
		},
		GetShopitemdown(state, items) {
			state.n++
			state.Shopitem.map((item, index) => {
				if (items == item) {
					item.count--
				}
			})
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
	modules: {},
	getters: {
		returnPrice(state) {
			var price = 0
			if (state.n != 0) {
				state.Shopitem.map((item) => {
					price += item.count * item.specfoods[0].price
				})
			}
			return price
		}
	}
})

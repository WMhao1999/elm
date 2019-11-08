import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  CityName:''
  },
  mutations: {
	  GetCityName(state,name){
		  state.CityName = name
	  }
  },
  actions: {
  },
  modules: {
  }
})

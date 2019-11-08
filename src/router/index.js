import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/city/:cityid/:cityname',
		name: 'city',
		component: () => import('../views/City.vue')
	},
	{
		path: '/order',
		name: 'order',
		component: () => import('../views/Order.vue'),
		children: [{
				path: '/',
				name: "order_Home",
				component: () => import('../views/children/Home.vue'),
			},
			{
				path: 'search',
				name: "order_Search",
				component: () => import('../views/children/Search.vue'),
			}, {
				path: 'form',
				name: "order_Form",
				component: () => import('../views/children/Form.vue'),
			}, {
				path: 'myself',
				name: "order_Myself",
				component: () => import('../views/children/Myself.vue'),
			}
		]
	},
	{
		path:"/login_in",
		name:'login_in',
		component: () => import('../views/login_in.vue')
	},
	{
		path:"/login_pass",
		name:'login_pass',
		component: () => import('../views/login_pass.vue')
	},{
		path:"/spcart",//购物车
		name:'spcart',
		component: () => import('../views/spcart.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

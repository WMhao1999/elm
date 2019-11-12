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
	{
		path:"/anorder",//确认订单
		name:'anorder',
		component: () => import('../views/anorder.vue')
	},
	{
		path:"/point",//积分商城
		name:'point',
		component: () => import('../views/point.vue')
	},
	{
		path:"/vip",//会员中心
		name:'vip',
		component: () => import('../views/vip.vue')
	},
	{
		path:"/serve",//服务中心
		name:'serve',
		component: () => import('../views/serve.vue')
	},
	{
		path:"/download",//下载中心
		name:'download',
		component: () => import('../views/download.vue')
	},
	{
		path:"/download",//下载中心
		name:'download',
		component: () => import('../views/download.vue')
	},{
		path:"/exchange",//兑换会员
		name:'exchange',
		component: () => import('../views/exchange.vue')
	},{
		path:'/time',
		component: () => import('../views/onlinepay.vue'),
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

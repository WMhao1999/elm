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
		path: "/login_in",
		name: 'login_in',
		component: () => import('../views/login_in.vue')
	},
	{
		path: "/login_pass",
		name: 'login_pass',
		component: () => import('../views/login_pass.vue')
	}, {
		path: "/spcart/:g_id", //购物车
		name: 'spcart',
		component: () => import('../views/spcart.vue'),
	}, {
		path: "/wzw_spx/:name/:id", //商品详情/:name/:id
		name: 'wzw_spx',
		component: () => import('../views/wzw_spx.vue')
	},
	{
		path: "/anorder", //确认订单
		name: 'anorder',
		component: () => import('../views/anorder.vue')
	},
	{
		path: "/point", //积分商城
		name: 'point',
		component: () => import('../views/point.vue')
	},
	{
		path: "/vip", //会员中心
		name: 'vip',
		component: () => import('../views/vip.vue')
	},
	{
		path: "/serve", //服务中心
		name: 'serve',
		component: () => import('../views/serve.vue'),
		children: [{
			path: 'ser',
			name: 'ser',
			component: () => import('../views/ser.vue'),
		}]
	},
	{
		path: "/download", //下载中心
		name: 'download',
		component: () => import('../views/download.vue')
	},
	{
		path: "/user", //账户信息
		name: 'user',
		component: () => import('../views/user.vue')
	},
	{
		path: "/modifyuser", //修改用户名
		name: 'modifyuser',
		component: () => import('../views/modifyuser.vue')
	},
	{
		path: "/Address", //编辑地址
		name: 'Address',
		component: () => import('../views/Address.vue'),
	}, {
		path: "/Address/add", //新增地址
		name: 'Address/add',
		component: () => import('../views/add.vue')
	},
	{
		path: "/Address/add/addDetail", //搜索地址
		name: 'Address/add/addDetail',
		component: () => import('../views/addDetail.vue')
	}, {
		path: "/sort", //排序 筛选
		name: 'sort',
		component: () => import('../views/sort.vue')
	},
	{
		path: "/mymoney", //我的余额
		name: 'mymoney',
		component: () => import('../views/mymoney.vue')
	},
	{
		path: "/myjifen", //我的积分
		name: 'myjifen',
		component: () => import('../views/myjifen.vue')
	},
	{
		path: "/mypre", //我的优惠
		name: 'mypre',
		component: () => import('../views/mypre.vue')
	},
	{
		path: "/duihuan", //兑换红包
		name: 'duihuan',
		component: () => import('../views/duihuan.vue')
	},
	{
		path: "/tuijian", //推荐有奖
		name: 'tuijian',
		component: () => import('../views/tuijian.vue')
	},
	{
		path: "/balance", //余额说明
		name: 'balance',
		component: () => import('../views/balance.vue')
	},
	{
		path: "/pdd", //积分说明
		name: 'pdd',
		component: () => import('../views/pdd.vue')
	},
	{
		path: "/hhb", //红包说明
		name: 'hhb',
		component: () => import('../views/hhb.vue')
	},
	{
		path: "/lishi", //历史红包
		name: 'lishi',
		component: () => import('../views/lishi.vue')
	},
	{
		path: "/Members", //会员说明
		name: 'Members',
		component: () => import('../views/Members.vue')
	},
	{
		path: "/exchange", //兑换会员
		name: 'exchange',
		component: () => import('../views/exchange.vue')
	},
	{
		path: "/invoice", //购买记录
		name: 'invoice',
		component: () => import('../views/invoice.vue')
	},

	{
		path: "/online", //线上支付
		name: 'online',
		component: () => import('../views/onlinepay.vue')
	},
	{
		path: "/details", //订单详情
		name: 'details',
		component: () => import('../views/details.vue')
	},
	{
		path: "/Selectaddress", //选择地址
		name: 'Selectaddress',
		component: () => import('../views/Selectaddress.vue')
	},
	{
		path: "/sjxq/:whk_id", //商家详情
		name: 'sjxq',
		component: () => import('../views/sjxq.vue')
	},
	{
		path: "/qiye", //视频监督安全公式
		name: 'qiye',
		component: () => import('../views/qiye.vue')
	}, {
		path: "/confirmOrder", //确认订单
		name: 'confirmOrder',
		component: () => import('../views/confirmOrder.vue')
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

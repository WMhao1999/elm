<template>
	<div id="spcart">
		<lh_header :title="$store.state.CityName"></lh_header>
		<div class="zhezhao" v-show="type_b">
			<h2>{{tt_tit.name}}</h2>
			<span>优惠信息</span>
			<p><i class="introduce_btn_l_i" v-for="(i,$index) in tt_tit.activities" v-if="$index>=0" slot='t7'>{{tt_tit.activities[0].icon_name}}</i><em
				 slot="t4" v-for="i in  tt_tit.activities" :key="i.id">{{tt_tit.activities[0].description}}（APP专享）</em></p>
			<div>
				<span>商家公告</span>
				<p>{{tt_tit.promotion_info}}</p>
			</div>
			<div @click="type_b=false" style="border-radius: 50%;border: 1px solid #FFFFFF;width: 1.5rem;height: 1.5rem;text-align: center;line-height: 1.5rem;margin: 0 auto;margin-top: 7rem;">
				<i style="color: #FFFFFF;font-size: .8rem;" class="iconfont">&#xe71d;</i>
			</div>
		</div>
		<div class='pos'>
			<z_introduce>
				<h3 slot="t1">{{tt_tit.name}}</h3>
				<p slot="t2" v-if="tt_tit.piecewise_agent_fee">商家配送／分钟送达／{{tt_tit.piecewise_agent_fee.tips}}</p>
				<p slot="t3">{{tt_tit.promotion_info}}</p>
				<img :src="'//elm.cangdu.org/img/'+tt_tit.image_path" slot='t6'>
				<span slot="t4" v-for="(i,$index) in  tt_tit.activities" v-if="$index<=0" :key="i.id">{{tt_tit.activities[0].description}}（APP专享）</span>
				<span v-for="(i,$index) in  tt_tit.activities" v-if="$index<=0" slot="t5">{{tt_tit.activities.length}}个活动</span>
				<i class="introduce_btn_l_i" v-for="(i,$index) in tt_tit.activities" v-if="$index<=0" slot='t7'>{{tt_tit.activities[0].icon_name}}</i>
				<i @click="type_b=true" v-for="(i,$index) in tt_tit.activities" v-if="$index<=0" slot='t8' class="iconfont">&#xe60f;</i>
			</z_introduce>
			<img class="ba_img" :src="'//elm.cangdu.org/img/'+tt_tit.image_path" slot="ba">
			<div class="commodity">
				<div @click="in_dex=1">
					<span :class="in_dex==1?'bl':''">商品</span>
				</div>
				<div @click="in_dex=2">
					<span :class="in_dex==2?'bl':''">评价</span>
				</div>
			</div>
		</div>
		<div class="rel">
			<div class="commCt">
				<div v-show="in_dex==1">
					<div class="commCt_l">
						<div>
							<p v-for="(i,$index) in i_arr" @click="type_i=$index" :key='$index' :class="type_i==$index?'cl':''">
								<a href='javascript:;' @click.prevent="custormAnchor($index)"><span>{{i.name}}</span></a>
							</p>
						</div>
					</div>
					<div class="commCt_r" id="commCt_r" ref='it'>
						<div v-for="(i,$index) in i_arr">
							<div :id='$index'>
								<div class="tt_tit">
									<p>{{i.name}}</p>
									<span>{{i.description}}</span>
									<i @click="tit_type=!tit_type" style="position: relative;">...
										<span v-show="tit_type" style="position: absolute;z-index: 99999999999;top: .5rem;left: -3.5rem;width: 5rem;display: inline-block;">
											<span>{{i.name}}</span>
											<span>{{i.description}}</span>
										</span>
									</i>
								</div>
								<z_ask v-for="(b,$index) in i.foods" :num='b' :key='$index'>
									<img slot='m1' :src="'//elm.cangdu.org/img/'+b.image_path">
									<h4 slot='m2'>{{b.name}}</h4>
									<p slot="m3">{{b.description}}</p>
									<em slot="m5">{{b.tips}}</em>
									<span slot="m6" v-if="b.activity">{{b.activity.image_text}}</span>
									<p slot="m7">新品</p>
								</z_ask>
							</div>
						</div>
					</div>
				</div>
				<div v-if="in_dex==2">
					<div class="pj_t">
						<div class="pj_t_l">
							<h4>{{tt_tit.rating}}</h4>
							<p>综合评价</p>
							<span>高于周边商家76.9%</span>
						</div>
						<div class="pj_t_r">
							<div><span>服务态度</span>
								<z_xingxing></z_xingxing>
							</div>
							<div><span>菜品评价</span>
								<z_xingxing></z_xingxing>
							</div>
							<div><span>送达时间</span><i>分钟</i></div>
						</div>
					</div>
					<div class="pj_con">
						<div v-for="(i,$index) in arr_type" :key='$index' class="pj_con_i">
							<span>{{i.name}}</span>
							<p>({{i.count}})</p>
						</div>
					</div>
					<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100">
						<z_evaluate v-for='(i,$index) in arr_in' :key='$index'>
							<img slot="p1" :src="'https://fuss10.elemecdn.com/'+i.avatar">
							<i slot="p2">{{i.username}}</i>
							<em slot="p3">{{i.rated_at}}</em>
							<p slot="p4">{{i.time_spent_desc}}</p>
							<img v-for="(b,$index) in i.item_ratings" :key='$index' slot="p5" :src="'https://fuss10.elemecdn.com/'+b.image_hash">
							<p v-for="(b,$index) in i.item_ratings" :key='$index' slot="p6">{{b.food_name}}</p>
						</z_evaluate>
					</div>
				</div>
			</div>
		</div>
		<div class="guc_js" v-show="in_dex==1">
			<div class="guc_js_l">
				<p><i>￥</i>{{$store.getters.returnPrice}}</p>
				<span v-if="tt_tit.piecewise_agent_fee">{{tt_tit.piecewise_agent_fee.tips}}</span>
			</div>
			<div class="guc_js_r">
				<em :style="$store.getters.returnPrice?'background:green;':'background: #2C3E50;'">去结算</em>
			</div>
		</div>
		<div v-show="in_dex==1" @click="a_type_z=!a_type_z" :style="$store.getters.returnPrice?'background: blue;':'background: #000000;'"
		 class="js_ic">
			<em></em>
			<i class="iconfont">&#xe613;</i>
		</div>
		<div v-show="a_type_z">
			<div class="clear_price">
				<span>购物车</span>
				<em @click="clear_z"><i class="iconfont">&#xe616;</i>清空</em>
			</div>
			<div style="position: absolute;bottom:0rem;width: 100%;background: #FFFFFF;box-sizing: 100;height: 190px;background: #FFFFFF;z-index: 999999999;overflow: hidden;">
				<div v-for="i in $store.state.Shopitem">
					<div style="line-height: 1rem;background: #FFFFFF;overflow: hidden;">
						<span style="font-size: .5rem;color: #666;font-weight: 700;
						padding-left: .8rem;float: left;padding-right: .5rem;width: 2rem;">{{i.name}}</span>
						<!-- <span style="font-size: .5rem;color: #f60;font-family: Helvetica Neue,Tahoma;font-weight: 700;">{{i.specfoods[0].price}}</span> -->
						<z_ask :num="i" style='padding: 0px !important;margin-top: -.6rem;width: 100%;'>
							<z_amount>
								<span class="amountz_l_i" slot="js1">¥</span>
								<span class="amountz_l_num" slot="js2">{{i.specfoods[0].price}}</span>
								<span class="amountz_r_j" @click="btm()" v-show="i_num>0" slot="js4">-</span>
								<span class="amountz_r_n" v-show="i_num>0" slot="js5">{{i_num}}</span>
								<span class="amountz_r_jj" @click="btn()" slot="js6">+</span>
							</z_amount>
						</z_ask>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		InfiniteScroll
	} from 'mint-ui';
	Vue.use(InfiniteScroll);
	import z_amount from "../components/amount.vue";
	import z_evaluate from "../components/evaluate.vue";
	import z_xingxing from "../components/xingxing.vue";
	import z_ask from "../components/ask.vue";
	import z_introduce from "../components/introduce.vue";
	import z_carousel from "../components/carousel.vue";
	import z_businesses from "../components/businesses.vue";
	import lh_header from "../components/lh-header.vue";
	export default {
		components: {
			lh_header,
			z_businesses,
			z_carousel,
			z_introduce,
			z_ask,
			z_xingxing,
			z_evaluate,
			z_amount
		},
		data() {
			return {
				in_dex: 1,
				type_i: 0,
				i_arr: '',
				arr_in: '',
				arr_type: '',
				id: this.$route.params.g_id,
				tt_tit: '',
				type_b: false,
				a_type_z: false,
				tit_type: false,
				i_num: 0,
				offset: 10,
				listarr: [],
				v_type: false,
				loading: false,
				allLoaded: false,
			}
		},
		created() {
			this.axios.get('https://elm.cangdu.org/shopping/restaurant/' + this.id).then((data) => {
				// console.log(data.data)
				this.tt_tit = data.data
			})
			this.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=' + this.id).then((data) => {
				// console.log(data.data)
				this.i_arr = data.data
			})
			this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/' + this.id + '/ratings?offset=0&limit=10').then((data) => {
				// console.log(data.data)
				this.arr_in = data.data
			})
			this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/' + this.id + '/ratings/tags').then((data) => {
				// console.log(data.data)
				this.arr_type = data.data
			})
		},
		methods: {
			custormAnchor(anchorName) {
				// 找到锚点
				let anchorElement = document.getElementById(anchorName);
				// 如果对应id的锚点存在，就跳转到锚点
				if (anchorElement) {
					anchorElement.scrollIntoView();
				}
			},
			loadMore() {
				console.log(1)
				alert(1)
				this.v_type = true
				this.loading = true;
				this.axios.get(
					`https://elm.cangdu.org/ugc/v2/restaurants/${this.id}/ratings?offset=${this.offset+=10}&limit=10`
				).then(data => {
					// this.offset = this.offset + 10
					// console.log(data)
					setTimeout(() => {
						this.listarr = data.data;
						this.arr_in = [...this.arr_in, ...this.listarr]
						this.allLoaded = true; // 若数据已全部获取完毕
						this.loading = false;
						this.v_type = false
					}, 2000);
				})
			},
			btn() {
				this.i_num++
				this.$store.commit('GetShopitem', this.num)
			},
			btm() {
				if (this.i_num > 0) {
					this.i_num--
				} else {
					this.i_num = 0
				}
				this.$store.commit('GetShopitemdown', this.num)
			},
			clear_z() {
				this.$store.state.Shopitem = []
			}
		},
	}
</script>

<style>
	html {
		/* overflow: hidden; */
	}

	.clear_price {
		position: absolute;
		z-index: 999999;
		bottom: 5.5rem;
		overflow: hidden;
		width: 100%;
		background: #CCCCCC;
	}

	.clear_price span {
		float: left;
		display: inline-block;
		padding: .5rem 0;
		padding-left: .5rem;
		font-size: .5rem;
		color: #666;
	}

	.clear_price em {
		float: right;
		display: inline-block;
		padding: .5rem 0;
		padding-right: .5rem;
		font-size: .4rem;
		color: #666;
	}

	.guc_js {
		overflow: hidden;
		background: #000000;
		position: absolute;
		bottom: 0;
		z-index: 99999999999;
		width: 100%;
	}

	.js_ic {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		border: 4px solid #2C3E50;
		position: absolute;
		bottom: .5rem;
		left: .5rem;
		z-index: 999999999999;
		line-height: 2rem;
		text-align: center;
	}

	.js_ic i {
		font-size: 1.3rem;
		color: #FFFFFF;
	}

	.guc_js_l {
		float: left;
		padding-left: 3rem;
	}

	.guc_js p {
		font-size: .6rem;
		font-weight: 700;
		color: #fff;
	}

	.guc_js p i {
		font-size: .6rem;
		font-weight: 700;
		color: #fff;
	}

	.guc_js span {
		font-size: .4rem;
		color: #fff;
	}

	.guc_js_r {
		float: right;
	}

	.guc_js em {
		font-size: .7rem;
		color: #fff;
		font-weight: 700;
		padding: .3rem;
		display: inline-block;
		background: #2C3E50;
	}

	#spcart {
		position: relative;
	}

	.zhezhao {
		padding: 0;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		color: #333;
		font-weight: 400;
		font-family: Microsoft Yahei;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;


		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #262626;
		z-index: 200;
		padding: 1.25rem;
		z-index: 99999999;
	}

	.zhezhao h2 {
		color: #FFFFFF;
		text-align: center;
		font-size: .5rem;
		color: #fff;
		margin-bottom: 1.6rem;
	}

	.zhezhao span {
		color: #FFFFFF;
		text-align: center;
		display: block;
		font-size: .3rem;
		color: #fff;
		border: .025rem solid #555;
		padding: .1rem .2rem;
		border-radius: .5rem;
		width: 1.4rem;
		margin: 0 auto;
		margin-bottom: .6rem;
	}

	.zhezhao p {
		color: #FFFFFF;
		margin-bottom: .8rem;
	}

	.zhezhao i {
		color: #FFFFFF;
	}

	.zhezhao em {
		color: #fff;
		line-height: .3rem;
	}

	#spcart .ba_img {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}

	#spcart .rel {
		/* position: absolute;
		z-index: 9;
		top: 5.05rem;
		width: 100%; */
	}

	#spcart .l_bd {
		background: rgba(0, 0, 0, 0);
	}

	.pj_con {
		padding: .34rem;
		background: #FFFFFF;
	}

	.pj_con_i {
		color: #6d7885;
		padding: .2rem;
		background-color: #ebf5ff;
		border-radius: .2rem;
		border: 1px;
		margin: 0 .4rem .2rem 0;
		display: inline-block;
	}

	.pj_con_i span {
		font-size: .4rem;
	}

	.pj_con_i p {
		font-size: .4rem;
		display: inline-block;
	}

	.pj_t {
		overflow: hidden;
		padding: .6rem 1.34rem;
		background: #FFFFFF;
		margin-bottom: .3rem;
	}

	.pj_t_l {
		float: left;
	}

	.pj_t_l h4 {
		font-size: .62rem;
		color: #f60;
		text-align: center;
	}

	.pj_t_l p {
		font-size: .42rem;
		color: #666;
		margin-bottom: .1rem;
		text-align: center;
	}

	.pj_t_l span {
		font-size: .26rem;
		color: #999;
	}


	.pj_t_r {
		/* float: left; */
		padding-left: 3.5rem;
	}

	.pj_t_r div {
		line-height: .6rem;
		display: inline-block;
	}

	.pj_t_r div span {
		color: #666;
		margin-right: .4rem;
		font-size: .4rem;
	}

	.pj_t_r div em {
		width: 3rem;
		font-size: .3rem;
		color: #f60;
	}

	.pj_t_r div i {
		font-size: .3rem;
		color: #999;
	}

	.tt_tit {
		overflow: hidden;
	}

	.tt_tit p {
		display: inline-block;
		font-size: .45rem;
		color: #666;
		font-weight: 700;
		line-height: 1.36rem;
		padding: 0 .2rem;
	}

	.tt_tit span {
		font-size: .35rem;
		color: #999;
		width: 30%;
		overflow: hidden;
		line-height: 1.36rem;
	}

	.tt_tit i {
		line-height: 1.36rem;
		float: right;
		padding-right: .5rem;
		display: inline-block;
	}

	.pos {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999999999;
		width: 100%;
		overflow: hidden;
	}

	.commodity {
		overflow: hidden;
		background: #FFFFFF;
		border-bottom: 1px solid #CCCCCC;
		width: 100%;
		/* position: fixed;
		top: 3.65rem;
		z-index: 2; */
	}

	.commodity div {
		width: 50%;
		float: left;
		text-align: center;
		line-height: .7rem;
		padding: .3rem 0;
	}

	.commodity div span {
		font-size: .45rem;
		padding: .15rem 0;
	}

	.bl {
		color: #3190e8;
		border-bottom: 2px solid #3190e8;
	}

	.sp_fj {
		background: #FFFFFF;
		padding-left: .25rem;
	}

	.sp_fj i {
		fill: #999;
		font-size: .6rem;
		padding-top: .2rem;
	}

	.sp_fj span {
		color: #999;
		font: .4rem/.4rem Microsoft YaHei;
	}

	.commCt {
		overflow: hidden;
		padding-top: 3.6rem;
		background: #f5f5f5;
	}

	.commCt_l {
		/* padding-top: .95rem; */
		float: left;
		width: 23%;
		overflow-y: scroll;
		height: 17.4rem;
	}

	.commCt_l p {
		padding: .7rem .3rem;
		border-bottom: .025rem solid #ededed;
		box-sizing: border-box;
		border-left: .15rem solid #f8f8f8;
		position: relative;

	}

	.commCt_l p span {
		font-size: .4rem;
	}

	.commCt_l .cl {
		border-left: .15rem solid #3190e8;
		background-color: #fff;
	}

	.commCt_r {
		width: 77%;
		float: right;
		overflow-y: scroll;
		height: 17.4rem;
	}

	#spcart .introduce_btn_l_i {
		display: inline-block;
		padding: 0 .05rem;
		background-color: rgb(240, 115, 115);
		border-color: rgb(240, 115, 115);
		margin-right: .1rem;
	}
</style>

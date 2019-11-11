<template>
	<div id="spcart">
		<lh_header :title="$store.state.CityName" :path_r="'/'">
			<div slot="right">
				<span>登录</span><span>注册</span>
			</div>
		</lh_header>
		<div>
			<z_introduce class='pos'>
				<h3 slot="t1">效果演示</h3>
				<p slot="t2">商家配送／分钟送达／配送费¥5</p>
				<p slot="t3">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
				<span slot="t4">满30减5，满60减8（APP专享）</span>
				<span slot="t5">1个活动</span>
			</z_introduce>
			<div class="commodity">
				<div @click="in_dex=1">
					<span :class="in_dex==1?'bl':''">商品</span>
				</div>
				<div @click="in_dex=2">
					<span :class="in_dex==2?'bl':''">评价</span>
				</div>
			</div>
		</div>

		<div>

			<div class="commCt">
				<div v-show="in_dex==1">
					<div class="commCt_l">
						<div>
							<p v-for="(i,$index) in i_arr" @click="type_i=$index" :key='$index' :class="type_i==$index?'cl':''">
								<span>{{i.name}}</span>
							</p>
						</div>
					</div>
					<div class="commCt_r" id="commCt_r" ref='it'>
						<div v-for="(i,$index) in i_arr">
							<div class="tt_tit">
								<p>{{i.name}}</p>
								<span>{{i.description}}</span>
								<i>...</i>
							</div>
							<z_ask v-for="(b,$index) in i.foods">
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
				<div v-show="in_dex==2">
					<div class="pj_t">
						<div class="pj_t_l">
							<h4>4.7</h4>
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
					<div>
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
	</div>
</template>

<script>
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
		},
		data() {
			return {
				in_dex: 1,
				type_i: 0,
				i_arr: '',
				arr_in: '',
				arr_type: '',
			}
		},
		created() {
			this.$http.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((data) => {
				this.i_arr = data.data
			})
			this.$http.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10').then((data) => {
				console.log(data.data)
				this.arr_in = data.data
			})
			this.$http.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags').then((data) => {
				// console.log(data.data)
				this.arr_type = data.data
			})
		},
	}
</script>

<style>
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
		z-index: 9;
		width: 100%;
	}

	.commodity {
		overflow: hidden;
		background: #FFFFFF;
		border-bottom: 1px solid #CCCCCC;
		position: fixed;
		padding-top: 2.3rem;
		width: 100%;
		z-index: 2;
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
		padding-top: 3.65rem;
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
		/* padding-top: .95rem; */
		width: 77%;
		float: right;
		overflow-y: scroll;
		height: 17.4rem;
	}
</style>


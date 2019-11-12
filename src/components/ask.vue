<template>
	<div>
		<div class="ask">
			<div class="ask_l">
				<slot name="m1"></slot>
			</div>
			<div class="ask_r">
				<h4>
					<slot name="m2"></slot>
				</h4>
				<p>
					<slot name="m3"></slot>
				</p>

				<p>
					<span>
						<slot name="m4"></slot>
					</span>
					<em>
						<slot name="m5"></slot>
					</em>
				</p>
				<p class="i_t">
					<slot name="m6"></slot>
				</p>
			</div>
			<z_amount>
				<span class="amountz_l_i" slot="js1">¥</span>
				<span class="amountz_l_num" slot="js2">{{num.specfoods[0].price}}</span>
				<span class="amountz_l_t" slot="js3">起</span>
				<span class="amountz_r_j" @click="btm()" v-show="i_num>0" slot="js4">-</span>
				<span class="amountz_r_n" v-show="i_num>0" slot="js5">{{i_num}}</span>
				<span class="amountz_r_jj" @click="btn()" slot="js6">+</span>
			</z_amount>
			<p class="text">
				<slot name="m7"></slot>
			</p>
		</div>
	</div>
</template>

<script>
	import z_amount from "./amount.vue";
	export default {
		components: {
			z_amount,
		},
		data() {
			return {
				i_num: 0,
				z_num: 0,
				z_arr: [],
				i_obj: {},
			}
		},
		props: ["num"],
		methods: {
			btn() {
				this.i_num++
				console.log(this.num)
				this.$store.commit('GetShopitem', this.num)
			},
			btm() {
				if (this.i_num > 0) {
					this.i_num--
				} else {
					this.i_num = 0
				}
				this.$store.commit('GetShopitemdown', this.num)
			}
		},
		updated() {
			this.z_num = this.i_num * this.num.specfoods[0].price
			// console.log(this.z_num)
		},
		mounted() {
			this.i_obj = {
				sl: this.i_num, //数量
				dj: this.num.specfoods[0].price, //单价
				name: this.num.name, //商品名
				ch: 0, //餐具费
				yf: this.num.float_delivery_fee, //配送费
				item_zjg: this.z_num, //单个总价格
				z_jg: 0, //总价格
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	ul,
	ol {
		list-style-type: none;
	}

	img {
		display: block;
	}

	a {
		text-decoration: none;
	}

	em,
	i {
		font-style: normal;
	}

	.amountz_l_i {
		font-size: .3rem;
		color: #f60;
		margin-right: .05rem;
	}

	.amountz_l_num {
		font-size: .5rem;
		color: #f60;
		font-weight: 900;
		margin-right: .2rem;
	}

	.amountz_l_t {
		font-size: .3rem;
		color: #666;
	}

	.amountz_r_j {
		background: #3190e8;
		font-size: .5rem;
		border-radius: 50%;
		display: inline-block;
		width: .6rem;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		color: #FFFFFF;
		margin-right: .3rem;
	}

	.amountz_r_n {
		color: #666;
		font-size: .5rem;
		text-align: center;
		font-family: Helvetica Neue, Tahoma;
	}

	.amountz_r_jj {
		position: relative;
		z-index: 999;
		background: #3190e8;
		font-size: .5rem;
		border-radius: 50%;
		display: inline-block;
		width: .6rem;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		color: #FFFFFF;
		/* padding-left: .3rem; */
	}

	.ask {
		background-color: #fff;
		padding: .4rem .25rem;
		border-bottom: 1px solid #f8f8f8;
		position: relative;
		overflow: hidden;
	}

	.ask .text {
		position: absolute;
		left: -0.6rem;
		top: -0.3rem;
		background: rgb(94, 196, 82);
		color: #FFFFFF;
		border-color: rgb(94, 196, 82);
		font-size: .3rem;
		padding: .1rem;
		transform: rotate(-45deg);
		padding: 0 .5rem;
		padding-top: .5rem;
	}

	.ask_l {
		float: left;
	}

	.ask_l img {
		width: 1.38rem;
		height: 1.38rem;
	}

	.ask_r {
		padding-left: 1.65rem;
	}

	.ask_r h4 {
		margin-bottom: .05rem;
		font-size: .45rem;
		color: #333;
	}

	.ask_r p {
		font-size: .35rem;
		color: #999;
		line-height: .6rem;
	}

	.ask_r p em {
		font-size: .35rem;
		color: #333;
		font-weight: 500;
	}

	.ask_r p span {
		font-size: .35rem;
		color: #333;
		font-weight: 500;
	}

	.ask_r .i_t span {
		line-height: .4rem;
		color: rgb(241, 136, 79);
		border-color: rgb(240, 115, 115);
		border: 1px solid currentColor;
		border-radius: .3rem;
		margin-left: .1rem;
		margin-top: .06rem;
		padding: 0 .1rem;
		display: inline-block;
		/* color: currentColor; */
	}

	.ask_r .i_t span {
		color: rgb(241, 136, 79);
		font-size: .1rem;
	}
</style>

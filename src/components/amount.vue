<template>
	<div style="padding-top: .2rem;">
		<div class="amountz">
			<div></div>
			<div class="amountz_l">
				<span class="amountz_l_i">
					<slot name="js1"></slot>
				</span>
				<span class="amountz_l_num">
					<slot name="js2"></slot>
				</span>
				<span class="amountz_l_t">
					<slot name="js3"></slot>
				</span>
			</div>
			<div class="amountz_r">
				<span>
					<slot name="js4"></slot>
				</span>
				<span>
					<slot name="js5"></slot>
				</span>
				<span v-show="!date.specifications[0]" class="amountz_r_jj">
					<slot name="js6"></slot>
				</span>

				<div v-show="date.specifications[0]" class="p_size" @click="pushShopCar">
					<span v-if="date.specifications[0]" class="size">选{{date.specifications[0].name}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["date"],
		data(){
			return{
				nowDate:{},
				status:0
			}
		},
		methods:{
			pushShopCar(){
				this.$alert('shopcar',this.date,(res)=>{
					this.nowDate = res
					this.status++
				})
			}
		},
		watch:{
			'status'(){
				this.$store.commit('GetShopitem',this.nowDate)
			}
		}
	}
</script>

<style>
	.p_size {
		text-align: right;
	}

	.size {
		display: inline-block;
		font-size: .35rem;
		color: #fff;
		padding: .1rem .2rem;
		background-color: #3190e8;
		border-radius: .2rem;
		border: 1px solid #3190e8;
	}

	.amountz {
		overflow: hidden;
		padding-left: 1.65rem;
		padding-top: .3rem;
	}

	.amountz_l {
		float: left;
	}

	.amountz_l .amountz_l_i {
		font-size: .3rem;
		color: #f60;
		margin-right: .05rem;
	}

	.amountz_l .amountz_l_num {
		font-size: .5rem;
		color: #f60;
		font-weight: 900;
		margin-right: .2rem;
	}

	.amountz_l .amountz_l_t {
		font-size: .3rem;
		color: #666;
	}

	.amountz_r {
		float: right;
	}

	.amountz_r .amountz_r_j {
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

	.amountz_r .amountz_r_n {
		color: #666;
		font-size: .5rem;
		text-align: center;
		font-family: Helvetica Neue, Tahoma;
		margin-right: .3rem;
	}

	.amountz_r .amountz_r_jj {
		position: relative;
		z-index: 999;
		/* background: #3190e8; */
		font-size: .5rem;
		border-radius: 50%;
		display: inline-block;
		width: .6rem;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		color: #FFFFFF;
	}
</style>

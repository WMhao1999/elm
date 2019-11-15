<template>
	<div id="aboutShop" ref="con">
		<div>
			<lh_header :title="ding_n.name">
				<div slot="left">
					<router-link :to="{path:'/spcart/'+$route.params.id,params:{}}">
						<i style="color:#fff" class="iconfont">&#xe642;</i>
					</router-link>
				</div>
			</lh_header>
		</div>
		<div class="wzw_con">
			<img :src="'//elm.cangdu.org/img/'+ding_n.image_path" alt="">
			<p>{{ding_n.description}}</p>
			<em>{{ding_n.name}}</em>
			<p>评分<span><z_xingxing style='display: inline-block;'></z_xingxing></span></p>
			<p>月售<span class="ospa">售價{{ding_n.specfoods[0].price}}起</span></p>
			<p>{{ding_n.tips}}</p>
		</div>
	</div>
</template>

<script>
	import z_xingxing from "./../components/xingxing.vue";
	import lh_header from "./../components/lh-header.vue";
	export default {
		components: {
			lh_header,
			z_xingxing
		},
		data() {
			return {
				ding: "",
				ding_n:null
			};
		},
		created() {
			if(this.$route.params.name){
				this.ding_n=JSON.parse(this.$route.params.name)
				console.log(this.ding_n)
			}
			
			setTimeout(()=>{
				this.$refs.con.style.left = 0
				this.$refs.con.style.right = 0
			},10)
		},
	};
</script>

<style>
	#aboutShop {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 100%;
		right: 100%;
		background: #fff;
		transition: all 0.3s;
	}
	.wzw_con img {
		width: 100%;
	}

	.wzw_con p {
		font-size: .45rem;
		padding-top: .2rem;
		padding-left: .3rem;
		color: #333;
	}

	.wzw_con em {
		font-size: .5rem;
		display: block;
		padding-top: .2rem;
		padding-left: .3rem;
	}

	.wzw_con .ospa {
		color: #f60;
		margin-left: .2rem;
	}
</style>

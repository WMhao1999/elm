<template>
	<div style="background: #FFFFFF;width: 100%;height: 100%;">
		<div>
			<lh_header :title="this.ding.name.name">
				<div slot="left">
					<router-link :to="{name:'spcart',params:{}}">
						<i style="color:#fff" class="iconfont">&#xe642;</i>
					</router-link>
				</div>
			</lh_header>
		</div>
		<div class="wzw_con">
			<img :src="'//elm.cangdu.org/img/'+ding.name.image_path" alt="">
			<p>{{ding.name.description}}</p>
			<em>{{ding.name.name}}</em>
			<p>评分<span><z_xingxing style='display: inline-block;'></z_xingxing></span></p>
			<p>月售<span class="ospa">售價{{ding.name.specfoods[0].price}}起</span></p>
			<p>{{ding.name.tips}}</p>
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
			};
		},
		created() {
			this.ding=this.$route.params
			console.log(this.ding)
		},
	};
</script>

<style>
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

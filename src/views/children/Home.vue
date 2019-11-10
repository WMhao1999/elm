<template>
	<div id="order">
		<lh_header :title="$store.state.City.name" :path_r="'/'">
			
			<div slot="right">
				<span>登录</span><span>注册</span>
			</div>
		</lh_header>
		<div style="background: #f5f5f5;">
			<z_carousel></z_carousel>
			<div class="sp_fj">
				<i>i</i>
				<span>附近商家</span>
			</div>
			<z_businesses>
				<em slot="i1">14小时43分钟</em>
				<span slot="i2">1380.5公里</span>
				<span slot="i3">¥20起送配</span>
				<span slot="i4">/送费约¥5</span>
				<span slot="i5">月售106单</span>
			</z_businesses>
		</div>
	</div>
</template>

<script>
	import z_carousel from "../../components/carousel.vue";
	import z_businesses from "../../components/businesses.vue";
	import lh_header from "../../components/lh-header.vue";
	export default {
		components: {
			lh_header,
			z_businesses,
			z_carousel
		},
	}
</script>

<style>
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
</style>

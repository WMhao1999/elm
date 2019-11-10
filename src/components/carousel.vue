<template>
	<div>
		<!-- Swiper -->
		<div class="swiper-container con">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="isp_i" v-for="i in 8">
						<img class="img" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg">
						<p>甜品饮品</p>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="isp_i" v-for="i in 8">
						<img class="img" src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg">
						<p>甜品饮品</p>
					</div>
				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination dian" style="bottom: 0px;"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	export default {
		name: 'HelloWorld',
		mounted() {
			// new Swiper('.swiper-container', {
			// 	slidesPerView: 6,
			// })
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
			});
		},
	}
</script>

<style>
	.con {
		margin-bottom: .3rem;
	}

	.dian {
		bottom: 0px;
	}

	.isp_i {
		background: #FFFFFF;
		width: 25%;
		float: left;
	}

	.isp_i .img {
		width: 1.5rem;
		height: 1.5rem;
		margin: 0 auto;
		margin-bottom: .5rem;
	}

	.isp_i p {
		text-align: center;
		font-size: .335rem;
		color: #666;
		margin-bottom: .5rem;
	}
</style>

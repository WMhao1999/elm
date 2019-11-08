<template>
	<div id="Myself_foot">
		<div class="foot-a" style="padding:0.37rem 0.21rm 0 0.5rem;overflow:hidden">
			<span :class="['iconfont']" v-html="icon" style="font-size:0.55rem;padding:0.37rem 0 0 0.5rem;float:left"></span>
			<p style="float:left;width:86.5%; padding:0.39rem 0 0 0.21rem;font-size:0.44rem;border-bottom:1px solid #ccc;padding-bottom:.40rem">
				{{name}}
				<span class="iconfont icon-arrowRight" style="color:#cacaca;float:right;font-size:.5rem"></span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['name', 'icon'],
	}
</script>

<style scoped>
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>

<template>
	<div id="seaList">
		<div class="icon">
			<img :src="'//elm.cangdu.org/img/'+seaData.image_path">
		</div>
		<div class="mian">
			<p>{{seaData.name}}</p>
			<p>月售{{seaData.recent_order_num}}单</p>
			<p>{{seaData.float_minimum_order_amount}}元起送</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:['seaData'],
	}
</script>

<style scoped>
	#seaList{
		overflow: hidden;
		padding: 0.3rem;
		background: #FFFFFF;
		border-bottom: 1px #ccc solid;
	}
	.icon {
		width: 1.2rem;
		height: 1.2rem;
		float: left;
		background: pink;
		margin-right: 0.3rem;
	}
	.icon img{
		width: 1.2rem;
		height: 1.2rem;
	}
	.mian{
		border-bottom: 1px #ccc solid;
		float: left;
		width: 8.6rem;
	}
	.mian>p{
		line-height: 0.8rem;
		font-size: 0.36;
	}
</style>

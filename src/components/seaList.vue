<template>
	<div id="seaList">
		<div class="icon"></div>
		<div class="mian">
			<p>送外卖吗？</p>
			<p>月售752单</p>
			<p>20元起送</p>
		</div>
	</div>
</template>

<script>
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

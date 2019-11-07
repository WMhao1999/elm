<template>
	<div id="order">
		这里是点餐tap切换页面
		<br>
		<br>
		<br>
		<br>
		<br>
		...
		<router-view></router-view>
		<div>
			<div>
				<router-link to="/order/">外卖</router-link>
			</div>
			<div>
				<router-link to="/order/search">搜索</router-link>
			</div>
			<div>
				<router-link to="/order/form">订单</router-link>
			</div>
			<div>
				<router-link to="/order/myself">我的</router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>

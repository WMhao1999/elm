<template>
	<div id="order">
		<transition name="fade">
			<router-view />
		</transition>
		<div class="foot">
			<div>
				<router-link to="/order/">
					<div></div>
					<p>外卖</p>
				</router-link>
			</div>
			<div>
				<router-link to="/order/search">
					<div></div>
					<p>搜索</p>
				</router-link>
			</div>
			<div>
				<router-link to="/order/form">
					<div></div>
					<p>订单</p>
				</router-link>
			</div>
			<div>
				<router-link to="/order/myself">
					<div></div>
					<p>我的</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	html,
	body {
		width: 100%;
		height: 100%;
		background: red;
		position: relative;
	}

	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 0.3rem 0;
		display: flex;
		background: #fff;
	}

	.foot>div {
		flex: 1;
		float: left;
		text-align: center;
	}

	.foot>div div {
		width: 0.8rem;
		height: 0.8rem;
		background: yellow;
		display: inline-block;
		margin-bottom: 0.2rem;
	}
</style>

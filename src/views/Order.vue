<template>
	<div id="order">
		<transition name="fade">
			<router-view />
		</transition>
		<div class="foot">
			<div>
				<router-link to="/order/">
					<div class="iconfont icon-changyonglogo40
"></div>
					<p>外卖</p>
				</router-link>
			</div>
			<div>
				<router-link to="/order/search">
					<div class="iconfont icon-Safari"></div>
					<p>搜索</p>
				</router-link>
			</div>
			<div>
				<router-link to="/order/form">
					<div class="iconfont icon-weibiaoti-"></div>
					<p>订单</p>
				</router-link>
			</div>
			<div>
				<router-link to="/order/myself">
					<div class="iconfont icon-wode"></div>
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
		/* background: yellow; */
		display: inline-block;
		margin-bottom: 0.2rem;
			line-height: 0.8rem;
	}
	.icon-changyonglogo40{
		width: 0.8rem;
		font-size: 0.8rem
	}
	.icon-Safari{
			font-size: 0.5rem;
		width: 0.8rem;
		height: 0.8rem;
	}
	.icon-weibiaoti-{
			font-size: 0.6rem;
		width: 0.8rem;
		height: 0.8rem;
	}
	.icon-wode{
			font-size: 0.55rem;
		width: 0.8rem;
		height: 0.8rem;
	}
</style>

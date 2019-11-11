<template>
	<div id="order">
		<transition name="fade">
			<router-view />
		</transition>
		<div class="foot">
			<div v-for="i in itemData" class="foot_item">
				<router-link :to="i.path" style="display: block; text-align: center;">
					<div :class="i.icon" :style="{color:$route.path==i.path?'#0a97ff':'#656565'}"></div>
					<p style="color:#656565;">{{i.name}}</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				itemData:[
					{
						name:'外卖',
						path:'/order/',
						icon:'iconfont icon-changyonglogo40'
					},
					{
						name:'搜索',
						path:'/order/search',
						icon:'iconfont icon-Safari'
					},
					{
						name:'订单',
						path:'/order/form',
						icon:'iconfont icon-weibiaoti-'
					},
					{
						name:'我的',
						path:'/order/myself',
						icon:'iconfont icon-wode'
					}
				]
			}
		}
	}
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
	.iconfont{
		display: inline-block;
		font-size: 0.8rem;
	}
</style>

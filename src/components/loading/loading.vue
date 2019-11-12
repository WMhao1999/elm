<template>
	<div id="loading">
		<div class="load">
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481608014&di=45dc092d99b0cd7d07f3c2c1805d33f5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170925%2F4ae3af032934412187607e077c3a3e14.gif" alt="">
		</div>
	</div>
</template>

<style scoped>
	#loading{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		background: #ffffff;
		background: url(../../assets/bg.png);
		background-size: 100% 100%;
	}
	.load{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.load>img{
		width: 100%;
	}
</style>

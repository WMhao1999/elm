<template>
	<div>
		<div class="ask">
			<div class="ask_l">
				<img src="//elm.cangdu.org/img/1675455928722796.jpg">
			</div>
			<div class="ask_r">
				<h4>腿aa</h4>
				<p>买一什么都不送</p>
				<p>
					<span>月售29份</span>
					<em>好评率66%</em>
				</p>
				<p class="i_t">买一什么都不送！！！！</p>
				<!-- <i>买一什么都不送！！！！</i> -->
			</div>
			<p class="text">新品</p>
		</div>
	</div>
</template>

<script>
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	ul,
	ol {
		list-style-type: none;
	}

	img {
		display: block;
	}

	a {
		text-decoration: none;
	}

	em,
	i {
		font-style: normal;
	}

	.ask {
		background-color: #fff;
		padding: .4rem .25rem;
		border-bottom: 1px solid #f8f8f8;
		position: relative;
		overflow: hidden;
	}

	.ask .text {
		position: absolute;
		left:-0.6rem;
		top: -0.1rem;
		background: rgb(94, 196, 82);
		color: #FFFFFF;
		border-color: rgb(94, 196, 82);
		font-size: .3rem;
		padding: .1rem;
		transform: rotate(-45deg);
		padding: 0 .5rem;
		padding-top: .5rem;
	}

	.ask_l {
		float: left;
	}

	.ask_l img {
		width: 1.38rem;
		height: 1.38rem;
	}

	.ask_r {
		padding-left: 1.65rem;
	}

	.ask_r h4 {
		margin-bottom: .24rem;
		font-size: .45rem;
		color: #333;
	}

	.ask_r p {
		font-size: .35rem;
		color: #999;
		line-height: .6rem;
		padding-bottom: 0.15rem;
	}

	.ask_r p em {
		font-size: .35rem;
		color: #333;
		font-weight: 500;
	}

	.ask_r p span {
		font-size: .35rem;
		color: #333;
		font-weight: 500;
	}

	.ask_r .i_t {
		line-height: .4rem;
		color: rgb(241, 136, 79);
		border-color: rgb(240, 115, 115);
		border: 1px solid currentColor;
		border-radius: .3rem;
		font-size: .1rem;
		float: left;
		margin-left: .1rem;
		margin-top: .06rem;
		padding: 0 .1rem;
	}
</style>

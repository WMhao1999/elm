<template>
	<div>
		<div class="amountz">
			<div class="amountz_l">
				<span class="amountz_l_i">¥</span>
				<span class="amountz_l_num">11</span>
				<span class="amountz_l_t">起</span>
			</div>
			<div class="amountz_r">
				<span class="amountz_r_j">-</span>
				<span class="amountz_r_n">1</span>
				<span class="amountz_r_jj">+</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.amountz {
		overflow: hidden;
		padding-left: 1.65rem;
		padding-top: .3rem;
	}

	.amountz_l {
		float: left;
	}

	.amountz_l .amountz_l_i {
		font-size: .3rem;
		color: #f60;
		margin-right: .05rem;
	}

	.amountz_l .amountz_l_num {
		font-size: .5rem;
		color: #f60;
		font-weight: 900;
		margin-right: .2rem;
	}

	.amountz_l .amountz_l_t {
		font-size: .3rem;
		color: #666;
	}

	.amountz_r {
		float: right;
	}

	.amountz_r .amountz_r_j {
		background: #3190e8;
		font-size: .5rem;
		border-radius: 50%;
		display: inline-block;
		width: .6rem;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		color: #FFFFFF;
		margin-right: .3rem;
	}

	.amountz_r .amountz_r_n {
		color: #666;
		font-size: .5rem;
		text-align: center;
		font-family: Helvetica Neue, Tahoma;
	}

	.amountz_r .amountz_r_jj {
		position: relative;
		z-index: 999;
		background: #3190e8;
		font-size: .5rem;
		border-radius: 50%;
		display: inline-block;
		width: .6rem;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		color: #FFFFFF;
		margin-left: .3rem;
	}
</style>

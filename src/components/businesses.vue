<template>
	<div>
		<div class="sp_item">
			<div class="sp_it_l">
				<img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
			</div>
			<div class="sp_it_r">
				<div class="it_r_t">
					<div class="it_r_t_pp">
						<i>品牌</i>
						<p>效果演示</p>
					</div>
					<div class="it_r_t_piao">
						<span>保</span>
						<span>准</span>
						<span>票</span>
					</div>
				</div>
				<div class="it_r_c">
					<div class="it_r_c_l">
						<span>4.7</span>
						<p>
							<slot name="i5"></slot>
						</p>
					</div>
					<div class="it_r_c_r">
						<span>蜂鸟专送</span>
						<em>准时达</em>
					</div>
				</div>
				<div class="it_r_b">
					<div class="it_r_b_l">
						<p>
							<slot name='i3'></slot>
							<slot name='i4'></slot>
						</p>
					</div>
					<div class="it_r_b_r">
						<span>
							<slot name='i2'></slot>
						</span>
						<i>/</i>
						<em>
							<slot name='i1'></slot>
						</em>
					</div>
				</div>
			</div>
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

	.sp_item {
		background: #FFFFFF;
		padding: 0 0.3rem;
		padding-top: 0.45rem;
		padding-bottom: 0.55rem;
		overflow: hidden;
		border-bottom: .025rem solid #f1f1f1;
	}

	.sp_item .sp_it_l {
		float: left;
	}

	.sp_item .sp_it_l img {
		width: 1.82rem;
		height: 1.82rem;
	}

	.sp_item .sp_it_r {
		padding-left: 2.26rem;
	}

	.sp_item .sp_it_r .it_r_t {
		overflow: hidden;
		padding-bottom: .15rem;
	}

	.sp_item .sp_it_r .it_r_t .it_r_t_pp {
		float: left;
	}

	.sp_item .sp_it_r .it_r_t i {
		font-size: 0.35rem;
		display: inline-block;
		background: #ffd930;
		padding: 0 0.05rem;
		border-radius: 3px;
		margin-right: 0.2rem;
	}

	.sp_item .sp_it_r .it_r_t p {
		display: inline;
		font-size: 0.43rem;
		font-weight: 700;
		color: #333;
	}

	.sp_item .sp_it_r .it_r_t .it_r_t_piao {
		float: right;
	}

	.sp_item .sp_it_r .it_r_t span {
		font-size: 0.26rem;
		color: #999;
		border: .025rem solid #f1f1f1;
		padding: 0 .04rem;
		border-radius: .08rem;
		margin-left: .05rem;
	}

	.sp_it_r .it_r_c {
		overflow: hidden;
		padding-bottom: .18rem;
	}

	.sp_it_r .it_r_c_l {
		float: left;
	}

	.sp_it_r .it_r_c_l span {
		font-size: .22rem;
		color: #ff6000;
		padding: 0 .2rem;
	}

	.sp_it_r .it_r_c_l p {
		display: inline-block;
		font-size: .2rem;
		color: #666;
	}

	.sp_it_r .it_r_c_r {
		float: right;
	}

	.sp_it_r .it_r_c_r span {
		font-size: .2rem;
		color: #fff;
		background-color: #3190e8;
		border: .025rem solid #3190e8;
		margin-right: .05rem;
		border-radius: 2px;
		padding: 0 .05rem;
	}

	.sp_it_r .it_r_c_r em {
		font-size: .2rem;
		color: #3190e8;
		border: .025rem solid #3190e8;
		border-radius: 2px;
		padding: 0 .05rem;
	}

	.sp_it_r .it_r_b {
		overflow: hidden;
	}

	.sp_it_r .it_r_b_l {
		float: left;
		font-size: .28rem;
	}

	.sp_it_r .it_r_b_l p {
		transform: scale(.9);
		color: #666;
	}

	.sp_it_r .it_r_b_r {
		float: right;
		font-size: .28rem;
	}

	.sp_it_r .it_r_b_r span {
		color: #999;
	}

	.sp_it_r .it_r_b_r i {
		color: #ccc;
		margin: 0 .1rem;
	}

	.sp_it_r .it_r_b_r em {
		color: #3190e8;
	}

	/*  */
</style>

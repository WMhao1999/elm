<template>
	<div>
		<div class="eval">
			<div class="eval_l">
				<slot name="p1"></slot>
			</div>
			<div class="eval_r">
				<p class="eval_r_t">
					<i>
						<slot name="p2"></slot>
					</i>
					<em>
						<slot name="p3"></slot>
					</em>
				</p>
				<p class="eval_r_c">
					<slot name="p4"></slot>
				</p>
				<div class='eval_rimg'>
					<div>
						<slot name="p5"></slot>
						<div>
							<slot name="p6"></slot>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
</script>

<style>
	.eval {
		overflow: hidden;
		padding: .4rem .3rem;
	}

	.eval .eval_l {
		float: left;
	}

	.eval_rimg {
		overflow: hidden;
	}

	.eval_rimg p {
		font-size: .35rem;
		color: #999;
		width: 1rem;
		display: inline-block;
		padding: .1rem;
		border: .025rem solid #ebebeb;
		border-radius: .1rem;
		margin-right: .2rem;
		margin-bottom: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.eval .eval_l img {
		width: 1.05rem;
		height: 1.05rem;
		border-radius: 50%;
	}

	.eval .eval_r {
		padding-left: 1.9rem;
	}

	.eval_r img {
		width: 2rem;
		height: 2rem;
		/* float: left; */
		display: inline-block;
		margin-left: .1rem;
	}

	.eval_r .eval_r_t {
		margin-top: -.5rem;
	}

	.eval_r .eval_r_t i {
		color: #666;
		margin-bottom: .1rem;
		font-size: .45rem;
		padding-top: .25rem;
		display: inline-block;
	}

	.eval_r .eval_r_t em {
		font-size: .4rem;
		color: #999;
		float: right;
		/* padding-top: .5rem; */
	}

	.eval_r_c {
		font-size: .35rem;
		color: #666;
		margin-left: .15rem;
		margin-bottom: .2rem;
	}

	.eval_r span {
		font-size: .35rem;
		color: #999;
		width: 1rem;
		display: inline-block;
		padding: .1rem;
		border: .025rem solid #ebebeb;
		border-radius: .1rem;
		margin-right: .2rem;
		margin-bottom: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>

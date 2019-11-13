<template>
	<div id="loading">
		<div id="loading_1" v-if="isShow">
			<div class="load">
				<img src="../../assets/timg.gif" alt="">
			</div>
		</div>
		<div id="loading_2" v-if="!isShow">
			<div class="load">
				<img src="../../assets/timg.gif" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				isShow:''
			}
		}
	}

</script>

<style scoped>
	#loading_1{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		background: url(../../assets/bg.png);
		background-size: 100% 100%;
	}
	#loading2{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
	}
	.load{
		width: 3.6rem;
		height: 3.6rem;
		border-radius: 50%;
		overflow: hidden;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.load>img{
		width: 8.4rem;
		margin-left: -2.4rem;
		margin-top: -1.4rem;
	}
</style>

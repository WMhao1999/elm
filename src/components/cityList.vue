<template>
	<div id="cityList" @click="upCityName(data.name)">
		<router-link to="/order" style="display: block;">
			<div>{{data.name}}</div>
			<p>{{data.address}}</p>
		</router-link>
	</div>
</template>

<script>
	export default {
		props:['data'],
		methods:{
			upCityName(a){
				console.log(a)
				this.$store.commit('GetCityName',a)
			}
		}
	}
</script>

<style scoped>
	#cityList{
		padding: 0.56rem;
		background: #FFFFFF;
		border-bottom: 1px #ccc solid;
	}
	#cityList div{
		font-size: 0.4rem;
		font-weight: bold;
		color: #000000;
		margin-bottom: 0.38rem;
	}
	#cityList p{
		font-size: 0.28rem;
		color: #8f8f8f;
	}
</style>

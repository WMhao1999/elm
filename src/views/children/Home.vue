<template>
	<div id="order">
		<lh_header :title="$store.state.CityName" :path_r="'/'">
			
			<div slot="right">
				<span>登录</span><span>注册</span>
			</div>
		</lh_header>
	</div>
</template>

<script>
	import lh_header from "../../components/lh-header.vue";
	export default {
		components: {
			lh_header
		},
		created(){
			console.log(this.$store.state)
		}
	}
</script>

<style>
</style>

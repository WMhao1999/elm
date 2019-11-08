<template>
	<div id="search">
		<lh_header :title="'搜索'"></lh_header>
		<div class="sp_search">
			<input type="text" placeholder="请输入商家或者美食名称">
			<div>提交</div>
		</div>
		<div class="sp_smain">
			<div class="sp_smain_tit">商家</div>
			<div>
				<seaList v-for="i in 6"></seaList>
			</div>
		</div>
	</div>
</template>

<script>
	import seaList from '../../components/seaList.vue'
	import lh_header from "../../components/lh-header.vue";
	export default {
		components:{
			seaList,
			lh_header
		}
	}
</script>

<style>
	.sp_search{
		padding: 0.3rem;
		background: #fff;
		overflow: hidden;
	}
	.sp_search>input{
		width: 74%;
		margin-right: 2%;
		float: left;
		height: 1rem;
		line-height: 1rem;
		border-radius: 8px;
		border: 1px solid #ccc;
		background: #F5F5F5;
		font-size: 14px;
		box-sizing: border-box;
		padding: 0 0.2rem;
	}
	.sp_search>div{
		float: left;
		width: 22%;
		height: 1rem;
		line-height: 1rem;
		background: #3190e8;
		border-radius: 8px;
		font-size: 16px;
		font-size: 0.42rem;
		color: #fff;
		font-weight: bold;
		text-align: center;
	}
	.sp_smain_tit{
		line-height: 1.3rem;
		height: 1.3rem;
		padding: 0 0.37rem;
		font-size: 0.4rem;
		font-weight: bold;
		color: #686868;
	}
</style>

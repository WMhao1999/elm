<template>
	<div>
		<el-rate class='xin' v-model="value" disabled show-score text-color="#ff9900" score-template="{value}">
		</el-rate>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: 3.7
			}
		}
	}
</script>

<style>
	.xin span{
		margin-right: 0rem !important;
	}
	.xin span i{
		margin-right: 0rem !important;
	}
</style>

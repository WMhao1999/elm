<template>
  <div id="form">
    <lh_header :title="'订单'"></lh_header>
	<div @click="fn">111</div>
  </div>
</template>

<script>
import lh_header from "../../components/lh-header.vue";
export default {
  components: {
    lh_header
  },
  data(){
	return{
		list:''
	}  
  },
  methods:{
	  fn(){
		  this.$alert('loginout','弹窗',function(res){
			  console.log(res)
		  })
	  }
  }
};
</script> 
<style>
</style>

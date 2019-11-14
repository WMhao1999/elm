<template>
  <div id="form">
    <lh_header :title="'订单列表'"></lh_header>
    <order></order>
  </div>
</template>

<script>
import lh_header from "../../components/lh-header.vue";
import order from "../../components/order"
export default {
  components: {
    lh_header,
    order
  },
  created(){
	  this.$loading(true,true)
	  setTimeout(()=>{
		  this.$loading(false)
	  },2000)
  }
};
</script> 
<style>
</style>

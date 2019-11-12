<template>
  <div id="spcart">gouwuche</div>
</template>

<script>
export default {
  created() {
    this.axios
      .get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1")
      .then(data => {
        console.log(data);
      });
  }
};
</script>

<style>
</style>

<template>
  <div style="position:fixed;top:0;z-index:1000000;min-height:100%;width:100%;background:#fff">
      <lh_header :title="this.$store.state.serveTit"></lh_header>
      {{this.$store.state.serveCon}}
  </div>
</template>

<script>
import lh_header from "./../components/lh-header.vue";
export default {
  components: {
    lh_header
  },
}
</script>

<style>

</style>
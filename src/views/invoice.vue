<template>
  <div id="invoice">
    <lh_header :title="'购买记录'"></lh_header>
    <div class="content">
      <svg class="icon" aria-hidden="true" style="font-size:2.38rem;">
        <use xlink:href="#icon-laoshixuanzhong" />
      </svg>
      <p>没有购买记录</p>
    </div>
  </div>
</template>

<script>
import lh_header from "./../components/lh-header.vue";
export default {
  components: {
    lh_header
  }
};
</script>

<style scoped>
    .content{
        text-align: center;
        padding: 6.44rem 0;
    }
    .content p{
        font-size: 0.38rem;
        padding-top:0.67rem ;
        color: #a2a2a2;
    }
</style>
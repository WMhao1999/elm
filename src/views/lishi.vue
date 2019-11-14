<template>
  <div id="lishi">
    <lh_header :title="'历史红包'"></lh_header>
    <div class="ls">
      <div class="coupons">
          <div class="cou_1">
            <span>￥</span>
            <span>5</span>
            <span>.0</span>
            <p>满20元可用</p>
          </div>

          <div class="cou_2">
            <p>普通红包</p>
            <p>2017-06-23到期</p>
            <p>限收获手机号为 13681711254</p>
          </div>

          <div class="cou_3">
            <svg class="icon" aria-hidden="true" style="font-size:2rem;">
    <use xlink:href="#icon-yiguoqi"></use>
        </svg>
        
          </div>
         
        </div>
         <div class="biao">
              <span>限品类：小吃宵夜</span>
          </div>
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
.biao{
    padding:  0 0.5rem ;
}
.biao span{
    color:#ccc;
    font-size: 0.3rem;
}
.ls {
  background: #f5f5f5;
   padding: 0.84rem 0.34rem;
}
.coupons {
  overflow: hidden;
  padding: 0.21rem 0;
  background: #fff;
  border-top: 2px solid red;
  border-radius: 2%;
}
.cou_1 {
  padding: 0.73rem 0.31rem;
  float: left;
}
.cou_1 span:nth-of-type(1) {
  font-size: 0.37rem;
  color: #ccc;
}
.cou_1 span:nth-of-type(2) {
  font-size: 0.74rem;
  color: #ccc;
}
.cou_1 span:nth-of-type(3) {
  font-size: 0.37rem;
  color: #ccc;
}
.cou_1 p {
  font-size: 0.23rem;
  color: #ccc;
}
.cou_2 {
  padding: 0.73rem 0rem 0 1.43rem;
  float: left;
}
.cou_2 p:nth-of-type(1) {
  font-size: 0.4rem;
  color: #747474;
}
.cou_2 p:nth-of-type(2) {
  font-size: 0.19rem;
  line-height: 0.45rem;
  color: #aaaaaa;
}
.cou_2 p:nth-of-type(3) {
  font-size: 0.19rem;
  color: #aaaaaa;
}
.cou_3 {
  float: right;
  padding: 0.26rem 0.21rem 0 0.1rem;
}

</style>
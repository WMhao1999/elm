<template>
  <div id="Members">
    <lh_header :title="'我的优惠'"></lh_header>
    <div class="tit">
      <div class="tit_1">
        <p>
          尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
          购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
          注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
        </p>
      </div>
      <div class="tit_2">
        <p class="tit_2_1">Q1: 特权介绍</p>
        <p class="tit_2_2">身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
        <p class="tit_2_2">减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
        <p class="tit_2_2">敬请期待！</p>
      </div>
      <div class="tit_2">
        <p class="tit_2_1">Q2: 资费介绍</p>
        <p class="tit_2_2">饿了么会员卡：20元</p>
      </div>
      <div class="tit_2">
        <p class="tit_2_1">Q3: 使用说明</p>
        <p class="tit_2_2">当用户满足以下任一条件，会员服务自动失效：</p>
        <p class="tit_2_2">自绑定之日起超过31天,在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
      </div>
      <div class="tit_2">
        <p class="tit_2_1">Q4: 购卡说明</p>
        <p class="tit_2_2">在线购买：饿了么App>我的>饿了么会员卡</p>
      </div>
      <div class="tit_2">
        <p class="tit_2_1">Q5: 温馨提示</p>
        <p class="tit_2_2">
          用户在当前会员服务失效前，无法购买新卡。
          请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
        </p>
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
.tit {
  padding: 0.58rem 0.48rem;
}
.tit_1 {
  padding: 0.3rem 1rem;
}
.tit_1 p {
  font-size: 0.39rem;
}
.tit_2 {
  padding: 0.38rem 0;
}
.tit_2_1 {
  font-size: 0.44rem;
  font-weight: bold;
  padding-bottom: 0.25rem;
}
.tit_2_2 {
  font-size: 0.37rem;
  color: #707070;
}
</style>
<template>
  <div id="pdd">
       <lh_header :title="'积分说明'"></lh_header>
       <div class="tit">
             <div class="tit_1">
                <p>Q1:使用余额的条件</p>
                <span>在线支付的订单将获得订单积分奖励：</br></span>
                 <span>积分将在用户完成评价后获得。</br></span>
                 <span>可获得积分=订单金额×10（即1元=10点积分）</br></span>
                 <span>订单金额指实际付款金额，不包含活动优惠金额。</br></span>
                 <span>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</span>
            </div>
              <div class="tit_1">
                <p>Q2:积分可以怎么用</p>
                <span>可以在积分商城兑换各种礼品。</span>
            </div>
            <div class="tit_1">
                <p>Q3:礼品兑换很多天了还没有收到，该怎么办</p>
                <span>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</span>
            </div>
             <div class="tit_1">
                <p>Q4:礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</p>
                <span>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</span>
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
.tit{
    padding: 0rem 0.34rem ;
}
.tit_1{
 padding: 0.35rem 0;

}
.tit_1 p{
    font-size: 0.44rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
}
.tit_1 span{
        line-height: 0.6rem;
    font-size: 0.37rem;
    color: #5b5b5b;
}
</style>
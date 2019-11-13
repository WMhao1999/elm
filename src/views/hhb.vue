<template>
  <div id="hhb">
    <lh_header :title="'红包说明'"></lh_header>
    <div class="tit">
         <div class="tit_1">
                <p>Q1:怎么获得红包</p>
                <span>通过邀请好友获得</br></span>
                 <span>在下单返红包的商家下单获得</br></span>
                 <span>抢微信朋友分享的红包获得</br></span>
            </div>
        <div class="tit_1">
                <p>Q2:红包可以做什么</p>
                <span>可以抵扣在线支付时的实际支付金额。</span>
            </div>
            <div class="tit_1">
                <p>Q3: 红包的门槛金额按照什么金额计算？</p>
                <span>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</span>
            </div>
              <div class="tit_1">
                <p>Q4: 一个红包能拆开多次使用吗？</p>
                <span>不能，一个红包只能一次性使用，不能分开使用。</span>
            </div>
              <div class="tit_1">
                <p>Q5:下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</p>
                <span>不能，一个红包只能一次性使用，不能分开使用。</span>
            </div>
             <div class="tit_1">
                <p>Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</p>
                <span>在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</span>
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
  padding: 0rem 0.34rem;
}
.tit_1 {
  padding: 0.43rem 0;
}
.tit_1 p {
  font-size: 0.44rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
}
.tit_1 span {
  line-height: 0.6rem;
  font-size: 0.37rem;
  color: #5b5b5b;
}
</style>
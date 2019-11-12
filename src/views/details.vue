<template>
  <div>
      <lh_header :title="'订单详情'"></lh_header>
      <div class="top_pic">
         <div class="pic_box"></div>
         <div class="pay_b">
           <b>支付超时</b>
         </div>
         <div class="btn_box">
           <span>再来一单</span>
         </div>
      </div>
      <div class="options">
          <div class="options_item">
              <div class="item_one"></div>
              <div class="item_two"><span>名称</span> </div>
          </div>
          <div class="options_shop">
              <div class="shop_one">
                <div class="shop_nick">火腿</div>
                <div class="shop_num">×1</div>
                <div class="shop_price">￥100</div>
              </div>
              <div class="shop_one">
                <div class="shop_nick">火腿</div>
                <div class="shop_num">×1</div>
                <div class="shop_price">￥100</div>
              </div>
          </div>
          <div class="fee">
               <span>配送费</span><span>￥2000</span>
          </div>
          <div class="money">
               <p>实付￥99999</p>
          </div>
      </div>
      <div class="deliver">
          <p>配送信息</p>
          <ul>
            <li>送达时间：</li>
            <li>送货地址：</li>
            <li>配送方式：蜂鸟配送</li>
          </ul>
      </div>
      <div class="deliver">
          <p>配送信息</p>
          <ul>
            <li>送达时间：</li>
            <li>送货地址：</li>
            <li>配送方式：蜂鸟配送</li>
          </ul>
      </div>
  </div>
</template>

<script>
import lh_header from "../components/lh-header";
export default {
  components: {
    lh_header
  }
};
</script>

<style scoped>
.deliver{
  padding:0 .4rem;
  background:white;
  margin-bottom:.4rem;
}
.deliver p{
  line-height: 1.4rem;
  font-size:.4rem;
   border-bottom:.03rem solid #f5f5f5;
}
.deliver li{
  line-height:1.35rem;
  font-size:.4rem;
  color:#666;
}
.fee{
   line-height:1.4rem;
   overflow: hidden;border-bottom:.03rem solid #f5f5f5;
}
.fee span:nth-of-type(1){
   color:#666;
  float:left;
}
.fee span:nth-of-type(2){
   color:#666;
  float:right;
}
.shop_one{
  display: flex;
  line-height:1.3rem;
}
.money p{
  font-size:.4rem;
  color:#fe732e;
  text-align: right;
  font-weight:bold;
  line-height:1.4rem;
}
.shop_nick{
  flex:8;
  font-size:.35rem;
  color:#6f6f6f;
}
.shop_num{
  flex:1;
  font-size:.35rem;
  color:#cbcbcb;
}
.shop_price{
  flex:1;
  font-size:.35rem;
  color:#666;
}
.options_shop{
  border-bottom:.03rem solid #f5f5f5;
}
.options{
  padding:.2rem .35rem;
  min-height:5rem;
  background:white;
  margin-bottom:.4rem;
}
.options_item{
  overflow: hidden;
  border-bottom:.03rem solid #f5f5f5;
}
.item_two{
  float:left;
  line-height:.88rem;
  font-size:.5rem;
  font-weight: bold;
}
.item_one{
  width:.88rem;
  height:.88rem;
  float:left;
  background:purple;
  margin-right:.35rem;
}
.top_pic{
  width:100%;
  min-height:5.3rem;
  text-align: center;
  padding:.4rem 0;
  box-sizing: border-box;
  background:white;
  margin-bottom:.3rem;
}
.pic_box{
  width:2.1rem;
  height:2.1rem;
  border-radius: 50%;
  overflow: hidden;
  background:purple;
  border:.02rem solid #3290e7;
  margin:0 auto;
  /* display:inline-block; */
}
.pay_b{
  /* display:inline-block; */
  margin-top:.36rem;
  margin-bottom:.5rem;
}
.btn_box{
  margin:0 auto
}
.btn_box span{
  padding:.16rem .26rem;
  border-radius: .03rem;
  border:.02rem solid #3290e7;
  font-size:.35rem;
  color:#3290e7;
}
.pay_b b{
  font-size:.6rem;
}
</style>
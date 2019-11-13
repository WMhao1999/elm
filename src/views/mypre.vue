<template>
  <div id="mypre">
    <lh_header :title="'我的优惠'"></lh_header>
    <div class="head">
      <p :class="[index==0?'bod':'']" @click="index=0">红包</p>
      <p :class="[index==1?'bod':'']" @click="index=1">商家代金卷</p>
    </div>
    <div>
      <div v-show="index==0" class="head_1" style="height:100vh">
        <div class="head_2">
          <span class="enve">
            有
            <span class="three">3</span>个红包即将到期
          </span>
          <div class="head_1_w">
            <svg class="icon" aria-hidden="true" style="font-size:0.40rem;padding:0 0.16rem">
              <use xlink:href="#icon-wenhao" />
            </svg>
            <router-link to="/hhb"><span class="tit_sm">红包说明</span></router-link>
           
          </div>
        </div>

        <div class="coupons">
          <div class="cou_1">
            <span>￥</span>
            <span>1</span>
            <span>.0</span>
            <p>满20元可用</p>
          </div>

          <div class="cou_2">
            <p>分享红包</p>
            <p>2017-06-23到期</p>
            <p>限收获手机号为 13681711254</p>
          </div>

          <div class="cou_3">
            <p>剩3日</p>
          </div>
        </div>

        <div class="coupons">
          <div class="cou_1">
            <span>￥</span>
            <span>2</span>
            <span>.0</span>
            <p>满40元可用</p>
          </div>

          <div class="cou_2">
            <p>分享红包</p>
            <p>2017-06-23到期</p>
            <p>限收获手机号为 13681711254</p>
          </div>

          <div class="cou_3">
            <p>剩3日</p>
          </div>
        </div>

        <div class="coupons">
          <div class="cou_1">
            <span>￥</span>
            <span>4</span>
            <span>.5</span>
            <p>满20元可用</p>
          </div>

          <div class="cou_2">
            <p>分享红包</p>
            <p>2017-06-23到期</p>
            <p>限收获手机号为 13681711254</p>
          </div>

          <div class="cou_3">
            <p>剩3日</p>
          </div>
        </div>
        <div class="tit_jj">
          <P>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</P>
        </div>
        <div class="foot">
          <router-link to="/lishi">
              <span>查看历史红包</span>
          <svg class="icon" aria-hidden="true" style="padding-left:0.3rem">
            <use xlink:href="#icon-youjiantou-copy" />
          </svg>
          </router-link>
        
        </div>
        <div class="jump">
          <div class="jump_1">
            <router-link to="/duihuan">
            <span>兑换红包</span>
            </router-link>
          </div>


          <div class="jump_2">
            <router-link to="/tuijian">
            <span>推荐有奖</span>
            </router-link>
           
          </div>
        </div>
      </div>

      <div v-show="index==1">
        <div class="tii">
          <div class="head_1_w">
            <svg class="icon" aria-hidden="true" style="font-size:0.40rem;padding:0 0.16rem">
              <use xlink:href="#icon-wenhao" />
            </svg>
            <span class="tit_sm">商家代金卷说明</span>
          </div>

        
        </div>
          <div class="center">
            <svg class="icon" aria-hidden="true" style="font-size:2.06rem">
              <use xlink:href="#icon-diqiu" />
            </svg>
            <div class="zhun">
                 <p class="djj">无法使用代金卷</p>
             <p class="ddd">非客户端或客户端版本过低</p>
             <div class="download">
                 <span>下载或升级客户端</span>
             </div>
            </div>
           
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import lh_header from "./../components/lh-header.vue";
export default {
  components: {
    lh_header
  },
  data() {
    return {
      index: 0
    };
  }
};
</script>

<style scoped>
.zhun{
    padding: 0 3.42rem;
}
.download{
    text-align: center;
    padding: 0.23rem 0.13rem;
    background: #6bcf77;
    margin-top: 0.4rem;
    border-radius: 5%;
}
.download span{
    color: white;

}
.ddd{
    padding-top: 0.23rem;
    font-size: 0.33rem;
    color: #ccc;
}
.djj{
    padding-top: 0.5rem;
    font-size: 0.42rem;
    color: #777777;
}
.center {
    margin: 0 auto;
    text-align: center;
    padding-top: 5rem;
}
.tii {
  padding: 0.4rem 0.4rem;
}
.head {
  overflow: hidden;
  padding: 0.38rem 1.92rem;
}
.head p {
  float: left;
  font-size: 0.4rem;
  font-weight: bold;
  padding-bottom: 0.05rem;
}
.head p:nth-of-type(2) {
  float: right;
  font-size: 0.4rem;
  font-weight: bold;
  padding-bottom: 0.05rem;
}
.head .bod {
  color: #4f8dd6;
  border-bottom: 0.02rem solid#4f8dd6;
}
.head_1 {
  padding: 0.5rem 0.44rem;
  background: #eee8e8;
}
.head_1_w {
  display: block;
  float: right;
}

.tit_sm {
  color: #6e91b9;
}
.three {
  color: red;
}
.enve {
  font-size: 0.32rem;
}
.coupons {
  overflow: hidden;
  margin: 0.51rem 0;
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
  color: red;
}
.cou_1 span:nth-of-type(2) {
  font-size: 0.74rem;
  color: red;
}
.cou_1 span:nth-of-type(3) {
  font-size: 0.37rem;
  color: red;
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
  padding: 0.66rem 0.41rem 0 0.1rem;
}
.cou_3 p {
  font-style: 0.45rme;
  color: #ed5d5d;
  font-weight: bold;
}
.tit_jj {
  padding: 0rem 0.2rem;
}
.tit_jj p {
  font-size: 0.32rem;
}
.foot {
  /* background: #f8f8f8; */
  padding: 1rem 0 0 0;
  text-align: center;
}
.foot span {
  font-size: 0.31rem;
}
.jump {
  text-align: center;
  display: flex;
  padding: 0.44rem 0;
  width: 100%;
  position: fixed;
  background: #ccc;
  left: 0;
  /* bottom: 0rem;  */
}
.jump_1 {
  flex: 1;
  border-right: 3px solid #fff;
}
.jump_2 {
  flex: 1;
}
</style>
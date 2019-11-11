<template>
  <div id="vip">
    <lh_header :title="'会员中心'"></lh_header>

    <div class="hy-head">
      <p>
        为账户
        <span>1001</span>购买会员
      </p>
    </div>

    <div class="conent">
      <div class="con-1">
        <p>会员特权</p>
        <div class="con-2">
          <span>
            会员说明
            <span class="iconfont icon-arrowRight"></span>
          </span>
        </div>
      </div>

      <div class="con-3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tubiaoshangchuanmoban" />
        </svg>
        <div class="con-4">
          <p>减免配送费</p>
          <p>
            每月减免30单，每日可减免3单，每单最高减4元
            <br />蜂鸟专送专项
          </p>
        </div>
      </div>

      <div class="con-3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-anquandunpai1" />
        </svg>
        <div class="con-4">
          <p>减免配送费</p>
          <p>
            每月减免30单，每日可减免3单，每单最高减4元
            <br />蜂鸟专送专项
          </p>
        </div>
      </div>
    </div>
    <div class="con-5"></div>
    <div class="con-6">
      <div class="con-7">
        <p>开通会员</p>
      </div>
      <div class="con-8">
        <div class="con-8-a">
          <p>1个月</p>
          <span>￥20</span>
        </div>
        <div class="con-8-b">
          <span>购买</span>
        </div>
      </div>
    </div>
    <div class="con-5"></div>
    <div class="con-9">
      <div class="con-1">
        <p>兑换会员</p>
        <div class="con-2">
          <span>
            使用卡号卡密
            <span class="iconfont icon-arrowRight"></span>
          </span>
        </div>
      </div>
    </div>
	<div class="con-5"></div>
	  <div class="con-9">
      <div class="con-1">
        <p>购买记录</p>
        <div class="con-2">
          <span>
            开发票
            <span class="iconfont icon-arrowRight"></span>
          </span>
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
  }
};
</script>

<style scoped>
.hy-head {
  padding: 0.3rem 0.5rem;
  background: #ccc;
}
.hy-head p {
  font-size: 0.39rem;
}
.hy-head span {
  font-weight: bold;
}
.conent {
  padding: 0.45rem 0.448rem;
}
.con-1 {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.4rem;
}
.con-1 p {
  font-weight: bold;
  font-size: 0.45rem;
  float: left;
}
.con-2 {
  float: right;
}
.con-2 span {
  font-size: 0.4rem;
  color: #a0a0a0;
}
.icon-arrowRight {
  padding-left: 0.4rem;
  font-size: 0.34rem;
}
.con-3 {
  overflow: hidden;
  padding: 0.57rem 0.28rem;
  border-bottom: 1px solid #ccc;
}
.icon {
  font-size: 1.421rem;
  float: left;
}
.con-4 {
  float: left;
  padding-left: 0.41rem;
  line-height: 0.5rem;
}
.con-4 p:nth-of-type(1) {
  font-size: 0.43rem;
  font-weight: bold;
}
.con-4 p:nth-of-type(2) {
  padding-top: 0.19rem;
  font-size: 0.3rem;
  color: #828282;
}
.con-5 {
  width: 100%;
  padding: 0.27rem 0;
  background: #f0f0f0;
}
.con-6 {
  padding: 0.46rem 0.48rem;
  overflow: hidden;
}
.con-7 p {
  font-weight: bold;
  font-size: 0.39rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.44rem;
}
.con-8 {
  overflow: hidden;
}
.con-8-a {
  float: left;
  padding: 0.67rem 0;
}
.con-8-a p {
  float: left;
  font-weight: bold;
  font-size: 0.44rem;
}
.con-8-a span {
  float: left;
  display: block;
  font-size: 0.44rem;
  font-weight: bold;
  color: #f27149;
  padding-left: 0.18rem;
}
.con-8-b {
  float: right;
  padding: 0.7rem 0;
}
.con-8-b span {
  border: 1px solid #ffbc99;
  border-radius: 15%;
  padding: 0.15rem 0.47rem;
  color: #ec764e;
}
.con-9{
	padding: 0.45rem 0.448rem;
}
</style>

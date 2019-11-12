<template>
  <div id="exchange">
    <div>
      <lh_header title="兑换会员"></lh_header>
      <p class="nav_tit">
        成功兑换后将关联到当前账户 :
        <b>1001</b>
      </p>
      <div class="ipt_box">
        <input type="text" placeholder="请输入十位卡号" />
      </div>
      <div class="ipt_box">
        <input type="text" placeholder="请输入六位卡密" />
      </div>
	  <div class="btn_box">
         <div>
            兑换
		 </div>
	  </div>
	  <div class="tips_box">
          <h3>————温馨提示————</h3>
		  <ul>
			  <li>新兑换的会员服务，权益以【会员说明】为准</li>
			  <li>月卡：30次减免配送费</li>
			  <li>季卡：90次减免配送费</li>
			  <li>年卡：360次减免配送费</li>
			  <li>*仅限蜂鸟专送订单，每日最多减免3单，每单最多减免4元（一个月按31天计算）</li>
		  </ul>
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

<style>
* {
  margin: 0;
  padding: 0;
}
.nav_tit {
  padding: 0.42rem 0.5rem;
  font-size: 0.5rem;
  color: #8d8d8d;
}
.nav_tit b {
  font-size: 0.4rem;
  font-weight: bold;
}
.ipt_box {
  height: 1.36rem;
  border-bottom: 0.02rem solid #f0f0f0;
  background: white;
  line-height: 1.36rem;
  padding-left: 0.48rem;
}
.ipt_box input {
  border: none;
  outline: none;
  font-size:.4rem;
}
::-webkit-input-placeholder {
    color:#999;
}
.btn_box{
	height:2rem;
	padding-top:.5rem;
}
.btn_box div{
	width:80%;
	height:1.2rem;
	border-radius: .14rem;
	background:#cbcbcb;
	margin:0 auto;
	color:#fafafa;
	font-size:.45rem;
	text-align: center;
	line-height:1.2rem;
}
	

.tips_box h3{
	text-align: center;
	font-size:.5rem;
	color:#d1d1d1;
	font-weight:500;
	margin-bottom:.56rem;
}
.tips_box ul{
	margin-left:1.34rem;
}
.tips_box ul li{
	font-size:.35rem;
	color:#bababa;
	line-height:.55rem;
}
</style>

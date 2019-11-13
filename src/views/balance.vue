<template>
  <div id="balance">
         <lh_header :title="'余额说明'"></lh_header>
        <div class="tit">
            <div class="tit_1">
                <p>Q1:使用余额的条件</p>
                <span>为了保护账户安全，使用余额前必须先绑定手机号</span>
            </div>
              <div class="tit_1">
                <p>Q2:余额可以怎么用</p>
                <span>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</span>
            </div>
            <div class="tit_1">
                <p>Q3:我要如何体现</p>
                <span>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</span>
            </div>
            <div class="tit_1">
                <p>Q4:为什么会体现失败</p>
                <span>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</span>
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
 padding: 0.43rem 0;

}
.tit_1 p{
    font-size: 0.44rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
}
.tit_1 span{
        line-height: 0.6rem;
    font-size: 0.37rem;
    color: #5b5b5b;
}
</style>
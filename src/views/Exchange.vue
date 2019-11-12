<template>
  <div id="Exchange">
       <lh_header :title="'兑换会员'"></lh_header>
       <div class="tit">
           <p>成功兑换后将关联到当前帐号： wanghuakang</p>
       </div>

       <div class="inp">
           <input type="text" placeholder="请输入10位卡号">
       </div>
           <div class="inp">
           <input type="text" placeholder="请输入6位卡密">
       </div>
       <div class="dh">
           <div class="dh_a">
               <span>兑换</span>
           </div>
       </div>

        <div class="footer">
            <div class="fot_a">
                <span>——温馨提示——</span>
            </div>
            <div class="sm">
                <p>新兑换的会员服务，权益以「会员说明」为准。</p>
                <p>月卡：30次减免配送费。</p>
                <p>季卡：90次减免配送费。</p>
                <p>年卡：360次减免配送费。</p>
                <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
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
.footer{
    padding: 0.58rem 1.37rem;
}
.fot_a{
    text-align: center;
}
.fot_a span{
    font-size: 0.44rem;
    color: #a6a6a6;
}
.sm{
    padding: 1rem 0;
}
.sm p{
    font-size: 0.37rem;
     color: #a6a6a6;
}
.tit{
    padding: 0.44rem 0.5rem;
    background: #f7f7f7;
}
.inp{
    border-bottom: 1px solid #ccc;
}
.inp input{
    width: 100%;
    padding: 0.55rem 0.44rem; 
    border:none;
}
.dh{
  padding: 0.44rem 0.5rem;
}
.dh_a{
    border-radius: 3%;
    background: #ccc;
    text-align: center;
    padding: 0.4rem 0;
}
.dh_a span{
    color: #f7f7f7;
    font-size: 0.43rem;
}
</style>    
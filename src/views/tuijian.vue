<template>
  <div id="tuijian">
    <lh_header :title="'推荐有奖'"></lh_header>
    <div class="tup">
      <img src="../img/1.png" alt />
    </div>
    <div class="t_logo">
      <div class="logo">
        <svg class="icon" aria-hidden="true" @click="$alert('warn','请在饿了么APP中打开')">
          <use xlink:href="#icon-weixin" />
        </svg>
        <p>邀请微信好友</p>
      </div>
        <div class="logo">
        <svg class="icon" aria-hidden="true" @click="$alert('warn','请在饿了么APP中打开')">
          <use xlink:href="#icon-QQ" />
        </svg>
        <p>邀请QQ好友</p>
      </div>
        <div class="logo">
        <svg class="icon" aria-hidden="true" @click="$alert('warn','请在饿了么APP中打开')">
          <use xlink:href="#icon-mianduimianyaoqing" />
        </svg>
        <p>面对面邀请</p>
      </div>
    </div>

    <div class="foos">
        <div class="foos_a">
            <div class="foos_a_1">
                <p>累计收益</p>
                  <p>0元</p>
            </div>
            <div class="foos_a_2">
                <p>成功邀请</p>
                  <p>0人</p>
            </div>
        </div>
        <div class="foos_a_3">
            <span>-收益明细-</span>
        </div>
        <div class="foos_a_4">
                        <svg class="icon" aria-hidden="true" style="font-size:1.8rem">
                     <use xlink:href="#icon-hongbao"></use>
                    </svg>
                    <p>还不赶紧邀请好友</p>
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

.foos_a_4{
    padding: 0.95rem;
    text-align: center;
}
.foos_a_3{
    padding-top: 0.87rem;
    text-align: center;
}
.foos_a{
    text-align: center;
    display: flex;
     margin-top: 0.64rem;
  
}
.foos_a_1{
    flex: 1;
   /* padding-top: 0.75rem; */
   padding: 0.75rem 0;
   /* border-right: 1px solid #000; */
}
.foos_a_2{
    flex: 1;
   padding: 0.75rem 0;
}
.tup img {
  width: 100%;
  height: 5.62rem;
}
.t_logo{
    text-align: center;
    display: flex;
    padding-top: 0.85rem;
}
.logo{
    flex: 1;  

}
.logo p{
    font-size: 0.32rem;
    padding-top: 0.25rem;
}
.icon{
    font-size: 1.46rem;
}
.foos{
    background: #ccc;
}
</style>
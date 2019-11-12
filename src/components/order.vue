<template>
  <div id="order">
     <div class="contaniner">
        <router-link :to="'/details'">
        <div class="top_box">
           <div class="top_pic"></div>
           <div class="top_text">
               <div class="top_text_t">
                   <span>名称</span><span>></span><span>支付超时</span>
               </div>
               <div class="top_text_b">
                   <span>1998.06.28</span>
               </div>
           </div>
        </div>
        <div class="cent_box">
           <span>默认商品</span><span>￥8888.00</span>
        </div></router-link>
        
        <div class="bot_box">
            <span>再来一单</span>
        </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#order .contaniner{
    padding:.4rem;
    background:white;
    min-height:4.4rem;
    box-sizing: border-box;
     overflow: hidden;
     position: relative;
     margin-bottom:.4rem;
}
.cent_box{
    width:83%;
    line-height:1.3rem;
    /* background:red; */
    /* padding-left:1.75rem; */
    float:right;
    overflow: hidden;
    border-bottom:.03rem solid #f5f5f5;
}
.bot_box{
    line-height: 1.2rem;
    position: absolute;
    bottom:0;
    right:.4rem;
}
.bot_box span{
    padding: .12rem;
    border-radius: .12rem;
    border:.02rem solid #3191e8;
    color:#3191e8;font-size:.35rem;
} 
.cent_box span:nth-of-type(1){
    float:left;
    font-size:.4rem;
}
.cent_box span:nth-of-type(2){
    float:right;font-size:.4rem;
    font-weight: bold;
    color:#ff6600;
}
.top_box{
    display:flex;
    min-height:1.4rem;
}
.top_pic{
    flex:15;
    margin-right:.26rem;
    background:lime;
}
.top_text{
    flex:85;
    border-bottom:.03rem solid #f5f5f5;
}
.top_text_t{
    margin-bottom:.26rem;
    overflow: hidden;
}
.top_text_t span:nth-of-type(1){
  float:left;font-size:.4rem;
}
.top_text_t span:nth-of-type(3){
  float:right;font-size:.4rem;
}
.top_text_b span{
    font-size:.3rem;
    color:#999;
}
</style>
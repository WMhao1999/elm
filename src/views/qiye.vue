<template>
    <div>
        <lh_header :title="'食品监督安全公示'"></lh_header>
        <div class="deanger">
           <div class="top_box">
               <p>食品监督安全公示</p>
           </div>
           <div class="bot_box">
                 <div class="bot_le">
                     <img style="width:100%" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=421499709,716754848&fm=15&gp=0.jpg" alt="">
                 </div>
                 <div class="bot_ri">
                     <p>结果</p>
                     <p>日期</p>
                 </div>
           </div>
        </div>
        <div class="message">
           <p>工商登记信息</p>
           <ul>
               <li v-for="(i,$index) in arr" :key="$index">{{i}}</li>
           </ul>
        </div>
        <div class="message">
           <p>餐饮许可证</p>
           <ul>
               <li v-for="(i,$index) in arr2" :key="$index">{{i}}</li>
           </ul>
        </div>
        <div class="sure">
            <p>许可证书</p>
            <div class="sure_pic">
                <div class="pic-l">
                      <img style="width:100%;" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1573721073&di=26a80db5da7d1adf9407a33033488053&src=http://b-ssl.duitang.com/uploads/item/201503/03/20150303101628_XTJai.thumb.700_0.jpeg">
                </div>
                <div class="pic-r">
                      <img style="width:100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573731380835&di=4d5e3573658b371d0b81c34eac06f517&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F14%2F20151014224141_mhrKZ.thumb.700_0.jpeg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import lh_header from "../components/lh-header";
export default {
  components: {
    lh_header
  },
  data(){
      return{
          arr:['企业名称','工商职业注册号','注册资本','注册地址','属地监管所','法定代表人','经营范围' ],
          arr2:['营业范围','许可证有效期','许可证号','发证时间','发证机关']
      }
  }
};
</script>

<style scoped>
.sure{
    min-height:7rem;
    background:white;
    padding:0 .4rem;
    overflow: hidden;
}
.sure p{
    line-height:1.5rem;
    font-size:.5rem;
    color:#767676;
    padding:0 .4rem;
}
.sure_pic{
    min-height:4.5rem;
    background:#f5f5f5;
    display:flex;
}
.pic-l,.pic-r{
    padding:.3rem .4rem;
    overflow: hidden;
    /* background:red; */
    flex:1;
}
.message{
    min-height:2rem;
    background:white;
    padding:0 .4rem;
    box-sizing: border-box;
    margin-bottom:.4rem;
}
.bot_box{
    display:flex;
    padding-top:.5rem;
    box-sizing: border-box;
    overflow: hidden;
}
.bot_le{
    flex:2;
    background:red;
    height:1.4rem;
    width:1.4rem;
    margin-right:.4rem;
    border-radius: 50%;
}
.bot_ri{
    flex:8;
}
.bot_ri p{
    font-size:.4rem;
    color:#767676;
    line-height:.8rem;
}
.deanger{
    min-height:3.55rem;
    padding:0 .4rem;
    box-sizing: border-box;
    background:white;
    margin-bottom:.3rem;
}
.top_box p{
    line-height: 1.17rem;
    font-size:.5rem;
    color:#484848;
    border-bottom:.05rem solid #f5f5f5;
}
.message p{
    line-height: 1.17rem;
    font-size:.5rem;
    color:#484848;
    border-bottom:.05rem solid #f5f5f5;
}
.message li{
    font-size:.4rem;
    color:#464646;
    line-height:.9rem;
}
</style>
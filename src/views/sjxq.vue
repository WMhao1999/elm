<template>
  <div id="sjxq" v-if="list">
    <lh_header :title="'商家详情'"></lh_header>
    <div class="tit">
      <div class="tit_1">
        <span>活动与属性</span>
      </div>
      <div class="tit_2">
        <div v-for="(i,$index) in list.supports" :key="$index">
          <div
            :style="{background:'#'+i.icon_color}"
            style=" display: inline-block;  border-radius:0.05rem;padding:0.04rem"
          >{{i.icon_name}}</div>
          <span>{{i.description}}</span>
        </div>
      </div>
    </div>
    <div class="tit_3">
      <div class="tit_t">
        <span class="tit_y">视频监督安全公示</span>
        <div class="tit_i">
          <router-link to="/qiye">
              <span class="tit_u">企业认证详情</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou-copy" />
          </svg>
          </router-link>
        
        </div>
      </div>
      <div class="tit_f">
        <svg class="icon" aria-hidden="true" style="font-size:2.34rem;float:left">
          <use xlink:href="#icon-baoma" />
        </svg>
        <div class="tit_right">
          <div>
            <span>监督检查结果:</span>
            <span class="cha">差</span>
          </div>
          <div>
            <p>检查日期:</p>
          </div>
        </div>
      </div>
    </div>

    <div class="ft">
        <div class="ft_a">
            <span>商家信息</span>
        </div>
        <div class="ft_a">
                <span>{{list.name}}</span>
        </div>
        <div class="ft_a">
                <span>{{list.address}}</span>
        </div>
            <div class="ft_a">
                <span>时间：{{list.opening_hours}}</span>
        </div>
          <div class="ft_a" @click="fn(1)">
                <span class="spp">营业执照</span>
        </div>
         <div class="ft_a" @click="fn(3)">
                <span>餐饮服务许可证</span>
        </div>
       
    </div>
     <div @click="fn(2)" style="background-color: rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0" v-if="inx==1">
<img :src="'//elm.cangdu.org/img/'+list.license.catering_service_license_image" style="position:fixed;left:25%;top:30%;">
        </div>
         <div @click="fn(2)" style="background-color: rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0" v-if="inx==3">
<img :src="'//elm.cangdu.org/img/'+list.license.business_license_image" style="position:fixed;left:25%;top:30%;">
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
      list: null,
      inx:''
    };
  },
  methods:{
      fn(i){
          this.inx=i
          console.log(i)
      }
  },
  created() {
    this.axios
      .get(
        "https://elm.cangdu.org/shopping/restaurant/" +
          this.$route.params.whk_id
      )
      .then(data => {
        this.list = data.data;
        console.log(data.data);
      });
  }
};
</script>

<style scoped>

.ft{
    background: #fff;
    padding: 0 0.44rem;
    margin-top: 0.4rem;
}
.ft_a{
    padding: 0.34rem 0;   
    border-bottom: 1px solid #ccc;
}
.ft_a span{
  font-size: 0.47rem;
    
}
.tit_right {
  float: left;
  line-height: 0.77rem;
  margin-top: 0.4rem;
  margin-left: 0.4rem;
}
.cha {
  color: red;
  font-size: 0.39rem;
}
.tit_t {
  overflow: hidden;
  padding: 0.36rem 0;
  border-bottom: 1px solid #ccc;
}
.tit_y {
  float: left;
  font-size: 0.42rem;
}
.tit_u {
  color: #ccc;
  font-size: 0.42rem;
  padding-right: 0.3rem;
}
.tit_i {
  float: right;
}
.tit_3 {
  overflow: hidden;
  padding: 0 0.44rem;
  background: #fff;
  margin-top: 0.27rem;
}
#sjxq {
  background: #ebebeb;
  height: 100vh;
}
.tit {
  background: #fff;
  padding: 0 0.44rem;
  margin-top: 0.27rem;
}
.tit_1 {
  padding: 0.35rem 0;
  border-bottom: 1px solid #ccc;
}
.tit_1 span {
  font-size: 0.44rem;
  font-weight: bold;
}
.tit_2 {
  padding: 0.49rem 0;
}
.tit_2 span {
  font-size: 0.33rem;
  margin-left: 0.24rem;
  line-height: 0.9rem;
  color: #666666;
}
</style>
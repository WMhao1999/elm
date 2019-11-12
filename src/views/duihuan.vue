<template>
  <div id="duihuan">
    <lh_header :title="'兑换红包'"></lh_header>
    <div class="inp">
      <input type="text" placeholder="请输入兑换码" />
    </div>
    <div class="inp_1">
      <div class="inp_2">
          <input type="text" placeholder="验证码"/>
      </div>
        <div class="inp_3">
            <div class="yanz_img">
                <img :src="imgurl" alt="">
            </div>
            <div class="inp_4">
                <p>看不清</p>
                <p @click="yanz" class="huan">换一张</p>
            </div>
        </div>
      </div>

      <div class="btt">
          <div class="btt_a">
              <span>兑换</span>
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
      imgurl: ""
    };
  },
  mounted() {
    this.yanz();
  },
  methods: {
    yanz() {
      this.axios.post("https://elm.cangdu.org/v1/captchas").then(res => {
        console.log(res.data.code);
        this.imgurl = res.data.code;
      });
    }
  }
};
</script>

<style scoped>
.huan{
    color:#5b90c6;
}
.yanz_img{
    width: 60%;
    float: left;
}
.inp_5{
    width: 15%;
}
.inp {
  text-align: center;
  padding: 0.48rem 0.33rem;
}
.inp input {
  width: 90%;
  padding: 0.4rem;
  border: none;
}
.inp_1{
     padding: 0.28rem 0.5rem;
    overflow: hidden;
}
.inp_2{
    width: 60%;
    float: left;
}
.inp_2 input{
    padding: 0.5rem;
  border: none;
}
.yanz_img{
    float: left;
}
.inp_3{
    background: #fff;
    padding: 0.2rem 0rem;
    width: 40%;
    float: left;
}
.btt{
     padding: 0.28rem 0.5rem;
    overflow: hidden;
}
.btt_a{
    background: #ccc;
    border-radius: 5%;
    padding: 0.38rem 0;
    text-align: center;
   
}
.btt_a span{
 color: #fff;
 font-size: 0.42rem
}
</style>
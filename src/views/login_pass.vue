<template>
  <div id="login_pass">
    <lh_header :title="'重置密码'"></lh_header>
    <div>
      <div class="inpu">
        <input type="text" placeholder="账号" maxlength="11" v-model="username" />
      </div>
      <div class="inpu">
        <input type="text" placeholder="旧密码" v-model="username" />
      </div>
      <div class="inpu">
        <input type="text" placeholder="请输入新密码" v-model="newpassword" />
      </div>
      <div class="inpu">
        <input type="text" placeholder="请确认密码" v-model="confirmpassword" />
      </div>
      <div class="inpu">
        <input type="text" placeholder="验证码" maxlength="6" v-model="captcha_code" />
        <span class="for_1">
          <img :src="img" alt />
        </span>
        <span class="for_1">
          <div>看不清</div>
          <div @click="imgurl" style="color:#3b95e9">换一张</div>
        </span>
      </div>
    </div>
    <div class="btn" @click="que">确认修改</div>
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
      img: "",
      //用户名
      username: "",
      //旧密码
      oldpassWord: "",
      //确认密码
      confirmpassword: "",
      //验证码
      captcha_code: "",
      //新密码
      newpassword: ""
    };
  },
  methods: {
    imgurl() {
      this.axios.post("http://elm.cangdu.org/v1/captchas").then(res => {
        this.img = res.data.code;
      });
    },
    que() {
      this.axios
        .get("https://elm.cangdu.org/v2/changepassword", {
          username: "",
          oldpassWord: "",
          newpassword: "",
          confirmpassword: "",
          captcha_code: ""
        })
        .then(res => {
          console.log(res);
        });
    }
  },
  mounted() {
    this.imgurl();
  }
};
</script>

<style scoped>
.inpu {
  background: #ffffff;
  padding: 0 4%;
  border-bottom: 1px solid #f1f1f1;
}
.inpu input::-webkit-input-placeholder {
  font-size: 0.5rem;
  color: #555;
}
.inpu .for_1 {
  width: 20%;
}
.inpu .for_1 img {
  padding-top: 0.2rem;
}
.inpu input {
  width: 60%;
  display: inline-block;
  border: none;
  outline: none;
  height: 1.4rem;
  font-size: 0.5rem;
}
.inpu span {
  width: 40%;
  display: inline-block;
  text-align: right;
  font-size: 0.6rem;
}
.btn {
  box-sizing: border-box;
  margin: 0 auto;
  background: #4cd964;
  margin: 0.6rem 0.5rem;
  text-align: center;
  line-height: 2.4;
  font-size: 0.5rem;
  color: #ffffff;
  border-radius: 0.18rem;
}
</style>

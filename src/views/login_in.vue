<template>
  <div id="login_in">
    <lh_header :title="'密码登录'"></lh_header>
    <div style="margin-top:0.4rem">
      <div class="inpu">
        <input type="text" placeholder="账号" maxlength="11" v-model="user" />
      </div>
      <div class="inpu">
        <input :type="typepass" placeholder="密码" v-model="pass" />
        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
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
    <div class="tis">温馨提示：未注册过的账号，登录时将自动注册</div>
    <div class="tis">注册过的用户可凭账号密码登录</div>
    <div class="btn" @click="que">登录</div>
    <div class="chz">
      <router-link to="/login_pass">
        <span>重置密码?</span>
      </router-link>
    </div>
    <!-- <tc v-if="type" @type="btn">
      <p slot="cz">{{message}}</p>
    </tc>-->
  </div>
</template>

<script>
// import tc from "../components/alert";
import lh_header from "./../components/lh-header.vue";
export default {
  components: {
    lh_header
    // tc
  },
  data() {
    return {
      value2: false,
      typepass: "password",
      img: "",
      pass: "",
      user: "",
      captcha_code: "",
      message: "",
      type: false
    };
  },
  watch: {
    value2() {
      if (this.value2) {
        this.typepass = "text";
      } else {
        this.typepass = "password";
      }
    }
  },
  mounted() {
    this.imgurl();
  },
  methods: {
    imgurl() {
      this.captcha_code = "";
      this.axios.post("http://elm.cangdu.org/v1/captchas").then(res => {
        this.img = res.data.code;
      });
    },
    que() {
      this.axios
        .post("https://elm.cangdu.org/v2/login", {
          username: this.user,
          password: this.pass,
          captcha_code: this.captcha_code
        })
        .then(res => {
          console.log(res);
          if (res.data.message) {
            this.$alert("warn", res.data.message);
            this.message = res.data.message;
            this.type = true;
          } else {
            this.$store.commit("user_id", res.data.id);
            console.log(this.$store.state.userid);
            this.$router.push({ path: "/order" });
          }
        });
    },
    btn(a) {
      this.type = a;
    }
  }
};
</script>

<style scoped>
.chz {
  text-align: right;
  margin: 0 0.5rem;
  font-size: 0.7rem;
}
.chz span {
  color: #3b95e9;
}
.tis {
  color: red;
  margin-top: 0.3rem;
  font-size: 0.3rem;
  padding: 0 0.5rem;
}
.el-switch {
  display: inline-block;
  width: 40%;
  text-align: right;
}
.inpu {
  background: #ffffff;
  padding: 0 4%;
  border-bottom: 1px solid #f1f1f1;
}
.inpu .for_1 {
  width: 20%;
}
.inpu .for_1 img {
  padding-top: 0.2rem;
}
.inpu input::-webkit-input-placeholder {
  font-size: 0.5rem;
  color: #555;
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
  border-radius: 0.14rem;
}
</style>

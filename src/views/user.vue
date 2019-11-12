<template>
  <div>
    <lh_header :title="'账户信息'"></lh_header>
    <div class="xx">
      <div class="tx">
        <input type="file" class="info" @change="urlimg" />
        <h2>头像</h2>
        <div class="tu">
          <img :src="img_url" />
          <span>></span>
        </div>
      </div>
      <router-link to="/modifyuser">
        <div class="user">
          <h2>用户名</h2>
          <div>
            <p>{{user.username}}</p>
            <span>></span>
          </div>
        </div>
      </router-link>
      <router-link to="/Address">
        <div class="user">
          <h2>收货地址</h2>
          <div>
            <span>></span>
          </div>
        </div>
      </router-link>
      <div class="bd">账号绑定</div>
      <div class="tx">
        <div class="sj">
          <img
            src="data:image/png;base64,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"
            alt
          />
          <span style="font-size:0.5rem;padding:0 0.2rem">手机</span>
        </div>
        <div class="tu">
          <span>></span>
        </div>
      </div>
      <div class="bd">安全设置</div>
      <router-link to="/login_pass">
        <div class="user" style="border-bottom:1px solid #ddd">
          <h2>登录密码</h2>
          <div>
            <p>修改</p>
            <span>></span>
          </div>
        </div>
      </router-link>
      <div class="btn" @click="open">退出登录</div>
    </div>
  </div>
</template>
<script>
import lh_header from "../components/lh-header.vue";
export default {
  components: {
    lh_header
  },
  data() {
    return {
      user: "",
      img_url: ""
    };
  },
  created() {
    this.userlist();
    if (!localStorage.img_url) {
      this.img_url = "//elm.cangdu.org/img/default.jpg";
    } else {
      this.img_url = localStorage.img_url;
    }
  },
  methods: {
    userlist() {
      this.axios
        .get(
          `http://elm.cangdu.org/v1/user?user_id=${this.$store.state.userid}`
        )
        .then(res => {
          console.log(res.data);
          this.user = res.data;
        });
    },
    urlimg(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      var that = this;
      reader.onload = function(e) {
        that.img_url = e.target.result;
        localStorage.img_url = that.img_url;
        this.img_url = localStorage.img_url;
      };
    },
    open() {
      console.log(1);
      window.localStorage.removeItem("img_url");
      this.$router.push({ path: "/order/myself" });
      this.axios.get(`https://elm.cangdu.org/v2/signout`).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.xx {
  margin-top: 0.4rem;
}
.info {
  display: block;
  position: absolute;
  opacity: 0;
  top: 1.7rem;
  left: 0;
  width: 100%;
  height: 2.6rem;
}
.tx {
  padding: 0.4rem 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  background: #fff;
}
.tx h2 {
  font-size: 0.4rem;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.tx .tu {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.tx .tu img {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  vertical-align: middle;
}
span {
  display: inline-block;
  width: 0.66667rem;
  height: 100%;
  line-height: 100%;
  text-align: center;
  font-size: 0.6rem;
  font-family: "宋体";
}
.user {
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  background: #fff;
}
.user h2 {
  font-size: 0.4rem;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.user div {
  display: flex;
  justify-content: left;
}
.user p {
  text-align: left;
  line-height: 0.9rem;
  font-size: 0.5rem;
  color: #999;
  margin-right: 0.2rem;
  font-weight: 100;
  font-family: Arial;
}
.user span {
  line-height: 0.9rem;
}
.bd {
  padding: 0.3rem;
  font-size: 0.4rem;
  color: #666;
  border-top: 1px solid #ddd;
}
.sj {
  font-size: 0.6rem;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.sj img {
  width: 100%;
  display: inline-block;
}
.btn {
  width: 96%;
  margin: 0.8rem auto 0;
  line-height: 1.1rem;
  border-radius: 5px;
  text-align: center;
  background: #d8584a;
  font-size: 0.45rem;
  color: #fff;
}
</style>
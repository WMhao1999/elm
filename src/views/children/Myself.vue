<template>
  <div id="myself">
    <div>
      <lh_header :title="'我的'"></lh_header>
      <div class="ood">
        <div class="Myself_head" @click="router">
          <div class="Myself_img">
            <img
              style="width:2rem;border-radius: 50%;font-size:1.8rem"
              :src="path?userList.avatar:''"
              alt
              class="iconfont icon-wode"
            />
          </div>
          <div class="Myself_dl">
            <p>{{path?userList.username:"登陆/注册"}}</p>
            <p class="iconfont icon-shouji">
              <span>暂无绑定手机号</span>
            </p>
          </div>
          <div class="Myself_right">
            <span class="iconfont icon-arrowRight"></span>
          </div>
        </div>
        <div class="Myself_wode">
          <div class="Myself_wode1">
            <router-link to="/mymoney">
                 <p>
              0.00
              <span>元</span>
            </p>
            <p>我的余额</p>
            </router-link>
           
          </div>
          <div class="Myself_wode2">
            <router-link to="/mypre">
               <p>
              0
              <span>个</span>
            </p>
            <p>我的优惠</p>

            </router-link>
           
          </div>
          <div class="Myself_wode3">
            <router-link to="/myjifen">
                  <p>
              0
              <span>分</span>
            </p>
            <p>我的积分</p>

            </router-link>
          
          </div>
        </div>
        <div class="list">
          <wh_list v-for="i in w_list" :name="i.name" :icon="i.icon" :path="i.path" :key="i.name"></wh_list>
        </div>
        <div class="list">
          <wh_list v-for="i in h_list" :name="i.name" :icon="i.icon" :path="i.path" :key="i.name"></wh_list>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import wh_list from "../../components/wh_list";
import lh_header from "../../components/lh-header.vue";
export default {
  components: {
    wh_list,
    lh_header
  },
  data() {
    return {
      path: false,
      type: true,
      userList: "",
      w_list: [
        {
          name: "我的订单",
          icon: `<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-weibiaoti-"></use>
</svg>`,
          path: "/order/form"
        },
        {
          name: "积分商城",
          icon: `<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-jifenshangcheng"></use>
</svg>`,
          path: "/point"
        },
        {
          name: "饿了吗会员卡",
          icon: `<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-huangguan-VIP"></use>
</svg>`,
          path: "/vip"
        }
      ],
      h_list: [
        {
          name: " 服务中心",
          icon: `<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fuwuzhongxin"></use>
</svg>`,
          path: "/serve"
        },
        {
          name: "下载饿了吗APP",
          icon: `<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-Safari
"></use>
</svg>`,
          path: "/download"
        }
      ]
    };
  },
  mounted() {
    this.user();
  },
  methods: {
    user() {
      this.axios
        .get("https://elm.cangdu.org/v1/user?user_id=43998")
        .then(res => {
          if (res.status == 200) {
            console.log(res.data);
            this.userList = res.data;
            this.type = false;
            this.userList.avatar = `https://elm.cangdu.org/img/${this.userList.avatar}`;
          }
        });
    },
    router() {
      if (this.path) {
        this.$router.push({ path: "/user" });
      } else {
        this.$router.push({ path: "/login_in" });
      }
    }
  },
  created() {
    console.log(localStorage.userid);
    if (localStorage.userid) {
      this.path = true;
    }
  }
};
</script>

<style>
.list {
  background: #ffffff;
  margin-bottom: 0.3rem;
}

.Myself_head {
  background: #3690e8;
  overflow: hidden;
}

.Myself_img {
  padding: 0.6rem 0rem 0.39rem 0.39rem;
  float: left;
}

.Myself_dl {
  float: left;
  padding: 0.8rem 0rem;
}

.Myself_dl :nth-of-type(1) {
  font-size: 0.51rem;
  padding: 0 0.3rem;
  color: #e8fff6;
}

.Myself_dl :nth-of-type(2) {
  font-size: 0.52rem;
  padding: 0.24rem 0.2rem;
  color: #e8fff6;
}

.Myself_dl span {
  font-size: 0.38rem;
  color: #e8fff6;
}

.Myself_right {
  float: right;
}

.Myself_right span {
  font-size: 0.5rem;
  color: #def2f1;
  display: inline-block;
  padding-top: 1.26rem;
  padding-right: 0.46rem;
}

.Myself_wode {
  display: flex;
  text-align: center;
  padding: 0.54rem 0;
  background: #ffffff;
  margin-bottom: 0.4rem;
}

.Myself_wode1 {
  flex: 1;
  border-right: 1px solid #ccc;
}

.Myself_wode1 p:nth-of-type(1) {
  font-size: 0.65rem;
  color: #fb9902;
}

.Myself_wode1 p span {
  font-size: 0.32rem;
}

.Myself_wode1 p:nth-of-type(2) {
  padding: 0.4rem 0 0.27rem 0;
}

.Myself_wode2 {
  flex: 1;
  border-right: 1px solid #ccc;
}

.Myself_wode2 p:nth-of-type(1) {
  font-size: 0.65rem;
  color: #f85f40;
}

.Myself_wode2 p span {
  font-size: 0.32rem;
}

.Myself_wode2 p:nth-of-type(2) {
  padding: 0.4rem 0 0.27rem 0;
}

.Myself_wode3 {
  flex: 1;
}

.Myself_wode3 p:nth-of-type(1) {
  font-size: 0.65rem;
  color: #64c60d;
}

.Myself_wode3 p span {
  font-size: 0.32rem;
}

.Myself_wode3 p:nth-of-type(2) {
  padding: 0.4rem 0 0.27rem 0;
}

#order .icon {
  font-size: 0.5rem;
}
</style>

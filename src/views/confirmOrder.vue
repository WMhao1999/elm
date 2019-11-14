<template>
  <div>
    <div class="con">
      <lh_header :title="'确认订单'">
        <div slot="right">
          <router-link
            style="text-align: right;width:100%; display: inline-block;color:#fff"
            v-if="!path"
            to="/order/myself"
          >我的</router-link>
          <router-link
            v-if="path"
            to="/login_in"
            style="text-align: right;width:100%; display: inline-block;color:#fff"
          >
            <span style="color:#fff">登录 |&nbsp;</span>
            <span style="color:#fff">注册</span>
          </router-link>
        </div>
      </lh_header>
      <router-link to="/Selectaddress">
        <div class="dz">
          <div class="shou" v-if="!dizhi">请添加一个收货地址</div>
          <div v-if="dizhi">
            <div>
              <span style="font-weight: bold;font-size: 0.45rem;margin-right:0.2rem">{{dizhi.name}}</span>
              <span style="font-size:0.45rem;margin-right:0.2rem">{{dizhi.sex==1?'先生':'女士'}}</span>
              <span style="font-size:0.45rem">{{dizhi.phone}}</span>
            </div>
            <div>
              <span style="line-height:2">备注：{{dizhi.tag}}</span>
            </div>
          </div>
          <div class="jian">></div>
        </div>
      </router-link>
      <div class="tiem">
        <div class="stiem">送达时间</div>
        <div class="yvji">
          <p style="font-size: .5rem;color: #3190e8;">
            尽快送达 |&nbsp;
            <span style="font-size: .5rem;color: #3190e8;">00:00</span>
          </p>
          <p class="feng">蜂鸟专送</p>
        </div>
      </div>
      <div class="zhifu">
        <div class="hea" @click="zhifu=true">
          <span>支付方式</span>
          <div class="zai">
            <span>
              在线支付
              <span class="tou">></span>
            </span>
          </div>
        </div>
        <div class="hb">
          <span>红包</span>
          <span>暂时只在饿了么APP中支持</span>
        </div>
      </div>
      <div class="xiaoguo">
        <div class="heade">
          <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt />
          <span style="font-size: .6rem;color: #333;padding:0 0.2rem">效果演示</span>
        </div>
        <ul class="fr">
          <li>
            <p class="food_name">富人思维</p>
            <div class="food_list">
              <span style="color: #f60;margin-right:0.5rem">x1</span>
              <span style="color: #666;">￥20</span>
            </div>
          </li>
        </ul>
        <ul class="fr">
          <li>
            <p class="food_name">餐盒</p>
            <div class="food_list">
              <span style="color: #666;">￥666</span>
            </div>
          </li>
        </ul>
        <ul class="fr">
          <li>
            <p class="food_name">配送费</p>
            <div class="food_list">
              <span style="color: #666;">￥4</span>
            </div>
          </li>
        </ul>
        <ul class="fr" style="border-top: .02rem solid #f5f5f5;">
          <li>
            <p class="food_name">
              订单
              <span>￥690</span>
            </p>
            <div class="food_list">
              <span style="color: #f60;">待支付￥690</span>
            </div>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="beizhu">
        <ul class="fr">
          <li>
            <p class="food_name">订单备注</p>
            <div class="food_list">
              <span style="color: #aaa;">
                口味、偏好等
                <span class="tou" style="color:#aaa">></span>
              </span>
            </div>
          </li>
        </ul>
        <ul class="fr" style="border-top: .02rem solid #f5f5f5;">
          <li>
            <p class="food_name">发票抬头</p>
            <div class="food_list">
              <span style="color: #aaa;">
                不需要开发票
                <span class="tou" style="color:#aaa">></span>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <!--  -->
    </div>
    <!-- footer -->
    <div class="footer">
      <p class="dzf">待支付￥690</p>
      <p class="queren">确认下单</p>
    </div>
    <div class="show" v-show="zhifu">
      <div class="top" @click="zhifu=false"></div>
      <div class="fangshi">
        <header>支付方式</header>
        <div>
          <div class="li" style="color:#ccc">
            <span>货到付款(商家不支持到付款)</span>
            <span class="sex"></span>
          </div>
          <div class="li">
            <span style="color:#333">在线支付</span>
            <span class="sex" style="background-color:greenyellow"></span>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
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
      path: true,
      data: "",
      zhifu: false,
      dizhi: ""
    };
  },
  created() {
    if (localStorage.userid) {
      this.path = false;
    }
    this.dz();
    if (this.$store.state.Address.name) {
      this.dizhi = this.$store.state.Address;
      console.log(this.$store.state.Address);
    }
  },
  methods: {
    dz() {
      this.axios
        .get(`https://elm.cangdu.org/v1/users/${localStorage.userid}/addresses`)
        .then(res => {
          console.log(res.data);
          this.data = res.data;
        });
    }
  }
};
</script>
<style scoped>
header {
  font-size: 0.5rem;
  background-color: #fafafa;
  color: #333;
  text-align: center;
  line-height: 1.5rem;
}
.li {
  display: flex;
  justify-content: space-between;
  padding: 0 0.7rem;
  line-height: 1.5rem;
  align-items: center;
}
.li span {
  font-size: 0.5rem;
  color: #ccc;
}
.sex {
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  background-color: #ccc;
  position: relative;
}
.sex::after {
  content: "\00a0";
  display: inline-block;
  border: 2px solid #fff;
  border-top-width: 0;
  border-right-width: 0;
  width: 0.28rem;
  height: 0.2rem;
  transform: rotate(-50deg);
  position: absolute;
  top: 0.08rem;
  left: 0.07rem;
}
.show {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 203;
}
.fangshi {
  background: #fff;
  width: 100%;
  height: 40%;
}
.top {
  height: 60%;
}
.dzf {
  background-color: #3c3c3c;
  flex: 5;
  padding-left: 0.7rem;
  color: #fff;
  line-height: 1.5rem;
  font-size: 0.5rem;
}
.queren {
  flex: 2;
  background-color: #56d176;
  text-align: center;
  color: #fff;
  line-height: 1.5rem;
  font-size: 0.5rem;
}
.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.5rem;
}
.con {
  margin-bottom: 2rem;
}
.beizhu {
  background-color: #fff;
  margin-top: 0.3rem;
}
.food_name {
  font-size: 0.4rem;
  color: #666;
  width: 68%;
}
.food_list {
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.food_list span {
  font-size: 0.4rem;
}
.fr li {
  display: flex;
  justify-content: space-between;
  line-height: 1.1rem;
  padding: 0 0.5rem;
}
.fr {
  padding-top: 0.4rem;
}
.heade {
  padding: 0.5rem;
  border-bottom: 0.02rem solid #f5f5f5;
}
.heade img {
  width: 0.8rem;
  height: 0.8rem;
  vertical-align: middle;
}
.xiaoguo {
  background-color: #fff;
  margin-top: 0.3rem;
}
.zai {
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
.zai span {
  font-size: 0.4rem;
  color: #aaa;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}
.tou {
  font-family: "宋体";
  font-weight: 700;
}
.hb span {
  font-size: 0.4rem;
  color: #aaa;
  line-height: 1.1rem;
}
.zhifu {
  background-color: #fff;
  margin-top: 0.3rem;
  padding: 0 0.5rem;
}
.hea {
  display: flex;
  justify-content: space-between;
  line-height: 1.1rem;
}
.hb {
  display: flex;
  justify-content: space-between;
  border-top: 0.02rem solid #f5f5f5;
}
.stiem {
  font-size: 0.6rem;
  color: #333;
  font-weight: 700;
  padding-left: 0.2rem;
}
.yvji {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.feng {
  font-size: 0.36rem;
  color: #fff;
  background-color: #3190e8;
  width: 1.8rem;
  margin-top: 0.3rem;
  text-align: center;
  border-radius: 0.12rem;
  padding: 0.1rem;
}
.dz {
  min-height: 2.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=)
    0 100% repeat-x;
  background-color: #fff;
  background-size: auto 0.12rem;
}
.shou {
  display: flex;
  align-items: center;
  font-size: 0.45rem;
}
.jian {
  width: 0.6rem;
  height: 0.6rem;
  color: #999;
  font-family: "宋体";
  font-size: 0.6rem;
  font-weight: 700;
}
.tiem {
  border-left: 0.2rem solid #3190e8;
  min-height: 2.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-top: 0.4rem;
  padding: 0 0.5rem;
}
</style>

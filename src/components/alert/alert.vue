<template>
  <div id="alter" v-if="isshow">
    <div class="alter_main">
      <div class="main_up">
        <!-- success -->
        <div v-if="type == 'success'">
          <div class="alter_icon">√</div>
          <p style="padding:0 0.4rem">{{ msg }}</p>
        </div>
        <!-- warn loginout-->
        <div v-if="type=='warn'||type=='loginout'">
          <div class="alter_icon">!</div>
          <p style="padding:0 0.4rem">{{msg}}</p>
        </div>
        <!-- shopcar -->
        <div v-if="type=='shopcar'">
          <div class="shoptit">
            {{msg.name}}
            <span class="close" @click="confrim"></span>
          </div>
          <div class="shopmain">
            <p>规格</p>
            <div
              class="shopitem"
              v-for="(i,$index) in msg.specfoods"
              :class="index==$index?'active':''"
              @click="getPrice(i,$index)"
              :key="$index"
            >{{i.specs[0].value}}</div>
          </div>
        </div>
      </div>
      <div class="main_down">
        <!-- warn -->
        <div @click="confrim" v-if="type == 'warn'||type=='success'" class="warn">确定</div>
        <!-- loginout -->
        <div class="loginout" v-if="type=='loginout'">
          <div class="loginTrue" @click="confrim">再等等</div>
          <div class="loginFalse" @click="login_out">退出登录</div>
        </div>
        <div class="pushCar" v-if="type=='shopcar'">
          <div class="pushCar_price">
            <span style="font-size: 0.24rem; color:#dd5c09;">￥</span>
            {{price}}
            <div class="pushCar_r" @click="pushCar">加入购物车</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      type: "",
      isshow: true,
      confrimCallback: null,
      index: -1,
      price: 0
    };
  },
  methods: {
    confrim() {
      this.isshow = false;
      if (this.msg == "当前环境无法支付，请打开官方APP进行付款") {
        location.href = "/order/form";
      }
      if (this.type == "success") {
        this.confrimCallback("密码重置成功");
      }
    },
    login_out() {
      this.confrimCallback("退出登录");
      this.isshow = false;
    },
    getPrice(a, b) {
      this.index = b;
      this.price = a.price;
    },
    pushCar() {
      if (this.index == -1) {
        alert("请选择规格");
      } else {
        this.isshow = false;
        this.confrimCallback(this.msg);
      }
    }
  }
};
</script>

<style>
#alter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}

.alter_main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 8.1rem;
  min-height: 5rem;
  background: #ffffff;
  border-radius: 0.3rem;
  overflow: hidden;
  animation: run 0.4s;
}

@-webkit-keyframes run {
  30% {
    margin-left: -30px;
  }

  60% {
    margin-left: 30px;
  }
}

.main_up {
  min-height: 4rem;
  text-align: center;
  box-sizing: border-box;
  padding: 0.5rem 0;
}

.main_down {
  min-height: 1.16rem;
}

/* 购物车 */
.shoptit {
  text-align: center;
  height: 0.65rem;
  line-height: 0.65rem;
  font-size: 0.5rem;
  font-family: 隶书;
  font-weight: bold;
  margin-bottom: 0.64rem;
}

.close {
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  display: inline-block;
  float: right;
}

.close:after {
  content: "";
  display: block;
  height: 0.6rem;
  width: 0.06rem;
  background: #5d5b5c;
  transform: rotateZ(45deg);
  position: absolute;
}

.close:before {
  content: "";
  display: block;
  height: 0.6rem;
  width: 0.06rem;
  background: #5d5b5c;
  transform: rotateZ(-45deg);
  position: absolute;
}

.shopmain {
  text-align: left;
  padding: 0 0 0 0.6rem;
}

.shopmain > p {
  font-size: 0.38rem !important;
  color: #585657;
  text-align: left;
}

.shopitem {
  padding: 0.26rem 0.36rem;
  font-size: 0.36rem;
  border: 2px solid #dcdcdc;
  border-radius: 10px;
  margin-right: 0.3rem;
  display: inline-block;
  margin-top: 0.6rem;
}

.active {
  border: 2px solid #4f92af;
  color: #4f92af;
}

.pushCar {
  background: #fcfafb;
  overflow: hidden;
  padding: 0.2rem 0;
}

.pushCar_price {
  height: 1.5rem;
  line-height: 1.5rem;
  padding: 0 0.8rem;
  font-size: 0.45rem !important;
  font-weight: bold;
  color: #f7680a;
}

.pushCar_price > .pushCar_r {
  float: right;
  line-height: 0.8rem;
  padding: 0.2rem 0.35rem;
  font-size: 0.36rem;
  color: #ffffff;
  background: #3498e4;
  border-radius: 10px;
  margin-top: 0.2rem;
}

/* 警告 */
.warn {
  height: 1.16rem;
  line-height: 1.16rem;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  background: #48db66;
  font-size: 0.54rem;
  font-family: 华文仿宋;
}

/* 登出 */
.loginout {
  min-height: 1.16rem;
  padding: 0.5rem 1.3rem;
}

.loginout > div {
  float: left;
  text-align: center;
  padding: 0 0.6rem;
  line-height: 1.08rem;
  background: #c1c1c3;
  font-size: 0.35rem;
  border-radius: 0.15rem;
  color: #ffffff;
}

.loginout > .loginTrue {
  float: left;
}

.loginout > .loginFalse {
  float: right;
  background: #de6957;
}

.main_up p {
  font-size: 0.5rem;
  font-weight: 600;
  font-family: 华文仿宋;
}

.alter_icon {
  width: 1.8rem;
  height: 1.8rem;
  line-height: 1.8rem;
  font-size: 1.3rem;
  border: 4px solid #f0d176;
  color: #f0d176;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 0.6rem;
}
</style>

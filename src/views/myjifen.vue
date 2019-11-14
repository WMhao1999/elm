<template>
  <div id="myjifen">
    <lh_header :title="'我的积分'"></lh_header>
    <div class="tit">
      <div class="tit-a">
        <div class="tit-a-1">
          <p>当前积分</p>
          <div class="tit-a-2">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wenhao" />
            </svg>
            <router-link to="/pdd">
              <span>积分说明</span>
            </router-link>
          </div>
        </div>

        <div class="tit-b">
          <p class="tit_price">0</p>
        </div>
        <div class="btn" @click="$alert('warn','快去下单赚取大量积分吧')">
          <span>积分兑换商品</span>
        </div>
      </div>
    </div>

    <div>
      <div class="bj"></div>
      <div class="tbj">
        <p class="font-st">最近30天积分记录</p>
        <div class="jz">
          <svg class="icon" aria-hidden="true" style="font-size:2.32rem">
            <use xlink:href="#icon-dingdanguanli" />
          </svg>
          <p class="zanwu">最近30天无积分记录</p>
          <p class="font-pt">快去下单赚取大量积分吧</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lh_header from "./../components/lh-header.vue";
export default {
  components: {
    lh_header
  }
};
</script>

<style scoped>
#myjifen .tit {
  background: #4b91e9;
  padding: 0.2rem 0.2rem;
}
#myjifen .tit-a {
  background: #fff;
  padding: 0.35rem 0.32rem;
}
#myjifen .tit-a p {
  font-size: 0.35rem;
  color: #595959;
  float: left;
}
#myjifen .tit-a-2 {
  float: right;
}
#myjifen .tit-a-1 {
  overflow: hidden;
}
#myjifen .tit-a-1 span {
  color: #6b92f1;
  font-size: 0.35rem;
}
#myjifen .icon {
  padding-right: 0.15rem;
}
.tit-b {
  overflow: hidden;
  padding-top: 0.1rem;
}
.tit_price {
  font-size: 0.9rem !important;
  font-weight: bold;
  position: relative;
}
.tit_price::after {
  display: block;
  content: "分";
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.4rem;
  text-align: center;
  position: absolute;
  right: -0.6rem;
  bottom: 0.2rem;
}
#myjifen .btn {
  background: #f9704e;
  text-align: center;
  padding: 0.39rem 0;
  margin-top: 0.9rem;
  line-height: 0.7rem !important;
}
.btn span {
  font-size: 0.48rem;
  color: #fff;
}

.font-st {
  font-size: 0.45rem;
  color: #b7b9b8;
  padding: 0.4rem;
}
.jz {
  text-align: center;
  margin-top: 2rem;
}

.zanwu {
  font-size: 0.48rem;
  color: #6a6c6b;
  line-height: 1.5rem;
}
</style>
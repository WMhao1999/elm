<template>
  <div id="order">
    <lh_header :title="$store.state.CityName" :path_r="'/'">
      <div slot="right">
        <span>登录</span>
        <span>注册</span>
      </div>
    </lh_header>
    <div style="background: #f5f5f5;">
      <z_carousel></z_carousel>
      <div class="sp_fj">
        <i class="iconfont icon-tubiaolunkuo-" style="font-size:.4rem"></i>
        <span>附近商家</span>
      </div>
      <div v-for="(i,$index) in home_list" :key="$index">
        <z_businesses :item="i"></z_businesses>
      </div>
    </div>
  </div>
</template>

<script>
import z_carousel from "../../components/carousel.vue";
import z_businesses from "../../components/businesses.vue";
import lh_header from "../../components/lh-header.vue";
export default {
  components: {
    lh_header,
    z_businesses,
    z_carousel
  },
  data() {
    return {
      home_list: []
    };
  },
  methods: {
    get_home() {
      this.$http
        .get(
          "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
        )
        .then(date => {
          this.home_list = date.body;
        });
    }
  },
  created() {
    this.get_home();
  }
};
</script>

<style>
.sp_fj {
  background: #ffffff;
  padding-left: 0.25rem;
  padding-top: 0.3rem;
}

.sp_fj i {
  fill: #999;
  font-size: 0.6rem;
  padding-top: 0.2rem;
}

.sp_fj span {
  color: #999;
  font: 0.4rem/0.4rem Microsoft YaHei;
}
</style>

<template>
  <div id="order">
    <lh_header :title="$store.state.City.name" :path_r="'/'">
		<router-link to="/order/Search" slot="left" >
				<i style="color: #FFFFFF;font-size: .1rem;" class="iconfont">搜索</i>
		</router-link>
		
      <div slot="right" style="color:#fff">
        <router-link
          style="text-align: right;width:100%; display: inline-block;color:#fff"
          v-if="path"
          to="/order/myself"
        >我的</router-link>
        <router-link v-if="!path" to="/login_in">
          <span>登录</span>
          <span>注册</span>
        </router-link>
      </div>
    </lh_header>
    <div style="background: #f5f5f5;">
      <z_carousel></z_carousel>
      <div class="sp_fj">
        <i class="iconfont icon-tubiaolunkuo-" style="font-size:.4rem"></i>
        <span>附近商家</span>
      </div>
      <div v-if="home_list">
        <div v-for="(i,$index) in home_list" :key="$index">
          <router-link :to="'/spcart/'+i.id">
            <!--动态传参 店铺id -->
            <z_businesses :item="i"></z_businesses>
          </router-link>
        </div>
      </div>
      <div v-else>
        <div v-for="(i,$i) in 10" :key="$i">
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
              alt
            />
          </div>
        </div>
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
      home_list: [],
      path: false
    };
  },
  methods: {
    get_home() {
      this.$loading(true, false);
      this.axios
        .get(
          "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
        )
        .then(date => {
          this.home_list = date.data;
          this.$loading(false);
        });
    }
  },
  created() {
    if (localStorage.userid) {
      this.path = true;
    }
    this.get_home();
    this.$store.state.City = JSON.parse(localStorage.City);
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

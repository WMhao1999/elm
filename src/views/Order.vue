<template>
  <div id="order">
    <transition name="fade">
      <router-view />
    </transition>
    <div class="foot">
      <div>
        <router-link to="/order/">
          <svg class="icon" aria-hidden="true" style="font-size:0.8rem;width:0.8rem;height:0.8rem">
            <use xlink:href="#icon-waimai1" />
          </svg>
          <p class="wenzi">外卖</p>
        </router-link>
      </div>
      <div>
        <router-link to="/order/search">
                  <svg class="icon" aria-hidden="true" style="font-size:0.7rem;width:0.7rem;height:0.7rem">
            <use xlink:href="#icon-sousuo" />
          </svg>
          <p class="www">搜索</p>
        </router-link>
      </div>
      <div>
        <router-link to="/order/form">
          <svg class="icon" aria-hidden="true" style="font-size:0.8rem;width:0.8rem;height:0.8rem">
            <use xlink:href="#icon-icon-" />
          </svg>
          <p class="wenzi">订单</p>
        </router-link>
      </div>
      <div>
        <router-link to="/order/myself">
          <svg class="icon" aria-hidden="true" style="font-size:0.8rem;width:0.8rem;height:0.8rem">
            <use xlink:href="#icon-wodedangxuan1" />
          </svg>
          <p class="wenzi">我的</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  background: red;
  position: relative;
}
.wenzi {
  padding-top: 0.2rem;
}
.www{
	 padding-top: 0.25rem;
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.3rem 0;
  display: flex;
  background: #fff;
}

.foot > div {
  flex: 1;
  float: left;
  text-align: center;
}

.foot > div div {
  width: 0.8rem;
  height: 0.8rem;
  /* background: yellow; */
  display: inline-block;
  margin-bottom: 0.2rem;
  /* line-height: 0.9rem; */
}
.icon-changyonglogo40 {
  width: 0.8rem;
  font-size: 0.8rem;
}
.icon-Safari {
  font-size: 0.5rem;
  width: 0.8rem;
  height: 0.8rem;
}
.icon-weibiaoti- {
  font-size: 0.6rem;
  width: 0.8rem;
  height: 0.8rem;
}
.icon-wode {
  font-size: 0.55rem;
  width: 0.8rem;
  height: 0.8rem;
}
</style>

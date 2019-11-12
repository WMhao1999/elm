<template>
  <div id="point">
    <lh_header :title="'积分商城'"></lh_header>
    <div id="m_text">
      <div class="box">
        <div class="u_one">请重新进入</div>
        <div class="u_two">请返回后重新进入积分商城</div>
        <svg class="icon" aria-hidden="true" style="font-size:3.06rem">
          <use xlink:href="#icon-lks-icon_UFO-"/>
        </svg>
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
#point {
  height: 100vh;
  background-color: #f1f1f1;
  position: relative;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#m_text {
  width: 10.8rem;
  height: 1.6rem;
  text-align: center;
}
#m_text .u_one {
  color: #0b80df;
  font-size: 0.72rem;
  font-weight: 900;
}
#m_text .u_two {
  color: #616163;
  font-size: 0.4rem;
  margin-top: 0.5rem;
  margin-bottom: 0.62rem;
}
</style>

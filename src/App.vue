<template>
  <div id="app">
    <router-view />
    <p class="h2">16px</p>
    <p class="h3">24px</p>
    <p class="h4">甜品36px</p>
  </div>
</template>

<script>
import vue1 from "./components/vue1";
export default {
  components: {
    vue1
  },
  created() {
    window.onload = function() {
      document.documentElement.style.fontSize =
        (document.documentElement.clientWidth / 1080) * 100 + "px";
      window.onresize = function() {
        document.documentElement.style.fontSize =
          (document.documentElement.clientWidth / 1080) * 100 + "px";
      };
    };
  }
};
</script>

<style>
	*{
		font-size: 0.36rem;
	}
.h2 {
  font-size: 0.16rem;
}
.h3 {
  font-size: 0.24rem;
}
.h4 {
  font-size: 0.36rem;
}
</style>


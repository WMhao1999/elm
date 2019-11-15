<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  created() {
    window.onload = function() {
      document.documentElement.style.fontSize =
        (document.documentElement.clientWidth / 1080) * 100 + "px";
      window.onresize = function() {
        document.documentElement.style.fontSize =
          (document.documentElement.clientWidth / 1080) * 100 + "px";
      };
    };
  },
  watch: {
    "$route.path"(a) {
      var load = document.querySelector("#loading");
      if (load) {
        this.$loading(false);
      }
    }
  }
};
</script>

<style>
* {
  font-size: 0.36rem;
  margin: 0;
  padding: 0;
  color: #000;
  text-decoration: none;
  list-style: none;
}
body,
html {
  background: #f5f5f5;
}
.fade-enter-active,
.fade-leave-avtive {
  transition: opacity 1.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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

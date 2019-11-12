<template>
  <div id="download">
    <lh_header :title="'下载'"></lh_header>
    <div class="contai">
      <div class="pic">
        <img
          style="width:100%;"
          src="http://img3.imgtn.bdimg.com/it/u=2133333296,434100415&fm=26&gp=0.jpg"
          alt
        />
      </div>
      <span class="pic_font">下载饿了么APP</span>
      <div class="buton">下载</div>
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
<style>
* {
  margin: 0;
  padding: 0;
}
.contai {
  padding: 0.6rem 0;
  text-align: center;
}
.buton {
  width: 80%;
  line-height: 1.2rem;
  background: #67d96a;
  margin: 0 auto;
  color: white;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
}
.pic {
  width: 4.7rem;
  height: 4.7rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0 auto;
}
.pic_font {
  color: #6a6a6a;
  font-size: 0.5rem;
  line-height: 1.2rem;
}
</style>
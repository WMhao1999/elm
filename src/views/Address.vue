<template>
  <div>
    <lh_header :title="'编辑地址'"></lh_header>
    <div style="margin-top:0.4rem">
      <router-link to="/Address/add">
        <div class="tz">
          <span>新增地址</span>
          <span style="float:right;color:rgb(216, 216, 216);font-family: '宋体';font-weight: 900">></span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import lh_header from "../components/lh-header";
export default {
  components: {
    lh_header
  }
};
</script>
<style scoped>
.tz {
  background: #ffffff;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  line-height: 1.3rem;
  padding: 0 0.2rem;
}
.tz span {
  font-size: 0.5rem;
}
</style>
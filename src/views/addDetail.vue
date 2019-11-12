<template>
  <div>
    <lh_header :title="'搜索地址'"></lh_header>
    <div class="ss">
      <div class="in">
        <input type="text" placeholder="请输入小区/写字楼/学校等" />
      </div>
      <div class="btn">确认</div>
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
.ss {
  background: #ffffff;
  padding: 0.3rem;
  display: flex;
}
.in {
  flex: 3;
}
.in input {
  width: 100%;
  font-size: 0.4rem;
  padding: 0.3rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  outline: none;
}
.btn {
  flex: 1;
  margin-left: 0.2rem;
  background: #3199e8;
  font-size: 0.5rem;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
</style>
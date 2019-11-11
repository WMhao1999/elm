<template>
  <div class="add">
    <lh_header :title="'新增地址'"></lh_header>
    <div class="xz">
      <div class="in">
        <input type="text" placeholder="请填写你的姓名" />
      </div>
      <div class="in">
        <router-link to="/Address/add/addDetail">
          <input type="text" placeholder="小区/写字楼/学校等" />
        </router-link>
      </div>
      <div class="in">
        <input type="text" placeholder="请填写详细送餐地址" />
      </div>
      <div class="in">
        <input type="text" placeholder="请填写能够联系到您的手机号" />
      </div>
      <div class="in">
        <input type="text" placeholder="备用联系电话（选填）" />
      </div>
    </div>
    <div class="btn">
      <div>新增地址</div>
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
.add {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.in {
  margin-bottom: 0.3rem;
}
.in:nth-of-type(5) {
  margin-bottom: 0;
}
.in input {
  display: block;
  width: 100%;
  font-size: 0.4rem;
  padding: 0.3rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  outline: none;
}
.xz {
  background: #ffffff;
  padding: 0.4rem;
}
.btn {
  margin: 0.6rem auto;
  width: 94%;
  background: #4cd964;
  border-radius: 3px;
}
.btn div {
  width: 100%;
  font-size: 0.6rem;
  color: #fff;
  line-height: 1.6rem;
  background: none;
  font-weight: 700;
  opacity: 0.6;
}
</style>
<template>
  <div>
    <lh_header :title="'搜索地址'"></lh_header>
    <div class="ss">
      <div class="in">
        <input type="text" v-model="value" placeholder="请输入小区/写字楼/学校等" @keyup.enter="search" />
      </div>
      <div class="btn" @click="search">确认</div>
    </div>
    <div class="ts">为了满足商家的送餐要求，建议您从列表中选择地址</div>
    <div class="sj">
      <div v-for="i in data" :key="i.name" @click="fn(i)">
        <h4>{{i.name}}</h4>
        <p>{{i.address}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import lh_header from "../components/lh-header";
export default {
  components: {
    lh_header
  },
  data() {
    return {
      value: "",
      data: ""
    };
  },
  methods: {
    search() {
      this.axios
        .get(
          `https://elm.cangdu.org/v1/pois?city_id=3&keyword=${this.value}&type=search`
        )
        .then(res => {
          console.log(res.data);
          this.data = res.data;
        });
    },
    fn(i) {
      this.$store.commit("seadd", i);
      this.$router.push({ path: "/Address/add" });
    }
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
  line-height: 1.2rem;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
.ts {
  background: #fff6e4;
  font-size: 0.4rem;
  color: #ff883f;
  text-align: center;
  padding: 0.2rem 0;
}
.sj div {
  padding: 0.2rem 0.4rem;
  color: #666;
  border-bottom: 1px solid #ccc;
}
.sj h4 {
  font-weight: normal;
  line-height: 2;
  font-size: 0.4rem;
}
.sj p {
  line-height: 2;
  font-size: 0.3rem;
}
</style>
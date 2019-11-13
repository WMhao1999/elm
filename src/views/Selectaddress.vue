<template>
  <div>
    <lh_header :title="'选择地址'"></lh_header>
    <div v-if="data" style="margin-top:0.4rem">
      <div class="dz" v-for="i in data" :key="i.id" @click="xuanz">
        <p class="name">{{i.name}}</p>
        <p class="dizi">{{i.address}}</p>
      </div>
    </div>
    <router-link to="/Address/add">
      <div class="xinze">
        <span>+</span>新增收货地址
      </div>
    </router-link>
  </div>
</template>
<script>
import lh_header from "./../components/lh-header.vue";
export default {
  components: {
    lh_header
  },
  data() {
    return {
      data: ""
    };
  },
  created() {
    this.dz();
  },
  mounted() {
    location.path = true;
  },
  methods: {
    dz() {
      this.axios
        .get(`https://elm.cangdu.org/v1/users/${localStorage.userid}/addresses`)
        .then(res => {
          console.log(res.data);
          this.data = res.data;
        });
    },
    xuanz() {
      //跳转到确认订单页面
      // this.$router.push({path:''})
    }
  }
};
</script>
<style scoped>
.xinze {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #358fe7;
  line-height: 1.4rem;
  font-size: 0.5rem;
  text-align: center;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.xinze span {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  border: 2px solid #358fe7;
  border-radius: 50%;
  font-size: 0.5rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: #358fe7;
  margin-right: 0.14rem;
}
.dz {
  line-height: 2;
  padding: 0 0.4rem;
  background: #fef8be;
  border-top: 1px solid #dbdbd9;
  border-bottom: 1px solid #dbdbd9;
  position: relative;
}
.dz .name {
  font-size: 0.6rem;
}
.dz .dizi {
  font-size: 0.5rem;
}
.dz span {
  position: absolute;
  right: 0.6rem;
  top: 0.7rem;
}
</style>
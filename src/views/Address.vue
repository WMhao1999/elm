<template>
  <div>
    <lh_header :title="'编辑地址'" :path_l="'/user'">
      <div
        slot="right"
        @click="type=!type"
        style="text-align: right;color: #fff;font-size:0.46rem"
      >{{type?'编辑':'完成'}}</div>
    </lh_header>
    <div v-if="data" style="margin-top:0.4rem">
      <div class="dz" v-for="i in data" :key="i.id">
        <p class="name">{{i.name}}</p>
        <p class="dizi">{{i.address}}</p>
        <span v-if="!type" @click="dele(i.id)">X</span>
      </div>
    </div>
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
  },
  data() {
    return {
      type: true,
      data: "",
      show: false
    };
  },
  mounted() {
    this.dz();
    localStorage.path = "";
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
    dele(i) {
      this.axios
        .delete(
          `https://elm.cangdu.org/v1/users/${localStorage.userid}/addresses/${i}`
        )
        .then(res => {
          console.log(res);
          this.dz();
        });
    }
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
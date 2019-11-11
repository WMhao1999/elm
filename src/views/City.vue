<template>
  <div id="city">
    <lh_header :title="$route.params.cityname" :path_r="'/'">
      <div slot="right">切换城市</div>
    </lh_header>
    <div class="find">
      <input type="text" placeholder="输入学校、商务楼、地址" v-model="value" ref="fou" />
      <div @click="btn">提交</div>
    </div>
    <div class="list" v-if="type">
      <div v-for="i in data" @click="listClick(i)" :key="i.n">
        <cityList :data="i"></cityList>
      </div>
    </div>
    <div class="stroy" v-if="!type">
      <p>历史记录</p>
      <div>
        <div v-for="i in $store.state.stroyList" @click="stroyClick(i)" :key="i.id">
          <cityList :data="i"></cityList>
        </div>
      </div>
      <div class="remove" @click="deall" v-show="$store.state.stroyList!=''">清空所有历史记录</div>
    </div>
  </div>
</template>



<script>
import lh_header from "./../components/lh-header.vue";
import cityList from "./../components/cityList.vue";
export default {
  components: {
    lh_header,
    cityList
  },
  data() {
    return {
      re: "",
      name: "",
      value: "",
      data: "",
      hi: [],
      type: false
    };
  },
  methods: {
    btn() {
      //搜索
      if (this.value == "") return;
      this.axios
        .get(
          `http://elm.cangdu.org/v1/pois?type=search&city_id=${this.$route.params.cityid}&keyword=${this.value}`
        )
        .then(res => {
          this.data = res.data;
          this.value = "";
          this.$refs.fou.focus();
          this.type = true;
        });
    },
    listClick(a) {
      this.$store.commit("GetStroy", a);
      this.type = false;
    },
    deall() {
      this.$store.state.stroyList = [];
    },
    stroyClick(a) {
      this.value = a.name;
    }
  },
  watch: {
    "$store.state.stroyList"(a) {
      sessionStorage.stroyList = JSON.stringify(a);
    }
  },
  created() {
    if (sessionStorage.stroyList != "") {
      this.$store.state.stroyList = JSON.parse(sessionStorage.stroyList);
    }
  }
};
</script>
<style scoped>
.find {
  padding: 0.3rem 0.6rem;
  background: #ffffff;
  margin-top: 0.3rem;
  border-bottom: 1px solid #cccccc;
}

.find > input {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  box-sizing: border-box;
  padding: 0 0.1rem;
  border-radius: 8px;
  border: 1px solid #cccccc;
  margin-bottom: 10px;
}

.find > div {
  width: 100%;
  color: #fff;
  font-size: 0.47;
  text-align: center;
  background: #3190e8;
  height: 0.9rem;
  line-height: 0.9rem;
  border-radius: 8px;
}

.stroy p {
  display: block;
  line-height: 0.6rem;
  border-top: 6px solid #cccccc;
  border-bottom: 6px solid #cccccc;
  font-size: 0.3rem;
  padding: 0 0.4rem;
}
.remove {
  display: block;
  line-height: 0.8rem;
  font-size: 0.4rem;
  padding: 0 0.4rem;
  text-align: center;
}
</style>
</style>

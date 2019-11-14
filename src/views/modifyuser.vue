<template>
  <div>
    <lh_header :title="'修改用户名'"></lh_header>
    <div class="mouser">
      <div class="srk">
        <input type="text" maxlength="24" minlength="5" ref="act" @click="ac" v-model="username" />
      </div>
      <div :class="type?'tc':'ts'">{{type?"用户名只能修改一次(5-24字符之间)":"用户名长度在5到24位之间"}}</div>
      <div class="tc"></div>
      <div class="btn">
        <div>确认修改</div>
      </div>
    </div>
  </div>
</template>
<script>
import lh_header from "../components/lh-header.vue";
export default {
  components: {
    lh_header
  },
  data() {
    return {
      type: true,
      username: ""
    };
  },
  created() {},
  methods: {
    ac() {
      this.type = false;
      this.$refs.act.style.border = "1px solid red";
    },
    xname() {
      // this.axios
    }
  }
};
</script>
<style scoped>
.mouser {
  margin-top: 0.4rem;
}
.srk {
  width: 94%;
  margin: 0 auto;
}
.srk input {
  width: 100%;
  line-height: 1rem;
  background: none;
  outline: none;
  font-size: 0.5rem;
  border: 1px solid #ddd;
}
.tc {
  width: 94%;
  margin: 0 auto;
  font-size: 0.3rem;
  padding-top: 0.1rem;
  color: #666;
}
.ts {
  width: 94%;
  margin: 0 auto;
  font-size: 0.4rem;
  color: #ea3106;
  padding-top: 0.1rem;
}
.btn {
  width: 94%;
  background: #3199e8;
  margin: 0.6rem auto;
}
.btn div {
  line-height: 1.4rem;
  font-size: 0.5rem;
  color: #fff;
  opacity: 0.6;
  text-align: center;
}
</style>
<template>
  <div>
    <div v-if="no">
      <lh_header :title="'新增地址'" :path_l="'/Address'"></lh_header>
      <div class="xz">
        <div class="in">
          <input type="text" v-model="username" placeholder="请填写你的姓名" />
        </div>
        <div class="in">
          <router-link to="/Address/add/addDetail">
            <input type="text" v-model="xx" placeholder="小区/写字楼/学校等" />
          </router-link>
        </div>
        <div class="in">
          <input type="text" v-model="address" placeholder="请填写详细送餐地址" />
        </div>
        <div class="in">
          <input type="text" v-model="phone" placeholder="请填写能够联系到您的手机号" @input="chang" />
          <p style="color:red;font-size:0.2rem;margin-top:0.1rem" v-if="type">{{message}}</p>
        </div>
        <div class="in">
          <input type="text" v-model="phone_bk" placeholder="备用联系电话(选填)" @input="chang2" />
          <p style="color:red;font-size:0.2rem;margin-top:0.1rem" v-if="type2">{{message2}}</p>
        </div>
      </div>
      <div class="btn" @click="xinz">
        <div>新增地址</div>
      </div>
    </div>
    <div v-if="!no">
      <lh_header :title="'新增地址'" :path_l="'/Address'"></lh_header>
      <div class="tianj">
        <div class="name">
          <div class="ren">联系人</div>
          <div class="niname">
            <input type="text" placeholder="你的名字" v-model="username" />
            <div class="sex">
              <span class="mr">
                <span @click="btn" :style="type3?'background-color:greenyellow':''"></span>先生
              </span>
              <span class="lady">
                <span @click="btn" :style="!type3?'background-color:greenyellow':''"></span>女士
              </span>
            </div>
          </div>
        </div>
        <div class="name">
          <div class="ren">联系电话</div>
          <div class="niname">
            <div class="input">
              <input type="text" placeholder="你的手机号" v-model="phone" @input="chang" />
              <span class="jia" @click="type4=true">+</span>
            </div>
            <div class="sex" v-if="type4">
              <input type="text" placeholder="备选电话" v-model="phone_bk" @input="chang2" />
            </div>
          </div>
        </div>
        <div class="name">
          <div class="ren">送餐地址</div>
          <div class="niname">
            <div class="input">
              <router-link to="/Address/add/addDetail">
                <input type="text" placeholder="小区/写字楼/学校等" v-model="xx" />
              </router-link>
            </div>
            <div class="sex">
              <input type="text" placeholder="详细地址(如门牌号等)" v-model="address" />
            </div>
          </div>
        </div>
        <div class="name">
          <div class="ren">标签</div>
          <div class="niname">
            <div class="input">
              <input type="text" placeholder="无/家/学校/公司" v-model="tag" />
            </div>
          </div>
        </div>
      </div>
      <div class="btn" @click="xinz">
        <div>确定</div>
      </div>
    </div>
  </div>
</template>
<script>
import lh_header from "./../components/lh-header.vue";
export default {
  components: { lh_header },
  mounted() {
    if (this.$store.state.name) {
      this.xx = this.$store.state.name.name;
    }
  },
  data() {
    return {
      username: "",
      xx: "",
      address: "",
      phone: "",
      phone_bk: "",
      message: "",
      type: true,
      message2: "",
      type2: true,
      no: true,
      type3: true,
      type4: false,
      tag: " ",
      sex: 1,
      from: ""
    };
  },
  created() {
    if (localStorage.path) {
      this.no = false;
    }
  },
  methods: {
    chang() {
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.type = true;
        this.message = "请输入正确的手机号";
      } else {
        this.type = false;
      }
    },
    chang2() {
      if (!/^1[3456789]\d{9}$/.test(this.phone_bk)) {
        this.type2 = true;
        this.message2 = "请输入正确的手机号";
      } else {
        this.type2 = false;
      }
    },
    xinz() {
      if (!this.type) {
        this.axios
          .post(
            `https://elm.cangdu.org/v1/users/${localStorage.userid}/addresses`,
            {
              name: this.username,
              address_detail: this.$store.state.seadd.address,
              address: this.address,
              phone: this.phone,
              phone_bk: this.phone_bk,
              geohash: this.$store.state.seadd.geohash,
              sex: this.sex,
              tag: this.tag,
              tag_type: " "
            }
          )
          .then(res => {
            console.log(res);
            if (res.data.success == "添加地址成功") {
              this.$store.commit("cadd", {});
              if (this.no) {
                this.$router.push({ path: "/Address" });
              } else {
                this.$router.push({ path: "/Selectaddress" });
              }
            } else {
              this.$alert("warn", res.data.message);
            }
          });
      } else {
        this.$alert("warn", "请确认信息完整");
      }
    },
    btn() {
      this.type3 = !this.type3;
      console.log(this.type3);
      if (this.type3 == true) {
        this.sex = 1;
      } else {
        this.sex = 2;
      }
      console.log(this.sex);
    }
  }
};
</script>
<style scoped>
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #999;
}
input {
  outline: none;
  color: #333;
}
.input {
  position: relative;
}
.jia {
  position: absolute;
  right: 0.5rem;
  top: 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: #358fe7;
  margin-right: 0.14rem;
}
.sex {
  display: flex;
  line-height: 1.3rem;
  border-top: 0.025rem solid #f5f5f5;
}
.sex span {
  font-size: 0.5rem;
  color: #333;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}
.name {
  display: flex;
  border-bottom: 0.025rem solid #f5f5f5;
}
.name .ren {
  font-size: 0.5rem;
  color: #333;
  flex: 2;
  line-height: 1.5rem;
}
.sex span span {
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  background-color: #ccc;
  position: relative;
}
.sex span .active {
  background-color: greenyellow;
}
.sex span span::after {
  content: "\00a0";
  display: inline-block;
  border: 2px solid #fff;
  border-top-width: 0;
  border-right-width: 0;
  width: 0.28rem;
  height: 0.2rem;
  transform: rotate(-50deg);
  position: absolute;
  top: 0.08rem;
  left: 0.07rem;
}
.name .niname {
  flex: 5;
}
.niname input {
  width: 100%;
  height: 1.5rem;
  font-size: 0.5rem;
  border: none;
  border-bottom: 1px solid #f5f5f5;
}
.tianj {
  background: #fff;
  padding: 0 0.4rem;
}
.xz {
  background: #ffffff;
  padding: 0.3rem;
  margin-top: 0.3rem;
}
.in {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0.4rem;
}
.in:nth-of-type(5) {
  padding-bottom: 0;
}
.in input {
  display: block;
  width: 100%;
  font-size: 0.4rem;
  margin: 0 auto;
  padding: 0.2rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
}
.btn {
  margin: 0.4rem auto;
  width: 94%;
  background: #4cd964;
  border-radius: 3px;
  text-align: center;
}
.btn div {
  width: 100%;
  font-size: 0.4rem;
  color: #fff;
  line-height: 1.2rem;
  background: none;
  font-weight: 700;
  opacity: 0.6;
}
</style>
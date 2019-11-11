<template>
  <div id="home">
    <lh_header :title="'首页'" :path_r="'/'">
      <div slot="left">elm</div>
      <div slot="right">
        <span>登录</span>
        <span>注册</span>
      </div>
    </lh_header>
    <div class="h_ding">
      <div class="h_wei">
        <span style="font-size:0.4rem;">当前定位城市:</span>
        <span style="font-weight: 900; font-size: .32rem;color: #9f9f9f;">定位不准时，请在城市列表中获取</span>
      </div>
      <div class="h_dq">
        <router-link
          :to="{ name: 'city', params: { cityid: ding.id ,cityname:ding.name}}"
          style="display: block;"
        >
          <span style="color: #3190e8;">{{ding.name}}</span>
        </router-link>
        <router-link
          :to="{ name: 'city', params: { cityid: ding.id ,cityname:ding.name}}"
          style="display: block;"
        >
          <i class="iconfont icon-arrowRight" style="width: .3rem;height: .6rem;fill: #999;"></i>
        </router-link>
      </div>
    </div>
    <div class="h_che">热门城市</div>
    <ul class="h_ul">
      <li v-for="i in re" :key="i.re">
        <router-link :to="{ name: 'city', params: { cityid: i.id ,cityname:i.name}}">{{i.name}}</router-link>
      </li>
    </ul>
    <div>
      <ul class="h_pai">
        <li v-for="(i,key) in cheng" :key="i.cheng" style="margin-bottom: 0.3rem;">
          <h4
            style="width:100%;color: #666;font-weight: 400;text-indent: 0.45rem;border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font: 0.4rem/1.15rem Helvetica Neue;"
          >{{key}}</h4>
          <ul style="overflow: hidden;">
            <li v-for="a in i" :key="a.no" class="h_lif">
              <router-link
                :to="{ name: 'city', params: { cityid: a.id ,cityname:a.name}}"
              >{{a.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
      ding: "",
      re: "",
      cheng: ""
    };
  },
  mounted() {
    this.dang(), this.rem(), this.quan();
  },
  methods: {
    dang() {
      //当前位置
      this.$http.get("http://elm.cangdu.org/v1/cities?type=guess").then(res => {
        // console.log(res);
        this.ding = res.data;
      });
    },
    rem() {
      //热门城市
      this.$http.get("http://elm.cangdu.org/v1/cities?type=hot").then(res => {
        this.re = res.data;
      });
    },
    quan() {
      //全部城市
      this.$http.get("http://elm.cangdu.org/v1/cities?type=group").then(res => {
        this.cheng = res.data;
        var obj = res.data;
        var sorts = obj => {
          var news = Object.keys(this.cheng).sort();
          var newObj = {};
          for (let i = 0; i < news.length; i++) {
            newObj[news[i]] = obj[news[i]];
          }
          return newObj;
        };
        this.cheng = sorts(obj);
      });
    }
  }
};
</script>
<style scoped>
a {
  color: #666;
}

.h_pai .h_lif {
  float: left;
  color: #666;
  text-align: center;
  color: #3190e8;
  border-bottom: 0.025rem solid #e4e4e4;
  border-right: 0.025rem solid #e4e4e4;
  width: 25%;
  height: 1.35rem;
  line-height: 1.35px;
  font: 0.6rem/1.35rem Microsoft YaHei;
  box-sizing: border-box;
}

.h_pai li {
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.h_ul {
  zoom: 1;
  overflow: hidden;
  margin-bottom: 0.3rem;
  background: #fff;
}

.h_ul li {
  float: left;
  text-align: center;
  color: #3190e8;
  border-bottom: 0.025rem solid #e4e4e4;
  border-right: 0.025rem solid #e4e4e4;
  width: 25%;
  height: 1.35rem;
  font: 0.6rem/1.35rem Microsoft YaHei;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#home {
  background-color: #f5f5f5;
}

.h_dq {
  display: flex;
  justify-content: space-between;
  height: 1.45rem;
  line-height: 1.45rem;
  padding: 0 0.45rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
}

.h_wei {
  display: flex;
  justify-content: space-between;
  line-height: 1.45rem;
  padding: 0 0.45rem;
}

.h_ding {
  border-top: 1px solid #e4e4e4;
  background-color: #fff;
  margin-bottom: 0.3rem;
}

.h_toubu {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.45rem;
}

.h_toubu > div:nth-child(1) {
  left: 0.4rem;
  font-weight: 400;
  font-size: 0.5rem;
  color: #fff;
  width: 2.3rem;
  height: 0.7rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.h_toubu > div:nth-child(2) {
  right: 0.55rem;
  font-size: 0.65rem;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.h_che {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font: 0.45rem/1.15rem Helvetica Neue;
  background-color: #fff;
}
</style>

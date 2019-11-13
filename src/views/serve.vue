<template>
  <div id="serve">
    <lh_header :title="'服务中心'"></lh_header>
    <div class="nav_top">
      <div class="nav_top_tw">
        <div class="nav-top-a">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kefu" />
          </svg>
          <p class="font-sty">在线客服</p>
        </div>
      </div>
      <div class="nav_top_tw">
        <i class="ictwo iconfont icon-dianhua"></i>
        <p class="font-sty">在线客服</p>
      </div>
    </div>
    <div>
      <p class="pone">热门问题</p>
      <div class="ptwo-box">
        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.supervipCaption,arr.supervipContent)">
            <span>{{arr.supervipCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.signCaption,arr.signContent)">
            <span>{{arr.signCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.rankCaption,arr.rankContent)">
            <span>{{arr.rankCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.pointtextCaption,arr.pointtextContent)">
            <span>{{arr.pointtextCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.phototutorialCaption,arr.phototutorialContent)">
            <span>{{arr.phototutorialCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.paymentCaption,arr.paymentContent)">
            <span>{{arr.paymentCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.otherCaption,arr.otherContent)">
            <span>{{arr.otherCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.ontimeCaption,arr.ontimeContent)">
            <span>{{arr.ontimeCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.memberPartCutCaption,arr.memberTimesContent)">
            <span>{{arr.memberPartCutCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.memberCaption,arr.memberContent)">
            <span>{{arr.memberCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.hongbaoCaption,arr.hongbaoContent)">
            <span>{{arr.hongbaoCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.freshmanCaption,arr.freshmanContent)">
            <span>{{arr.freshmanCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.forgotCaption,arr.forgotContent)">
            <span>{{arr.forgotCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.discountCaption,arr.discountContent)">
            <span>{{arr.discountCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.disclaimerCaption,arr.disclaimerContent)">
            <span>{{arr.disclaimerCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.couponCaption,arr.couponContent)">
            <span>{{arr.couponCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.businessCaption,arr.businessContent)">
            <span>{{arr.businessCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.balanceCaption,arr.balanceContent)">
            <span>{{arr.balanceCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.awesomeRestaurantCaption,arr.couponContent)">
            <span>{{arr.awesomeRestaurantCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.anonymousBuyCaption,arr.anonymousBuyContent)">
            <span>{{arr.anonymousBuyCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>

        <router-link to="/serve/ser">
          <div class="ptwo-item" @click="fn(arr.activityCaption,arr.activityContent)">
            <span>{{arr.activityCaption}}</span>
            <span class="ptwo-navTo iconfont icon-arrowRight"></span>
          </div>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
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
      arr: ""
    };
  },
  methods: {
    fn(a, b) {
      this.$store.commit("serve", a);
      this.$store.commit("serves", b);
    }
  },
  created() {
    this.axios.get("http://elm.cangdu.org/v3/profile/explain").then(data => {
      this.arr = data.data;
    });
      list: [
        "超级会员权益说明",
        "签到规则",
        "用户等级说明",
        "积分问题",
        "叫我拍大片",
        "支付问题",
        "其他问题",
        "准答大问题",
        "会员说明",
        "会员问题",
        "红包问题",
        "活动细则",
        "补签规则",
        "优惠说明",
        "免责说明",
        "代金券说明",
        "商务合作",
        "余额问题",
        "超赞商家",
        "匿名购买",
        "活动问题"
      ]
    }
  }
</script>

<style scoped>
.nav-top-a {
  padding: 0.52rem 0;
  line-height: 0.8rem;
}
.icon {
  font-size: 0.7rem;
}
.nav_top {
  display: flex;
  height: 2.7rem;
}
.nav_top_tw {
  flex: 1;
  text-align: center;
  border: 1px solid #f5f5f5;
}
.ictwo {
  color: #74c42f;
}
.iconfont {
  font-size: 0.65rem;
  line-height: 1.5rem;
}
.font-sty {
  font-size: 0.4rem;
  color: #7a7a7a;
}
.pone {
  line-height: 2rem;
  border-bottom: 1px solid #f5f5f5;
  font-size: 0.5rem;
  padding-left: 0.5rem;
  font-weight: bold;
}
.ptwo {
  line-height: 1.3rem;
  padding-left: 0.5rem;
}
.ptwo-item {
  height: 1.36rem;
  line-height: 1.36rem;
  font-size: 0.4rem;
  color: #848484;
  box-sizing: border-box;
  border-bottom: 0.01rem #f0f0f0 solid;
  padding: 0 0.46rem;
  overflow: hidden;
}
.ptwo-navTo {
  float: right;
  font-size: 0.4rem;
}
</style>

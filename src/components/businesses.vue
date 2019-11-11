<template>
  <div>
    <div class="sp_item">
      <div class="sp_it_l">
        <img :src="'//elm.cangdu.org/img/'+item.image_path" alt />
      </div>
      <div class="sp_it_r">
        <div class="it_r_t">
          <div class="it_r_t_pp">
            <i>品牌</i>
            <p>{{item.name}}</p>
          </div>
          <div class="it_r_t_piao">
            <span v-for="(i,$i) in item.supports" :key="$i">{{i.icon_name}}</span>
          </div>
        </div>
        <div class="it_r_c">
          <div class="it_r_c_l">
            <p>
              <el-rate
                v-model="item.rating"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </p>
            <p>月售{{item.recent_order_num}}单</p>
          </div>
          <div class="it_r_c_r">
            <span>{{item.delivery_mode.text}}</span>
            <em>准时达</em>
          </div>
        </div>
        <div class="it_r_b">
          <div class="it_r_b_l">
            <span style="font-size:0.30rem">￥{{item.float_minimum_order_amount}}起送</span>/
            <span style="font-size:0.30rem">{{item.piecewise_agent_fee.tips}}</span>
          </div>
          <div class="it_r_b_r">
            <span style="font-size:0.30rem">{{item.distance}}</span>
            <i>/</i>
            <em style="font-size:0.30rem">{{item.order_lead_time}}</em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.el-rate__icon {
  font-size: 0.18rem;
  margin: 0;
}
.el-rate__decimal {
  font-size: 0.18rem;
}
.sp_it_r .it_r_c_l span {
  padding: 0;
}

ul,
ol {
  list-style-type: none;
}

img {
  display: block;
}

a {
  text-decoration: none;
}

em,
i {
  font-style: normal;
}

.sp_item {
  background: #ffffff;
  padding: 0 0.3rem;
  padding-top: 0.45rem;
  padding-bottom: 0.55rem;
  overflow: hidden;
  border-bottom: 0.025rem solid #f1f1f1;
}

.sp_item .sp_it_l {
  float: left;
}

.sp_item .sp_it_l img {
  width: 1.82rem;
  height: 1.82rem;
}

.sp_item .sp_it_r {
  padding-left: 2.26rem;
}

.sp_item .sp_it_r .it_r_t {
  overflow: hidden;
  padding-bottom: 0.15rem;
}

.sp_item .sp_it_r .it_r_t .it_r_t_pp {
  float: left;
}

.sp_item .sp_it_r .it_r_t i {
  font-size: 0.35rem;
  display: inline-block;
  background: #ffd930;
  padding: 0 0.05rem;
  border-radius: 0.03rem;
  margin-right: 0.2rem;
}

.sp_item .sp_it_r .it_r_t p {
  display: inline;
  font-size: 0.43rem;
  font-weight: 700;
  color: #333;
}

.sp_item .sp_it_r .it_r_t .it_r_t_piao {
  float: right;
}

.sp_item .sp_it_r .it_r_t span {
  font-size: 0.26rem;
  color: #999;
  border: 0.025rem solid #f1f1f1;
  padding: 0 0.04rem;
  border-radius: 0.08rem;
  margin-left: 0.05rem;
}

.sp_it_r .it_r_c {
  overflow: hidden;
  padding-bottom: 0.18rem;
}

.sp_it_r .it_r_c_l {
  float: left;
}

.sp_it_r .it_r_c_l span {
  font-size: 0.22rem;
  color: #ff6000;
}

.sp_it_r .it_r_c_l p {
  display: inline-block;
  font-size: 0.2rem;
  color: #666;
  padding: 0 0.1rem;
}

.sp_it_r .it_r_c_r {
  float: right;
}

.sp_it_r .it_r_c_r span {
  font-size: 0.2rem;
  color: #fff;
  background-color: #3190e8;
  border: 0.025rem solid #3190e8;
  margin-right: 0.05rem;
  border-radius: 0.02rem;
  padding: 0 0.05rem;
}

.sp_it_r .it_r_c_r em {
  font-size: 0.2rem;
  color: #3190e8;
  border: 0.025rem solid #3190e8;
  border-radius: 0.02rem;
  padding: 0 0.05rem;
}

.sp_it_r .it_r_b {
  overflow: hidden;
}

.sp_it_r .it_r_b_l {
  float: left;
  font-size: 0.28rem;
}

.sp_it_r .it_r_b_l p {
  transform: scale(0.9);
  color: #666;
}

.sp_it_r .it_r_b_r {
  float: right;
  font-size: 0.28rem;
}

.sp_it_r .it_r_b_r span {
  color: #999;
}

.sp_it_r .it_r_b_r i {
  color: #ccc;
  margin: 0 0.1rem;
}

.sp_it_r .it_r_b_r em {
  color: #3190e8;
}

/*  */
</style>

<template>
  <div id="onlinepay">
    <lh_header title="在线支付"></lh_header>
    <div class="settime">
      <div class="settime_p">
        支付剩余时间
        <p style="font-size:.8rem;margin-top:.42rem;">{{minute}}:{{second}}</p>
      </div>
    </div>
    <div class="pay">选择支付方式</div>
    <div class="paymes">
      <div class="paymes_item" v-for="(i,$index) in list_arr" :key="$index" @click="btn($index)">
        <div class="item_one">
          <svg class="icon" aria-hidden="true">
            <use 
			:xlink:href="i.icons" />
          </svg>
        </div>
		<div class="btn">
           <span>{{i.tit}}</span>
		   <span class="btn_ye" :style="{background:index==$index?'#4ed763':''}"  ></span>
		</div>
      </div>
    </div>
	<div class="confirmpay">
         <div class="confirmpay_btn" @click="$alert('warn','当前环境无法支付，请打开官方APP进行付款')">
			 确认支付
		 </div>
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
		index:0,
      minutes: 15,
	  seconds: 0,
	  list_arr:[
		  {
              tit:'支付宝',
			  icons:'#icon-zhifubao'
		  },
		  {
			  tit:'微信',
			  icons:'#icon-weixinzhifu'
		  }
	  ]
    };
  },
  mounted() {
    this.add();
  },
  created() {
    this.$alert('warn','当前环境无法支付')
  },
  methods: {
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
	},
	btn(i){
       this.index = i
	},
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    },
  },
  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  }
};
</script>
<style>
.settime {
  height: 4.22rem;
  background: white;
  padding: 1.2rem 3rem;
  box-sizing: border-box;
}
.settime_p {
  font-size: 0.4rem;
  color: #a6a6a6;
  text-align: center;
}
.pay {
  line-height: 1.2rem;
  font-size: 0.5rem;
  background: #f1f1f1;
  color: #656565;
  padding-left: 0.5rem;
}
.paymes {
  height: 4.6rem;
  background: white;
}
.paymes_item{
	display:flex;
	height:2.3rem;
	padding-left:.5rem;
	line-height:2.4rem;
}
.item_one{
    flex:1;
	line-height:3rem;
	margin-right:.3rem;
}
.icon{
	font-size:1.3rem;
}
.btn{
	flex:9;
	padding-right:.5rem;
}
.btn span{
	color:#707070;
	font-size:.5rem;
	line-height:2.3rem;
}
.btn_ye{
	width:.7rem;
	height:.7rem;
	border-radius: 50%;
	background:#cccccc;
	display: inline-block;
	float:right;
	margin-top:.8rem;
	position: relative;
}
.btn_ye::after{
	content: "";
	position: absolute;
	left:0.1rem;
	width: 60%;
 	height: 50%;
	border: .1rem solid white;
	border-radius: .1rem;
	border-top: none;
	border-right: none;
	background: transparent;
	transform: rotate(-45deg);
}
.confirmpay{
	height:2rem;
	padding:.4rem .5rem;
}
.confirmpay_btn{
     border-radius: .15rem;
	 background:#4bda66;
	 text-align:center;
	 line-height:1.2rem;
	 color:white;
	 font-size:.5rem;
}
</style>

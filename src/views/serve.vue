<template>
  <div id="serve">
    <lh_header title="订单备注"></lh_header>
    <div class="remark_option">
      <p>快速备注</p>
      <span style="margin:0;" @click="ones($index)" :class="[one == $index?'bg':'']" v-for="(item,$index) in list" :key="item.id" >{{item.name}}</span>
      <span @click="twos" :class="ok?'bg':''" style="margin-left:.4rem;">不要香菜</span>
      <span @click="three" :class="isok?'bg':''">{{listt.name}}</span>
	  <span @click="fore" :class="sok?'bg':''">{{lists.name}}</span>
	  <span @click="five" :class="iok?'bg':''">{{listre.name}}</span>
      <div>
        <span style="margin:0" @click="sixs($index)" :class="[six == $index?'bg':'']" v-for="(it,$index) in listf" :key="it.id">{{it.name}}</span>
      </div>
	  
    </div>
	<div class="other">
         <p>其他备注</p>
		 <textarea class="text_sty" placeholder="请输入备注内容（可不填）" ></textarea>
	  </div>
	  <div class="pad">
		  <div class="btn_get">
            确定
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
	  one: "",
	  six:'',
	  ok:false,
	  isok:false,
	  sok:false,
	  iok:false,
      list: [
        {
          name: "不要辣"
        },
        {
          name: "少点辣"
        },
        {
          name: "多点辣"
        }
      ],
      listt: 
        {
          name: "不要洋葱"
        },
      lists: 
        {
          name: "多点醋"
        },
      listre:
        {
          name: "多点葱"
        },
      listf: [
        {
          name: "去冰"
        },
        {
          name: "少冰"
        }
      ],
      result: []
    };
  },
  methods: {
    ones(i) {
      this.one = i;
	},
	twos(){
      this.ok = !this.ok
	},
	three(){
      this.isok = !this.isok
	},
	fore(){
      this.sok = !this.sok
	},
	five(){
      this.iok = !this.iok
	},
	sixs(i){
		this.six = i
	}
  }
};
</script>
<style scoped>
.pad{
	padding:0 .5rem;
}
.btn_get{
	text-align: center;
	line-height:1.2rem;
	background:#4cd966;
	border-radius: .2rem;
	color:white;
	padding:0 .5rem;
}
.other{
	margin-top:.2rem;
  padding:0 .5rem .8rem .5rem;;
  background: white;
}
.other p{
  font-size: 0.45rem;
  line-height:1.3rem;
  color: #3a3a3a;
}
.text_sty{
	width:100%;
	min-height:3rem;
	background:#f8f8f8;
	border-radius: .2rem;
	outline: none;
	border:none;
	padding:.4rem .3rem;
	box-sizing: border-box;
}
.remark_list {
  margin-top: 0.7rem;
  background: white;
  min-height: 2rem;
}
.remark_list b {
  font-weight: 500;
  line-height: 0.8rem;
  padding: 0 0.2rem;
  font-size: 0.4rem;
}
.nav_tit {
  padding: 0.4rem;
  box-shadow: 0 0 0.2rem #f5f5f5;
  background: white;
  margin-top: 0.2rem;
}
.nav_tit p {
  font-size: 0.45rem;
  color: #3a3a3a;
}
.remark_option {
  background: white;
  /* margin-top: 0.5rem; */
  padding: 0 0.5rem 1rem .5rem;
}
.remark_option p {
  color: #262626;
  font-size: 0.5rem;
  line-height: 1.4rem;
}
.remark_option span {
  padding: 0.2rem 0.4rem;
  border: 0.03rem solid #3291e5;
  display: inline-block;
  border-radius: 0.12rem;
  margin-right: 0.5rem;
  margin-bottom: 0.3rem;
  /* position: relative;
  z-index: 2; */
}
.bg {
  background: #3291e5;
  color: white;
}
/* .option_item {
  display: inline-block;
  margin: 0.1rem 0.2rem;
} */
</style>

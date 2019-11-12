<template>
	<div id="search">
		<lh_header :title="'搜索'"></lh_header>
		<div class="sp_search">
			<input type="text" placeholder="请输入商家或者美食名称" v-model="msg">
			<div @click="upsearch">提交</div>
		</div>
		<div class="sp_smain" v-if="type">
			<div class="sp_smain_tit">商家</div>
			<div v-if="isshow">
				<div v-for="i in shopList">
					<seaList :seaData="i"></seaList>
				</div>
			</div>
			<div v-if="!isshow" style="text-align: center; line-height: 1.5rem;background: #ffffff;">
				很抱歉！无搜索结果
			</div>
		</div>
		<div class="stroy" v-if="!type">
			<p>历史记录</p>
			<div class="main">
				<div v-for="i in $store.state.StroyShopArr" @click="stroyClick(i)">
					{{i}}
				</div>
			</div>
			<div class="remove" @click="deall">
				清空所有历史记录
			</div>
		</div>
	</div>
</template>

<script>
	import seaList from '../../components/seaList.vue'
	import lh_header from "../../components/lh-header.vue";
	export default {
		components: {
			seaList,
			lh_header
		},
		data() {
			return {
				msg: '',
				shopList: '',
				type: false,
				isshow:true
			}
		},
		methods: {
			stroyClick(a) {
				this.msg = a
			},
			deall() {
				this.$store.state.StroyShopArr = []
			},
			upsearch() {
				this.$loading(true)
				this.type = true
				this.$store.commit('GetStroyShop', this.msg)
				this.axios.get(
					`https://elm.cangdu.org/v4/restaurants?geohash=${this.$store.state.City.geohash}&keyword=${this.msg}`).then((res) => {
					if(res.data.message=='搜索餐馆数据失败'){
						this.isshow = false
						this.$loading(false)
					}else{
						this.isshow = true
						this.shopList = res.data
						this.$loading(false)
					}
				})
			}
		},
		watch: {
			'$store.state.StroyShopArr'(a) {
				localStorage.shopNameArr = JSON.stringify(a)
			}
		},
		created() {
			if(localStorage.City) this.$store.state.City = JSON.parse(localStorage.City)
			if(localStorage.shopNameArr) this.$store.state.StroyShopArr = JSON.parse(localStorage.shopNameArr)
		}
	}
</script>

<style scoped>
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

.sp_search {
  padding: 0.3rem;
  background: #fff;
  overflow: hidden;
}

.sp_search > input {
  width: 74%;
  margin-right: 2%;
  float: left;
  height: 1rem;
  line-height: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 0.2rem;
}

.sp_search > div {
  float: left;
  width: 22%;
  height: 1rem;
  line-height: 1rem;
  background: #3190e8;
  border-radius: 8px;
  font-size: 16px;
  font-size: 0.42rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.sp_smain_tit {
  line-height: 1.3rem;
  height: 1.3rem;
  padding: 0 0.37rem;
  font-size: 0.4rem;
  font-weight: bold;
  color: #686868;
}

.main > div {
  padding: 0 0.4rem;
  height: 1.3rem;
  line-height: 1.3rem;
  border-bottom: 1px #ccc solid;
  background: #ffffff;
}
</style>

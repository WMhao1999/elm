<template>
	<div id="city">
		<lh_header :title="$route.params.cityname"  :path_r="'/'">
			<div slot="right">切换城市</div>
		</lh_header>
		<div class="s_sou">
			<div class="s_input">
				<input v-model="value" type="text" autofocus placeholder="输入学校、商务楼、地址、" @keyup.enter="btn" ref="fou" />
			</div>
			<div class="s_btn" @click="btn">
				<input type="submit" />
			</div>
		</div>
		<div class="s_lishi">
			<div class="s_li">搜索记录</div>
			<div class="s_tiao">
				<span v-for="i in hi" :key="i.no3" @click="value=i,btn()" style="padding:0 0.3rem;line-height:1.1rem;">{{i}}</span>
				<div class="s_qingk" v-if="hi!=''" @click="btn2">清空所有</div>
			</div>
		</div>
		<div>
			<CityList v-for="i in data" :key="i.no2" :data="i"></CityList>
		</div>
	</div>
</template>



<script>
	import lh_header from "./../components/lh-header.vue";
	import CityList from "./../components/cityList.vue"
	export default {
		components: {
			lh_header,
			CityList
		},
		data() {
			return {
				re: "",
				name: "",
				value: "",
				data: "",
				hi: [],
				type: true
			};
		},
		methods: {
			btn() {
				//搜索
				if (this.value == "") return;
				this.$http
					.get(
						`http://elm.cangdu.org/v1/pois?type=search&city_id=${this.$route.params.cityid}&keyword=${this.value}`
					)
					.then(res => {
						console.log(res);
						this.data = res.data;
						this.value = "";
						this.$refs.fou.focus();
					});
			},
			//添加历史记录
			btn1(name) {
				this.type = true;

				if (localStorage.hi) {
					for (var i = 0; i < this.hi.length; i++) {
						if (this.hi[i] == name) {
							this.type = false;
						}
					}
				}
				if (this.type) {
					this.hi.push(name);
					localStorage.hi = JSON.stringify(this.hi);
				}
			},
			//清空历史记录
			btn2() {
				window.localStorage.removeItem("hi");
				this.hi = [];
			}
		},
		created() {
			if (localStorage.hi) {
				this.hi = JSON.parse(localStorage.hi);
			}
		}
	};
</script>
<style scoped>
	.s_qingk {
		font-size: 0.4rem;
		text-align: center;
		line-height: 30px;
		margin-left: 8px;
	}

	.s_tiao {
		background: #fff;
		padding-left: 0.5rem;
	}

	.s_li {
		padding-left: 0.5rem;
	}

	.s_lishi {
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		font: 0.475rem/0.8rem Microsoft YaHei;
	}

	.s_no2 {
		background-color: #fff;
		border-top: 1px solid #e4e4e4;
	}

	.s_no2 li {
		margin: 0 auto;
		padding-top: 0.65rem;
		border-bottom: 1px solid #e4e4e4;
	}

	.s_no2 li h4 {
		margin: 0 auto 0.35rem;
		width: 90%;
		font-size: 0.65rem;
		color: #333;
		font-weight: normal;
	}

	.s_no2 li p {
		width: 90%;
		margin: 0 auto 0.55rem;
		font-size: 0.45rem;
		color: #999;
	}

	.s_input {
		width: 90%;
		margin: 0 auto;
		text-align: center;
	}

	.s_input input {
		border: 1px solid #e4e4e4;
		padding: 0 0.3rem;
		font-size: 0.45rem;
		color: #333;
		border-radius: 0.1rem;
		margin-bottom: 0.4rem;
		width: 100%;
		height: 1.1rem;
		box-sizing: border-box;
		outline: none;
	}

	.s_btn {
		width: 90%;
		margin: 0 auto;
		text-align: center;
	}

	.s_btn input {
		background-color: #3190e8;
		font-size: 0.45rem;
		color: #fff;
		border-radius: 0.1rem;
		margin-bottom: 0.4rem;
		width: 100%;
		height: 1.2rem;
		outline: none;
		border: none;
	}

	.s_sou {
		background-color: #fff;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		padding-top: 0.4rem;
	}

	.s_qie {
		right: 0.4rem;
		font-size: 0.6rem;
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.s_qie a {
		color: #fff;
	}

	.s_tou {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		height: 1.45rem;
	}

	.s_tou .fan {
		left: 0.4rem;
		width: 0.6rem;
		height: 1rem;
		line-height: 1.4rem;
		margin-left: 0.4rem;
		fill: none;
	}

	.s_tou .fan i {
		color: rgb(255, 255, 255);
		font-size: 0.6rem;
	}

	.s_tou .s_name {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		color: #fff;
		text-align: center;
	}
</style>

<template>
	<div id="l_header">
		<div class="l_bd">
			<div class="l_l">
				<slot name="left"><span class="iconfont" style="color: #FFFFFF;" @click="$router.go(-1)">&#xe642;</span></slot>
			</div>
			<div class="l_c">{{tit_a}}</div>
			<div class="l_r">
				<slot name="right"></slot>
			</div>
		</div>
		<div style="min-height:1.38rem"></div>
	</div>
</template>

<script>
	export default {
		props: ["title"],
		data() {
			return {
				tit: "",
			};
		},
		computed: {
			tit_a: {
				get() {
					return (this.tit = this.title);
				},
				set(v) {}
			},
			l_pr_a: {
				get() {
					return (this.l_pr = this.path_r);
				}
			}
		}
	};
</script>

<style>
	#l_header {
		font-size: 0.52rem;
	}

	#l_header a div {
		color: #FFFFFF;
		font-size: 0.52rem;
	}

	#l_header a div span {
		color: #FFFFFF;
		font-size: 0.35rem;
	}

	#l_header .l_bd {
		display: flex;
		width: 100%;
		padding: 0.34rem;
		box-sizing: border-box;
		background: #358fe7;
		position: fixed;
		top: 0;
		overflow: hidden;
	}

	#l_header .l_l {
		padding-right: 0.4rem;
		float: left;
		width: 20%;
	}

	#l_header .l_c {
		font-size: 0.52rem;
		text-align: center;
		flex: 1;
		color: #fff;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 60%;
	}

	#l_header .l_r {
		width: 20%;
		padding-left: 0.4rem;
		float: right;
	}
	#l_header .l_r a div{
		font-size: 0.45rem;
	}
</style>

<template>
	<div class="tit">
		<div class="introduce">
			<div class="introduce_top">
				<div class="introduce_top_l">
					<slot name="t6"></slot>
				</div>
				<div class="introduce_top_r">
					<slot name="t1"></slot>
					<slot name="t2"></slot>
					<slot name="t3"></slot>
				</div>
				
					<router-link :to="'/sjxq/'+id"><i class="ic"><slot name="t9"></slot></i></router-link>
				
			</div>
			<div class="introduce_btn">
				<div class="introduce_btn_l">
					<slot name='t7'></slot>
					<slot name="t4"></slot>
				</div>
				<div class="introduce_btn_r">
					<slot name="t5"></slot>
					<slot name='t8'></slot>
				</div>
			</div>
		</div>
		<slot name="t9"></slot>
	</div>
</template>

<script>
export default{
	props:['id']
}

</script>

<style>
.tit {
  /* background-image: url("//elm.cangdu.org/img/16b218200c241687.png"); */
  background-size: cover;
}

.introduce {
  padding: 0.27rem;
  min-height: 3.1rem;
  background: rgba(119, 103, 137, 0.9);
}

.introduce_top {
  overflow: hidden;
  position: relative;
}

.introduce_top .ic {
  position: absolute;
  right: 0rem;
  top: 1.1rem;
  color: #ffffff;
  font-size: 0.6rem;
}

.introduce_top_l {
  float: left;
}

.introduce_top_l img {
  width: 1.96rem;
  height: 1.96rem;
}

.introduce_top_r {
  padding-left: 2.2rem;
}

.introduce_top_r h3 {
  font-size: 0.54rem;
  color: #fff;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.3rem;
}

.introduce_top_r p {
  font-size: 0.36rem;
  color: #fff;
  margin-bottom: 0.3rem;
}

.introduce_btn {
  overflow: hidden;
}

.introduce_btn_l {
  float: left;
}

.introduce_btn_r {
  float: right;
}

.introduce_btn_l .introduce_btn_l_i {
  display: inline-block;
  padding: 0 0.05rem;
  background-color: rgb(240, 115, 115);
  border-color: rgb(240, 115, 115);
  margin-right: 0.1rem;
}

.introduce_btn i {
  color: #ffffff;
}

.introduce_btn span {
  color: #ffffff;
}
</style>

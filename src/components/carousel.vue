<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container con">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="isp_i" v-for="i in slide_one" :key="i.id">
            <img class="img" :src="'https://fuss10.elemecdn.com'+i.image_url" />
            <p>{{i.title}}</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="isp_i" v-for="i in slide_two" :key="i.id">
            <img class="img" :src="'https://fuss10.elemecdn.com'+i.image_url" />
            <p>{{i.title}}</p>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination dian" style="bottom: 0px;"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "HelloWorld",
  data() {
    return {
      slide_one: [],
      slide_two: []
    };
  },
  created() {
    this.axios
      .get(
        "https://elm.cangdu.org/v2/index_entry?geohash=39.98119,116.307175&group_type=1&flags[]=F"
      )
      .then(date => {
        for (var i = 0; i < date.data.length; i++) {
          if (i <= 7) this.slide_one.push(date.data[i]);
          else if (i > 7) this.slide_two.push(date.data[i]);
        }
      });
  },
  mounted() {
    new Swiper(".swiper-container", {
      // loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style>
.con {
  margin-bottom: 0.3rem;
}

.dian {
  bottom: 0px;
}

.isp_i {
  background: #ffffff;
  width: 25%;
  float: left;
}

.isp_i .img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 auto;
  margin-bottom: 0.5rem;
}

.isp_i p {
  text-align: center;
  font-size: 0.335rem;
  color: #666;
  margin-bottom: 0.5rem;
}
</style>

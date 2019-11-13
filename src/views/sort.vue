<template>
  <div id="sort">
    <lh_header :title="title"></lh_header>
    <div>
      <div class="classify">
        <div class="classify_b">
          <div
            v-for="(i,$i) in class_list"
            :key="i.id"
            :class="[index==$i?'active':'']"
            @click="btn($i)"
          >
            {{i.tit}}
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
        <div class="classify_c">
          <el-collapse-transition>
            <div style="display:flex;
  background: #e8e8e8;" v-show="index==0">
              <div class="classify_fl" style="flex:1">
                <div
                  v-for="(i,$i) in type_list"
                  :key="i.id"
                  :style="{background:item_index==$i?'#fff':''}"
                  @click="item_index=$i"
                >
                  <div class="class_lf">
                    <div style="flex:1">
                      <img :src="'https://fuss10.elemecdn.com/'+i.image_url" alt />
                      <span>{{i.name}}</span>
                    </div>
                    <p style=" text-align: right;display:inline-block">
                      <span class="c_bd">{{i.count}}</span>
                      <span>></span>
                    </p>
                  </div>
                </div>
              </div>
              <div style="flex:1;height:10.8rem;overflowY:auto;background:#fff" v-if="type_list">
                <div
                  class="item_index"
                  v-for="(i) in type_list[item_index].sub_categories"
                  :key="i.id"
                  @click="btn_a(i)"
                  style="display:flex"
                >
                  <span :style="{color:title==i.name?'#3c8ed7':'#000'}" style="flex:1">{{i.name}}</span>
                  <span
                    :style="{color:title==i.name?'#3c8ed7':'#000'}"
                    style="flex:1;text-align:right;padding-right:0.3rem"
                  >{{i.count}}</span>
                </div>
              </div>
            </div>
          </el-collapse-transition>
          <el-collapse-transition>
            <div v-show="index==1">
              <div class="list_no1" v-for="i in order_by" :key="i.name" @click="btn_b(i)">
                <div
                  style="display:inline-block;width:10%;font-size:.4rem;text-align:center"
                  :style="{color:i.color}"
                  class="iconfont"
                  :class="i.icon"
                ></div>
                <div style="display:inline-block;width:90%;" class="l_item">
                  <div style="display:flex">
                    <p style="flex:1">{{i.name}}</p>
                    <p
                      style="flex:1;text-align:right;line-height:1.5rem;color:#3c8ed7;padding-right:0.2rem"
                      :class="[$store.state.sort_data.order_by==i.num?'el-icon-check':'']"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-transition>
          <el-collapse-transition>
            <div style="background:#fff;" v-show="index==2">
              <div style="padding:.35rem;margin-right:-5%">
                <div style="line-height:1rem;font-size:.18rem">配送方式</div>
                <div class="t_class" v-for="(i,$i) in text" :key="$i+'1'">
                  <label
                    style="display:flex"
                    for="checkbox"
                    :style="{color:i.__v?'blue !important':''}"
                  >
                    <div style="float:left;margin-right:.2rem">
                      <input type="checkbox" v-model="i.__v" id="checkbox" style="display:none" />
                      <i class="el-icon-check" v-if="i.__v"></i>
                      <span
                        v-if="!i.__v"
                        style="border-radius:0.05rem;padding:0 0.05rem"
                        :style="{border:'0.05rem solid #'+i.color,color:'#'+i.color }"
                      >鸟</span>
                    </div>
                    <div style="float:left">{{i.text}}</div>
                  </label>
                </div>

                <div style="line-height:1rem;font-size:.18rem">商家属性(可以多先)</div>
                <div class="t_class" v-for="(i,$i) in delivery_list" :key="$i+'2'">
                  <label
                    style="display:flex"
                    :style="{color:i.__v?'blue !important':''}"
                    :for="'checkbox'+$i"
                  >
                    <div style="float:left;margin-right:.2rem">
                      <input
                        type="checkbox"
                        v-model="i.__v"
                        :id="'checkbox'+$i"
                        style="display:none"
                        ref="item_c"
                      />
                      <i class="el-icon-check" v-if="i.__v"></i>
                      <span
                        v-if="!i.__v"
                        style="border-radius:0.05rem;padding:0 0.05rem"
                        :style="{border:'0.05rem solid #'+i.icon_color,color:'#'+i.icon_color }"
                      >{{i.icon_name}}</span>
                    </div>
                    <div style="float:left">{{i.name}}</div>
                  </label>
                </div>
              </div>

              <div class="btn_class">
                <div @click="q_btn">清空</div>
                <div @click="$store.state.sort_data.delivery_mode=1,index=4">确认</div>
              </div>
            </div>
          </el-collapse-transition>
        </div>
      </div>
      <div style="height:.8rem"></div>
      <div></div>
      <div v-if="home_list">
        <div v-for="(i,$index) in home_list" :key="$index">
          <router-link :to="'/spcart/'+i.id">
            <!--动态传参 店铺id -->
            <z_businesses :item="i"></z_businesses>
          </router-link>
        </div>
      </div>
      <div v-else>
        <div v-for="(i,$i) in 10" :key="$i">
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
              alt
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lh_header from "./../components/lh-header.vue";
import z_businesses from "./../components/businesses.vue";
export default {
  components: {
    lh_header,
    z_businesses
  },
  data() {
    return {
      type_true: true,
      tabIndex: 0,
      tab: false,
      tab_2: 1,
      index: 4,
      type: 0,
      text: null,
      list_json: null,
      home_list: null,
      type_list: null,
      item_index: 0,
      delivery_list: null,
      class_list: [
        {
          tit: "分类"
        },
        {
          tit: "排序"
        },
        {
          tit: "筛选"
        }
      ],
      order_by: [
        { num: 4, name: "智能排序", icon: "icon-paixu", color: "#4b90cc" },
        { num: 5, name: "距离最近", icon: "icon-icon-test", color: "#2b9cd3" },
        { num: 6, name: "销量最高", icon: "icon-redu", color: "#f49898" },
        { num: 1, name: "起送价最低", icon: "icon-jiage", color: "#ebc345" },
        {
          num: 2,
          name: "配送速度最快",
          icon: "icon-shizhong",
          color: "#3ac8b8"
        },
        { num: 3, name: "评分最高", icon: "icon-star-line", color: "#f1c27b" }
      ],
      title: "",
      num: 0,
      checkList: []
    };
  },
  computed: {},

  watch: {
    "$store.state.sort_data": {
      handler(a) {
        console.log(a);
        this.axios
          .get("https://elm.cangdu.org/shopping/restaurants", {
            params: {
              latitude: 39.86103,
              longitude: 116.3699,
              offset: a.num,
              limit: 20,
              "extras[]": "activities",
              keyword: "",
              restaurant_category_id: "",
              "restaurant_category_ids[]": a.restaurant_category_ids,
              order_by: a.order_by,
              "delivery_mode[]": a.delivery_mode
            }
          })
          .then(data => {
            if (a.num == 0) {
              this.home_list = data.data;
            } else {
              this.home_list.push(data.data);
              console.log(this.home_list);
            }
          });
      },
      deep: true
    }
  },
  methods: {
    q_btn() {
      for (var i = 0; i < this.delivery_list.length; i++) {
        this.delivery_list[i].__v = false;
      }
      this.text[0].__v = false;
    },

    btn(i) {
      if (this.index == i) {
        if (i == 0) {
          this.index = 4;
        } else if (i == 1) {
          this.index = 4;
        } else if (i == 2) {
          this.index = 4;
        }
      } else {
        this.index = i;
      }
    },
    btn_a(i) {
      this.$store.state.sort_data.restaurant_category_ids = i.id;
      this.title = i.name;
      this.index = 4;
      this.home_list = null;
    },
    btn_b(i) {
      this.$store.state.sort_data.order_by = i.num;
      this.$store.state.sort_data.restaurant_category_ids = "";
      this.index = 4;
      this.home_list = null;
    },
    get_home() {
      this.axios
        .get(
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
            this.$store.state.City.latitude +
            "&longitude=" +
            this.$store.state.City.longitude
        )
        .then(data => {
          this.home_list = data.data;
        });
    },
    get_pyte() {
      this.axios
        .get("https://elm.cangdu.org/shopping/v2/restaurant/category")
        .then(data => {
          this.type_list = data.data;
        });
    },
    get_sx() {
      this.axios
        .get("https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes")
        .then(data => {
          this.text = data.data;
        });
    },
    get_hd() {
      this.axios
        .get(
          "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes"
        )
        .then(data => {
          this.delivery_list = data.data;
          console.log(this.delivery_list);
        });
    },
    load() {
      this.num++;
      console.log(this.num);
      setTimeout(() => {
        this.$store.state.sort_data.num = this.num;
      }, 2000);
    }
  },
  created() {
    this.get_home();
    this.get_pyte();
    this.get_sx();
    this.get_hd();
    const search = window.location.href.split("?")[1]; //url 转json
    this.list_json = search
      ? JSON.parse(
          '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}'
        )
      : {};
    this.$store.state.sort_data.restaurant_category_ids = this.list_json.restaurant_category_id;
    console.log(this.$store.state.sort_data.restaurant_category_ids);
    console.log(this.$store.state.City);
    if (this.list_json) {
      this.title = decodeURI(this.list_json.title);
    }
  }
};
</script>

<style>
#sort .btn_class {
  background: #e8e8e8;
  display: flex;
  padding: 0.2rem;
  line-height: 1.2rem;
  text-align: center;
}
#sort .btn_class > div {
  flex: 1;
  border-radius: 0.2rem;
  margin: 0.1rem;
  font-size: 0.5rem;
}
#sort .btn_class > div:nth-of-type(1) {
  background: #fff;
}

#sort .btn_class > div:nth-of-type(2) {
  background: #56d176;
  color: #fff;
}

#sort .classify {
  position: fixed;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 99;
}
#sort .classify_b {
  display: flex;
  padding: 0.2rem 0;
  font-size: 0.36rem;
  border-bottom: 0.01rem #e8e8e8 solid;
}
#sort .classify_b > div {
  flex: 1;
  text-align: center;
}
#sort .classify_b > div:nth-of-type(2) {
  border: 0.01rem solid #ccc;
  border-top: none;
  border-bottom: none;
}

#sort .active {
  color: #3c8ed7 !important;
}
#sort .active i {
  color: #3c8ed7 !important;
  transform: rotateX(-180deg);
  transition: 0.3s;
}

#sort .class_lf img {
  display: inline-block;
  width: 0.5rem;
  vertical-align: middle;
  padding-right: 0.25rem;
}
#sort .class_lf {
  padding: 0 0.33rem;
  line-height: 1.1rem;
  display: flex;
}
#sort .classify_c {
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 99;
}

#sort .c_bd {
  border-radius: 0.5rem;
  background: #ccc;
  color: #fff;
  font-size: 0.15rem !important;
  height: 0.18rem;
  padding: 0 0.1rem;
  text-align: right;
}

#sort .item_index {
  line-height: 0.5rem;
  margin-left: 0.35rem;
  border-bottom: 0.01rem solid #e8e8e8;
  line-height: 1.2rem;
}
#sort .list_no1 {
  line-height: 1.5rem;
  background: #fff;
  border-bottom: none;
}
#sort .list_no1 .l_item {
  border-bottom: 0.01rem #ccc solid !important;
}
#sort .list_no1 .l_item:nth-last-child(1) {
  border-bottom: none;
}

#sort .t_class {
  padding: 0.15rem;
  border-radius: 0.05rem;
  line-height: 0.6rem;
  border: 0.03rem solid #999;
  display: inline-block;
  overflow: hidden;
  width: 25%;
  margin-right: 3%;
  margin-bottom: 0.1rem;
}
#sort .t_class i {
  font-size: 0.5rem !important;
}
#sort .t_class div {
  font-size: 0.18rem !important;
}
</style>
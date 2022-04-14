<!-- 困境空间banner图 -->
<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in bannerList" :key="item.id"
      ><img class="banner-img" :src="item.url" alt=""
    /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "banner",
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    //这里存放数据
    return {
      bannerList: [
        { url: require("../../assets/images/jtkjkj_bg_banner.jpg"), id: 1 },
        { url: require("../../assets/images/xykjkj_bg_banner.jpg"), id: 2 },
        { url: require("../../assets/images/banner_3.jpg"), id: 3 },
      ],
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // effect: "fade",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss'>
.banner-img {
  height: 480px;
}
.swiper-pagination .my-bullet {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: $lucency-color;
  cursor: pointer;
}
.swiper-pagination .my-bullet-active {
  background-color: #7230d5;
}
</style>
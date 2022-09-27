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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "banner",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
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
  }
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
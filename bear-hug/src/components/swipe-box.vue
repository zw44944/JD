<template>
  <div class="swiper-box">
    <div class="swiper-control" @mouseenter="on_stop" @mouseleave="on_start">
      <swiper ref="myswiper" :options="swiperOptions">
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <router-link :to="{ name: 'Trouble-space', params: { interspace: item.name } }">
          <div class="swiper-wrap">
            <div class="clip">
              <img :src="item.url" alt="" />
            </div>
            <p class="swiper-title">{{ item.inof }}</p>
          </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="pagination-box">
      <div class="button-prev" slot="button-prev">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="button-next" slot="button-next">
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "carrousel",
  data() {
    return {
      bannerList: [
        {
          id: "1",
          url: require("../assets/images/home_space_img_01.jpg"),
          inof: "家庭困境空间",
          name: "family"
        },
        {
          id: "2",
          url: require("../assets/images/home_space_img_school.jpg"),
          inof: "校园困境空间",
          name: "school"
        },
        {
          id: "3",
          url: require("../assets/images/home_space_img_work.jpg"),
          inof: "职场困境空间",
          name: "market"
        },
        {
          id: "4",
          url: require("../assets/images/home_space_img_01.jpg"),
          inof: "家庭困境空间",
          name: "family"
        },
        {
          id: "5",
          url: require("../assets/images/home_space_img_school.jpg"),
          inof: "校园困境空间",
          name: "school"
        },
        {
          id: "6",
          url: require("../assets/images/home_space_img_work.jpg"),
          inof: "职场困境空间",
          name: "market"
        },
        {
          id: "7",
          url: require("../assets/images/home_space_img_01.jpg"),
          inof: "家庭困境空间",
          name: "family"
        },
        {
          id: "8",
          url: require("../assets/images/home_space_img_school.jpg"),
          inof: "校园困境空间",
          name: "school"
        },
        {
          id: "9",
          url: require("../assets/images/home_space_img_work.jpg"),
          inof: "职场困境空间",
          name: "market"
        },
      ],
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        observer:true,
        observeParents:true,
        // effect: "fade",
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    // swiper(){
    //   return this.$refs.myswiper
    // }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    on_stop() {
      this.$refs.myswiper.swiperInstance.autoplay.stop();
    },
    on_start() {
      this.$refs.myswiper.swiperInstance.autoplay.start();
    },
  },
  activated(){
    console.log(this.$refs.myswiper.swiperInstance)
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/mixin.scss";
.swiper-box {
  position: relative;
}
.swiper-container {
  img {
    width: 100%;
    height: 100%;
  }
}

.swiper-wrap {
  position: relative;
  cursor: pointer;
  perspective: 800px;
  color:#fff;
  perspective-origin: 50% 100%;
  transform-style: preserve-3d;
  .clip {
    height: 246px;
    clip-path: polygon(
      100% 0,
      100% 100%,
      84% 98%,
      66% 97%,
      50% 96%,
      36% 97%,
      16% 98%,
      0 100%,
      0 0
    );
  }
  .swiper-title {
    padding: 30px 0;
    text-align: center;
    font-size: 18px;
  }
  &::after {
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 1%;
    border: 1px solid $lucency-color;
    transition: all 0.5s;
    content: "";
  }
  &:hover::after {
    transform: rotateY(180deg);
  }
  &:hover .swiper-title {
    text-shadow: 0 0 10px rgba(126, 207, 231, 0.5),
      0 0 15px rgba(126, 207, 231, 0.6);
  }
}

.pagination-box {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 30px;
  .swiper-pagination {
    margin: 0 10px;
    position: initial;
    @include flex(center);
  }
  .swiper-pagination .my-bullet {
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin: 4px;
    background: rgba(255, 255, 255, 0.5);
    display: block;
    transition: width 0.3s;
    cursor: pointer;
  }
  .swiper-pagination .my-bullet-active {
    display: block;
    background: #ffffff;
    width: 20px;
    height: 4px;
    border-radius: 4px;
  }
}
.button-prev {
  margin-right: 10px;
}
.button-prev,
.button-next {
  @include flex(center);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255);
  transition: all 0.2s;
  cursor: pointer;
  i {
    font-size: 24px;
    text-indent: 4px;
  }
}
.button-prev:hover,
.button-next:hover {
  box-shadow: -1px 0 20px #3b3b3b, 1px 0 20px #3b3b3b, 0 -1px 20px #3b3b3b,
    0 1px 20px #3b3b3b;
}
.line {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  flex-grow: 1;
}
</style>
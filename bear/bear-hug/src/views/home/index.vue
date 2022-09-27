<!-- 首页内容区 -->
<template>
  <div class="index">
    <!-- 首页背景图 -->
    <div class="banner">
      <!-- 背景内容区 -->
      <article class="banner-container">
        <!-- title -->
        <header class="banner-title">
          <img
            class="title-img"
            src="../../assets/images/background-logo.png"
            alt=""
          />
          <h3 class="title-info">知道现在的你需要拥抱，我给你</h3>
        </header>
        <!-- 困境导航 -->
        <div class="warp">
          <router-link
            :to="{ name: 'Trouble-space', params: { interspace: 'family' } }"
            class="navigation"
          >
            <img
              class="navigation-img"
              src="../../assets/images/silk-bag.png"
              alt=""
            />
            <p class="navigation-info">空间困境</p>
          </router-link>
          <router-link to="/" class="navigation">
            <img
              class="navigation-img"
              src="../../assets/images/Trouble-space.png"
              alt=""
            />
            <p class="navigation-info">困境锦囊</p>
          </router-link>
        </div>
      </article>
      <!-- 遮罩层 -->
      <div class="lucency"></div>
    </div>
    <!-- 首页内容区 -->
    <div class="mian">
      <!-- 困境空间导航 -->
      <space></space>
      <!-- 困境树洞导航 -->
      <!-- 困境碎片导航 -->
      <dilemma></dilemma>
      <!-- 困境匹配导航 -->
      <matching></matching>
    </div>
  </div>
</template>

<script>

import space from "./floor-space";
import dilemma from "./dilemma";
import matching from "./floor-matching";
export default {
  
  name: "index",
  components: {
    space,
    dilemma,
    matching,
  } 
};
</script>
<style lang='scss' scoped>
@import "@/assets/scss/mixin.scss";
.banner {
  position: relative;
  height: 800px;
  margin-top: -80px;
  background: url("../../assets/images/background.jpg") no-repeat center/cover
    border-box;
  @include flex(center);
  .banner-title {
    text-align: center;
  }
  .title-info {
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.651);
    letter-spacing: 2px;
    font-weight: 100;
    font-size: 22px;
  }
}
.banner-container {
  transform: translateY(-20%);
  .warp {
    margin-top: 30px;
    @include flex();
  }
  .navigation {
    padding: 30px;
    margin: 0 25px;
    border-radius: 20px;
    // border: 1px solid #fff;
    .navigation-img {
      width: 180px;
      height: 125px;
    }
    .navigation-info {
      margin-top: 30px;
      text-align: right;
      font-size: 18px;
      color: #fff;
    }
    transition: all 0.4s;
    background: linear-gradient(0deg, #64a1e6, #ffffff) no-repeat top right/ 2px
        0,
      linear-gradient(90deg, #64a1e6, #ffffff) no-repeat bottom right/ 0 2px,
      linear-gradient(180deg, #64a1e6, #ffffff) no-repeat bottom left/ 2px 0,
      linear-gradient(270deg, #64a1e6, #ffffff) no-repeat top left/ 0 2px;
    background-color: #6b63b57a;
    &:hover {
      background-size: 2px 100%, 100% 2px;
    }
  }
}
.lucency {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 60%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0),
    #242633 80%,
    #242633
  );
}
.mian {
  position: relative;
  margin-top: -200px;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(180deg, #fff0, #242633 9%, #242633);
}
</style>
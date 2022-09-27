<!-- 首页困境空间导航 -->
<template>
  <div class="container">
    <div class="header">
      <h2 class="title">困境空间</h2>
      <span class="info">Dilemma Space</span>
    </div>
    <!-- 轮播图组件 -->
    <swipe></swipe>
  </div>
</template>

<script>

import swipe from "@/components/swipe-box.vue";
export default {
  name: "floor-space",
  components: {
      swipe
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/scss/index.scss";
</style>
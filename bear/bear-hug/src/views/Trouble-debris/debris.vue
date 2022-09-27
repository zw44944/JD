<!-- 困境碎片主入口 -->
<template>
  <div class="debris">
    <header class="header">
      <h2 class="title">{{ title }}</h2>
      <span class="english">Fragments of your predicament</span>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import left from "./yourDilemma.vue";
export default {
  name: "debris",
  components: { left },
  data() {
    return {
      title: "",
      tags: []
    };
  },
  //监控data中的数据变化
  watch: {
    $route: {
      handler(to) {
        console.log(to);
        this.title = to.name === "issue" ? "我的困境碎片" : "发布困境碎片";
      },
      deep: true,
      immediate: true,
    },
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/scss/mixin.scss";
.debris {
  min-height: 100vh;
  overflow: hidden;
  background-color: #000;
}
.header {
  text-align: center;
  letter-spacing: 0;
  margin-top: 40px;
  .title {
    font-weight: 400;
    font-size: 26px;
  }
  .english {
    line-height: 20px;
    color: rgba(255, 255, 255, 0.5);
  }
}

</style>
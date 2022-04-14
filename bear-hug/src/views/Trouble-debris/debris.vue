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
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import left from "./yourDilemma.vue";
export default {
  name: "debris",
  //import引入的组件需要注入到对象中才能使用
  components: { left },
  data() {
    //这里存放数据
    return {
      title: "",
      tags: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
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
  },
  //方法集合
  methods: {
  },
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
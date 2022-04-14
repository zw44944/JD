<!-- 公共的页脚部分 -->
<template>
  <div class="foot-bar">
    <div class="wrap">
      <p class="bottom">我们一路奋战，不是为了改变世界，而是不让世界改变我们。</p>
      <p class="bottom">&#169;版权所有 棒棒团10月公益项目组 Copyright Reserved 2020-2050 鄂ICP备2020016554号-1</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "nav-foot",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
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
<style lang='scss' scoped>
.foot-bar {
  background-color: $back-color;
  min-width: 1366px;
  .wrap {
    padding: 50px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 1100px;
    margin: 0 auto;
    .bottom{
      font-size: 12px;
      line-height: 24px;
      text-align: center;
      color: #808080;
    }
  }
}
</style>
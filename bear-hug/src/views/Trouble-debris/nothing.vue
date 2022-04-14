<template>
  <div class="nothing"
  :style="{
      'background-image': 'url(' + bgimg + ')',
    }">
    <div class="title">请创建您的困境碎片</div>
    <el-button class="big-btn" @click="jump">发布碎片</el-button>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { setCookie, getCookie } from "@/util/util";
export default {
  name: "nothing",
  //import引入的组件需要注入到对象中才能使用
  data() {
    //这里存放数据
    return {
        bgimg: require('../../assets/images/nothing.jpg'),
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    jump() {
      this.$router.push({ name: 'debris' })
    },
    
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
.nothing {
    position: relative;
    left: 50%;
    top: 50px;
    height: 500px;
    width: 800px;
    transform: translate(-50%, 0);
    margin-bottom: 150px;
    .title {
        position: relative;
        top:50px;
        left: 200px;
        font-size: 40px;
        font-weight: 500;
    }
    .big-btn {
    position: absolute;
    left: 400px;
    top: 300px;
    font-size: 24px;
    margin: 0 0 20px 120px;
    padding: 10px 40px;
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: 0 0 20px #9589fa inset;
    }
  }
}
</style>
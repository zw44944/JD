<!-- home入口文件 -->
<template>
  <div class="home">
    <nav-header></nav-header>
    <transition :name="transitionName">
      <keep-alive :exclude="/index/">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavHeader from "@/components/Nav-Header";
import NavFooter from "@/components/Nav-Footer";
import { setCookie } from "@/util/util";
import storage from '@/storage/index';

export default {
  name: "home",
  //import引入的组件需要注入到对象中才能使用
  components: {
    NavHeader,
    NavFooter,
  },
  data() {
    //这里存放数据
    return {
      transitionName: "",
      list: [],
      dilemmaList: {},
    };
  },
  //监听属性 类似于data概念
  computed: {
  },
  //监控data中的数据变化
  watch: {
    $route(to, from) {
      const current = to.meta.sort;
      const pevr = from.meta.sort;
      this.transitionName = current < pevr ? "slide-right" : "slide-left";
    },
  },
  //方法集合
  methods: {
    setUserCookie() {
      if(!document.cookie) {
        if(storage.get('userId')) {
          return setCookie("userId", storage.get('userId'), 30);
        }
        function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var oDate = new Date();
        const value = '' + oDate.getTime() + '' + getRandom(1000, 9999) + '';
        setCookie("userId", value, 30);
        console.log(document.cookie);
      }
      console.log(document.cookie);
    },
  },
  //生命周期 - 创建完成可以访问当前this实例）
  created() {
    this.setUserCookie()
  },
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
.home {
  min-width: 1366px;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all .5s;
}

.slide-right-leave {
  opacity: .8;
}

.slide-right-leave-to {
  opacity: .4;
  transform: translateX(5%);
}

.slide-right-enter{
  opacity: 0;
}
.slide-right-enter-to{
  opacity: .1;
}

.slide-left-enter{
  opacity: 0;
}
.slide-left-enter-to{
  opacity: .1;
}

.slide-left-leave {
  opacity: .8;
}
.slide-left-leave-to {
  opacity: .4;
  transform: translateX(-5%);
}
</style>
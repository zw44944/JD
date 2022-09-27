<!-- home入口文件 -->
<template>
  <div class="home">
    <Nav-header></Nav-header>
    <transition :name="transitionName">
      <keep-alive :exclude="/index/">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <Nav-footer></Nav-footer>
  </div>
</template>

<script>

import NavHeader from "@/components/Nav-Header";
import NavFooter from "@/components/Nav-Footer";
import { setCookie } from "@/util/util";
import storage from '@/storage/index';

export default {
  name: "home",
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
  
  //监控data中的数据变化
  watch: {
    $route(to, from) {
      const current = to.meta.sort;
      const pevr = from.meta.sort;
      this.transitionName = current < pevr ? "slide-right" : "slide-left";
    },
  },
  
  methods: {
    setUserCookie() {
      //没有本地存储时（有可能超时了）
      if(!document.cookie) {
        //判断本地是否有缓存
        if(storage.get('userId')) {
          //本地有缓存,把本地的缓存复制一份放到cookies里
          return setCookie("userId", storage.get('userId'), 30);
        }
        function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        //本地没有缓存就随机添加一个cookies
        var oDate = new Date();
        const value = '' + oDate.getTime() + '' + getRandom(1000, 9999) + '';
        setCookie("userId", value, 30);
        
      }
      // console.log(document.cookie);
    },
  },
  //生命周期 - 创建完成可以访问当前this实例）
  created() {
    this.setUserCookie()
  },
 
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
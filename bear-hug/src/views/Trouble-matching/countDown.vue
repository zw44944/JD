<!-- 你的困境碎片 -->
<template>
  <div
    class="matching"
    :style="{
      'background-image': 'url(' + bgimg + ')',
    }"
  >
    <header class="header">
      <h2 class="title">你的碎片在困境空间中漂泊倒计时</h2>
      <span class="english">Your fragments drift in the difficult space and count down</span>
    </header>
    <div class="bear">
      <img src="../../assets/images/background-logo.png" alt="">
    </div>
    <div class="main">
      <div class="left">
          <div class="countDown">
              <h2 class="title">倒计时</h2>
              <span class="english">Countdown</span>
         </div>
      </div>
      <div class="right">
        <div class="clock">
          {{this.time | dateFormat}}
        </div>
     </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { setCookie, getCookie } from "@/util/util";
export default {
  name: "countDown",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      bgimg: require("../../assets/images/matching/matching_1.jpg"),
      time: '',
      dilemmaList: {},
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route: {
      handler(to) {
        console.log(to);
        if(to.params.ttl) {
          this.dilemmaList.updateTime = Date.now()
        }
      },
      deep: true,
      immediate: true,
    },
  },
  //方法集合
  methods: {
    async getTime() {
      // console.log(getCookie("userId"));
      const { data: res } = await this.$http.post(`fragment/get/${getCookie("userId")}`)
      if (res.code !== 200) {
        return this.$message.error('获取困境碎片失败！')
      }
      this.dilemmaList = res.data[0]
      const getDateStr = function (dayCount) {
        let dd = new Date()
        dd.setDate(dd.getDate() + dayCount)
        let time = dd.getTime()- Date.now()
        return time
      }
      this.time = getDateStr(this.dilemmaList.ttl*1) + this.dilemmaList.updateTime - Date.now()
      // console.log(getDateStr(this.dilemmaList.ttl*1));
      // console.log(this.dilemmaList.updateTime);
      // console.log(Date.now());
      // console.log(getDateStr(this.dilemmaList.ttl*1) + this.dilemmaList.updateTime - Date.now())
      // console.log(this.time);
      // console.log(new Date(this.time));
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getTime()
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
//@import url(); 引入公共css类
@import "@/assets/scss/mixin.scss";
.matching {
  min-height: calc(100vh + 160px);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-mode: 50;
  overflow: hidden;
  letter-spacing: 0;
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
  .bear {
    position: absolute;
    top: 180px;
    left: 40px;
  }
}
.main {
  @include flex(flex-start, stretch);
  padding: 50px 0 50px 150px;
  .left {
    width: 400px;
    margin-right: 280px;
    .title {
      font-size: 40px;
      font-weight: 200;
    }
    .english {
      color: #aaa;
    }
  }
  .right {
    flex-grow: 1;
    @include flex(space-between, flex-start);
    flex-direction: column;
    .clock {
      height: 300px;
      width: 450px;
      background-color: #fff;
      color: #6666cc;
      line-height: 300px;
      text-align: center;
      font-size: 34px;
    }
  }
}
</style>
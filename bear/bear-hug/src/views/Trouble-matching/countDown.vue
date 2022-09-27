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
import { setCookie, getCookie } from "@/util/util";
export default {
  name: "countDown",
  components: {},
  data() {
    return {
      bgimg: require("../../assets/images/matching/matching_1.jpg"),
      time: '',
      dilemmaList: {},
    };
  },
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
      const { data: res } = await this.$http.get(`/fragment/get/?userId=${getCookie("userId")}`)
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
    }
  },
  created() {
    this.getTime()
  },
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
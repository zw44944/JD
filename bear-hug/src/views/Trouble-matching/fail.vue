<template>
  <div
    class="matching"
    :style="{
      'background-image': 'url(' + bgimg + ')',
    }"
  >
    <header class="header">
      <h2 class="title">你的碎片在困境空间中漂泊后没有被发现</h2>
      <span class="english">Your fragments drift in the difficult space and were not found</span>
    </header>
    <div class="bear">
      <img src="../../assets/images/background-logo.png" alt="">
    </div>
    <div class="fail">
        <div :style="{ backgroundImage: 'url(' + images.url_1 + ')' }" @click="getContinue">
          <p>继续漂泊</p>
        </div>
        <div :style="{ backgroundImage: 'url(' + images.url_2 + ')' }" class="right" @click="getOver">
          <p>结束漂泊</p>
        </div>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { delCookie, setCookie } from "@/util/util";
import storage from '@/storage/index';
export default {
  name: "fail",
  //import引入的组件需要注入到对象中才能使用
  data() {
    //这里存放数据
    return {
      bgimg: require("../../assets/images/matching/matching_4.jpg"),
      images: {
        url_1: require("../../assets/images/matching/matching_3.jpg"),
        url_2: require("../../assets/images/matching/matching_2.jpg"),
      },
      yourList: {},
      reqForm: {
        troubleId: 1000000,
        userId: "",
        message: "无",
        tags: [],
        contactType: "1",
        contactValue: "",
        remark: "",
        isShow: 1,
        ttl: 3
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getContinue() {
      console.log(getCookie("userId"));
      const { data: res } = await this.$http.post(`fragment/get/${getCookie("userId")}`)
      if (res.code !== 200) {
        return this.$message.error('获取困境碎片失败！')
      }
      this.yourList = res.data[0]
      this.reqForm.troubleId = this.yourList.troubleId;
      this.reqForm.message = this.yourList.message;
      this.reqForm.tags = this.yourList.tags.slice(2, -2).split('","')
      this.reqForm.contactType = this.yourList.contactType;
      this.reqForm.contactValue = this.yourList.contactValue;
      this.reqForm.remark = this.yourList.remark;
      this.reqForm.isShow = this.yourList.isShow;
      this.reqForm.ttl = this.yourList.ttl;
      delCookie("userId");
      storage.remove('userId');
      if(!document.cookie) {
        function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var oDate = new Date();
        const value = '' + oDate.getTime() + '' + getRandom(1000, 9999) + '';
        setCookie("userId", value, 30);
        console.log(document.cookie);
      }
      this.reqForm.userId = getCookie("userId");
      console.log(this.reqForm);
      const { data: re } = await this.$http.post('fragment/add', this.reqForm)
      console.log(re);
      if (re.code !== 200) {
        return this.$message.error('创建困境碎片失败！')
      }
      this.$message.success('创建困境碎片成功！')
      this.$router.push({
        name: 'countDown',
        params: { ttl: 'ttl' },
      })
    },
    getOver() {
      delCookie("userId");
      storage.remove('userId');
      if(!document.cookie) {
        function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var oDate = new Date();
        const value = '' + oDate.getTime() + '' + getRandom(1000, 9999) + '';
        setCookie("userId", value, 30);
        console.log(document.cookie);
      }
      this.$router.push({ name: 'index' })
    }
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
.fail {
    position: relative;
    left: 50%;
    top: 50px;
    height: 500px;
    width: 900px;
    transform: translate(-50%, 0);
    margin-top: 60px;
    margin-bottom: 150px;
    div {
      position: absolute;
      width: 400px;
      height: 500px;
      perspective: 800px;
      perspective-origin: 50% 100%;
      transform-style: preserve-3d;
      &::after {
        position: absolute;
        top: 5%;
        left: 5%;
        right: -5%;
        bottom: -5%;
        border: 1px solid $lucency-color;
        transition: all 0.5s;
        content: "";
      }
      &:hover::after {
        transform: rotateY(180deg);
      }
      p {
        position: absolute;
        font-size: 30px;
        left:50%;
        top: 420px;
        transform: translate(-50%, 0);
      }
    }
    .right {
      left: 500px;
    }
}
</style>
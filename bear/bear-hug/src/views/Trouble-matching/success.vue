<template>
<div
    class="matching"
    :style="{
      'background-image': 'url(' + bgimg + ')',
    }"
  >
    <header class="header">
      <h2 class="title">你的碎片在困境空间中漂泊后被发现</h2>
      <span class="english">Your fragments were found after drifting in the difficult space</span>
    </header>
    <div class="bear">
      <img src="../../assets/images/background-logo.png" alt="">
    </div>
    <div class="main container">
      <div class="left">
      <div class="item">
        <div class="info">
          <button class="button">困境标签</button>
        </div>
          <el-tag
          v-for="tag in list"
          :key="tag"
          class="tags">
            {{ tag }}
          </el-tag>
      </div>
      <div class="item">
        <div class="info">
          <button class="button">联系方式</button>
        </div>
        <div class="select" style="justify-content: center">{{this.dilemmaList.contactValue}}</div>
      </div>
      <div class="item">
        <div class="info">
          <button class="button">困境树洞</button>
        </div>
        <div class="select" style="justify-content: center">{{this.dilemmaList.message}}</div>
      </div>
      <div class="item">
        <div class="info">
          <button class="button">备注</button>
        </div>
        <div class="select" style="justify-content: center">{{this.dilemmaList.remark}}</div>
      </div>
    </div>
      <div class="right">
        <div :style="{ backgroundImage: 'url(' + images.url_1 + ')' }" @click="getContinue">
          <p>继续漂泊</p>
        </div>
        <div :style="{ backgroundImage: 'url(' + images.url_2 + ')' }" @click="getNew">
          <p>发布新困境</p>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import { getCookie, delCookie, setCookie } from "@/util/util";
import storage from '@/storage/index';
export default {
  name: "success",
  data() {
    return {
      bgimg: require("../../assets/images/matching/matching_7.jpg"),
      images: {
        url_1: require("../../assets/images/matching/matching_5.jpg"),
        url_2: require("../../assets/images/matching/matching_6.jpg"),
      },
      id: 0,
      dilemmaList: {},
      list: [],
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
  watch: {
    $route: {
      handler(to) {
        this.id = to.params.id
        console.log(this.id);
      },
      deep: true,
      immediate: true,
    },
  },
  //方法集合
  methods: {
    async getContinue() {
      console.log(getCookie("userId"));
      const { data: res } = await this.$http.get(`/fragment/get/?userId=${getCookie("userId")}`)
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
      storage.remove('userId')
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
    getNew() {
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
    },
    async getList() {
      const a = this.id
      const { data: res } = await this.$http.get(`fragment/selectById/?id=${ a }`)
      console.log(res.data);
      this.dilemmaList = res.data;
      console.log(this.dilemmaList);
      this.list = this.dilemmaList.tags.slice(2, -2).split('","')
      
    }
  },
  created() {
    this.getList()
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
  width: 1250px!important;
  margin: 0!important;
  padding: 50px 0 50px 100px;
  @include flex(flex-start, stretch);
  .left {
    width: 500px;
    height: 500px;
    margin-right: 280px;
    margin-top: 50px;
    background-color: #6b63b5;
    .item {
      @include flex(space-between, flex-start);
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      .info {
        width: 130px;
        flex-shrink: 0;
        margin: 30px;

        .button {
          border: 1px solid #fff;
          background-color: #fff;
          color: #000;
          outline: none;
          width: 80px;
          padding: 6px 0;
          border-radius: 12px;
        }
      }
      .select {
        box-sizing: border-box;
        width: 100px;
        margin-right: 50px;
        padding: 0 20px;
        height: 80px;
        border-radius: 10px;
        background-color: #fff;
        border: 1px solid #fff;
        color: #333;
        flex-grow: 1;
        display: flex;
        align-items: center;
        color: #000;
        .text {
          border: none;
          font-size: 16px;
          width: 100%;
          height: 100%;
          color: #000;
          &::placeholder {
            font-size: 12px;
          }
        }
      }
      .tags {
        box-sizing: border-box;
        padding: 0 20px;
        height: 40px;
        margin: 30px 10px 10px 10px;
        border-radius: 10px;
        background-color: transparent;
        border: 1px solid #fff;
        background-color: #fff;
        color: #000;
        flex-grow: 1;
        display: flex;
        align-items: center;
        color: #000;
        .text {
          border: none;
          font-size: 16px;
          width: 100%;
          height: 100%;
          color: #000;
          &::placeholder {
            font-size: 12px;
          }
        }
      }
    }
  }
  .right {
    flex-grow: 2;
    @include flex(space-between, flex-start);
    flex-direction: column;
    div {
      position: relative;
      width: 400px;
      height: 300px;
      margin-bottom: 70px;
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
        font-size: 20px;
        left:50%;
        top: 260px;
        transform: translate(-50%, 0);
      }
    }
    
  }
}
</style>
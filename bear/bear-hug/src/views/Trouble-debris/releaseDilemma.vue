<!-- 你的困境 -->
<template>
  <div
    class="main container"
    :style="{
      'background-image': 'url(' + bgimg + ')',
    }"
  >
    <div class="left">
      <div class="item">
        <div class="info">
          <button class="button">碎片存活时间</button>
        </div>
        <div class="select" style="justify-content: center">
          {{this.dilemmaList.ttl}}天
        </div>
      </div>
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
  </div>
</template>

<script>
import { setCookie, getCookie } from "@/util/util";
export default {
  name: "",
  data() {
    return {
      bgimg: require("../../assets/images/debris/dilemma_2.jpg"),
      TroubleLabel: "1",
      isShowTime: "3",
      tele: "",
      dec: "",
      dilemmaList: {},
      list: []
    };
  },
  methods: {
    async getList() {
      console.log(getCookie("userId"));
      const { data: res } = await this.$http.get(`/fragment/get/?userId=${getCookie("userId")}`)
      if (res.code !== 200) {
        return this.$message.error('获取困境碎片失败！')
      }

      this.dilemmaList = res.data[0]
      console.log(this.dilemmaList)
      this.list = this.dilemmaList.tags.slice(2, -2).split('","')
    },
  },
    created() {
     this.getList()
    },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/assets/scss/mixin.scss";
.main {
  @include flex(flex-start, stretch);
  padding: 50px 0 50px 150px;
  .left {
    width: 400px;
    margin-right: 280px;
    .item {
      @include flex(space-between, flex-start);
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      .info {
        width: 130px;
        flex-shrink: 0;
        margin-right: 30px;
        .button {
          border: 1px solid #fff;
          background-color: transparent;
          color: #fff;
          outline: none;
          width: 100%;
          padding: 6px 0;
          border-radius: 12px;
        }
      }
      .select {
        box-sizing: border-box;
        padding: 0 20px;
        height: 80px;
        border-radius: 10px;
        background-color: transparent;
        border: 1px solid #fff;
        color: #333;
        flex-grow: 1;
        display: flex;
        align-items: center;
        color: #fff;
        .text {
          border: none;
          font-size: 16px;
          width: 100%;
          height: 100%;
          color: #fff;
          &::placeholder {
            font-size: 12px;
          }
        }
      }
      .tags {
        box-sizing: border-box;
        padding: 0 20px;
        height: 40px;
        margin: 10px;
        border-radius: 10px;
        background-color: transparent;
        border: 1px solid rgb(236, 146, 146);
        color: #333;
        flex-grow: 1;
        display: flex;
        align-items: center;
        color: rgb(236, 146, 146);
        .text {
          border: none;
          font-size: 16px;
          width: 100%;
          height: 100%;
          color: rgb(236, 146, 146);
          &::placeholder {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
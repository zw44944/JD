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
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { setCookie, getCookie } from "@/util/util";
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
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
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getList() {
      console.log(getCookie("userId"));
      const { data: res } = await this.$http.post(`fragment/get/${getCookie("userId")}`)
      if (res.code !== 200) {
        return this.$message.error('获取困境碎片失败！')
      }
      console.log(res.data);
      this.dilemmaList = res.data[0]
      console.log(this.dilemmaList)
      this.list = this.dilemmaList.tags.slice(2, -2).split('","')
    },
  },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
     this.getList()
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
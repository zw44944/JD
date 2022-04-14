<!-- 首页困境匹配导航 -->
<template>
  <div class="matching">
    <header class="header">
      <h2 class="title">困境匹配</h2>
      <span class="info">Dilemma Matching</span>
    </header>
    <div class="list">
      <div class="item">
        <div
          class="clip-bg"
          :style="{ backgroundImage: 'url(' + images.url_1 + ')' }"
        ></div>
          <div class="control" @click="jump">
            <button class="btn btn-black">困境匹配</button>
          </div>
      </div>
      <div class="item">
        <div
          class="clip-bg"
          :style="{ backgroundImage: 'url(' + images.url_2 + ')' }"
        ></div>
          <div class="control" @click="jump">
            <button class="btn btn-black">匹配倒计时</button>
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
  name: "floor-matching",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      images: {
        url_1: require("../../assets/images/home_matching_img_left.png"),
        url_2: require("../../assets/images/home_matching_img_right.png"),
      },
      list: [],
      dilemmaList: {},
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getList() {
      const { data: res } = await this.$http.post(`fragment/get/${getCookie("userId")}`)
      if (res.code !== 200) {
        return this.$message.error('获取困境碎片失败！')
      }
      console.log(res.data);
      this.list = res.data;
      this.dilemmaList = this.list[0]
      console.log(this.list);
    },
    async jump() {
      await this.getList()
      if(this.list.length === 0) {
        return this.$router.push({ name: "nothing" });
      }
      this.$router.push({ name: "matching" });
    }
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
.matching {
  width: 1100px;
  margin: 0 auto 100px;
  .header {
    .title {
      font-size: 26px;
      margin-bottom: 10px;
    }
    .info {
      color: $lucency-color;
    }
    margin-bottom: 40px;
  }
  .list {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    .item {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 400px;
      height: 350px;
      border-radius: 10px;
      background-color: #50515c;
      transition: all 0.3s;
      cursor: pointer;
      .clip-bg {
        height: 226px;
        background-position: center;
        background-size: 160% 160%;
        clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%);
        transition: all 0.6s;
      }
      .btn-black {
        margin-top: 20px;
      }
      &:hover .clip-bg {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      }
      &:hover .btn {
        box-shadow: 0 0 20px rgba(150, 222, 235, 0.548),
          0 0 20px rgba(228, 204, 204);
      }
    }
  }
}
.control {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
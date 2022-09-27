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
// import { setCookie, getCookie } from "@/util/util";
export default {
  name: "nothing",
  data() {
    return {
        bgimg: require('../../assets/images/nothing.jpg'),
    };
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    jump() {
      this.$router.push({ name: 'debris' })
    },
    
  }
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
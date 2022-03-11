<template>
  <div class="box">
    <div style="margin-right: 20px">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        size="small"
        @click="goback"
      >
        返回列表
      </el-button>
    </div>

    <div>
      <div class="top-box">
        <img src="../../assets/class_img.png" alt="" />
        <div class="center-box">
          <div class="desc-box">
            鞍山市第十一中学听课教室
            <i class="el-icon-microphone"></i>
          </div>
          <div class="btn-box">
            <el-button class="look-btn" size="small" autofocus
              >看老师</el-button
            >
            <el-button class="look-btn" size="small">看学生</el-button>
            <el-button class="look-btn" size="small">看视频</el-button>
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <el-row :gutter="10">
          <el-col :span="8" v-for="j in 3" :key="j">
            <div class="grid-content">
              <img class="grid-img" src="../../assets/class_img.png" alt="" />
              <div class="center-box desc-box">
                鞍山市第十一中学听课教室
                <i class="el-icon-microphone"></i>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goback() {
      this.$router.push("/home/live-classes");
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  padding: 20px;
}

.top-box {
  position: relative;
  width: 1310px;
  height: 564px;

  img {
    width: 100%;
    height: 100%;
  }
}

.center-box {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  display: flex;
}

.desc-box {
  width: 230px;
  height: 32px;
  line-height: 32px;
  background-color: #012f4f;
  opacity: 0.6;
  border-radius: 15px;
  color: #fffefe;
  font-size: 13px;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: center;
}
.btn-box {
  margin-left: 20px;
}
.look-btn {
  background-color: #012f4f;
  opacity: 0.5;
  color: #fffefe;
  border: none;
}
.look-btn:focus {
  background-color: #409eff;
  color: #fffefe;
  opacity: 1;
}

.bottom-box {
  margin-top: 10px;

  .grid-content {
    position: relative;
    width: 430px;
    height: 204px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
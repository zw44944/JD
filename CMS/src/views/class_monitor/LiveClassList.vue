<template>
  <div>
    <el-card class="main-card-box">
      <!-- 头部-选择器 -->
      <div slot="header">
        <el-form class="g-tool-form" :inline="true">
          <div class="g-tool-form-left">
            <!-- 选择学校 -->
            <el-form-item label="学校">
              <el-select
                v-model="schoolSelectValue"
                placeholder="请选择"
                size="small"
                style="width: 200px"
              >
                <el-option
                  v-for="item in schoolOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <!-- 选择年级 -->
            <el-form-item label="年级">
              <el-select
                v-model="gradeSelectValue"
                placeholder="请选择"
                size="small"
                style="width: 128px"
              >
                <el-option
                  v-for="item in gradeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <!-- 选择学科 -->

            <el-form-item label="学科">
              <el-select
                v-model="subjectSelectValue"
                placeholder="请选择"
                size="small"
                style="width: 128px"
              >
                <el-option
                  v-for="item in subjectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <!-- 查询按钮 -->
            <el-form-item>
              <el-button icon="el-icon-search" type="primary" size="small">
                查询
              </el-button>
            </el-form-item>
          </div>

          <div class="g-tool-form-right">
            <el-form-item>
              <i
                :class="[
                  'el-icon-menu',
                  'grid-btn',
                  { 'grid-btn-active': gridActiveFlag },
                ]"
                @click="changeView(true)"
              ></i>
            </el-form-item>
            <el-form-item>
              <i
                :class="[
                  'el-icon-s-grid',
                  'grid-btn',
                  { 'grid-btn-active': !gridActiveFlag },
                ]"
                @click="changeView(false)"
              ></i>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <!-- 内容-大列表 -->
      <el-row :gutter="10" v-for="i in 2" :key="i" v-show="gridActiveFlag">
        <el-col :span="8" v-for="j in 3" :key="j">
          <div class="big-grid-content" @click="gotoDetail">
            <img class="grid-img" src="../../assets/class_img.png" alt="" />
            <div class="b-desc-box">
              沈阳市第十一中学-综合管理教室1
              <span><i class="el-icon-user"></i> 美术-李杰</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 内容-小列表 -->
      <el-row :gutter="10" v-for="i in 2" :key="i" v-show="!gridActiveFlag">
        <el-col :span="4" v-for="j in 6" :key="j">
          <div class="small-grid-content" @click="gotoDetail">
            <img class="grid-img" src="../../assets/class_img.png" alt="" />
            <div class="desc-box">
              <p class="desc-title">这里是视频名称</p>
              <div class="desc-content">
                <i class="el-icon-user"></i> 美术-李杰
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- 分页器 -->
      <div class="g-pagination-box">
        <el-pagination
          :current-page="1"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      gradeSelectValue: "",
      schoolSelectValue: "",
      subjectSelectValue: "",
      gridActiveFlag: true,
    };
  },
  computed: {
    ...mapState(["schoolOptions", "gradeOptions", "subjectOptions"]),
  },
  methods: {
    // 切换视图模式
    changeView(flag) {
      this.gridActiveFlag = flag;
    },
    // 去详情页
    gotoDetail() {
      this.$router.push("/home/live-classes-detail");
    },
  },
};
</script>
<style lang="less" scoped>
.grid-btn {
  font-size: 24px;
  line-height: 40px;
  cursor: pointer;
}
.grid-btn-active {
  color: #0c84ff;
}
.el-row {
  margin-bottom: 12px;
}
.big-grid-content {
  position: relative;
  // width: 558px;
  height: 320px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
}

.b-desc-box {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 325px;
  height: 30px;
  line-height: 30px;
  background-color: #012f4f;
  opacity: 0.6;
  border-radius: 15px;
  color: #fffefe;
  font-size: 13px;
  padding: 0 10px;
  box-sizing: border-box;

  span {
    margin-left: 10px;
  }
}

.small-grid-content {
  height: 270px;
  cursor: pointer;

  img {
    width: 100%;
    height: 184px;
  }
}

.desc-box {
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #011c2f;
  margin-top: -4px;
  color: #c1d9e9;
  padding: 0 10px;
  opacity: 0.9;

  .desc-title {
    margin-bottom: 8px;
  }
}
</style>
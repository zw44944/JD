<template>
  <el-container class="body-container">
    <el-aside width="174px">
      <img src="../assets/logo.png" alt="" width="174" />

      <el-menu
        :default-active="activePath"
        background-color="transparent"
        text-color="#dfdede"
        active-text-color="#01D4F9"
        router
      >
        <div v-for="(item, index) in navMenuList" :key="index">
          <el-submenu v-if="item.children" index="1">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              v-for="(item1, index1) in item.children"
              :key="index1"
              :index="item1.path"
              @click="saveNavStatus(item1.path, item1.title)"
            >
              <span slot="title">{{ item1.title }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else
            :index="item.path"
            @click="saveNavStatus(item.path, item.title)"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-aside>
    <el-main>
      <!-- 顶部标题 -->
      <div class="title-wrapper">
        <div class="title-main">
          <p class="title-text">天弘同步课堂系统建设平台</p>
          <img class="title-img" src="../assets/tbbg.png" alt="" />
        </div>
        <div class="title-user">
          超级管理员
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>

      <!-- 数值展示 -->
      <div class="count-wrapper">
        <div class="count-box">
          <span>用户总数</span>
          <span>25693</span>
        </div>
        <div class="count-box">
          <span>入驻学校数</span>
          <span>624</span>
        </div>
        <div class="count-box">
          <span>用户总数</span>
          <span>25693</span>
        </div>
        <div class="count-box">
          <span>用户总数</span>
          <span>25693</span>
        </div>
        <div class="count-box">
          <span>用户总数</span>
          <span>25693</span>
        </div>
      </div>

      <div class="main-box">
        <!-- 左侧图表 -->
        <div class="main-left">
          <!-- 上面的图表 -->
          <div class="lt">
            <div class="lt-title">
              <img src="../assets/1.png" alt="" />
              <span style="margin-left: 33px">学校开课次数统计</span>
              <span
                class="date-label"
                style="margin-left: 70px; margin-right: 12px"
                >学期</span
              >
              <el-date-picker
                class="date-picker"
                v-model="dateRangeValue"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
                style="width: 200px; border-radius: 0"
              ></el-date-picker>
              <span
                class="date-label"
                style="margin-left: 30px; margin-right: 12px"
                >月份
              </span>
              <el-date-picker
                class="date-picker"
                v-model="dateValue"
                type="month"
                placeholder="选择月份"
                size="small"
                style="width: 128px"
              >
              </el-date-picker>
            </div>
            <div id="lt-chart" class="lt-main"></div>
          </div>
          <!-- 下方的图表 -->
          <div class="lt lb">
            <div class="lt-title">
              <img src="../assets/1.png" alt="" />
              <span style="margin-left: 33px">科目开课次数统计</span>
              <span
                class="date-label"
                style="margin-left: 70px; margin-right: 12px"
                >学期</span
              >
              <el-date-picker
                class="date-picker"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
                style="width: 200px; border-radius: 0"
              ></el-date-picker>
              <span
                class="date-label"
                style="margin-left: 30px; margin-right: 12px"
                >月份
              </span>
              <el-date-picker
                class="date-picker"
                type="month"
                placeholder="选择月份"
                size="small"
                style="width: 128px"
              >
              </el-date-picker>
            </div>
            <div id="lb-chart" class="lt-main"></div>
          </div>
        </div>
        <!-- 右侧排名列表 -->
        <div class="main-right">
          <div class="rl">
            <div class="lt-title">
              <img src="../assets/1.png" alt="" />
              <span style="margin-left: 33px">学校开课次数排行（本学期）</span>
            </div>
            <div class="rl-main">
              <vuescroll :ops="ops">
                <div v-for="(item, index) in schoolList" :key="index">
                  <div
                    :class="[
                      'list-item',
                      index === 0 ? 'list-item1' : '',
                      index === 1 ? 'list-item2' : '',
                      index === 2 ? 'list-item3' : '',
                    ]"
                  >
                    <img src="../assets/no1.png" alt="" v-if="index === 0" />
                    <img
                      src="../assets/no2.png"
                      alt=""
                      v-else-if="index === 1"
                    />
                    <img
                      src="../assets/no3.png"
                      alt=""
                      v-else-if="index === 2"
                    />
                    <p v-else>
                      {{ index }}
                    </p>
                    <p
                      style="width: 268px"
                      :class="[
                        index === 0 ? 'p-no1' : '',
                        index === 1 ? 'p-no2' : '',
                        index === 2 ? 'p-no3' : '',
                      ]"
                    >
                      {{ item.name }}
                    </p>
                    <p
                      :class="[
                        index === 0 ? 'p-no1' : '',
                        index === 1 ? 'p-no2' : '',
                        index === 2 ? 'p-no3' : '',
                      ]"
                    >
                      52
                    </p>
                  </div>
                </div>
              </vuescroll>
            </div>
          </div>
          <div class="rr">
            <div class="rr-title">
              <img src="../assets/2.png" alt="" />
              <span style="margin-left: 33px">老师开课次数排行（本学期）</span>
            </div>
            <div class="rl-main">
              <vuescroll :ops="ops">
                <div v-for="(item, index) in teacherList" :key="index">
                  <div
                    :class="[
                      'list-item',
                      index === 0 ? 'list-item1' : '',
                      index === 1 ? 'list-item2' : '',
                      index === 2 ? 'list-item3' : '',
                    ]"
                  >
                    <img src="../assets/no1.png" alt="" v-if="index === 0" />
                    <img
                      src="../assets/no2.png"
                      alt=""
                      v-else-if="index === 1"
                    />
                    <img
                      src="../assets/no3.png"
                      alt=""
                      v-else-if="index === 2"
                    />
                    <p v-else>
                      {{ index }}
                    </p>
                    <p
                      style="width: 268px"
                      :class="[
                        index === 0 ? 'p-no1' : '',
                        index === 1 ? 'p-no2' : '',
                        index === 2 ? 'p-no3' : '',
                      ]"
                    >
                      {{ item.name }}
                    </p>
                    <p
                      :class="[
                        index === 0 ? 'p-no1' : '',
                        index === 1 ? 'p-no2' : '',
                        index === 2 ? 'p-no3' : '',
                      ]"
                    >
                      52
                    </p>
                  </div>
                </div>
              </vuescroll>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// 引入 vueScroll
import vuescroll from "vuescroll/dist/vuescroll-native";
import echarts from "echarts";

import { navMenuList } from "./common.js";

export default {
  components: {
    vuescroll,
  },
  data() {
    return {
      navMenuList,
      // 被激活的链接地址
      activePath: "/index",
      dateRangeValue: "",
      dateValue: "",
      schoolList: [
        {
          name: "沈阳市第十一中学",
          count: 55,
        },
        {
          name: "沈阳市第十一中学",
          count: 54,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
        {
          name: "沈阳市第十一中学",
          count: 52,
        },
      ],
      teacherList: [
        { name: "李丹-沈阳市第一二零中学", count: 54 },
        { name: "张三-沈阳市第一二零中学", count: 53 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
        { name: "李丹-沈阳市第一二零中学", count: 52 },
      ],
      ops: {
        bar: {
          background: "#0C4787",
          size: "8px",
        },
      },
      echartsOps: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            textStyle: {
              color: "#DFDEDE",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#DFDEDE",
            },
          },
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            // backgroundStyle: {
            //   color: "rgba(220, 220, 220, 0.8)",
            // },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#4CC875" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" },
              ]),
            },
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    var myChart = echarts.init(document.getElementById("lt-chart"));
    var myChart1 = echarts.init(document.getElementById("lb-chart"));
    myChart.setOption(this.echartsOps);
    myChart1.setOption(this.echartsOps);
  },
  methods: {
    // 保存链接的激活状态
    saveNavStatus(activePath, activeMenuTitle) {
      const activeMenu = {};
      activeMenu.path = activePath;
      activeMenu.title = activeMenuTitle;

      window.sessionStorage.setItem("activeMenu", JSON.stringify(activeMenu));

      // this.activePath = activePath;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("common.less");
.body-container {
  height: 100%;
  background: url("../assets/bg.png");
  background-size: 100% 100%;
}

.el-main {
  position: relative;
  padding: 0;
}

// 头部标题 start
.title-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
}
.title-main {
  position: relative;
  width: 1572px;
}

.title-img {
  position: absolute;
  top: 0;
}

.title-text {
  height: 29px;
  line-height: 29px;
  padding-top: 22px;
  text-align: center;
  color: #01d4f9;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 5px;
}

.title-user {
  height: 12px;
  line-height: 12px;
  color: #01d4f9;
  font-size: 14px;
  margin: 45px 0 0 42px;
}

// 头部标题 end

// 数值展示 start
.count-wrapper {
  display: flex;
  justify-content: space-around;
}

.count-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 316px;
  height: 72px;
  margin-top: 123px;
  background: url("../assets/main_middle.png");

  span {
    &:first-child {
      font-weight: 400;
      color: #01d4f9;
      margin-right: 18px;
    }

    &:last-child {
      font-size: 36px;
      font-weight: 400;
      color: #01d4f9;
    }
  }
}

// 数值展示 end

// 图标-列表 start
.main-box {
  margin: 31px 0 41px 0;

  display: flex;
  justify-content: space-around;
}

.lt {
  width: 750px;
  height: 450px;
  background: linear-gradient(
    135deg,
    transparent 35px,
    rgba(0, 168, 255, 0.2) 0
  );
}

.lt-title {
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  color: #fff;
  font-size: 18px;

  img {
    position: absolute;
    left: -3px;
    top: -1px;
  }

  .date-label {
    font-size: 14px;
    color: #dfdede;
  }
}

.lt-main {
  width: 734px;
  height: 361px;
  margin: 0 auto;
  background: rgba(1, 28, 47, 0.4);
}

.date-picker {
  background-color: rgba(12, 71, 135, 0.8);
  border: 1px solid #0084c8;

  /deep/.el-range-input {
    background-color: rgba(12, 71, 135, 0.8);
    color: #dfdede;
  }

  /deep/.el-range-separator {
    color: #dfdede;
  }

  /deep/.el-input__inner {
    background: transparent;
    border: none;
  }
}

.lb {
  margin-top: 25px;
}

// 右侧列表 start
.main-right {
  display: flex;
  justify-content: space-around;
}
.rl {
  float: left;
  width: 450px;
  height: 925px;
  background: linear-gradient(
    135deg,
    transparent 35px,
    rgba(0, 168, 255, 0.2) 0
  );
  // margin-left: 24px;
}

.rl-main {
  width: 434px;
  height: 837px;
  margin: 0 auto;
  // padding-top: 24px;
  background: rgba(1, 28, 47, 0.4);
  // overflow: auto;
}

.list-item {
  display: flex;
  align-items: center;
  height: 50px;
  color: #dfdede;
  font-size: 16px;

  img {
    margin-left: 28px;
    margin-right: 33px;
  }

  p:first-child {
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin-left: 28px;
    margin-right: 33px;
  }
}

.list-item1 {
  background-color: rgba(249, 79, 70, 0.1);
}
.list-item2 {
  background-color: rgba(53, 171, 249, 0.1);
}
.list-item3 {
  background-color: rgba(76, 200, 117, 0.1);
}

.p-no1 {
  color: #f94f46;
}
.p-no2 {
  color: #35abf9;
}
.p-no3 {
  color: #4cc875;
}

.rr {
  float: left;
  width: 450px;
  height: 925px;
  background: linear-gradient(
    225deg,
    transparent 35px,
    rgba(0, 168, 255, 0.2) 0
  );
  margin-left: 24px;
}

.rr-title {
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  color: #fff;
  font-size: 18px;

  img {
    position: absolute;
    right: -3px;
    top: -1px;
  }
}

// 图标-列表 end
</style>
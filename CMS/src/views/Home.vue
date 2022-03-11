<template>
  <el-container class="body-container">
    <el-header>
      <img src="../assets/logo.png" alt="" width="174" />
      <div class="title-user">
        超级管理员
        <i class="el-icon-caret-bottom"></i>
      </div>
    </el-header>
    <el-container>
      <el-aside width="174px">
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
        <div class="navTab">
          <el-tag
            v-for="value in tagList"
            :key="value[0]"
            :to="value[1].path"
            closable
            :effect="activePath === value[1].path ? 'dark' : 'light'"
            @close="handleCloseTag(value[1].title)"
            @click="goto(value[1].path)"
            style="cursor: pointer"
          >
            {{ value[1].title }}
          </el-tag>
          <!-- <el-tag closable type="info"> 上课统计 </el-tag> -->
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { navMenuList } from "./common.js";
export default {
  data() {
    return {
      navMenuList,
      // 被激活的链接地址
      activePath: "",
      activeMenuTitle: "",
      schoolSelectValue: "",
      schoolOptions: [
        {
          value: "沈阳第十一中学",
          label: "沈阳第十一中学",
        },
      ],
      teacherSelectValue: "",
      teacherOptions: [
        {
          value: "李丹",
          label: "李丹",
        },
      ],
      // 动态导航标签
      dynamicTags: new Map(),
      dynamicTagList: [],
    };
  },
  created() {
    const activeMenu = JSON.parse(window.sessionStorage.getItem("activeMenu"));
    this.activePath = activeMenu.path;
    this.dynamicTags.set(activeMenu.title, activeMenu);
    this.dynamicTagList = Array.from(this.dynamicTags);
  },
  computed: {
    tagList: function () {
      // console.log(this.dynamicTagList);
      return this.dynamicTagList;
    },
  },

  methods: {
    // 保存链接的激活状态
    saveNavStatus(activePath, activeMenuTitle) {
      const activeMenu = {};
      activeMenu.path = activePath;
      activeMenu.title = activeMenuTitle;
      window.sessionStorage.setItem("activeMenu", JSON.stringify(activeMenu));
      this.activePath = activePath;
      this.dynamicTags.set(activeMenu.title, activeMenu);
      this.dynamicTagList = Array.from(this.dynamicTags);
    },
    // 关闭一个tag标签
    handleCloseTag(key) {
      this.dynamicTags.delete(key);
      this.dynamicTagList = Array.from(this.dynamicTags);
    },
    goto(path) {
      this.$router.push(path);
      this.activePath = path;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("common.less");
.body-container {
  height: 100%;
}

.el-header {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: rgba(1, 28, 47);
  justify-content: space-between;
}

.title-user {
  color: #01d4f9;
  font-size: 14px;
  margin-right: 42px;
}

.el-aside {
  background-color: rgba(1, 28, 47);
}

// main区域 start
.el-main {
  height: 100%;
  padding: 0;
  background-color: #f5f5f5;
}

.navTab {
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 24px;

  .el-tag {
    margin-right: 12px;
  }
}

// main区域 end
</style>

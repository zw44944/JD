<!-- 公共的导航部分 -->
<template>
  <div class="nav-header">
    <div class="logo">
      <img class="header-logo" src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="nav-bar">
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="[activeName === 'index' ? 'active-item' : '']"
        >
          <div class="item-wrap">
            <router-link class="el-dropdown-link" :to="{ name: 'index' }">
              首页
            </router-link>
          </div>
        </li>
        <li
          class="nav-item"
          :class="[activeName === 'Trouble-space' ? 'active-item' : '']"
        >
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              困境空间<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="space-family">家庭困境空间</el-dropdown-item>
              <el-dropdown-item command="space-school">校园困境空间</el-dropdown-item>
              <el-dropdown-item command="space-market">职场困境空间</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li
          class="nav-item"
          :class="[activeName === 'tree' ? 'active-item' : '']"
        >
          <div class="item-wrap">
            <router-link class="el-dropdown-link" :to="{ name: 'tree' }">
              困境树洞
            </router-link>
          </div>
        </li>
        <li
          class="nav-item"
          :class="[activeName === 'debris' ? 'active-item' : '']"
        >
          <el-dropdown @command="handleCommand" placement="bottom-start">
            <router-link class="el-dropdown-link" :to="{ name: 'debris' }">
              困境碎片<i class="el-icon-arrow-down el-icon--right"></i>
            </router-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="dilemma-your"
                >发布困境碎片</el-dropdown-item
              >
              <el-dropdown-item @click="reload" :command='this.list.length == 0 ? "dilemma-nothing" : "dilemma-issue"'
                >我的困境碎片</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li
          class="nav-item"
          :class="[activeName === 'matching' ? 'active-item' : '']"
        >
          <div class="item-wrap" @click="jump">困境匹配</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { setCookie, getCookie } from "@/util/util";
export default {
  name: "nav-header",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      activeName: "index",
      page: 0,
      spaceList: '',
      list: [],
      time: '',
      id: 0,
      dilemmaList: {},
      success: {}
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route: {
      handler(val) {
        const name = val.matched[1].name;
        this.activeName = name;
      },
      deep: true,
      immediate: true,
    }
  },
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
    reload() {
      this.getList()
    },
    async handleCommand(command) {
      const [pathName, targetName] = command.split("-");
      if (pathName === "space") {
        this.$router.push({
          name: "Trouble-space",
          params: { interspace: targetName },
        });
      } else if (pathName === "dilemma") {
        await this.getList()
        // console.log(this.list.length);
        // console.log(targetName);
        if(this.list.length !== 0 && targetName === "nothing") {
          return this.$router.push({ name: "issue" });
        }
        this.$router.push({ name: targetName });
      }
    },
    async jump() {
      await this.getList()
      if(this.list.length === 0) {
        return this.$router.push({ name: "nothing" });
      }
      if(this.list.length !== 0) {
        this.id = this.list[0].id
        const { data: res } = await this.$http.post('match_record/selectMatchRecordByFramgmentID', this.id)
        console.log(res.data[0]);
        this.success = res.data[0]
        if(this.success) {
          return this.$router.push({
            name: "success",
            params: { id: this.success.id }
        });
        }
        const getDateStr = function (dayCount) {
          let dd = new Date()
          dd.setDate(dd.getDate() + dayCount)
          let time = dd.getTime()- Date.now()
          return time
        }
        this.time = getDateStr(this.dilemmaList.ttl*1) + this.dilemmaList.updateTime - Date.now()
        if(this.time > 0) {
          return this.$router.push({ name: "countDown" });
        }else {
          return this.$router.push({ name: "fail" });
        }
      }
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
  
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/assets/scss/mixin.scss";
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  min-width: 1366px;
}
.logo {
  line-height: 80px;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  background-color: #242633;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  .header-logo {
    vertical-align: middle;
  }
}
.nav-list {
  @include flex(center);
  background-color: #10141b;
  .nav-item {
    position: relative;
    height: 60px;
    line-height: 60px;
    padding: 4px 10px;
    margin: 0 10px;
    color: #fff;
    box-sizing: border-box;

    &::before {
      position: absolute;
      box-sizing: border-box;
      top: 0;
      left: 100%;
      width: 0;
      height: 100%;
      border-bottom: 2px solid #6b63b5;
      transition: all 0.5s;
      content: "";
    }

    &:hover {
      &::before {
        width: 100%;
        left: 0;
        transition-delay: 200ms;
      }

      & + li::before {
        left: 0;
      }
    }
    .el-dropdown-link {
      color: #fff;
    }
  }

  .active-item.nav-item::before {
    display: none;
  }
  .active-item {
    border-bottom: 2px solid #6b63b5;
  }

  .item-wrap {
    display: inline-block;
    position: relative;
    color: #fff;
    font-size: 14px;
  }
}
</style>
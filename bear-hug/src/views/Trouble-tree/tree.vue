<!-- 困境树洞主入口 -->
<template>
  <div
    class="tree"
    :style="{
      'background-image': 'url(' + bgimg + ')',
    }"
  >
    <div class="panel">
      <div class="description panel-row">
        <div class="panel-title">
          <span class="title">困境树洞<sup class="sup">*</sup></span>
        </div>
        <div class="panel-form">
          <div class="text">
            <textarea
              name="tree"
              id="textarea"
              v-model="info"
              placeholder="请把你的困境描述出来，为你找到相拥的人"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="tag panel-row">
        <div class="panel-title">
          <span class="title">困境标签<sup class="sup">*</sup></span>
        </div>
        <div class="panel-form">
          <div class="panel-form-list">
            <div
              class="panel-form-item"
              v-for="item in dilemmaTag"
              :key="item.id"
            >
              <input
                class="panel-input"
                type="checkbox"
                name=""
                :id="item.id"
                v-model="item.isCheck"
              /><label class="label" :for="item.id">{{ item.title }}</label>
            </div>
            <div class="panel-form">
              <input class="panel-input" type="checkbox" name="" id="" /><label
                class="label"
                for=""
                style="font-size: 18px"
                @click="open"
                ><i class="el-icon-plus"></i
              ></label>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-panel" @click="submit">生成困境碎片</button>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      bgimg: require("../../assets/images/tree/tree_bgi.jpg"),
      dilemmaTag: [
        { title: "家庭", isCheck: true, id: 1 },
        { title: "校园", isCheck: false, id: 2 },
        { title: "职场", isCheck: false, id: 3 },
      ],
      info: "",
      tag: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route: {
      handler(to) {
        console.log(to.params);
        this.tag = to.params.tag
      },
      deep: true,
      immediate: true,
    },
  },
  //方法集合
  methods: {
    open() {
      if (this.dilemmaTag.length > 6)
        return this.$message.info("标签数量达到上限");
      this.$prompt("困境标签", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        roundButton: true,
        inputPattern: /^[\w\u4E00-\u9FA5\uF900-\uFA2D]{1,5}$/,
        inputErrorMessage: "标签限五个文字,不含特殊符号",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "成功添加标签: " + value,
          });
          this.dilemmaTag.push({
            title: value,
            isCheck: false,
            id: this.fetchId(),
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "你已取消",
          });
        });
    },
    fetchId() {
      return Date.now();
    },
    submit() {
      if (!this.info) return this.$message.error("你还没有描述困境");
      if (!this.dilemmaTag.some((item) => item.isCheck))
        return this.$message.error("你还没用选择标签");
      this.$message.success("成功发布碎片")
      this.$router.push({
          name: "debris",
          params: { message: this.info, tag: this.tag},
        });

    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.tree {
  min-height: calc(100vh + 160px);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-mode: 50;
  overflow: hidden;
  letter-spacing: 0;
}
.panel {
  width: 840px;
  box-sizing: border-box;
  margin: 200px auto 50px;
  padding: 50px 100px;
  background-color: rgba(250, 250, 250, .2);
  border-radius: 10px;
  .panel-row + .panel-row {
    margin-top: 40px;
  }
  .panel-row {
    display: flex;
    .panel-title {
      width: 120px;
      flex-shrink: 0;
      color: #fff;
    }
    .panel-form {
      position: relative;
      flex-grow: 1;
      .text {
        height: 246px;
        border: 1px solid #fff;
      }
      .panel-form-list {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
.sup {
  color: #fe3f40;
  font-size: 16px;
  vertical-align: middle;
}
#textarea {
  border: none;
  outline: none;
  resize: none;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-sizing: border-box;
  &::placeholder {
    font-size: 14px;
    line-height: 220px;
    color: #fff;
    text-align: center;
  }
}
.panel-input {
  position: absolute;
  visibility: hidden;
  &:checked + .label {
    color: #fff;
    background-color: #6b63b5;
    border-color: #6b63b5;
  }
}
.label {
  display: inline-block;
  padding: 6px 20px;
  border: 1px solid #323233;
  user-select: none;
  border-radius: 14px;
  color: #fff;
  cursor: pointer;
}
.panel-form-item {
  margin-bottom: 10px;
}
.panel-form-item:not(:last-child) {
  margin-right: 20px;
}
.btn-panel {
  display: block;
  border: none;
  outline: none;
  font-size: 18px;
  margin: 20px auto 0;
  border-radius: 0;
  padding: 10px 30px;
  background-color: #6b63b5;
  color: #fff;
  cursor: pointer;
}
</style>
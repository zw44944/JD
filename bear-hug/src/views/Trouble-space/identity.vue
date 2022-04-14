<!-- 困境空间身份选择 -->
<template>
  <div class="identity">
    <transition name="fade">
      <div class="select" v-show="!isSelect" ref="select">
        <h2 class="title">身份</h2>
        <span class="english">IDENTITY</span>
        <div class="select-id container">
          <div
            class="item"
            v-for="(item, index) in selectIdentity[current]"
            :key="index"
            @click="routePush(item.title)"
          >
            <div class="figure-img">
              <img :src="item.imgurl" alt="" />
            </div>
            <div class="dec">
              <p class="figcaption-title">{{ item.title }}</p>
              <span class="figcaption-english">{{ item.english }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="move">
      <router-view :selectIdentity="selectIdentity"></router-view>
    </transition>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "identity",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      selectIdentity: {
        family: [
          {
            title: "父母",
            english: "PARENTS",
            imgurl: require("../../assets/images/space/jtkjkj_bg_identity_01.jpg"),
            dilemma: [
              {
                title: "教育困难",
                english: "Education",
                imgurl: require("../../assets/images/space/jtkjkj_parents_img_01.png"),
                name: 'tree',
                father: "父母",
                grandpa: "家庭",
              },
              {
                title: "夫妻困境",
                english: "Education",
                imgurl: require("../../assets/images/space/jtkjkj_parents_img_02.png"),
                name: 'tree',
                father: "父母",
                grandpa: "家庭",
              },
              {
                title: "婆媳困境",
                english: "Education",
                imgurl: require("../../assets/images/space/jtkjkj_parents_img_03.png"),
                name: 'tree',
                father: "父母",
                grandpa: "家庭",
              },
            ],
          },
          {
            title: "孩子",
            english: "OFFSPRING",
            imgurl: require("../../assets/images/space/jtkjkj_bg_identity_02.jpg"),
            dilemma: [
              {
                title: "与父母沟通困境",
                english: "Communication",
                imgurl: require("../../assets/images/space/jtkjkj_zn_img_01.png"),
                name: 'tree',
                father: "孩子",
                grandpa: "家庭",
              },
              {
                title: "学习困境",
                english: "Communication",
                imgurl: require("../../assets/images/space/jtkjkj_zn_img_02.png"),
                name: 'tree',
                father: "孩子",
                grandpa: "家庭",
              },
            ],
          },
          {
            title: "新婚夫妇",
            english: "couple",
            imgurl: require("../../assets/images/space/jtkjkj_bg_identity_03.jpg"),
            dilemma: [
              {
                title: "生活困境",
                english: "Live",
                imgurl: require("../../assets/images/space/jtkjkj_xh_img_01.png"),
                name: 'tree',
                father: "新婚夫妇",
                grandpa: "家庭",
              },
              {
                title: "育儿困境",
                english: "Live",
                imgurl: require("../../assets/images/space/jtkjkj_xh_img_02.png"),
                name: 'tree',
                father: "新婚夫妇",
                grandpa: "家庭",
              },
              {
                title: "养胎困境",
                english: "Live",
                imgurl: require("../../assets/images/space/jtkjkj_xh_img_03.png"),
                name: 'tree',
                father: "新婚夫妇",
                grandpa: "家庭",
              },
            ],
          },
        ],
        school: [
          {
            title: "老师",
            english: "TEACHER",
            imgurl: require("../../assets/images/space/xykjkj_bg_identity_01.jpg"),
            dilemma: [
              {
                title: "教学困境",
                english: "Teaching",
                imgurl: require("../../assets/images/space/xykjkj_teacher_img_01.png"),
                name: 'tree',
                father: "老师",
                grandpa: "校园",
              },
              {
                title: "工作困境",
                english: "Work",
                imgurl: require("../../assets/images/space/xykjkj_teacher_img_02.png"),
                name: 'tree',
                father: "老师",
                grandpa: "校园",
              },
            ],
          },
          {
            title: "学生",
            english: "STUODENT",
            imgurl: require("../../assets/images/space/xykjkj_bg_identity_02.jpg"),
            dilemma: [
              {
                title: "霸凌困境",
                english: "Bully",
                imgurl: require("../../assets/images/space/xykjkj_student_img_01.png"),
                name: 'tree',
                father: "学生",
                grandpa: "校园",
              },
              {
                title: "学习困境",
                english: "Bully",
                imgurl: require("../../assets/images/space/xykjkj_student_img_02.png"),
                name: 'tree',
                father: "学生",
                grandpa: "校园",
              },
              {
                title: "恋爱困境",
                english: "Live",
                imgurl: require("../../assets/images/space/xykjkj_student_img_03.png"),
                name: 'tree',
                father: "学生",
                grandpa: "校园",
              },
            ],
          },
        ],
        market: [
          {
            title: "初入职场新人",
            english: "FRESH",
            imgurl: require("../../assets/images/space/zckjkj_bg_identity_01.png"),
            dilemma: [
              {
                title: "工作焦虑困境",
                english: "Pua",
                imgurl: require("../../assets/images/space/zckjkj_xr_img_01.png"),
                name: 'tree',
                father: "初入职场新人",
                grandpa: "职场",
              },
              {
                title: "职场Pua困境",
                english: "Pua",
                imgurl: require("../../assets/images/space/zckjkj_xr_img_02.png"),
                name: 'tree',
                father: "初入职场新人",
                grandpa: "职场",
              },
            ],
          },
          {
            title: "职场老人",
            english: "JUNIOR",
            imgurl: require("../../assets/images/space/zckjkj_bg_identity_02.png"),
            dilemma: [
              {
                title: "知识焦虑困境",
                english: "Anxiety",
                imgurl: require("../../assets/images/space/zckjkj_leader_img_01.png"),
                name: 'tree',
                father: "职场老人",
                grandpa: "职场",
              },
              {
                title: "管理困境",
                english: "Anxiety",
                imgurl: require("../../assets/images/space/zckjkj_leader_img_02.png"),
                name: 'tree',
                father: "职场老人",
                grandpa: "职场",
              },
            ],
          },
          {
            title: "领导",
            english: "SENIOR",
            imgurl: require("../../assets/images/space/zckjkj_bg_identity_03.png"),
            dilemma: [
              {
                title: "知识焦虑困境",
                english: "Anxiety",
                imgurl: require("../../assets/images/space/zckjkj_leader_img_01.png"),
                name: 'tree',
                father: "领导",
                grandpa: "职场",
              },
              {
                title: "管理困境",
                english: "Anxiety",
                imgurl: require("../../assets/images/space/zckjkj_leader_img_02.png"),
                name: 'tree',
                father: "领导",
                grandpa: "职场",
              },
            ],
          },
        ],
      },
      transitionName: "",
      checkFade: false,
    };
  },
  props: {
    currentPage: {
      type: String,
      default: () => "family",
    },
    isSelect: {
      type: Boolean,
      default: false,
    },
  },
  //监听属性 类似于data概念
  computed: {
    current() {
      return this.currentPage;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    routePush(name) {
      this.isCheckIdentity = true;
      this.$router.push({ name: "select", query: { name } });
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
@import "@/assets/scss/mixin.scss";
.identity {
  position: relative;
  min-height: 100vh;
  background-color: #f5f6fa;
  .select {
    text-align: center;
  }
  .title {
    color: #17171a;
    font-size: 26px;
    font-weight: 400;
  }
  .english {
    letter-spacing: 0;
    font-size: 12px;
    color: #707080;
  }
  .select-id {
    padding: 0 30px;
    margin: 50px auto;
    @include flex();
    .figure-img {
      position: relative;
      width: 320px;
      height: 420px;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        transform: translateY(-20px);
        box-shadow: 2px 4px 30px rgba(27, 27, 27, 0.384);
      }
      &::after:hover {
        transform: rotateY(180deg);
      }
      &::after {
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 1px solid #fff;
        transition: transform 0.5s;
        content: "";
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dec {
      padding: 10px 0;
      .figcaption-title {
        color: #17171a;
        font-size: 16px;
      }
      .figcaption-english {
        color: #707080;
        font-size: 12px;
        letter-spacing: 0;
      }
    }
  }
}

.select {
  padding: 50px 0;
}

.fade-enter-active,
.fade-leave-active,
.move-enter-active,
.move-leave-active {
  transition: all 0.5s;
}

.fade-enter/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
  transform: translateX(0);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.move-enter {
  opacity: 0;
}
.move-enter-to {
  opacity: 1;
}
</style>
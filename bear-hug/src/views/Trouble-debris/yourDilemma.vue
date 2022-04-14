<!-- 你的困境碎片 -->
<template>
  <div class="main container">
    <div class="left">
      <el-form ref="dilemmaFormRef" :model="dilemmaForm" :rules="dilemmaFormRules" label-width="200px">
        <el-form-item label="碎片联系方式">
          <el-select v-model="dilemmaForm.contactType" placeholder="请选择联系方式">
            <el-option label="微信" value="1"></el-option>
            <el-option label="电话号码" value="2"></el-option>
            <el-option label="QQ" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="困境标签" prop="tags">
            <el-cascader v-model="dilemmaForm.tags" :options="tagsOptions" @change="handleChange" clearable></el-cascader>
        </el-form-item>
        <el-form-item label="是否显示困境事件">
            <el-radio-group v-model="dilemmaForm.isShow">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="联系方式" prop="contactValue">
          <el-input v-model="dilemmaForm.contactValue" placeholder="请输入联系方式"></el-input>
        </el-form-item>
        <el-form-item label="碎片存活时间">
          <el-select v-model="dilemmaForm.ttl" placeholder="请选择碎片存活时间">
            <el-option label="一天" value="1"></el-option>
            <el-option label="两天" value="2"></el-option>
            <el-option label="三天" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="dilemmaForm.remark" placeholder="把你的困境描述出来，为你找到相拥的人。"></el-input>
        </el-form-item>
        <el-button class="btn big-btn" @click="addDilemmaForm">发布困境碎片</el-button>
      </el-form>
    </div>
    <div 
    class="right" 
    :style="{
      'background-image': 'url(' + bgimg + ')',
    }"
    >
      <header class="header" style="text-align: center; margin-top: 16px; margin-left: 20px; line-height: 30px">
        <h2 class="title">困境树洞</h2>
        <span class="english">Difficult posibion tree hole</span>
      </header>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { setCookie, getCookie } from "@/util/util";
import storage from '@/storage/index';
export default {
  name: "left",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      bgimg: require("../../assets/images/debris/dilemma_1.jpg"),
      dilemmaForm: {
          troubleId: 1000000,
          userId: "",
          message: "无",
          tags: [],
          contactType: "1",
          contactValue: "",
          remark: "",
          isShow: "1",
          ttl: "3"
      },
      tagsOptions: [{
        value: '家庭',
        label: '家庭',
        children: [{
          value: '父母',
          label: '父母',
          children: [{
            value: '教育困境',
            label: '教育困境',
          }, {
            value: '夫妻困境',
            label: '夫妻困境',
          }, {
            value: '婆媳困境',
            label: '婆媳困境',
          }]
        },{
          value: '孩子',
          label: '孩子',
          children: [{
            value: '与父母沟通困境',
            label: '与父母沟通困境',
          }, {
            value: '学习困境',
            label: '学习困境',
          }]
        },{
          value: '新婚夫妇',
          label: '新婚夫妇',
          children: [{
            value: '生活困境',
            label: '生活困境',
          }, {
            value: '育儿困境',
            label: '育儿困境',
          }, {
            value: '养胎困境',
            label: '养胎困境',
          }]
        }]
      },{
        value: '校园',
        label: '校园',
        children: [{
          value: '老师',
          label: '老师',
          children: [{
            value: '教学困境',
            label: '教学困境',
          }, {
            value: '工作困境',
            label: '工作困境',
          }]
        },{
          value: '学生',
          label: '学生',
          children: [{
            value: '霸凌困境',
            label: '霸凌困境',
          }, {
            value: '学习困境',
            label: '学习困境',
          }, {
            value: '恋爱困境',
            label: '恋爱困境',
          }]
        }]
      },{
        value: '职场',
        label: '职场',
        children: [{
          value: '初入职场新人',
          label: '初入职场新人',
          children: [{
            value: '工作焦虑困境',
            label: '工作焦虑困境',
          }, {
            value: '职场PUA困境',
            label: '职场PUA困境',
          }]
        },{
          value: '职场老人',
          label: '职场老人',
          children: [{
            value: '知识焦虑困境',
            label: '知识焦虑困境',
          }, {
            value: '管理困境',
            label: '管理困境',
          }]
        },{
          value: '领导',
          label: '领导',
          children: [{
            value: '知识焦虑困境',
            label: '知识焦虑困境',
          }, {
            value: '管理困境',
            label: '管理困境',
          }]
        }]
      }],
      troubleList: {
        '教育困境': 1000000,
        '夫妻困境': 1000001,
        '婆媳困境': 1000002,
        '与父母沟通困境': 1000000,
        '学习困境': 1000001,
        '生活困境': 1000000,
        '育儿困境': 1000001,
        '养胎困境': 1000002,
        '教学困境': 1000000,
        '工作困境': 1000001,
        '霸凌困境': 1000000,
        '恋爱困境': 1000002,
        '工作焦虑困境': 1000000,
        '职场PUA困境': 1000001,
        '知识焦虑困境': 1000000,
        '管理困境': 1000001
      },
      dilemmaFormRules: {
        tags: [
        { type: 'array', required: true, message: '请选择困境标签', trigger: 'change' }
        ],
        contactValue: [
          { required: true, message: '联系方式不能为空', trigger: 'blur' }
        ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route: {
      handler(to) {
        console.log(to.params);
        to.params.tag ? this.dilemmaForm.tags = to.params.tag : this.dilemmaForm.tags = this.dilemmaForm.tags;
        to.params.message ? this.dilemmaForm.message = to.params.message : this.dilemmaForm.message = this.dilemmaForm.message;
      },
      deep: true,
      immediate: true,
    },
  },
  //方法集合
  methods: {
    handleChange() {
      const trouble = this.dilemmaForm.tags[2]
      this.dilemmaForm.troubleId = this.troubleList[trouble]
    },
    async addDilemmaForm() {
      this.$refs.dilemmaFormRef.validate(async valid => {
        if (!valid) {
          return this.$message.error('请填写必要的表单项！')
        }
        if(!document.cookie) {
          function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          var oDate = new Date();
          const value = '' + expiresDate.getTime() + '' + getRandom(1000, 9999) + '';
          setCookie("userId", value, 30);
        }
        this.dilemmaForm.userId = getCookie("userId");
        this.dilemmaForm.ttl = this.dilemmaForm.ttl *1;
        this.dilemmaForm.contactType = this.dilemmaForm.contactType *1;
        this.dilemmaForm.contactValue = this.dilemmaForm.contactValue *1;
        this.dilemmaForm.isShow = this.dilemmaForm.isShow *1;
        const { data: res } = await this.$http.post('fragment/add', this.dilemmaForm)
        console.log(res.data)
        console.log(this.dilemmaForm);
        if (res.code !== 200) {
          return this.$message.error('创建困境碎片失败！')
        }
        this.$message.success('创建困境碎片成功！')
        storage.set('userId', this.dilemmaForm.userId)
        this.$router.push({ name: 'issue' })
      })   
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
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import "@/assets/scss/mixin.scss";
.main {
  background: linear-gradient(#000, #242633);
  width: 1250px!important;
  margin: 0!important;
  padding: 50px 0 50px 100px;
  @include flex(flex-start, stretch);
  .left {
    width: 500px;
    margin-right: 180px;
  }
  .right {
    flex-grow: 2;
    @include flex(space-between, flex-start);
    flex-direction: column;
  }
  .big-btn {
    position: absolute;
    left: 800px;
    top: 500px;
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
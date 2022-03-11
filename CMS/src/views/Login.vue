<template>
  <div class="container">
    <div class="circle-wrapper circle-1"></div>
    <div class="circle-wrapper circle-2"></div>
    <div class="circle-wrapper circle-3">
      <p class="horizental-center">- 同步课程，同步教学 -</p>
      <!-- 登陆表单 -->
      <el-form
        class="login-form horizental-center"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
            autofocus
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="请输入密码"
            v-on:keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn-wrapper">
          <el-button class="btn" @click="login">登 陆</el-button>
          <el-button class="btn" @click="resetLoginForm">取 消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登陆表单数据的绑定对象
      loginForm: {
        username: "",
        password: "",
      },
      // 表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          {
            required: true,
            message: "",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          {
            required: true,
            message: "请输入登陆密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 重置表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 登陆
    login() {
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) {
          return;
        }
        this.$message.success("登陆成功！");
        this.$router.push("/index");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.horizental-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.container {
  width: 100%;
  height: 100%;
  background: url("../assets/bg.png");
  background-size: 100% 100%;
}

.circle-wrapper {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.circle-1 {
  width: 487px;
  height: 487px;
  background-color: #0c729c;
  opacity: 0.15;
}
.circle-2 {
  width: 420px;
  height: 420px;
  background-color: #008cc0;
  opacity: 0.2;
}
.circle-3 {
  width: 359px;
  height: 359px;
  background-color: #41a1cd;

  p {
    top: 61px;
    width: 325px;
    line-height: 40px;
    font-size: 24px;
    color: #fff;
    text-align: center;
  }
}

.login-form {
  bottom: 52px;
  width: 246px;
}

.btn-wrapper {
  margin-bottom: 0;
}

.btn {
  width: 111px;
  height: 37px;
  background-color: #f4c41e;

  &:first-child {
    float: left;
  }
  &:last-child {
    float: right;
  }
}

.el-form-item {
  margin-bottom: 27px;

  &:nth-child(2) {
    margin-bottom: 32px;
  }

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
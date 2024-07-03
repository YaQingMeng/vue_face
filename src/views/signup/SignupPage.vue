<template>
  <div class="register-container">
    <el-card class="register-card">
      <h2 class="register-title">门禁管理系统注册</h2>
      <el-form ref="signupFormRef" :model="userReact" class="register-form" :rules="rules" label-width="70px">
        <el-form-item label="工号" prop="accountId">
          <el-input v-model="userReact.accountId" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userReact.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userReact.email" type="email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="userReact.phone" type="phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="选择身份" prop="type" label-width="100px">
          <el-radio-group v-model="userReact.type">
            <el-radio :value="0">学生</el-radio>
            <el-radio :value="1">教师</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-button type="primary" @click="handleRegister">注册</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userReact: {
        accountId: '',
        password: '',
        email:'',
        phone:'',
        type: 0
      },
      rules: {
        accountId: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择用户类型', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    handleRegister() {
      this.$refs.signupFormRef.validate((valid) => {
        if (valid) {
          // 模拟注册逻辑
          if (this.userReact.accountId === '1' && this.userReact.password === '1' && this.userReact.type === 0 && this.userReact.email === '1' && this.userReact.phone === '1') {
            this.$message.success('注册成功');
            this.$router.push('/'); // 注册成功后跳转到登录页面
          } else {
            this.$message.error('注册失败: 账号或密码错误，或用户类型不是学生');
          }
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex; /* 修改为 flex */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh;
  background-image: url('/public/login.jpg');
  background-size: cover;
  background-position: center;
}

.form-item .el-form-item__label {
  white-space: nowrap;
}

.register-card {
  padding: 20px 20px;
  width: 600px;
}

.register-title {
  text-align: center;
  margin-bottom: 20px;
}

.register-form {
  max-width: 400px;
  margin: 0 auto;
}

.el-input {
  margin-bottom: 20px;
}

.el-radio-group {
  margin-bottom: 20px;
}

.el-button {
  width: 100%;
}
</style>

<template>
  <div class="register-container">
    <el-card class="register-card">
      <h2 class="register-title">门禁管理系统注册</h2>
      <el-form ref="signupFormRef" :model="userReact" class="register-form" :rules="rules" label-width="70px">
        <el-form-item label="账户" prop="account">
          <el-input v-model="userReact.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone_number">
          <el-input v-model="userReact.phone" type="phone_number" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userReact.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="选择身份" prop="type" label-width="100px">
          <el-radio-group v-model="userReact.type">
            <el-radio :value="0">学生</el-radio>
            <el-radio :value="1">管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-button type="primary" @click="handleRegister">注册</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      userReact: {
        account: '',
        password: '',
        phone_number:'',
        type: 1
      },
      rules: {
        accountId: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
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
          const payload = {
            account: this.userReact.account,
            password: this.userReact.password,
            phone: this.userReact.phone_number,
            type: this.userReact.type
          };
          // 192.168.1.207
          axios.post('http://192.168.1.207:5000/register_adm', payload)
            .then(response => {
              console.log(response)
              if (response.data.code == 200) {
                this.$message.success('注册成功');
                this.$router.push('/'); // 注册成功后跳转到登录页面
              } else {
                this.$message.error('注册失败: ' + response.data.message);
              }
            })
            .catch(error => {
              this.$message.error('注册失败: ' + error.message);
            });
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

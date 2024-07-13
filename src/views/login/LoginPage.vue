<template>
  <div class="fullscreen-container">
    <el-card class="login-container">
      <h2>登录</h2>
      <el-form @submit.prevent="handleLogin" :model="userinfo" class="login-form" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" id="username" v-model="userinfo.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" id="password" v-model="userinfo.password" placeholder="请输入密码">
            <template #prefix>
              <el-icon>
                <Key />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button @click="handleRegister">注册</el-button>
        </el-form-item>
        <p class="error-message">{{ errorMessage }}</p>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'LoginPage',
    data() {
      return {
        userinfo: {
          username: '',
          password: '',
          phone_number: '',
          is_login: '0',
        },
        errorMessage: '',
      }
    },
    methods: {
      async handleLogin() {
        this.errorMessage = ''; // 清除之前的错误信息
        if (!this.userinfo.username || !this.userinfo.password) {
          this.errorMessage = '用户名和密码不能为空';
          return;
        }

        try {
          const response = await axios.post('http://192.168.1.207:5000/login', {
            username: this.userinfo.username,
            password: this.userinfo.password,
          });

          if (response.data.code == 200) {
            this.userinfo.is_login = 1;
            this.userinfo.phone_number = response.data.phone_number;
            localStorage.setItem("userinfo", JSON.stringify(this.userinfo))
            console.log('result', localStorage.getItem('userinfo'));
            // 重定向到主页
            this.$router.push('/home');
          } else if (response.data.code == 400) {
            // 登录失败，显示错误信息  
            this.errorMessage = '用户或密码错误';
          }
        } catch (error) {
          // 捕获网络错误或后端返回的错误  
          this.errorMessage = '登录请求失败，请稍后再试';
          console.error('登录请求失败:', error);
        }
      },
      handleRegister() {
        // 跳转到注册页面  
        this.$router.push('/signup');
      },
    },
  };
</script>


<style scoped>
  /* 全屏背景覆盖层 */
  .fullscreen-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/public/login.jpg');
    background-size: cover;
    background-position: center;
  }

  /* 登录容器样式 */
  .login-container {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    text-align: center;
  }

  .login-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .el-input {
    margin-bottom: 20px;
  }

  .el-button {
    width: 30%;
    margin-left: 15%;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
</style>
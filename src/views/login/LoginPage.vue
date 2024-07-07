<template>  
  <div class="fullscreen-container">  
    <div class="login-container">  
      <h1>登录</h1>  
      <form @submit.prevent="handleLogin">  
        <div class="form-group">  
          <label for="userinfo.username">用户名</label>  
          <input  
            type="text"  
            id="userinfo.username"  
            v-model="userinfo.username"  
            placeholder="请输入用户名"  
          />  
        </div>  
        <div class="form-group">  
          <label for="userinfo.password">密码</label>  
          <input  
            type="userinfo.password"  
            id="userinfo.password"  
            v-model="userinfo.password"  
            placeholder="请输入密码"  
          />  
        </div>  
        <button type="submit">登录</button>  
        <button @click="handleRegister">注册</button>  
        <p v-if="userinfo.errorMessage" class="userinfo.error-message">{{ errorMessage }}</p>  
      </form>  
    </div>  
  </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      userinfo:{
        username: '',
        password: '',
        errorMessage: '',
        is_login:'0',
      }
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
        // 发送登录请求到后端 
        const response = await axios.post('http://192.168.1.207:5000/login', {  
          username: this.userinfo.username,
          password: this.userinfo.password,
        });
        console.log(response);
  
        if (response.data.code === 200) {  
          // 登录成功，存储用户信息
          this.userinfo.is_login = 1;
          localStorage.setItem("userinfo", JSON.stringify(this.userinfo))
          console.log('result',localStorage.getItem('userinfo'));
          // 重定向到主页
          this.$router.push('/home');
        } else {  
          // 登录失败，显示错误信息  
          this.errorMessage = response.data.message || '登录失败，请稍后再试';  
        }  
      } catch (error) {  
        // 捕获网络错误或后端返回的错误  
        this.errorMessage = '登录失败，请稍后再试';  
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
  width: 400px;
  text-align: center;
}  
  
.form-group {  
  margin-bottom: 15px;  
}  
  
.form-group label {  
  display: block;  
  margin-bottom: 5px;  
}  
  
.form-group input {  
  width: calc(100% - 22px); /* 减去padding和border的宽度 */  
  padding: 10px;  
  border: 1px solid #ccc;  
  border-radius: 5px;  
}  
  
button {  
  padding: 10px 20px;  
  margin-top: 10px;  
  border: none;  
  border-radius: 5px;  
  cursor: pointer;  
}  
  
button[type="submit"] {  
  background-color: #62b3f1; 
  margin-right: 10%;
  color: white;  
}  

  
.error-message {  
  color: red;  
  margin-top: 10px;  
}
  </style>
  


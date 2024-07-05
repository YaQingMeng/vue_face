<template>  
  <div class="fullscreen-container">  
    <div class="login-container">  
      <h1>登录</h1>  
      <form @submit.prevent="handleLogin">  
        <div class="form-group">  
          <label for="username">用户名</label>  
          <input  
            type="text"  
            id="username"  
            v-model="username"  
            placeholder="请输入用户名"  
          />  
        </div>  
        <div class="form-group">  
          <label for="password">密码</label>  
          <input  
            type="password"  
            id="password"  
            v-model="password"  
            placeholder="请输入密码"  
          />  
        </div>  
        <button type="submit">登录</button>  
        <button @click="handleRegister">注册</button>  
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>  
      </form>  
    </div>  
  </div>  
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = ''; // 清除之前的错误信息

      if (!this.username || !this.password) {
        this.errorMessage = '用户名和密码不能为空';
        return;
      }

      // 登录逻辑
      try {
        //  API 调用
        if (this.username === '1' && this.password === '1') {
          // 登录成功，重定向到主页
          this.$router.push('/home');
        } else {
          // 登录失败，显示错误信息
          this.errorMessage = '用户名或密码错误';
        }
      } catch (error) {
        this.errorMessage = '登录失败，请稍后再试';
      }
    },
    handleRegister() {  
      // 跳转到注册页面  
      this.$router.push('/signup'); // 注册页面的路由是 '/signup'  
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
  z-index: 1000; /* 确保覆盖在其他内容之上 */  
  background-image: url('/public/login.jpg');
  background-size: cover;
  background-position: center;
}  
  
/* 登录容器样式 */  
.login-container {  
  background-color: #fff;  
  padding: 20px;  
  border-radius: 10px;  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
  width: 400px; /* 根据需要调整宽度 */  
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
  


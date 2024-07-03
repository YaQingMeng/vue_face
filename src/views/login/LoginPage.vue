<template>
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
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
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
  },
};
</script>

<style scoped>
  .login-container {
    max-width: 400px;
    margin: 200px auto;  /* 增加了垂直方向的外边距来向下移动 */
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    max-width: 400px;
    width: 95%;  /* 修改输入框宽度为 80% */
    margin-bottom: 20px; /* 增加了表单项之间的间距 */
    padding: 10px; /* 增加了内边距 */
    border-radius: 5px; /* 添加了圆角 */
    background-color: #f9f9f9; /* 添加了背景色 */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* 添加了阴影效果 */
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 95%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #ddd;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  </style>
  


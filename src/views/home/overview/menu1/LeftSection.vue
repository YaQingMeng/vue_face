<template>  
  <div class="left-section-content">  
    <h3>{{ currentTime }}</h3>
    <p>欢迎</p>
    <p v-if="this.user.is_login == 1">{{user.username}}</p>  
  </div>  
</template>  
  
<script>  

export default {  
  name: 'LeftSection',  
  data() {  
    return { 
      user:{
        username: '',
        password: '',
        errorMessage: '',
        is_login:'',
      },
      currentTime: '', // 用于存储和显示当前的日期和时间  
    };  
  },  
  created() {  
    // 组件创建后立即执行，设置初始时间  
    this.updateTime();  
    // 使用setInterval每秒更新时间  
    this.intervalId = setInterval(this.updateTime, 1000); 
    const user =localStorage.getItem('userinfo')
    if(user){
      try {
      this.user = JSON.parse(user); // 解析为对象
      console.log('result', this.user); // 打印对象
    } catch (e) {
      console.error('Error parsing user data:', e);
    }
    } 
  },  
  beforeUnmount() {  
    // 组件销毁前清除定时器，防止内存泄漏  
    if (this.intervalId) {  
      clearInterval(this.intervalId);  
    }  
  },

  methods: {  
    updateTime() {  
      // 更新currentTime为当前日期和时间的字符串表示  
      this.currentTime = new Date().toLocaleString();  
    }  
  }  
};  
</script>


<style scoped>
.left-section-content {
  padding: 10px;
}
</style>

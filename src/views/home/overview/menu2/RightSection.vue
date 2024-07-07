<template>  
  <div class="right-section-content">  
    <div class="card-grid1">
      <el-card class="custom-card"  shadow="hover">Card 1</el-card>
      <el-card class="custom-card"  shadow="hover">Card 2</el-card>
    </div>
    <div class="card-grid2">
      <el-card class="custom-card" shadow="hover">Card 3</el-card>
      <el-card class="custom-card" shadow="hover">Card 4</el-card>
    </div>
  </div>
</template>  
  
<script>  

export default {  
  name: 'RightSection',  
  data() {  
    return { 
      user: {
        username: '',
        password: '',
        errorMessage: '',
        is_login: '',
      },
      currentTime: '', // 用于存储和显示当前的日期和时间  
    };  
  },  
  created() {  
    // 组件创建后立即执行，设置初始时间  
    this.updateTime();  
    // 使用setInterval每秒更新时间  
    this.intervalId = setInterval(this.updateTime, 1000); 
    const user = localStorage.getItem('userinfo')
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
  .right-section-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    /* border: solid #ff0000; */
  }

  .card-grid1 {
    display: flex;
    flex: 1 1 auto;
  }

  .card-grid2 {
    display: flex;
    flex: 1 1 auto;
  }

  .custom-card {
  display: flex;
  flex: 1 1 auto;
  background-color: #e1f5fe; /* 设置浅蓝色背景 */
  color: #1976d2; /* 设置字体颜色 */
  }
</style>

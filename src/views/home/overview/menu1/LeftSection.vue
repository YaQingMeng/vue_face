<template>  
  <div class="left-section-content">  
    <h3>{{ currentTime }}</h3>  
  </div>  
</template>  
  
<script>  
  export default {  
    name: 'LeftSection',  
    data() {  
      return {  
        currentTime: '' // 用于存储和显示当前的日期和时间  
      };  
    },  
    created() {  
      // 组件创建后立即执行，设置初始时间  
      this.updateTime();  
      // 使用setInterval每秒更新时间  
      this.intervalId = setInterval(this.updateTime, 1000);  
    },  
    // 修改 beforeDestroy 为 beforeUnmount  
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
  padding: 20px;
}
</style>

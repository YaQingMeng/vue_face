<template>
  <div class="attendance-container">
    <aside class="sidebar">
    </aside>
    <main class="main-content">
    </main>
  </div>
</template>
  
  <script>
  export default {
    name: 'AttendancePage',
  };
  </script>
  
<style scoped>
/* 容器样式，使用flex布局，方向为列，高度占满整个父容器 */  
.attendance-container {  
  display: flex;  
  flex-direction: column;  
  height: 95%;  
  /* 添加一些内边距，使内容不紧贴边缘 */  
  padding: 20px;  
  /*添加边框和阴影，增加立体感 */  
  border: 1px solid #ccc;  
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  
  margin-top: -10px;
} 
</style>
  
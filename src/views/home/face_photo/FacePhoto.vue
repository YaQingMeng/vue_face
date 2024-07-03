<template>
  <div class="face-container">
    <header class="top-section">
      <TopSection />
    </header>
    <footer class="bottom-section">
      <BottomSection />
    </footer>
  </div>
</template>

<script>
import TopSection from './TopSection.vue';
import BottomSection from './BottomSection.vue';

export default {
  name: 'FacePhoto',
  components: { TopSection, BottomSection },
};
</script>

<style>  
  /* 容器样式，使用flex布局，方向为列，高度占满整个父容器 */  
  .face-container {  
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
    
  /* 顶部区域样式，高度占整个屏幕的1/5 */  
  .top-section {  
    height: 20vh; /* 占据视口高度的20%，即1/5 */  
    background-color: #f5f5f5;  
    border-radius: 8px 8px 0 0;  
    padding: 10px;  
    border-bottom: 1px solid #ddd;  
  }  
    
  /* 底部区域样式，占据剩余空间 */  
  .bottom-section {  
    flex-grow: 1; /* 占据剩余的所有空间 */  
    background-color: #f5f5f5;  
    border-radius: 0 0 8px 8px;  
    padding: 10px;  
    /* margin-top: 20px; 这行可以移除，因为flex布局会自动处理间距 */  
    border-top: 1px solid #ddd;  
  }  
</style>

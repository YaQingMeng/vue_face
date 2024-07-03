<template>
  <div class="overview-container">
    <header class="top-section">
      <TopSection />
    </header>
    <div class="middle-section">
      <aside class="left-section">
        <LeftSection />
      </aside>
      <main class="right-section">
        <RightSection />
      </main>
    </div>
    <footer class="bottom-section">
      <BottomSection />
    </footer>
  </div>
</template>

<script>
import TopSection from './TopSection.vue';
import LeftSection from './LeftSection.vue';
import RightSection from './RightSection.vue';
import BottomSection from './BottomSection.vue';

export default {
  name: 'OverView',
  components: { TopSection, LeftSection, RightSection, BottomSection },
};
</script>

<style>
/* 容器样式，使用flex布局，方向为列，高度占满整个父容器 */  
.overview-container {
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
  
/* 顶部区域样式，固定高度，背景色较浅 */  
.top-section {  
  flex: 0 1 ;  
  background-color: #ecf5ff; 
  border-radius: 8px;  
  padding: 10px;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  border-bottom: 1px solid #d9ecff;  
}  
  
/* 中间区域样式，使用flex布局，分为左右两部分 */  
.middle-section {  
  display: flex;  
  flex: 1 1 auto;  
  /* 可选：添加一些间距，使左右部分不紧贴 */  
  margin-top: 20px;  
}  
  
/* 左侧区域样式，固定宽度，背景色中等 */  
.left-section {  
  flex: 0 0 200px;  
  background-color: #ecf5ff;  
  /* 添加边框和圆角 */  
  border-radius: 8px;  
  /* 可选：添加内边距 */  
  padding: 15px;  
  /* 可选：添加阴影效果 */  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  
  margin-right: 20px;
}  
  
/* 右侧区域样式，占据剩余空间，背景色为白色 */  
.right-section {  
  flex: 1 1 auto;  
  background-color: #ecf5ff;  
  /* 添加边框和圆角 */  
  border-radius: 8px;  
  /* 可选：添加内边距 */  
  padding: 20px;  
  /* 可选：添加阴影效果 */  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  
}  
  
/* 底部区域样式，固定高度，背景色较浅 */  
.bottom-section {  
  
  background-color: #ecf5ff;  
  /* 添加圆角，使底部看起来更圆润 */  
  border-radius: 0 0 8px 8px;  
  /* 可选：添加内边距和上边距 */  
  padding: 10px;  
  margin-top: 20px;  
  /* 可选：添加边框 */  
  border-top: 1px solid #ddd;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
}
</style>

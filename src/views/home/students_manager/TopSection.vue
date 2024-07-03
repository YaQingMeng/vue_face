<template>  
  <div class="top-section-content">  

    <div class="search-container">  

      <form @submit.prevent="searchStudent" class="search-form">  
        <div>  
          <label for="searchInput">查询</label>  
          <el-input v-model="searchQuery" style="width: 150px" placeholder="请输入学号/姓名"/>
          <el-button type="primary" @click="searchStudent">Primary</el-button>
        </div>  
      </form>

      <div v-if="searchResult" class="search-result">  
        <h4>查询结果:</h4>  
        <p>{{ searchResult }}</p>  
      </div>  

    </div>  

  </div>  
</template>    
  
<script>  
export default {  
  name: 'TopSection',  
  data() {  
    return {  
      searchQuery: '',  
      searchResult: '', // 用于存储查询结果  
    };  
  },  
  methods: {  
    searchStudent() {  
      // 模拟查询结果  
      // 在实际应用中，这里应该是调用API并处理响应的逻辑  
      this.searchResult = '找到学生：张三（学号：123456）'; // 假设的查询结果  
      // 如果需要更复杂的数据结构，可以将其设置为对象或数组  
    },  
  },  
};  
</script> 

<style>  
  .top-section-content {  
    display: flex;  
    flex-direction: column; /* 默认是列布局，但这里主要用于包裹整个内容 */  
  }  
    
  .search-container {  
    display: flex;  
    justify-content: space-between; /* 使表单和结果并排，并在它们之间留出空间 */  
    align-items: flex-start; /* 垂直对齐方式，可以根据需要调整 */  
    margin-top: 0px; /* 可选：为容器添加一些顶部外边距 */  
    width: 100%;
  }  
    
  .search-result {  
    flex: 0 1 60%; /* 使结果区域占据固定宽度，但允许根据需要进行伸缩 */  
    margin-left: 20px; /* 可选：为结果区域添加一些左边距，以便与表单分开 */  
    padding: 10px;  
    border: 1px solid #ccc;  
    border-radius: 8px;  
    background-color: #f8f9fa;  
  }  
    
  /* 如果需要，可以为.search-form内的元素添加更多样式来优化布局 */  
  .search-form {  
    flex: 0 1 auto; /* 保持原有布局设置 */  
    display: flex; /* 使表单内的元素也能使用Flexbox布局 */  
    flex-direction: column; /* 表单内的元素垂直排列 */  
    align-items: flex-start; /* 表单内元素左对齐 */  
    
    width: 28%;
    border: 1px solid #ccc; /* 灰色边框 */  
    border-radius: 8px; /* 圆角边框 */  
    padding: 20px; /* 内边距，为表单内容提供空间 */  
    margin-right: 0px; /* 右边距，与.search-result保持一定距离 */  
    margin-top: 20px; /* 可选：为容器添加一些顶部外边距 */ 
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 轻微的阴影效果 */  
  }  
    
  .search-form label {  
    font-weight: bold; /* 加粗标签文本 */  
    margin-right: 10px; 
  }  
  
  .search-form button{
    margin-left: 10px;
  }

</style>
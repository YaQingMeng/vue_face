<template>  
  <div class="top-section-content">  

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
</template>    
  
<script>  
export default {  
  name: 'TopSection',  
  data() {  
    return {  
      searchQuery: '',  
      searchResult: '暂未查询', // 用于存储查询结果  
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

<style scoped>  
  .top-section-content {
    display: flex;
    flex: 1 1 auto;
    border: solid #ff0000;
  }  
 
  .search-form {
    display: flex;
    flex: 0 1 auto; 
    margin-right: 20px;
    align-items: center;
    /* border: 1px solid #ccc;
    border-radius: 10px; */
    border: solid #ff0000;
  }  
    
  .search-form label {
    flex: 1 1 auto;
    font-weight: bold; /* 加粗标签文本 */
  }  

  .search-form button{
    flex: 1 1 auto;
    margin-left: 10px;
  }
  
  .search-result {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    border: solid #ff0000;
  }  

  .search-result h4{
    margin-right: 10px;
  }

</style>
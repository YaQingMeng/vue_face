<template>
  <div class="top-section-content">
    <h3>刷脸记录查询</h3>
    <div class="search-bar">
      <el-input placeholder="请输入学号进行搜索(空则查询所有)" v-model="searchQuery" prefix-icon="el-icon-search"
        style="margin-right: 10px;" />
      <el-button type="primary" @click="handleSearch">查询</el-button>
    </div>
  </div>
</template>

<script>
  import { ElNotification } from 'element-plus';
  import axios from 'axios';

  export default {
    name: 'RightSection',
    data() {
      return {
        searchQuery: '',
        tableData: [
          { date: '2016-05-03', name: 'Tom', id: '2', department: '计算机学院', dormid: '341', status: '晚归', photoPath: '/person.png' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常', photoPath: '' },
          // More data here...
        ],
      };
    },
    created() {
      this.searchQuery = '',
        this.handleSearch()
    },
    methods: {
      async handleSearch() {
        try {
          const response = await axios.post('http://192.168.1.207:5000/pass_logs', {
            id: this.searchQuery,
          });
          this.tableData = response.data.table_data;
          console.log("查询存入数据：", this.tableData)
          localStorage.setItem("queryTableData", JSON.stringify(this.tableData))

          let searchResult = '';

          if (this.searchQuery) {
            searchResult = `查询到学号 ${this.searchQuery} 的信息`;
            // 弹出通知
            ElNotification({
              title: '搜索结果',
              message: searchResult,
              type: 'success',
              duration: 3000, // 通知显示时长，单位为毫秒
            });
          }
        } catch (error) {
          ElNotification({
            title: '错误',
            message: '查询失败，请稍后重试',
            type: 'error',
            duration: 3000,
          });
          console.error('查询失败:', error);
        }
      },
    },
  };
</script>

<style scoped>
  .top-section-content {
    flex: 1 1 auto;
  }

  .search-bar {
    display: flex;
    align-items: center;
    width: 400px;
  }
</style>
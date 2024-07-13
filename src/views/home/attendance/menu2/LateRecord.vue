<template>
  <div class="right-section-content">

    <el-container class="titles">
      <h3>晚归记录</h3>
      <el-button type="success" round @click="handleExport" class="action-button">导出晚归数据</el-button>
    </el-container>

    <el-table :data="paginatedData" stripe class="full-width-table">
      <el-table-column prop="time" label="时间" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="sid" label="学号" />
    </el-table>

    <el-pagination style="margin-top: 20px;" background layout="prev, pager, next" :current-page="currentPage"
      @current-change="handlePageChange" :page-size="pageSize" :total="tableData.length" />

  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { ElMessage, ElMessageBox } from 'element-plus';
  import axios from 'axios';

  export default defineComponent({
    name: 'RightSection',
    data() {
      return {
        tableData: [],
        currentPage: 1,
        pageSize: 11,
      };
    },
    computed: {
      paginatedData() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        return this.tableData.slice(start, end);
      },
    },
    created() {
      this.fetchTableData();
    },
    methods: {
      // 获取晚归记录
      fetchTableData() {
        const queryTableData = localStorage.getItem('queryTableData');
        if (queryTableData) {
          try {
            // 解析为对象
            const parsedData = JSON.parse(queryTableData);
            console.log("查询取出数据：", parsedData);

            // 过滤出 status 为 '晚归' 的数据
            this.tableData = parsedData.filter(item => item.status === '晚归');
            console.log("过滤后的数据：", this.tableData);
          } catch (e) {
            console.error('Error parsing tableData data:', e);
          }
        }
      },

      // 导出晚归记录
      async handleExport() {
        try {
          const confirmed = await ElMessageBox.confirm('确认导出晚归考勤记录？', '提醒', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
          });

          if (confirmed) {
            try {
              // 发送 POST 请求到后端接口
              const response = await axios.post('http://192.168.1.207:5000/late_export', {}, {
                responseType: 'blob' // 期待从服务器返回的响应类型
              });

              const url = window.URL.createObjectURL(new Blob([response.data]));
              const a = document.createElement('a');
              a.href = url;
              a.download = 'late_records.pdf';
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
              document.body.removeChild(a);

              ElMessage.success('考勤记录导出成功');
            } catch (error) {
              ElMessage.error('导出晚归记录时出错');
            }
          }
        } catch (error) {
          ElMessage.info('已取消导出');
        }
      },

      // 翻页
      handlePageChange(page) {
        this.currentPage = page;
      },
    },
  });
</script>


<style scoped>
  .right-section-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
  }

  .titles {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    /* border: solid #ff0000; */
  }

  .action-button {
    margin-left: 10px;
  }
</style>
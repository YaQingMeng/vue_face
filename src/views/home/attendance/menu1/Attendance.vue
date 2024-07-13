<template>
  <div class="overview-container">

    <div class="middle-section">
      <div class="left-section">
        <h3>刷脸记录查询</h3>
        <div class="search-bar">
          <el-input placeholder="请输入学号进行搜索(空则查询所有)" v-model="searchQuery" prefix-icon="el-icon-search"
            style="margin-right: 10px;" />
          <el-button type="primary" @click="handleSearch">查询</el-button>
        </div>
      </div>
      <div class="right-section">
        <div class="card-container">
          <el-card class="custom-card" shadow="hover">
            <div class="card-content">
              <span class="card-title">在寝人数: {{ inDormCount }}</span>
            </div>
          </el-card>

          <el-card class="custom-card" shadow="hover">
            <div class="card-content">
              <span class="card-title">今日刷脸人数: {{ faceScanCountToday }}</span>
            </div>
          </el-card>

          <el-card class="custom-card" shadow="hover">
            <div class="card-content">
              <span class="card-title">未到齐宿舍数: {{ absentDormCount }}</span>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <div class="bottom-section">
      <!-- 导出记录 -->
      <el-container class="titles">
        <h3>刷脸记录</h3>
        <el-button type="success" round @click="handleExportPersonalData" class="action-button">导出个人数据</el-button>
        <el-button type="success" round @click="handleExportAllData" class="action-button">导出全部数据</el-button>
      </el-container>

      <el-table :data="paginatedData" class="paginatedData">
        <el-table-column prop="time" label="时间" width="250" />
        <el-table-column prop="name" label="姓名" width="150" />
        <el-table-column prop="sid" label="学号" width="150" />
        <el-table-column prop="department" label="学院" width="150" />
        <el-table-column prop="dormid" label="宿舍号" width="150" />
        <el-table-column label="类型">
          <template #default="scope">
            <el-tag :type="scope.row.type === '进入' ? 'success' : 'primary'">
              {{ scope.row.type }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="详情">
          <template #default="scope">
            <el-button type="primary" size="default" @click="handleQuery(scope.row)">详情</el-button>
            <el-button type="danger" size="default" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="margin-top: 20px;" background layout="prev, pager, next" :current-page="currentPage"
        @current-change="handlePageChange" :page-size="pageSize" :total="tableData.length" />

      <!-- 查询信息的弹框 -->
      <el-dialog title="刷脸信息" v-model="dialogVisible" width="30%">
        <el-form :model="currentRecord">
          <el-form-item label="时间">
            <el-input v-model="currentRecord.time" disabled></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="currentRecord.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="currentRecord.sid" disabled></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-input v-model="currentRecord.type" disabled></el-input>
          </el-form-item>
          <el-form-item label="刷脸图片">
            <img :src="'http://192.168.1.207:5000/images/' + currentRecord.log_photo_path"
              style="width: 100px; height: 115px;">
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">关闭</el-button>
          </div>
        </template>
      </el-dialog>

      <!-- 输入学号导出个人数据的弹框 -->
      <el-dialog title="导出个人数据" v-model="exportPersonalDialogVisible" width="30%">
        <el-form>
          <el-form-item label="学号">
            <el-input v-model="exportPersonalId"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="exportPersonalDialogVisible = false">取消</el-button>
            <el-button type="success" @click="handleExportPersonal">导出</el-button>
          </div>
        </template>
      </el-dialog>
    </div>

  </div>
</template>

<script>
  import { ElNotification } from 'element-plus';
  import { ElMessage, ElMessageBox } from 'element-plus';
  import axios from 'axios';

  export default {
    name: 'AttendancePage',
    data() {
      return {
        searchQuery: '',
        tableData: [],
        inDormCount: 0,  // 在寝人数
        faceScanCountToday: 0,  // 今日刷脸人数
        absentDormCount: 0,  // 未到齐宿舍数
        currentPage: 1,
        pageSize: 9,
        dialogVisible: false,
        currentRecord: {
          time: '',
          name: '',
          sid: '',
          department: '',
          status: '',
          type: '',
          dormid: '',
          log_photo_path: '',
        },
        exportPersonalDialogVisible: false,
        exportPersonalId: '',
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
      this.searchQuery = '',
        this.handleSearch(),
        this.fetchDashboardData()
    },
    methods: {
      // 获取出勤信息
      async handleSearch() {
        try {
          const response = await axios.post('http://192.168.1.207:5000/pass_logs', { sid: this.searchQuery, });

          if (response.data.code == 400) {
            ElNotification({
              title: '搜索结果',
              message: `学号 ${this.searchQuery} 不在现有记录中`,
              type: 'warning',
              duration: 3000, // 通知显示时长，单位为毫秒
            });
            return false;
          }

          this.tableData = response.data.table_data;

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
          } else {
            console.log("查询存入全部出勤信息数据：", this.tableData)
            localStorage.setItem("queryTableData", JSON.stringify(this.tableData))
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

      // 右上角
      async fetchDashboardData() {
        try {
          const response = await axios.get('http://192.168.1.207:5000/log_summary');
          console.log(response)
          this.inDormCount = response.data.num0;
          this.faceScanCountToday = response.data.num1;
          this.absentDormCount = response.data.num2;
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
        }
      },

      // 翻页
      handlePageChange(page) {
        this.currentPage = page;
      },

      // 详情
      handleQuery(row) {
        try {
          this.currentRecord = { ...row };
          this.dialogVisible = true;
        } catch (error) {
          ElMessage.error('获取详情失败');
        }
      },

      // 删除
      handleDelete(row) {
        try {
          this.tableData = this.tableData.filter(item => item !== row);
          ElMessage.success('记录已删除');
        } catch (error) {
          console.error('Error in handleDelete:', error);
          ElMessage.error('删除记录时出错');
        }
      },

      // 导出全部考勤数据
      async handleExportAllData() {
        try {
          ElMessageBox.confirm('确认导出全部考勤记录？', '提醒', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
          }).then(async () => {
            try {
              // 发送 POST 请求到后端接口
              const response = await axios.post('http://192.168.1.207:5000/all_export', {}, {
                responseType: 'blob' // 期待从服务器返回的响应类型
              });

              const url = window.URL.createObjectURL(new Blob([response.data]));
              const a = document.createElement('a');
              a.href = url;
              a.download = `sample_total.pdf`;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
              document.body.removeChild(a);

              ElMessage.success('考勤记录导出成功');
            } catch (error) {
              console.error('Error in handleExportAllData axios:', error);
              ElMessage.error('导出考勤记录时出错');
            }
          }).catch(() => {
            ElMessage.info('已取消导出');
          });
        } catch (error) {
          console.error('Error in handleExportAllData:', error);
          ElMessage.error('导出考勤记录时出错');
        }
      },

      handleExportPersonalData() {
        this.exportPersonalDialogVisible = true;
      },

      // 导出个人考勤数据
      async handleExportPersonal() {
        try {
          // 校验学号是否输入
          if (!this.exportPersonalId) {
            ElMessage.error('请输入学号');
            return;
          }

          // 根据学号过滤数据
          const personalData = this.tableData.filter(item => item.sid === this.exportPersonalId);
          if (personalData.length === 0) {
            ElMessage.error('未找到该学号的记录');
            return;
          }

          try {
            // 发送 POST 请求到后端接口
            const response = await axios.post('http://192.168.1.207:5000/single_export', {
              sid: this.exportPersonalId
            }, {
              responseType: 'blob' // 期待从服务器返回的响应类型
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = `${this.exportPersonalId}_attendance_record.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            ElMessage.success('考勤记录导出成功');
            this.exportPersonalDialogVisible = false;
          } catch (error) {
            console.error('Error in handleExportPersonal axios:', error);
            ElMessage.error('导出考勤记录时出错');
          }
        } catch (error) {
          console.error('Error in handleExportPersonal:', error);
          ElMessage.error('导出考勤记录时出错');
        }
      }
    },
  };
</script>

<style scoped>
  .overview-container {
    display: flex;
    flex: auto;
    flex-direction: column;
  }

  .middle-section {
    display: flex;
    flex: 0 0 auto;
    height: 100px;
    margin-bottom: 10px;
    /* border: solid #ff0000;  */
  }

  .left-section {
    display: flex;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    /* border: solid #ff0000;  */
  }

  .search-bar {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 350px;
  }

  .right-section {
    display: flex;
    flex: 1 1 auto;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    /* border: solid #ff0000;  */
  }

  .card-container {
    display: flex;
    flex: 1 1 auto;
    display: flex;
    gap: 10px;
    /* 卡片之间的间距 */
    /* border: solid #ff0000;  */
  }

  .custom-card {
    flex: 1 1 auto;
    background-color: #fff;
    color: #1976d2;
  }

  .card-content {
    padding: 10px;
  }

  .card-title {
    font-weight: bold;
    font-size: 18px;
    text-align: left;
  }

  .bottom-section {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* border: solid #ff0000;  */
  }

  .titles {
    flex: 0 1 auto;
    height: 50px;
    display: flex;
    align-items: center;
    /* border: solid #ff0000; */
  }

  .action-button {
    margin-left: 10px;
    /* border: solid #ff0000; */
  }

  .dialog-footer {
    text-align: center;
  }
</style>
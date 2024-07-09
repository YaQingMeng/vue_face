<template>
  <div class="bottom-section-content">
    <!-- 导出记录 -->
    <el-container class="titles">
      <h3>刷脸记录</h3>
      <el-button type="success" round @click="handleExportPersonalData" class="action-button">导出个人数据</el-button>
      <el-button type="success" round @click="handleExportAllData" class="action-button">导出全部数据</el-button>
    </el-container>

    <el-table :data="paginatedData" class="paginatedData">
      <el-table-column prop="date" label="时间" width="150" />
      <el-table-column prop="name" label="姓名" width="150" />
      <el-table-column prop="id" label="学号" width="150" />
      <el-table-column prop="department" label="学院" width="150" />
      <el-table-column prop="dormid" label="宿舍号" width="150" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status === '正常' ? 'success' : 'danger'">
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="详情">
        <template #default="scope">
          <el-button type="primary" size="mini" @click="handleQuery(scope.row)">详情</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination style="margin-top: 20px;" background layout="prev, pager, next" :current-page="currentPage"
      @current-change="handlePageChange" :page-size="pageSize" :total="tableData.length" />

    <!-- 查询信息的弹框 -->
    <el-dialog title="刷脸信息" v-model="dialogVisible" width="30%">
      <el-form :model="currentRecord">
        <el-form-item label="时间">
          <el-input v-model="currentRecord.date" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="currentRecord.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="currentRecord.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="currentRecord.status" disabled></el-input>
        </el-form-item>
        <el-form-item label="刷脸详情">
          <img :src="currentRecord.photoPath" style="width: 100px; height: 100px;">
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
</template>


<script>
  import { ElMessage, ElMessageBox } from 'element-plus';
  
  export default {
    name: 'RightSection',
    data() {
      return {
        tableData: [
          { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '晚归', photoPath: '' },
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
        currentPage: 1,
        pageSize: 9,
        dialogVisible: false,
        currentRecord: {
          date: '',
          name: '',
          id: '',
          department: '',
          status: '',
          dormid: '',
          photoPath: '',
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
    methods: {
      handlePageChange(page) {
        this.currentPage = page;
      },
      handleQuery(row) {
        try {
          this.currentRecord = { ...row, info: '固定刷脸详细信息' };
          this.dialogVisible = true;
        } catch (error) {
          console.error('Error in handleQuery:', error);
        }
      },
      handleDelete(row) {
        try {
          this.tableData = this.tableData.filter(item => item !== row);
          ElMessage.success('记录已删除');
        } catch (error) {
          console.error('Error in handleDelete:', error);
          ElMessage.error('删除记录时出错');
        }
      },
      handleExportAllData() {
        try {
          ElMessageBox.confirm('确认导出全部考勤记录？', '提醒', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
          }).then(() => {
            // 执行导出操作
            ElMessage.success('考勤记录导出成功');
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
      async handleExportPersonal() {
        try {
          // 校验学号是否输入
          if (!this.exportPersonalId) {
            ElMessage.error('请输入学号');
            return;
          }
  
          // 根据学号过滤数据
          const personalData = this.tableData.filter(item => item.id === this.exportPersonalId);
          if (personalData.length === 0) {
            ElMessage.error('未找到该学号的记录');
            return;
          }
  
          ElMessageBox.confirm('确认导出该学号的考勤记录？', '提醒', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
          }).then(async () => {
            try {
              // 发送 POST 请求到后端接口
              const response = await fetch('http://192.168.1.207:5000/single_export', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: this.exportPersonalId }),
              });
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
  
              const data = await response.json();
              console.log(data)
              ElMessage.success('考勤记录导出成功');
              this.exportPersonalDialogVisible = false;
            } catch (error) {
              console.error('Error in handleExportPersonal fetch:', error);
              ElMessage.error('导出考勤记录时出错');
            }
          }).catch(() => {
            ElMessage.info('已取消导出');
          });
        } catch (error) {
          console.error('Error in handleExportPersonal:', error);
          ElMessage.error('导出考勤记录时出错');
        }
      },
    },
  };
  </script>
  


<style scoped>
  .bottom-section-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    /* border: solid #ff0000; */
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
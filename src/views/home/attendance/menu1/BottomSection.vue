<template>
  <div class="bottom-section-content">

    
    <el-container class="titles">
      <h3>刷脸记录</h3>
      <el-button type="success" round @click="handleAlert" class="action-button">导出考勤数据</el-button>
    </el-container>

    <el-table :data="paginatedData">
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
    <el-pagination
      style="margin-top: 20px;"
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      @current-change="handlePageChange"
      :page-size="pageSize"
      :total="tableData.length"
    />

    <!-- 查询信息的弹框 -->
    <el-dialog
      title="刷脸信息"
      v-model="dialogVisible"
      width="30%"
    >
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


  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus';

export default {
  name: 'RightSection',
  data() {
    return {
      tableData: [
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '晚归' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '晚归' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '晚归' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '晚归' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '正常' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '晚归' },
        { date: '2016-05-03', name: 'Tom', id: '20210000', department: '计算机学院', dormid: '341', status: '晚归' },
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
      // 使用行数据来设置 currentRecord
      this.currentRecord = { ...row, info: '固定刷脸详细信息' };
      this.dialogVisible = true;
    },
    handleDelete(row) {
      this.tableData = this.tableData.filter(item => item !== row);
      ElMessage.success('记录已删除');
    },
    handleAlert() {
      ElMessageBox.alert('确认导出考勤记录？', '提醒', {
        confirmButtonText: '确定',
        type: 'info',
      });
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

.dialog-footer {
  text-align: center;
}


.titles {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
   /* border: solid #ff0000; */
}
.action-button {
  margin-left: 10px;
   /* border: solid #ff0000; */
}
</style>

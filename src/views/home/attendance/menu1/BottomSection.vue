<template>
  <div class="bottom-section-content">
    <h3>刷脸记录</h3>
    <el-table :data="paginatedData" stripe style="width: 100%">
      <el-table-column prop="date" label="时间" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="学号" />
      <el-table-column prop="status" label="状态" width="120" />
      <el-table-column label="详情" width="180">
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
      v-model = "dialogVisible"
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
          <el-input v-model="currentRecord.address" disabled></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="currentRecord.status" disabled></el-input>
        </el-form-item>
        <el-form-item label="刷脸详情">
          <el-input v-model="currentRecord.info" disabled></el-input>
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
import { ElMessage } from 'element-plus';

export default {
  name: 'RightSection',
  data() {
    return {
      tableData: [
        { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 1' },
        { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 2' },
        { date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'On Time', info: 'Detail info 3' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', status: 'Late', info: 'Detail info 4' },
        // More data here...
      ],
      currentPage: 1,
      pageSize: 7,
      dialogVisible: false,
      currentRecord: {
        date: '',
        name: '',
        address: '',
        status: '',
        info: ''
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
  },
};
</script>

<style scoped>
  .bottom-section-content {
    display: flex;
    flex:1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: solid #ff0000;
  }

  .dialog-footer {
    text-align: center; /* 让按钮居中对齐 */
  }

</style>

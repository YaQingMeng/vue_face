<template>
  <div class="right-section-content">

    <el-container class="titles">
      <h3>刷脸记录</h3>
      <el-button type="success" round @click="handleAlert" class="action-button">导出考勤数据</el-button>
    </el-container>
    
    <el-table :data="paginatedData" stripe class="full-width-table">
      <el-table-column prop="date" label="时间" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="id" label="学号" />
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
          <el-input v-model="currentRecord.info" disabled></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- <div class="action-button">
      <el-button type="success" round @click="handleAlert">导出考勤数据</el-button>
    </div> -->
  </div>
</template>


<script>
import { defineComponent } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';


export default defineComponent({
  name: 'RightSection',
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleQuery(row) {
      this.currentRecord = { ...row, info: '固定刷脸详细信息' };
      this.dialogVisible = true;
    },
    handleDelete(row) {
      this.tableData = this.tableData.filter(item => item !== row);
      ElMessage.success('记录已删除');
      // 处理删除后的分页问题
      if (this.currentPage > 1 && this.paginatedData.length === 0) {
        this.currentPage--;
      }
    },
    handleAlert() {
      ElMessageBox.alert('确认导出考勤记录？', '提醒', {
        confirmButtonText: '确定',
        type: 'info',
      });
    },
  },
  data() {
    return {
      tableData: [
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        { date: '2016-05-03', name: 'Tom', id: '111', status: 'Late'},
        // More data here...
      ],
      currentPage: 1,
      pageSize: 10,
      dialogVisible: false,
      currentRecord: {
        date: '',
        name: '',
        id: '',
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
});

</script>

<style scoped>
.right-section-content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  /* border: solid #ff0000;    */
}

.full-width-table {
  width: 100%;

  /* border: solid #ff0000; */
}

.el-pagination {
  align-self: center;

  /* border: solid #ff0000;  */
}

.titles {
  align-self: center;
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

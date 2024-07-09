<template>
  <div class="bottom-section-content">
    <h3>信息列表</h3>
    <el-table :data="paginatedData" stripe class="student-container">
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="id" label="学号" width="180" />
      <el-table-column prop="department" label="专业" width="200" />
      <el-table-column prop="dormid" label="宿舍号" width="180" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status === '在寝' ? 'success' : 'danger'">
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="详情">
        <template #default="scope">
          <el-button type="primary" size="mini" @click="handleQuery(scope.row)">详情</el-button>
          <el-button type="danger" size="mini" @click="confirmDelete(scope.row)">删除</el-button>
          <el-button type="success" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination style="margin-top: 10px;" background layout="prev, pager, next" :current-page="currentPage"
      @current-change="handlePageChange" :page-size="pageSize" :total="tableData.length" />

    <!-- 学生信息的弹框 -->
    <el-dialog title="人脸信息" v-model="dialogVisible1" width="30%">
      <el-form :model="currentRecord1">
        <el-form-item label="姓名">
          <el-input v-model="currentRecord1.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="currentRecord1.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="宿舍号">
          <el-input v-model="currentRecord1.dormid" disabled></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="currentRecord1.status" disabled></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="currentRecord1.phone" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="currentRecord1.email" disabled></el-input>
        </el-form-item>
        <el-form-item label="人脸照片">
          <img :src="currentRecord1.photoPath" style="width: 100px; height: 100px;">
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible1 = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 人脸信息的弹框 -->
    <el-dialog title="编辑人脸信息" v-model="dialogVisible2" width="30%">
      <el-form :model="currentRecord2">
        <el-form-item label="人脸照片">
          <img :src="currentRecord2.photoPath" style="width: 100px; height: 100px;">
        </el-form-item>
      </el-form>
      <template #footer>
        <input type="file" ref="fileInput" @change="onFileChange">
        <el-button type="success" @click="uploadImage">重新上传人脸</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  import { ElMessage, ElMessageBox } from 'element-plus';
  import axios from 'axios'

  export default {
    name: 'RightSection',
    data() {
      return {
        tableData: [
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210001', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210002', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210003', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210005', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '202100006', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          { id: '20210000', name: '张三', department: '计算机学院', dormid: '341', status: '在寝' },
          // More data here...
        ],
        currentPage: 1,
        pageSize: 7,
        dialogVisible1: false,
        dialogVisible2: false,
        currentRecord1: {
          name: '',
          id: '',
          dormid: '',
          status: '',
          phone: '',
          email: '',
          photoPath: ''
        },
        currentRecord2: {
          photoPath: ''
        },
      };
    },
    created() {
      this.fetchTableData();
    },
    computed: {
      paginatedData() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        return this.tableData.slice(start, end);
      },
    },

    methods: {
      // 获取学生基本信息
      async fetchTableData() {
        try {
          // const response = await axios.get('http://your-backend-url/students_info');
          // this.tableData = response.data;
        } catch (error) {
          console.error('获取学生信息列表失败:', error);
          ElMessage.error('获取学生信息列表失败');
        }
      },
      handlePageChange(page) {
        this.currentPage = page;
      },
      //  handleUpdate(row){
      //    const photoPath = require('@/assets/images/image1.jpg'); 
      //    this.currentRecord2 = { ...row, phone : '13364009271',  email:'872472899@qq.com', photoPath: photoPath};
      //    this.dialogVisible2 = true;
      //  },
      // 更新学生信息
      async handleUpdate(row) {
        try {
          const response = await axios.get(`http://your-backend-url/students_info/${row.id}`);
          const studentData = response.data;
          this.currentRecord2 = {
            ...row,
            phone: studentData.phone,
            email: studentData.email,
            photoPath: studentData.photoPath
          };
          this.dialogVisible2 = true;
        } catch (error) {
          console.error('获取学生信息失败:', error);
          ElMessage.error('获取学生信息失败');
        }
      },

      //  handleQuery(row) {
      //    // 使用行数据来设置 currentRecord
      //    const photoPath = require('@/assets/images/image1.jpg'); 
      //    this.currentRecord1= { ...row, phone : '13364009271',  email:'872472899@qq.com', photoPath: photoPath};
      //    this.dialogVisible1 = true;
      //  },
      // 获取学生详细信息
      async handleQuery(row) {
        try {
          const response = await axios.get(`http://your-backend-url/students_info/${row.id}`);
          const studentData = response.data;
          this.currentRecord1 = {
            ...row,
            phone: studentData.phone,
            email: studentData.email,
            photoPath: studentData.photoPath
          };
          this.dialogVisible1 = true;
        } catch (error) {
          console.error('获取学生信息失败:', error);
          ElMessage.error('获取学生信息失败');
        }
      },

      confirmDelete(row) {
        ElMessageBox.confirm('确认删除此学生的信息吗?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          // 用户点击了确定
          this.handleDelete(row);
        }).catch(() => {
          // 用户点击了取消或者点击了遮罩层
          ElMessage.info('已取消删除操作');
        });
      },
      handleDelete(row) {
        this.tableData = this.tableData.filter(item => item !== row);
        ElMessage.success('记录已删除');
      },
      onFileChange(event) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile) {
          this.previewUrl = URL.createObjectURL(this.selectedFile);
        }
      },

    },
  };
</script>

<style scoped>
  .bottom-section-content {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    align-items: center;
    /* border: solid #ff0000; */
  }

  .bottom-section-content h3 {
    margin-top: 0;
    /* border: solid #ff0000; */
  }

  .student-container {
    display: flex;
    flex: auto;
    /* border: solid #ff0000; */
  }

  .dialog-footer {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    /* 上方留出一些空间 */
  }
</style>
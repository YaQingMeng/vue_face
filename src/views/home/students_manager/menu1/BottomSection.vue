<template>
  <div class="Bottom-section-content">
    <el-table :data="paginatedStudents" stripe style="width: 97.5%;">
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="age" label="年龄" width="180" />
      <el-table-column prop="class" label="班级" />
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-icon :size="20" @click="handleEditClick(scope.row)">
            <Edit />
          </el-icon>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 10px;"
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      @current-change="handlePageChange"
      :page-size="pageSize"
      :total="students.length"
    />

    <!-- 编辑学生信息的对话框 -->
    <el-dialog
      title="编辑学生信息"
      v-model:visible="dialogVisible"
      width="30%"
      @close="resetForm"
    >
      <el-form :model="editForm">
        <el-form-item label="姓名">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="editForm.age" type="number"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="editForm.class"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveEdit">保存</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BottomSection',
  data() {
    return {
      students: [
        { name: 'Alice', age: 20, class: '1A' },
        { name: 'Bob', age: 21, class: '1B' },
        { name: 'Charlie', age: 22, class: '1C' },
        { name: 'David', age: 23, class: '1D' },
        { name: 'Eve', age: 24, class: '1E' },
        { name: 'Frank', age: 25, class: '1F' },
        { name: 'Grace', age: 26, class: '1G' },
        { name: 'Hank', age: 27, class: '1H' },
        { name: 'Ivy', age: 28, class: '1I' },
        { name: 'Jack', age: 29, class: '1J' },
        { name: 'Karen', age: 30, class: '1K' },
        { name: 'Leo', age: 31, class: '1L' },
        { name: 'Mona', age: 32, class: '1M' },
        { name: 'Nate', age: 33, class: '1N' },
        { name: 'Olivia', age: 34, class: '1O' },
        { name: 'Paul', age: 35, class: '1P' },
        { name: 'Quinn', age: 36, class: '1Q' },
        { name: 'Rachel', age: 37, class: '1R' },
        { name: 'Sam', age: 38, class: '1S' },
        { name: 'Tina', age: 39, class: '1T' },
        { name: 'Uma', age: 40, class: '1U' },
        { name: 'Vera', age: 41, class: '1V' },
        { name: 'Will', age: 42, class: '1W' },
        { name: 'Xena', age: 43, class: '1X' },
        { name: 'Yara', age: 44, class: '1Y' },
        { name: 'Zack', age: 45, class: '1Z' },
        // ...更多学生数据
      ],
      pageSize: 8, // 每页显示的学生数
      currentPage: 1, // 当前页码
      dialogVisible: true, // 对话框是否可见
      editForm: { name: '', age: null, class: '' }, // 编辑表单数据
      editIndex: null, // 当前编辑的学生索引
    };
  },
  computed: {
    // 计算当前页的学生列表
    paginatedStudents() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.students.slice(start, end);
    },
  },
  methods: {
    // 页码改变时处理函数
    handlePageChange(page) {
      this.currentPage = page;
    },
    // 编辑按钮点击处理函数
    handleEditClick(student) {
      console.log(student);
      this.editIndex = this.students.indexOf(student);
      this.editForm = { ...student }; // 创建学生信息的副本
      this.dialogVisible = true;
    },
    // 保存编辑
    saveEdit() {
      if (this.editIndex !== null) {
        this.students[this.editIndex] = { ...this.editForm };
      }
      this.dialogVisible = false;
    },
    // 重置表单
    resetForm() {
      this.editForm = { name: '', age: null, class: '' };
      this.editIndex = null;
    }
  },
};
</script>



<style scoped>  
  .Bottom-section-content {
    display: flex;
    flex:1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: solid #ff0000;
  }  
</style>
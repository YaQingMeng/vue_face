<template>
  <div class="setting-container">
    <main class="main-content">
      <el-form :model="form" label-width="120px" class="user-info-form">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入修改后的用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" placeholder="请输入修改后的邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" placeholder="请输入修改后的手机号"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.role" placeholder="请选择角色">
            <el-option label="管理员" value="admin"></el-option>
            <el-option label="用户" value="user"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="form.status"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AttendancePage',
  data() {
    return {
      form: {
        username: '',
        email: '',
        role: '',
        phone:'',
        status: false,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('提交表单:', this.form);
    },
    onReset() {
      this.$refs.userInfoForm.resetFields();
    },
  },
};
</script>

<style scoped>
.setting-container {
  flex:1 1 auto;  
  flex-direction: column;  
  border: solid #ff0000;
}

.sidebar {
  width: 250px;
  background-color: #ecf5ff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
}

.user-info-form {
  width: 100%;
}
</style>

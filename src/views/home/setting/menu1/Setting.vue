<template>
  <el-card class="form-card" shadow="hover">
    <h3>修改个人资料</h3>
    <el-form :model="form" class="user-info-form" ref="userInfoForm" label-width="100px">
      <el-form-item label="用户名" class="newUser_input">
        <el-input v-model="form.username" placeholder="请输入修改后的用户名"></el-input>
      </el-form-item>
      <el-form-item label="手机号" class="newUser_input">
        <el-input v-model="form.phone" placeholder="请输入修改后的手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="newUser_input">
        <el-input v-model="form.password" type="password" placeholder="请输入修改后的密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" class="newUser_input">
        <el-input v-model="form.confirmPassword" type="password" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>


<script>
  import axios from 'axios';

  export default {
    name: 'AttendancePage',
    data() {
      return {
        form: {
          username: '',
          phone: '',
          password: '',
          confirmPassword: ''
        },
      };
    },
    methods: {
      async onSubmit() {
        // 验证密码是否一致
        if (this.form.password !== this.form.confirmPassword) {
          this.$message.error('两次输入的密码不一致');
          return;
        }

        try {
          const response = await axios.post('http://your-backend-url/save_user_info', this.form);
          console.log('响应数据:', response.data);
          this.$message.success('用户信息修改成功');

        } catch (error) {
          console.error('请求错误:', error);
          this.$message.error('用户信息修改失败');
        }
      },
      onReset() {
        this.$refs.userInfoForm.resetFields();
      },
    },
  };
</script>


<style scoped>
  .form-card {
    flex: 1 1 auto;
  }

  .newUser_input {
    width: 500px;
  }
</style>
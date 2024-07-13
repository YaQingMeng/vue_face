<template>
  <el-card class="form-card" shadow="hover">
    <h3>修改个人资料</h3>
    <el-form :model="form" class="user-info-form" ref="userInfoForm" label-width="100px">
      <el-form-item label="用户名" class="newUser_input">
        <el-input v-model="form.username" disabled :placeholder="form.username"></el-input>
      </el-form-item>
      <el-form-item label="手机号" class="newUser_input">
        <el-input v-model="form.phone" placeholder="请输入修改后的手机号"></el-input>
      </el-form-item>
      <el-form-item label="原密码" class="newUser_input">
        <el-input v-model="form.oldPassword" type="password" placeholder="请输入原密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码" class="newUser_input">
        <el-input v-model="form.newPassword" type="password" placeholder="请输入修改后的密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" class="newUser_input">
        <el-input v-model="form.confirmPassword" type="password" placeholder="请再次输入新密码"></el-input>
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
          oldPassword:'',
          newPassword: '',
          confirmPassword: ''
        },
        userinfo: {
          username: '',
          password: '',
          phone_number: '',
          is_login: '',
        },
      };
    },
    created() {
      this.fetchName();
    },
    methods: {
      fetchName() {
        const user = localStorage.getItem('userinfo')
        if (user) {
          try {
            this.userinfo = JSON.parse(user);
            this.form.username = this.userinfo.username;
          } catch (e) {
            console.error('Error parsing user data:', e);
          }
        }
      },
      async onSubmit() {
        // 原密码错误
        if (this.form.oldPassword !== this.userinfo.password) {
          this.$message.error('原密码错误');
          return;
        }
        // 验证密码是否一致
        if (this.form.newPassword !== this.form.confirmPassword) {
          this.$message.error('两次输入的密码不一致');
          return;
        }

        try {
          const response = await axios.post('http://192.168.1.207:5000/update_adm', this.form);
          console.log('响应数据:', response.data);
          this.$message.success('用户信息修改成功');
          if (this.form.phone) {
            this.userinfo.phone_number = this.form.phone;
          }
          this.userinfo.password = this.form.newPassword;
          this.userinfo.is_login = 0;
          localStorage.removeItem('userinfo');
          localStorage.setItem('userinfo', JSON.stringify(this.userinfo));
          this.$router.push('/');
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
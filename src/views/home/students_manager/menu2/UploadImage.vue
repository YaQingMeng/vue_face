<template>
  <div class="new-user-page">
    <el-card class="user-form-card" shadow="hover">
      <h2>新增用户</h2>
      <el-form :model="newUser" :rules="rules" ref="newUserForm" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="newUser.name"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="id">
          <el-input v-model="newUser.id"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="department">
          <el-input v-model="newUser.department"></el-input>
        </el-form-item>
        <el-form-item label="宿舍号" prop="dormid">
          <el-input v-model="newUser.dormid"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="newUser.status" placeholder="请选择状态">
            <el-option label="在读" value="在读"></el-option>
            <el-option label="毕业" value="毕业"></el-option>
            <el-option label="休学" value="休学"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="newUser.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="newUser.email"></el-input>
        </el-form-item>
        <el-form-item label="人脸照片" prop="photoFile">
          <img v-if="newUser.photoPath" :src="newUser.photoPath"
            style="width: 100px; height: 100px; margin-bottom: 10px;">
          <input type="file" ref="fileInput" @change="onFileChange">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        newUser: {
          name: '',
          id: '',
          department: '',
          dormid: '',
          status: '',
          phone: '',
          email: '',
          photoPath: '',
          photoFile: null
        },
        rules: {
          name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
          id: [{ required: true, message: '请输入学号', trigger: 'blur' }],
          department: [{ required: true, message: '请输入专业', trigger: 'blur' }],
          dormid: [{ required: true, message: '请输入宿舍号', trigger: 'blur' }],
          status: [{ required: true, message: '请选择状态', trigger: 'change' }],
          phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
          email: [{ required: true, type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
          photoFile: [{ required: true, message: '请上传人脸照片', trigger: 'change' }]
        }
      };
    },
    methods: {
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          if (this.newUser.photoPath) {
            URL.revokeObjectURL(this.newUser.photoPath);
          }
          this.newUser.photoFile = file;
          this.newUser.photoPath = URL.createObjectURL(file);
        }
      },
      submitForm() {
        this.$refs.newUserForm.validate((valid) => {
          if (valid) {
            const formData = new FormData();
            formData.append('name', this.newUser.name);
            formData.append('id', this.newUser.id);
            formData.append('department', this.newUser.department);
            formData.append('dormid', this.newUser.dormid);
            formData.append('status', this.newUser.status);
            formData.append('phone', this.newUser.phone);
            formData.append('email', this.newUser.email);
            if (this.newUser.photoFile) {
              formData.append('photo', this.newUser.photoFile);
            }

            axios.post('http://192.168.1.207:5000/register_stu', formData)
              .then(() => {
                this.$message.success('用户新增成功');
                this.resetForm();
              })
              .catch(error => {
                this.$message.error('用户新增失败');
                console.error(error);
              });
          } else {
            this.$message.error('表单验证失败');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.newUserForm.resetFields();
        if (this.newUser.photoPath) {
          URL.revokeObjectURL(this.newUser.photoPath);
        }
        this.newUser.photoPath = '';
        this.newUser.photoFile = null;
        this.$refs.fileInput.value = '';
      }
    }
  };
</script>


<style scoped>
  .new-user-page {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    /* border: solid #ff0000; */
  }

  .user-form-card {
    flex: 1 1 auto;
    /* border: solid #ff0000; */

  }
</style>
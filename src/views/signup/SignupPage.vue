<template>
  <div class="register-container">
    <el-card class="register-card">
      <h2>门禁管理系统注册</h2>
      <el-form ref="signupFormRef" :model="userinfo" class="register-form" :rules="rules" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userinfo.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone_number" class="phone_container">
          <el-input v-model="userinfo.phone_number" type="text" placeholder="请输入手机号" class="phone_number">
            <template #prefix>
              <el-icon>
                <Phone />
              </el-icon>
            </template>
          </el-input>
          <el-button type="primary" @click="getVerificationCode" class="verification_button">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" prop="verification_code">
          <el-input v-model="userinfo.verification_code" type="text" placeholder="请输入验证码">
            <template #prefix>
              <el-icon>
                <Message />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userinfo.password" type="password" placeholder="请输入密码">
            <template #prefix>
              <el-icon>
                <Key />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button type="primary" @click="handleRegister">注册</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        userinfo: {
          username: '',
          password: '',
          phone_number: '',
          verification_code: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          phone_number: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          verification_code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      handleRegister() {
        this.$refs.signupFormRef.validate((valid) => {
          if (valid) {
            const payload = {
              username: this.userinfo.username,
              password: this.userinfo.password,
              phone_number: this.userinfo.phone_number,
              verification_code: this.userinfo.verification_code,
            };
            axios.post('http://192.168.1.207:5000/register_adm', payload)
              .then(response => {
                console.log(response)
                if (response.data.code == 200) {
                  this.$message.success('注册成功');
                  this.$router.push('/'); // 注册成功后跳转到登录页面
                } else {
                  this.$message.error('注册失败: ' + response.data.message);
                }
              })
              .catch(error => {
                this.$message.error('注册失败: ' + error.message);
              });
          } else {
            console.log('表单验证失败');
            return false;
          }
        });
      },
      getVerificationCode() {
        if (!this.userinfo.phone_number) {
          this.$message.error('请输入手机号');
          return;
        }
        axios.post('http://192.168.1.207:5000/get_verification_code', { phone_number: this.userinfo.phone_number })
          .then(response => {
            if (response.data.code == 200) {
              this.$message.success('验证码已发送');
            } else {
              this.$message.error('验证码发送失败: ' + response.data.message);
            }
          })
          .catch(error => {
            this.$message.error('验证码发送失败: ' + error.message);
          });
      }
    }
  };
</script>


<style scoped>
  .register-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/public/login.jpg');
    background-size: cover;
    background-position: center;
  }

  .register-card {
    padding: 10px;
    width: 600px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    text-align: center;
  }

  .form-item .el-form-item__label {
    white-space: nowrap;
  }


  .register-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .el-input {
    margin-bottom: 20px;
  }

  .phone_number {
    width: 66%;
    margin-right: 10px;

  }

  .verification_button {
    margin-top: -20px;

  }

  .el-button {
    width: 30%;
  }
</style>
<template>
  <el-container class="home-container">

    <el-header class="header">
      <h1 class = "title">门禁管理系统</h1>
      <div class="user-info">
        <span>欢迎，{{user.username}}</span>
        <el-link href="/" type="primary" class="logout-link">切换账号</el-link>
      </div>
    </el-header>
    
    <el-container class="main-container">

      <el-aside class="aside-container">
        <el-container class="sidebar">
          
        <ul class="nav-list">

          <li @click="toggleMainMenu" :class="{ active: menu.isMainMenuActive }">
            <el-icon><House /></el-icon> 主页
          </li>
          <ul v-if="menu.isMainMenuActive" class="sub-menu">
            <li @click="menu.activeTab = 'Overview'" :class="{ active: menu.activeTab === 'Overview' }">
              <el-icon><House /></el-icon> 主页
            </li>
            <li @click="menu.activeTab = 'Dashboard'" :class="{ active: menu.activeTab === 'Dashboard' }">
              <el-icon><Operation /></el-icon> 控制台
            </li>
          </ul>

          <li @click="toggleStudentInfoMenu" :class="{ active: menu.isStudentInfoMenuActive }">
            <el-icon><User /></el-icon> 学生信息
          </li>
          <ul v-if="menu.isStudentInfoMenuActive" class="sub-menu">
            <li @click="menu.activeTab = 'StudentInfo'" :class="{ active: menu.activeTab === 'StudentInfo' }">
              <el-icon><User /></el-icon> 学生信息
            </li>
            <li @click="menu.activeTab = 'StudentDashboard'" :class="{ active: menu.activeTab === 'StudentDashboard' }">
              <el-icon><User /></el-icon> 上传
            </li>
          </ul>

          <li @click="toggleFacePhotoMenu" :class="{ active: menu.isFacePhotoMenuActive }">
            <el-icon><Camera /></el-icon> 人脸数据
          </li>
          <ul v-if="menu.isFacePhotoMenuActive" class="sub-menu">
            <li @click="menu.activeTab = 'FacePhoto'" :class="{ active: menu.activeTab === 'FacePhoto' }">
              <el-icon><Camera /></el-icon> 人脸数据
            </li>
            <li @click="menu.activeTab = 'FaceDashboard'" :class="{ active: menu.activeTab === 'FaceDashboard' }">
              <el-icon><UploadFilled /></el-icon> 上传人脸
            </li>
          </ul>

          <li @click="toggleAttendanceMenu" :class="{ active: menu.isAttendanceMenuActive }">
            <el-icon><Document /></el-icon> 考勤数据
          </li>
          <ul v-if="menu.isAttendanceMenuActive" class="sub-menu">
            <li @click="menu.activeTab = 'Attendance'" :class="{ active: menu.activeTab === 'Attendance' }">
              <el-icon><Document /></el-icon> 考勤数据
            </li>
            <li @click="menu.activeTab = 'AttendanceDashboard'" :class="{ active: menu.activeTab === 'AttendanceDashboard' }">
              <el-icon><Document /></el-icon> 异常考勤记录
            </li>
          </ul>

          <li @click="toggleSettingMenu" :class="{ active: menu.isSettingMenuActive }">
            <el-icon><Tools /></el-icon> 设置
          </li>
          <ul v-if="menu.isSettingMenuActive" class="sub-menu">
            <li @click="menu.activeTab = 'Setting'" :class="{ active: menu.activeTab === 'Setting' }">
              <el-icon><Tools /></el-icon> 设置
            </li>
            <li @click="menu.activeTab = 'SettingDashboard'" :class="{ active: menu.activeTab === 'SettingDashboard' }">
              <el-icon><Tools /></el-icon> 控制台
            </li>
          </ul>
        </ul>

        </el-container>
      </el-aside>

      <el-main class="main-content">
        <Overview v-if="menu.activeTab === 'Overview'" />
        <Dashboard v-if="menu.activeTab === 'Dashboard'" />
        <StudentInfo v-if="menu.activeTab === 'StudentInfo'" />
        <StudentDashboard v-if="menu.activeTab === 'StudentDashboard'" />
        <FacePhoto v-if="menu.activeTab === 'FacePhoto'" />
        <FaceDashboard v-if="menu.activeTab === 'FaceDashboard'" />
        <Attendance v-if="menu.activeTab === 'Attendance'" />
        <AttendanceDashboard v-if="menu.activeTab === 'AttendanceDashboard'" />
        <Setting v-if="menu.activeTab === 'Setting'" />
        <SettingDashboard v-if="menu.activeTab === 'SettingDashboard'" />
      </el-main>

    </el-container>

  </el-container>
</template>

<script>
import Overview from './overview/menu1/Overview.vue';
import Dashboard from './overview/menu2/Dashboard.vue';
import StudentInfo from './students_manager/menu1/StudentInfo.vue';
import StudentDashboard from './students_manager/menu2/Dashboard.vue'; 
import Attendance from './attendance/menu1/Attendance.vue';
import AttendanceDashboard from './attendance/menu2/ExceptionRecord.vue'; 
import FacePhoto from './face_photo/menu1/FacePhoto.vue';
import FaceDashboard from './face_photo/menu2/UploadPhoto.vue'; 
import Setting from './setting/menu1/Setting.vue';
import SettingDashboard from './setting/menu2/Dashboard.vue'; 

export default {
  name: 'HomePage',
  components: { 
    Overview, Dashboard, 
    StudentInfo, StudentDashboard, 
    Attendance, AttendanceDashboard, 
    FacePhoto, FaceDashboard, 
    Setting, SettingDashboard 
  },
  data() {
    return {
      menu:{
        activeTab: 'Overview',
        isMainMenuActive: false, // 控制主页子菜单的显示与隐藏
        isStudentInfoMenuActive: false, // 控制学生信息子菜单的显示与隐藏
        isFacePhotoMenuActive: false, // 控制人脸数据子菜单的显示与隐藏
        isAttendanceMenuActive: false, // 控制考勤数据子菜单的显示与隐藏
        isSettingMenuActive: false, // 控制设置子菜单的显示与隐藏
      },
      user:{
        username: '',
        password: '',
        errorMessage: '',
        is_login:'',
      },
    };
  },
  methods: {
    toggleMainMenu() {
      this.menu.isMainMenuActive = !this.menu.isMainMenuActive;
    },
    toggleStudentInfoMenu() {
      this.menu.isStudentInfoMenuActive = !this.menu.isStudentInfoMenuActive;
    },
    toggleFacePhotoMenu() {
      this.menu.isFacePhotoMenuActive = !this.menu.isFacePhotoMenuActive;
    },
    toggleAttendanceMenu() {
      this.menu.isAttendanceMenuActive = !this.menu.isAttendanceMenuActive;
    },
    toggleSettingMenu() {
      this.menu.isSettingMenuActive = !this.menu.isSettingMenuActive;
    },
  },
  created() {  
    const user =localStorage.getItem('userinfo')
    if(user){
      try {
        this.user = JSON.parse(user); // 解析为对象
        console.log('result', this.user); // 打印对象
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    } 
  }, 
};
</script>

<style scoped>
  .home-container {
    flex: auto;
    
  }
  
  /*顶部显示*/
  .header {
    display: flex;
    background-color: #3f72af;
    color: white;
    align-items: center; /* 垂直居中 */
    padding: 10px;
    /* border-radius: 10px; */
  }

  .title {
    flex: 0 0 auto;
    font-size: 26px; /* 设置字体大小 */
    font-family: 'Arial', sans-serif; /* 设置字体类型 */
    /* border: solid #ff0000; */
  }

  .user-info {
    display: flex;
    margin-left: auto; /* 将此元素推向右侧 */
    /* border: solid #ff0000; */
  }

  /*下方显示*/
  .main-container {
    display: flex;
    /* 下方容器固定高度 */
    height: 93vh;
    /* border: solid #ff0000; */
  }

  /* 左侧导航栏宽度 */
  .aside-container{
    display: flex;
    padding: 10px;
    /* border: solid #ff0000; */
  }

  /* 右侧内容宽度 自动为剩下的区域 调试用 */
  .main-content{
    display: flex;
    padding: 10px;
    /* border: solid #ff0000; */
  }

  /* 左侧导航栏具体样式设置 */
  .sidebar {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
    border: 1px solid #ccc;  
    /* border: solid #ff0000; */
  }
  
  .nav-list {
    flex: 1 1 auto;
    list-style: none;
    /* border: solid #ff0000; */
  }
  
  .nav-list li {
    flex: 1 1;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    margin-left: -30px;
    margin-right: 10px;
    background-color: #dbe2ef;
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }
  
  .nav-list li:hover {
    background-color: #e0e0e0;
  }
  
  .nav-list li.active {
    background-color: #0f4c75;
    color: #fff;
  }
  

</style>

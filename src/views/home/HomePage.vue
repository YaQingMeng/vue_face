<template>
  <el-container class="home-container">
    <el-header class="header">
      <div class="header-content">
        <h1>管理员管理系统</h1>
      </div>
    </el-header>
    <el-container>
      <el-aside class="sidebar">
        <h2>管理员管理系统</h2>
        <ul class="nav-list">
          <li @click="toggleMainMenu" :class="{ active: isMainMenuActive }">
            <el-icon><House /></el-icon> 主页
          </li>
          <ul v-if="isMainMenuActive" class="sub-menu">
            <li @click="activeTab = 'Overview'" :class="{ active: activeTab === 'Overview' }">
              <el-icon><House /></el-icon> 主页
            </li>
            <li @click="activeTab = 'Dashboard'" :class="{ active: activeTab === 'Dashboard' }">
              <el-icon><House /></el-icon> 控制台
            </li>
          </ul>

          <li @click="toggleStudentInfoMenu" :class="{ active: isStudentInfoMenuActive }">
            <el-icon><User /></el-icon> 学生信息
          </li>
          <ul v-if="isStudentInfoMenuActive" class="sub-menu">
            <li @click="activeTab = 'StudentInfo'" :class="{ active: activeTab === 'StudentInfo' }">
              <el-icon><User /></el-icon> 学生信息
            </li>
            <li @click="activeTab = 'StudentDashboard'" :class="{ active: activeTab === 'StudentDashboard' }">
              <el-icon><User /></el-icon> 控制台
            </li>
          </ul>

          <li @click="toggleFacePhotoMenu" :class="{ active: isFacePhotoMenuActive }">
            <el-icon><Camera /></el-icon> 人脸数据
          </li>
          <ul v-if="isFacePhotoMenuActive" class="sub-menu">
            <li @click="activeTab = 'FacePhoto'" :class="{ active: activeTab === 'FacePhoto' }">
              <el-icon><Camera /></el-icon> 人脸数据
            </li>
            <li @click="activeTab = 'FaceDashboard'" :class="{ active: activeTab === 'FaceDashboard' }">
              <el-icon><Camera /></el-icon> 控制台
            </li>
          </ul>

          <li @click="toggleAttendanceMenu" :class="{ active: isAttendanceMenuActive }">
            <el-icon><Document /></el-icon> 考勤数据
          </li>
          <ul v-if="isAttendanceMenuActive" class="sub-menu">
            <li @click="activeTab = 'Attendance'" :class="{ active: activeTab === 'Attendance' }">
              <el-icon><Document /></el-icon> 考勤数据
            </li>
            <li @click="activeTab = 'AttendanceDashboard'" :class="{ active: activeTab === 'AttendanceDashboard' }">
              <el-icon><Document /></el-icon> 控制台
            </li>
          </ul>

          <li @click="toggleSettingMenu" :class="{ active: isSettingMenuActive }">
            <el-icon><Tools /></el-icon> 设置
          </li>
          <ul v-if="isSettingMenuActive" class="sub-menu">
            <li @click="activeTab = 'Setting'" :class="{ active: activeTab === 'Setting' }">
              <el-icon><Tools /></el-icon> 设置
            </li>
            <li @click="activeTab = 'SettingDashboard'" :class="{ active: activeTab === 'SettingDashboard' }">
              <el-icon><Tools /></el-icon> 控制台
            </li>
          </ul>
        </ul>
      </el-aside>
      <el-main class="main-content">
        <Overview v-if="activeTab === 'Overview'" />
        <Dashboard v-if="activeTab === 'Dashboard'" />
        <StudentInfo v-if="activeTab === 'StudentInfo'" />
        <StudentDashboard v-if="activeTab === 'StudentDashboard'" />
        <FacePhoto v-if="activeTab === 'FacePhoto'" />
        <FaceDashboard v-if="activeTab === 'FaceDashboard'" />
        <Attendance v-if="activeTab === 'Attendance'" />
        <AttendanceDashboard v-if="activeTab === 'AttendanceDashboard'" />
        <Setting v-if="activeTab === 'Setting'" />
        <SettingDashboard v-if="activeTab === 'SettingDashboard'" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Overview from './overview/menu1/Overview.vue';
import Dashboard from './overview/menu2/Dashboard.vue'; // 添加Dashboard组件
import StudentInfo from './students_manager/menu1/StudentInfo.vue';
import StudentDashboard from './students_manager/menu2/Dashboard.vue'; 
import Attendance from './attendance/menu1/Attendance.vue';
import AttendanceDashboard from './attendance/menu2/Dashboard.vue'; 
import FacePhoto from './face_photo/menu1/FacePhoto.vue';
import FaceDashboard from './face_photo/menu2/Dashboard.vue'; 
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
      activeTab: 'Overview',
      isMainMenuActive: false, // 控制主页子菜单的显示与隐藏
      isStudentInfoMenuActive: false, // 控制学生信息子菜单的显示与隐藏
      isFacePhotoMenuActive: false, // 控制人脸数据子菜单的显示与隐藏
      isAttendanceMenuActive: false, // 控制考勤数据子菜单的显示与隐藏
      isSettingMenuActive: false, // 控制设置子菜单的显示与隐藏
    };
  },
  methods: {
    toggleMainMenu() {
      this.isMainMenuActive = !this.isMainMenuActive;
    },
    toggleStudentInfoMenu() {
      this.isStudentInfoMenuActive = !this.isStudentInfoMenuActive;
    },
    toggleFacePhotoMenu() {
      this.isFacePhotoMenuActive = !this.isFacePhotoMenuActive;
    },
    toggleAttendanceMenu() {
      this.isAttendanceMenuActive = !this.isAttendanceMenuActive;
    },
    toggleSettingMenu() {
      this.isSettingMenuActive = !this.isSettingMenuActive;
    },
  },
};
</script>

<style scoped>
  .home-container {
    display: flex;
    height: 100vh; 
  }
  
  .header {
  background-color: #1976d2; /* 深蓝色 */
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 10px 10px 0 0; /* 顶部圆角 */
}
  
  .sidebar {
    width: 250px;
    background-color: #ecf5ff;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ccc; 
    height: 93%;   
    margin-top: 10px;
  }
  
  .sidebar h2 {
    margin-bottom: 20px;
    text-align: center;
    color: #333333;
    font-family: 'Arial', sans-serif;
    font-size: 1.5em;
    letter-spacing: 1px;
  }
  
  .nav-list {
    /* list-style: none; */
    padding: 0;
    margin: 10px;
  }
  
  .nav-list li {
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: #d9ecff;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }
  
  .nav-list li:hover {
    background-color: #e0e0e0;
  }
  
  .nav-list li.active {
    background-color: #007bff;
    color: #fff;
  }
  
  .main-content {
  flex: 1;
  padding: 20px;
  background-color: #fff;

}
  </style>

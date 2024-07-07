<template>
  <el-container class="home-container">

    <el-header class="header">
      <h1>门禁管理系统</h1>
    </el-header>
    
    <el-container class="main-container">

      <el-aside class="aside-container">
        <el-container class="sidebar">
          
        <ul class="nav-list">

          <li @click="toggleMainMenu" :class="{ active: isMainMenuActive }">
            <el-icon><House /></el-icon> 主页
          </li>
          <!-- 交换了位置 -->
          <ul v-if="isMainMenuActive" class="sub-menu">
            <li @click="activeTab = 'Dashboard'" :class="{ active: activeTab === 'Dashboard' }">
              <el-icon><House /></el-icon> 主页
            </li>
            <li @click="activeTab = 'Overview'" :class="{ active: activeTab === 'Overview' }">
              <el-icon><Operation /></el-icon> 控制台
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
              <el-icon><UploadFilled /></el-icon> 上传人脸
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
              <el-icon><Document /></el-icon> 异常考勤记录
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

        </el-container>
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
import Overview from './overview/menu2/Overview.vue';
import Dashboard from './overview/menu1/Dashboard.vue'; // 交换了位置menu1和2
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
      activeTab: 'Dashboard',
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
    flex: auto;
    
  }
  
  /*顶部显示*/
  .header {
    display: flex;
    background-color: #3f72af;
    color: white;
    justify-content: center;
    align-items: center; 
    padding: 10px;
    border-radius: 10px;
  }

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
    border: solid #ff0000;
  }

  /* 右侧内容宽度 自动为剩下的区域 调试用 */
  .main-content{
    display: flex;
    padding: 10px;
    border: solid #ff0000;
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

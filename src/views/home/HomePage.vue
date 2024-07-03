<template>
  <div class="home-container">
    <aside class="sidebar">
      <h2>管理员管理系统</h2>
      <ul class="nav-list">
        <li @click="activeTab = 'Overview'" :class="{ active: activeTab === 'Overview' }">
          <el-icon><House /></el-icon> 主页
        </li>
        <li @click="activeTab = 'StudentInfo'" :class="{ active: activeTab === 'StudentInfo' }">
          <el-icon><User /></el-icon> 学生信息
        </li>
        <li @click="activeTab = 'FacePhoto'" :class="{ active: activeTab === 'FacePhoto' }">
          <el-icon><Camera /></el-icon> 人脸数据
        </li>        
        <li @click="activeTab = 'Attendance'" :class="{ active: activeTab === 'Attendance' }">
          <el-icon><Document /></el-icon> 考勤数据
        </li>
        <li @click="activeTab = 'Setting'" :class="{ active: activeTab === 'Setting' }">
          <el-icon><Tools /></el-icon> 设置
        </li>
      </ul>
    </aside>
    <main class="main-content">
      <Overview v-if="activeTab === 'Overview'" />
      <StudentInfo v-if="activeTab === 'StudentInfo'" />
      <FacePhoto v-if="activeTab === 'FacePhoto'" />
      <Attendance v-if="activeTab === 'Attendance'" />
      <Setting v-if="activeTab === 'Setting'" />
    </main>
  </div>
</template>

<script>
import Overview from './overview/Overview.vue';
import StudentInfo from './students_manager/StudentInfo.vue';
import Attendance from './attendance/Attendance.vue';
import FacePhoto from './face_photo/FacePhoto.vue';
import Setting from './setting/Setting.vue';

export default {
  name: 'HomePage',
  components: { Overview, StudentInfo, Attendance, FacePhoto, Setting },
  data() {
    return {
      activeTab: 'Overview',
    };
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh; 
}

.sidebar {
  width: 250px;
  background-color: #ecf5ff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc; 
  height: 93%;   
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


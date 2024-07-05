<template>
  <div class="home-container">
    <aside class="sidebar">
      <h2>管理员管理系统</h2>
      <el-menu :default-active="activeTab" class="el-menu-vertical-demo" @select="handleSelect">
        <el-submenu index="Overview">
          <template #title>
            <el-icon><House /></el-icon>
            <span>主页</span>
          </template>
          <el-menu-item index="OverviewOverview">总览</el-menu-item>
          <el-menu-item index="OverviewStats">统计</el-menu-item>
        </el-submenu>
        <el-submenu index="StudentInfo">
          <template #title>
            <el-icon><User /></el-icon>
            <span>学生信息</span>
          </template>
          <el-menu-item index="StudentInfoAll">所有</el-menu-item>
          <el-menu-item index="StudentInfoAbsent">未到寝室</el-menu-item>
        </el-submenu>
        <el-submenu index="FacePhoto">
          <template #title>
            <el-icon><Camera /></el-icon>
            <span>人脸数据</span>
          </template>
          <el-menu-item index="FacePhotoData">数据</el-menu-item>
        </el-submenu>
        <el-submenu index="Attendance">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>考勤数据</span>
          </template>
          <el-menu-item index="AttendanceRecords">记录</el-menu-item>
        </el-submenu>
        <el-submenu index="Setting">
          <template #title>
            <el-icon><Tools /></el-icon>
            <span>设置</span>
          </template>
          <el-menu-item index="SettingGeneral">常规</el-menu-item>
          <el-menu-item index="SettingAdvanced">高级</el-menu-item>
        </el-submenu>
      </el-menu>
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



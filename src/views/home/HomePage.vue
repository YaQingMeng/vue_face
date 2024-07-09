<template>
  <el-container class="home-container">

    <el-header class="header">
      <h1 class="title">门禁管理系统</h1>

      <!-- 新版 下拉菜单 -->
      <div class="menus-container">

        <el-dropdown @command="handleCommand">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="Overview" :class="{ active: menu.activeTab === 'Overview' }">
                <el-icon>
                  <House />
                </el-icon> 主页
              </el-dropdown-item>
              <!-- <el-dropdown-item command="Dashboard" :class="{ active: menu.activeTab === 'Dashboard' }">
                <el-icon><Operation /></el-icon> 控制台
              </el-dropdown-item> -->
            </el-dropdown-menu>
          </template>
          <span class="el-dropdown-link">
            <el-icon>
              <House />
            </el-icon> 主页
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </el-dropdown>

        <el-dropdown @command="handleCommand">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="StudentInfo" :class="{ active: menu.activeTab === 'StudentInfo' }">
                <el-icon>
                  <User />
                </el-icon> 学生信息
              </el-dropdown-item>
              <el-dropdown-item command="StudentDashboard" :class="{ active: menu.activeTab === 'StudentDashboard' }">
                <el-icon>
                  <UploadFilled />
                </el-icon> 新增学生
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
          <span class="el-dropdown-link">
            <el-icon>
              <User />
            </el-icon> 学生信息
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </el-dropdown>

        <el-dropdown @command="handleCommand">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="Attendance" :class="{ active: menu.activeTab === 'Attendance' }">
                <el-icon>
                  <Document />
                </el-icon> 考勤数据
              </el-dropdown-item>
              <el-dropdown-item command="AttendanceDashboard"
                :class="{ active: menu.activeTab === 'AttendanceDashboard' }">
                <el-icon>
                  <Document />
                </el-icon> 异常考勤记录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
          <span class="el-dropdown-link">
            <el-icon>
              <Document />
            </el-icon> 考勤数据
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </el-dropdown>

        <el-dropdown @command="handleCommand">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="Setting" :class="{ active: menu.activeTab === 'Setting' }">
                <el-icon>
                  <Tools />
                </el-icon> 设置
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
          <span class="el-dropdown-link">
            <el-icon>
              <Tools />
            </el-icon> 设置
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </el-dropdown>

      </div>

      <div class="user-info">
        <el-dropdown>
          <template #dropdown>
            <el-dropdown-menu>
              <!-- <el-dropdown-item @click.native="goToProfile">个人资料</el-dropdown-item> -->
              <el-dropdown-item @click="showUserInfo"><el-icon>
                  <Postcard />
                </el-icon>个人信息</el-dropdown-item>
              <el-dropdown-item @click="logout"><el-icon>
                  <Switch />
                </el-icon> 退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
          <span class="el-dropdown-link">
            <img src="/person.png" class="avatar">
            <span class="personalData">{{ user.username }}
              <el-icon>
                <ArrowDown />
              </el-icon>
            </span>

            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </el-dropdown>
      </div>

      <!--旧版 侧边栏-->
    </el-header>

    <el-container class="main-container">

      <el-aside class="aside-container">
        <el-container class="sidebar">

          <ul class="nav-list">

            <li @click="toggleMainMenu" :class="{ active: menu.isMainMenuActive }">
              <el-icon>
                <House />
              </el-icon> 主页
            </li>
            <ul v-if="menu.isMainMenuActive" class="sub-menu">
              <li @click="menu.activeTab = 'Overview'" :class="{ active: menu.activeTab === 'Overview' }">
                <el-icon>
                  <House />
                </el-icon> 主页
              </li>
              <!-- <li @click="menu.activeTab = 'Dashboard'" :class="{ active: menu.activeTab === 'Dashboard' }">
              <el-icon><Operation /></el-icon> 控制台
            </li> -->
            </ul>

            <li @click="toggleStudentInfoMenu" :class="{ active: menu.isStudentInfoMenuActive }">
              <el-icon>
                <User />
              </el-icon> 学生信息
            </li>
            <ul v-if="menu.isStudentInfoMenuActive" class="sub-menu">
              <li @click="menu.activeTab = 'StudentInfo'" :class="{ active: menu.activeTab === 'StudentInfo' }">
                <el-icon>
                  <User />
                </el-icon> 学生信息
              </li>
              <li @click="menu.activeTab = 'StudentDashboard'"
                :class="{ active: menu.activeTab === 'StudentDashboard' }">
                <el-icon>
                  <UploadFilled />
                </el-icon> 新增
              </li>
            </ul>

            <li @click="toggleAttendanceMenu" :class="{ active: menu.isAttendanceMenuActive }">
              <el-icon>
                <Document />
              </el-icon> 考勤数据
            </li>
            <ul v-if="menu.isAttendanceMenuActive" class="sub-menu">
              <li @click="menu.activeTab = 'Attendance'" :class="{ active: menu.activeTab === 'Attendance' }">
                <el-icon>
                  <Document />
                </el-icon> 考勤数据
              </li>
              <li @click="menu.activeTab = 'AttendanceDashboard'"
                :class="{ active: menu.activeTab === 'AttendanceDashboard' }">
                <el-icon>
                  <CircleClose />
                </el-icon> 异常记录
              </li>
            </ul>

            <li @click="toggleSettingMenu" :class="{ active: menu.isSettingMenuActive }">
              <el-icon>
                <Tools />
              </el-icon> 设置
            </li>
            <ul v-if="menu.isSettingMenuActive" class="sub-menu">
              <li @click="menu.activeTab = 'Setting'" :class="{ active: menu.activeTab === 'Setting' }">
                <el-icon>
                  <Tools />
                </el-icon> 设置
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
        <Attendance v-if="menu.activeTab === 'Attendance'" />
        <AttendanceDashboard v-if="menu.activeTab === 'AttendanceDashboard'" />
        <Setting v-if="menu.activeTab === 'Setting'" />
      </el-main>

    </el-container>

    <!-- 个人信息的弹框 -->
    <el-dialog title="个人信息" v-model="dialogVisible1" width="30%">
      <el-form>
        <el-form-item label="姓名">
          <span>{{ user.username }}</span>
        </el-form-item>
        <el-form-item label="电话">
          <span>{{ user.photo_number }}</span>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible1 = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>

  </el-container>
</template>

<script>
  import Overview from './overview/menu1/Overview.vue';
  // import Dashboard from './overview/menu2/Dashboard.vue';
  import StudentInfo from './students_manager/menu1/StudentInfo.vue';
  import StudentDashboard from './students_manager/menu2/UploadImage.vue';
  import Attendance from './attendance/menu1/Attendance.vue';
  import AttendanceDashboard from './attendance/menu2/ExceptionRecord.vue';
  import Setting from './setting/menu1/Setting.vue';

  export default {
    name: 'HomePage',
    components: {
      Overview,
      // Dashboard, 
      StudentInfo, StudentDashboard,
      Attendance, AttendanceDashboard,
      // FacePhoto, FaceDashboard, 
      Setting,
    },
    data() {
      return {
        menu: {
          activeTab: 'Overview',
          // isMainMenuActive: false, // 控制主页子菜单的显示与隐藏
          isStudentInfoMenuActive: false, // 控制学生信息子菜单的显示与隐藏
          // isFacePhotoMenuActive: false, // 控制人脸数据子菜单的显示与隐藏
          isAttendanceMenuActive: false, // 控制考勤数据子菜单的显示与隐藏
          isSettingMenuActive: false, // 控制设置子菜单的显示与隐藏
        },
        user: {
          username: '',
          password: '',
          errorMessage: '',
          is_login: '',
        },
        dialogVisible1: false,
      };
    },
    methods: {
      toggleMainMenu() {
        this.menu.isStudentInfoMenuActive = false,
          this.menu.isAttendanceMenuActive = false,
          this.menu.isSettingMenuActive = false,
          this.menu.isMainMenuActive = !this.menu.isMainMenuActive;
      },
      toggleStudentInfoMenu() {
        this.menu.isAttendanceMenuActive = false,
          this.menu.isSettingMenuActive = false,
          this.menu.isMainMenuActive = false,
          this.menu.isStudentInfoMenuActive = !this.menu.isStudentInfoMenuActive;
      },
      toggleAttendanceMenu() {
        this.menu.isStudentInfoMenuActive = false,
          this.menu.isSettingMenuActive = false,
          this.menu.isMainMenuActive = false,
          this.menu.isAttendanceMenuActive = !this.menu.isAttendanceMenuActive;
      },
      toggleSettingMenu() {
        this.menu.isAttendanceMenuActive = false,
          this.menu.isMainMenuActive = false,
          this.menu.isStudentInfoMenuActive = false,
          this.menu.isSettingMenuActive = !this.menu.isSettingMenuActive;
      },
      handleCommand(command) {
        this.menu.activeTab = command;
      },
      logout() {
        // 处理退出登录逻辑
        this.$router.push('/');
      },
      showUserInfo() {
        this.dialogVisible1 = true;
      }
    },
    created() {
      const user = localStorage.getItem('userinfo')
      if (user) {
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
    background-color: black;
    color: white;
    align-items: center;
    /* 垂直居中 */
    border-radius: 10px 10px 0 0;
    /* border: solid #ff0000; */
  }

  .menus-container {
    display: flex;
    flex: 0 1 auto;
    /* border: solid #ff0000; */
  }

  .el-dropdown-link {
    display: flex;
    color: white;
    margin-right: 10px;
    font-size: 16px;
    /* background-color: #0f4c75; */
    padding: 10px;
    /* border-radius: 10px; */
    /* border: solid #ff0000; */
  }

  .title {
    flex: 0 0 auto;
    font-size: 22px;
    /* 设置字体大小 */
    font-family: 'Arial', sans-serif;
    /* 设置字体类型 */
    margin-right: 40px;
    /* border: solid #ff0000; */
  }

  .user-info {
    display: flex;
    margin-left: auto;
    /* 将此元素推向右侧 */
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
  .aside-container {
    display: flex;
    padding: 10px;
    width: 200px;
    border-radius: 0 0 0 10px;
    background-color: #303841;
    /* border: solid #ff0000; */
  }

  /* 右侧内容宽度 自动为剩下的区域 调试用 */
  .main-content {
    display: flex;
    padding: 10px;
    background-color: #e9e9eb;
    border-radius: 0 0 10px 0;
    /* border: solid #ff0000; */
  }

  /* 左侧导航栏具体样式设置 */
  /* .sidebar {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
    border: 1px solid #ccc;  
    background-color: #819caf;
    border: solid #ff0000;
  } */

  .nav-list {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    list-style: none;

  }

  .nav-list li {
    flex: 0 1 auto;
    padding: 10px;
    color: #eeeeee;
    cursor: pointer;
    margin-bottom: 20px;
    margin-left: -30px;
    margin-right: 10px;
    background-color: #303841;
    border-radius: 10px;
    transition: background-color 0.3s ease;

  }

  .nav-list li:hover {
    background-color: #212121;
  }

  .nav-list li.active {
    background-color: #212121;
  }

  .avatar {
    height: 30px;
    width: 30px;
    border-radius: 20px;
  }
  .personalData{
    margin-top: 5px;
    margin-left: 10px;
  }
</style>
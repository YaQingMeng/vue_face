<template>
  <div class="card-container">
    <el-card class="custom-card" shadow="hover">
      <div class="card-content">
        <span class="card-title">在寝人数: {{ inDormCount }}</span>
      </div>
    </el-card>

    <el-card class="custom-card" shadow="hover">
      <div class="card-content">
        <span class="card-title">今日刷脸人数: {{ faceScanCountToday }}</span>
      </div>
    </el-card>

    <el-card class="custom-card" shadow="hover">
      <div class="card-content">
        <span class="card-title">未到齐宿舍数: {{ absentDormCount }}</span>
      </div>
    </el-card>
  </div>
</template>


<script>
  import axios from 'axios';
  export default {
    name: 'RightSection',
    data() {
      return {
        inDormCount: 0,  // 在寝人数
        faceScanCountToday: 0,  // 今日刷脸人数
        absentDormCount: 0,  // 未到齐宿舍数
      };
    },
    mounted() {
      this.fetchDashboardData();
    },
    methods: {
      async fetchDashboardData() {
        try {
          const response = await axios.get('http://192.168.1.207:5000/log_summary');
          console.log(response)
          this.inDormCount = response.data.num0;
          this.faceScanCountToday = response.data.num1;
          this.absentDormCount = response.data.num2;
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
        }
      },
    },
  };
</script>

<style scoped>
  .card-container {
    display: flex;
    flex: 1 1 auto;
    display: flex;
    gap: 10px;
    /* 卡片之间的间距 */
    /* border: solid #ff0000;  */
  }

  .custom-card {
    flex: 1 1 auto;
    /* width: 250px;
  height: 120px; */
    background-color: #fff;
    color: #1976d2;
    /* border: solid #ff0000;  */
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-weight: bold;
    /* 加粗 */
    font-size: 18px;
    /* 字号加大 */
    text-align: left;
    /* 靠左对齐 */
  }
</style>
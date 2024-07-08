<template>
  <div class="card-container">
    <el-card class="custom-card" shadow="hover">
      <div class="card-content">
        <span class="card-title">在寝人数</span>
      </div>
    </el-card>

    <el-card class="custom-card" shadow="hover">
      <div class="card-content">
        <span class="card-title">今日刷脸人数</span>
      </div>
    </el-card>

    <el-card class="custom-card" shadow="hover">
      <div class="card-content">
        <span class="card-title">可用宿舍数</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'RightSection',
};
</script>

<style scoped>

.card-container {
  display: flex;
  flex: 1 1 auto;
  display: flex;
  gap: 10px; /* 卡片之间的间距 */
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
  font-weight: bold; /* 加粗 */
  font-size: 18px; /* 字号加大 */
  text-align: left; /* 靠左对齐 */
}
</style>

<template>
  <div class="left-section-content">
    <div class="charts-container">
      <!-- 时间线分页展示 -->
      <el-timeline style="max-width: 600px; margin-top: 20px;">
        <el-timeline-item v-for="(item, index) in paginatedItems" :key="index" :timestamp="item.timestamp" placement="top">
          <el-card class = "items">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <!-- 分页控制器 -->
    <div class="pagination-container">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="timelineItems.length"
        background>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftSection',
  data() {
    return {
      timelineItems: [
        { timestamp: '2023/6/20', title: 'Update Github template', description: 'Tom committed 2023/6/20 20:46' },
        { timestamp: '2023/6/18', title: 'Update Github template', description: 'Tom committed 2023/6/18 20:46' },
        { timestamp: '2023/6/15', title: 'Update Github template', description: 'Tom committed 2023/6/15 20:46' },
        { timestamp: '2023/6/12', title: 'Update Github template', description: 'Tom committed 2023/6/12 20:46' },
        { timestamp: '2023/6/10', title: 'Update Github template', description: 'Tom committed 2023/6/10 20:46' },
        { timestamp: '2023/6/5', title: 'Update Github template', description: 'Tom committed 2023/6/5 20:46' },
        { timestamp: '2023/6/1', title: 'Update Github template', description: 'Tom committed 2023/6/1 20:46' }
        // Add more timeline items as needed
      ],
      currentPage: 1,
      pageSize: 2 // 每页显示的条目数
    };
  },
  computed: {
    // 计算分页后的时间线条目
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.timelineItems.slice(startIndex, endIndex);
    }
  },
  methods: {
    // 处理分页器当前页变更事件
    handleCurrentChange(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style>
.left-section-content {
  flex:auto;
  display: flex;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 居中内容 */
}

.charts-container {
  display: flex;
  justify-content: space-between;
  width: 100%; /* 让内容铺满整个宽度 */
}

.item{
  height:80px;
  border: red;
}

.pagination-container {
  width: 100%; /* 让分页器占满整个宽度 */
  margin-top: 20px; /* 设置分页器与内容的间距 */
}

</style>

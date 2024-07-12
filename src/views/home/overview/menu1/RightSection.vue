<template>
  <div class="right-section-content">
    <div class="charts-container">
      <!-- 时间线分页展示 -->
      <el-timeline style="max-width: 500px;">
        <el-timeline-item v-for="(item, index) in paginatedItems" :key="index"
          :timestamp="`${item.time} ${item.sname} ${item.type} 寝室`" placement="top">
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- 分页控制器 -->
    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
      layout="prev, pager, next" :total="timelineItems.length" background>
    </el-pagination>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        timelineItems: [],
        currentPage: 1,
        pageSize: 8,
        intervalId: null,
      };
    },
    created() {
      this.startFetchingTimelineItems();
    },
    beforeUnmount() {
      this.stopFetchingTimelineItems();
    },
    methods: {
      // sleep(ms) {
      //   return new Promise(resolve => setTimeout(resolve, ms));
      // },
      // 从后端获取全部出勤记录
      async fetchTimelineItems() {
        try {
          const response = await axios.get('http://192.168.1.207:5000/current_logs');
          this.timelineItems = response.data.table_data;
          console.log(this.timelineItems);
        } catch (error) {
          console.error('Error fetching timeline items:', error);
        }
      },
      // 启动定时获取
      startFetchingTimelineItems() {
        this.intervalId = setInterval(() => {
          this.fetchTimelineItems();
        }, 1500);
      },
      // 停止定时获取
      stopFetchingTimelineItems() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      },
      // 实现滚动刷新
      refreshTimeline() {
        this.fetchTimelineItems(); // 获取最新数据
        // 滚动到顶部
        this.$nextTick(() => {
          const container = document.querySelector('.charts-container');
          if (container) {
            container.scrollTop = 0; // 滚动到顶部
          }
        });
      },
      // 处理分页器当前页变更事件
      handleCurrentChange(page) {
        this.currentPage = page;
      },
    },
    computed: {
      // 计算分页后的时间线条目
      paginatedItems() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.timelineItems.slice(startIndex, endIndex);
      }
    },
  };
</script>




<style>
  .right-section-content {
    flex: auto;
    display: flex;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 居中内容 */
    /* border: solid #ff0000; */
  }

  .charts-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* 让内容铺满整个宽度 */
  }

  .el-pagination {
    /* border: solid #ff0000; */
    align-self: center;
  }
</style>
<template>
  <div class="top-section-content">
    <h3>刷脸记录查询</h3>
    <div class="search-bar">
      <el-input
        placeholder="请输入内容进行搜索"
        v-model="searchQuery"
        prefix-icon="el-icon-search"
        style="margin-right: 10px;"
      />
      <el-button type="primary" @click="handleSearch">查询</el-button>
    </div>
  </div>
</template>

<script>
import { ElNotification } from 'element-plus';

export default {
  name: 'RightSection',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSearch() {
      // 处理搜索逻辑，假设固定返回的结果是 "查询结果: 这是固定的结果"
      const searchResult = '查询结果: 这是固定的结果';

      // 弹出通知
      ElNotification({
        title: '搜索结果',
        message: searchResult,
        type: 'success',
        duration: 3000, // 通知显示时长，单位为毫秒
      });

      console.log('搜索内容:', this.searchQuery);
      console.log('搜索结果:', searchResult);
    },
  },
};
</script>

<style scoped>
.top-section-content {
  flex: 1 1 auto;
  border: solid #ff0000;
}
.search-bar {
  display: flex;
  align-items: center;
}
</style>

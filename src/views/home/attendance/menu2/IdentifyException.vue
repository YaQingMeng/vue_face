<template>
  <div class="left-section-content">
    <el-table :data="tableData" stripe class="full-width-table">
      <el-table-column prop="date" label="时间" width="180" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="id" label="学号" width="180"/>
    </el-table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LeftSection',
  setup() {
    const tableData = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        id: '20215184',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        id: '20215184',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        id: '20215184',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        id: '20215184',
      },
    ]);

    return {
      tableData,
    };
  },
});
</script>

<style scoped>
.left-section-content {
  display: flex;
  flex: 1 1 auto;
}

.full-width-table {

}
</style>

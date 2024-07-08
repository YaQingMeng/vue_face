<template>
  <div class="left-section-content">
    <div class="title">异常识别记录</div>
    <div class="gallery">
      <div v-for="(photo, index) in paginatedPhotos" :key="index" class="photo-item">
        <img :src="photo.url" alt="异常人脸照片">
        <div class="photo-info">
          <p>{{ photo.status }}</p>
          <p>{{ photo.time }}</p>
          <el-button type="success" class="buttons" @click="showDialog(photo)">查看</el-button>
        </div>
      </div>
    </div>
    <el-pagination
      style="margin-top: 20px;"
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      @current-change="handlePageChange"
      :page-size="pageSize"
      :total="photos.length"
    />
  </div>

  <!-- 编辑权限的消息框 -->
  <el-dialog
      title="编辑该人脸"
      v-model="dialogVisible"
      width="30%"
    >
      <el-form :model="selectedPhoto">
        <el-form-item label="姓名">
          <el-input v-model="selectedPhoto.name"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="selectedPhoto.id"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="selectedPhoto.status" disabled></el-input>
        </el-form-item>
        <el-form-item label="刷脸时间">
          <el-input v-model="selectedPhoto.time" disabled></el-input>
        </el-form-item>
        <el-form-item label="操作">
          <el-checkbox v-model="addToDatabase">加入数据库</el-checkbox>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="savePermissions">保存</el-button>
        </div>
      </template>
    </el-dialog>
</template>

<script>
export default {
  name: 'LeftSection',
  data() {
    return {
      photos: [
        { url: '/login.jpg', status: '未识别', time: '2024-07-10 10:00:00' },
        { url: '/login.jpg', status: '未识别', time: '2024-07-10 11:00:00' },
        { url: '/login.jpg', status: '未识别', time: '2024-07-10 11:00:00' },
        { url: '/login.jpg', status: '未识别', time: '2024-07-10 11:00:00' },
        { url: '/login.jpg', status: '未识别', time: '2024-07-10 11:00:00' },
        { url: '/login.jpg', status: '未识别', time: '2024-07-10 11:00:00' },
        { url: '/login.jpg', status: '未识别', time: '2024-07-10 11:00:00' },
        { url: '/login.jpg', status: '未识别', time: '2024-07-10 11:00:00' },
        // Add more photos with details
      ],
      currentPage: 1,
      pageSize: 6, // Number of photos per page
      dialogVisible: false,
      selectedPhoto: null,
      addToDatabase: false,
    };
  },
  computed: {
    paginatedPhotos() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.currentPage * this.pageSize;
      return this.photos.slice(start, end);
    },
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
    showDialog(photo) {
      this.selectedPhoto = photo;
      this.dialogVisible = true;
    },
    savePermissions() {
      if (this.addToDatabase) {
        // Implement logic to save to database (mocked here)
        console.log(`Saving permissions for ${this.selectedPhoto.name} (${this.selectedPhoto.id})`);
        console.log('Add to database:', this.addToDatabase);
        // Reset selectedPhoto and close dialog
        this.selectedPhoto = null;
        this.addToDatabase = false;
        this.dialogVisible = false;
      } else {
        // Just close the dialog
        this.dialogVisible = false;
      }
    },
  },
};
</script>

<style scoped>
.left-section-content {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  /* border: solid #ff0000; */
  padding: 10px;
}

.title {
  flex: 0 1 auto;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  /* border: solid #ff0000;  */
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 10px;
  /* border: solid #ff0000;  */
}

.photo-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: auto;
  border: 1px solid #ccc;
  padding: 5px;
}

.photo-item img {
  max-width: 50%;
  max-height: 50%;
  object-fit: cover;
}

.photo-info {
  text-align: center;
  margin-top: 5px;
}

.el-pagination {
  /* border: solid #ff0000; */
  align-self: center;
}

.buttons{
  width: 50px;
  height: 25px;
}
</style>

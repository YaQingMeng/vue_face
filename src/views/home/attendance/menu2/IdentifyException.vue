<template>
  <div class="left-section-content">
    <div class="title">异常识别记录</div>
    <div class="gallery">
      <div v-for="(photo, index) in paginatedPhotos" :key="index" class="photo-item">
        <img :src="photo.url" alt="异常人脸照片">
        <div class="photo-info">
          <p>{{ photo.status }}</p>
          <p>{{ photo.time }}</p>
        </div>
      </div>
    </div>
    <el-pagination style="margin-top: 20px;" background layout="prev, pager, next" :current-page="currentPage"
      @current-change="handlePageChange" :page-size="pageSize" :total="photos.length" />
  </div>
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

  .buttons {
    width: 50px;
    height: 25px;
  }
</style>
<template>
  <div class="gallery">
    <div class="gallery-images">
      <div v-for="(image, index) in currentPageImages" :key="index" class="image-container">
        <img :src="image.src" :alt="image.alt" />
        <p class="image-name">{{ image.alt }}</p>
      </div>
    </div>
    <el-pagination
      style="margin-top: 10px;"
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      @current-change="handlePageChange"
      :page-size="imagesPerPage"
      :total="images.length"
    />
  </div>
</template>

  
<script>
  export default {
    name: 'ImageGallery',
    data() {
      return {
        images: [
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 1' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 2' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 3' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 4' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 5' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 6' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 7' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 8' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 9' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 10' },
          { src: require('@/assets/images/image1.jpg'), alt: 'Image 11' },
        ],
        currentPage: 1,
        imagesPerPage: 8, // 每页显示的图片数量
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.images.length / this.imagesPerPage);
      },
      currentPageImages() {
        const start = (this.currentPage - 1) * this.imagesPerPage;
        const end = start + this.imagesPerPage;
        return this.images.slice(start, end);
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
  .gallery {
    display: flex;
    flex:1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: solid #ff0000;
  }
  
  .gallery-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .image-container {
    margin: 10px;
    text-align: center;
  }
  
  .image-container img {
    width: 200px; /* 或其他你想要的尺寸 */
    height: auto;
  }
  
  .image-name {
    margin-top: 5px;
    font-size: 14px; /* 你可以根据需要调整字体大小 */
    color: #333; /* 你可以根据需要调整颜色 */
  }
  </style>

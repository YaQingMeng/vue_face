<template>  
  <div class="gallery">  
    <button @click="prevPage" :disabled="currentPage <= 1">上一页</button>  
    <div class="gallery-images">  
      <img  
        v-for="(image, index) in currentPageImages"  
        :key="index"  
        :src="image.src"  
        :alt="image.alt"  
      />  
    </div>  
    <button @click="nextPage" :disabled="currentPage >= totalPages">下一页</button>  
  </div>  
</template>  
  
<script>  
export default {  
  name: 'ImageGallery',  
  data() {  
    return {  
      images: [  
        // 假设这里有很多图片对象  
        { src: "@/assets/img/tree.png", alt: 'Image 1' },  
        { src: '@/assets/img/tree.png', alt: 'Image 2' },  
        // ...更多图片  
      ],  
      currentPage: 1,  
      imagesPerPage: 5, // 每页显示的图片数量  
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
    nextPage() {  
      if (this.currentPage < this.totalPages) {  
        this.currentPage++;  
      }  
    },  
    prevPage() {  
      if (this.currentPage > 1) {  
        this.currentPage--;  
      }  
    },  
  },  
};  
</script>  
  
<style scoped>  
.gallery {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
}  
  
.gallery-images img {  
  margin: 10px;  
  width: 200px; /* 或其他你想要的尺寸 */  
  height: auto;  
}  
</style>
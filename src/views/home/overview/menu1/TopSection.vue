<template>
  <div class="block text-center">
    <el-carousel height="150px" :interval="4000" arrow="always">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselExample',
  data() {
    return {
      images: [
        require('@/assets/images/image1.jpg'),
        require('@/assets/images/image1.jpg'),
        require('@/assets/images/image1.jpg'),
        require('@/assets/images/image1.jpg'),
      ],
    };
  },
};
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

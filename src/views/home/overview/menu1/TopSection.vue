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
        require('@/assets/images/image1.png'),
        require('@/assets/images/image2.png'),
        require('@/assets/images/image3.png'),
        require('@/assets/images/image4.jpg'),
      ],
    };
  },
};
</script>

<style scoped>
.carousel-image {
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #fff; 
}
</style>

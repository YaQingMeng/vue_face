<template>
  <div class="face-container">
    <header class="top-section">
      <TopSection />
    </header>
    <footer class="bottom-section">
      <BottomSection />
    </footer>
  </div>
</template>

<script>
import TopSection from './TopSection.vue';
import BottomSection from './BottomSection.vue';

export default {
  name: 'FacePhoto',
  components: { TopSection, BottomSection },
};
</script>

<style scoped>   
  .face-container {  
    display: flex; 
    flex:1 1 auto;
    flex-direction: column;  
    /* border: solid #ff0000; */
  }  
    
  .top-section {  
    display: flex;
    flex:0 0 auto;
    height: 150px;
    background-color: #f5f5f5;    
    border: 1px solid #ccc;  
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    /* border: solid #ff0000; */
  }  
    
  .bottom-section {  
    display: flex;
    flex:1 0 auto;
    background-color: #f5f5f5;    
    border: 1px solid #ccc;  
    border-radius: 10px;
    padding: 10px;
    /* border: solid #ff0000; */
  }  
</style>

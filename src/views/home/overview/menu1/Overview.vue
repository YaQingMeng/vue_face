<template>
  <div class="overview-container">
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
  name: 'OverView',
  components: { TopSection,  BottomSection },
};
</script>

<style scoped>
.overview-container {
  display: flex;
  flex:1 1 auto; 
  flex-direction: column;  
  border: solid #ff0000;
}  

.top-section {
  flex: 1 1 auto; 
  border-radius: 10px;   
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  border: 1px solid #ccc;  
  border: solid #ff0000;
}  
  
.bottom-section {  
  flex: 1 1 auto; 
  background-color: #ecf5ff;  
  border-radius: 10px; 

  margin-top: 20px;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  border: 1px solid #ccc;  
  border: solid #ff0000;
}
</style>

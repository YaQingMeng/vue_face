<template>
  <div class="student-container">
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
  name: 'StudentManager',
  components: { TopSection, BottomSection },
};
</script>

<style>  
  .student-container {  
  display: flex;  
  flex-direction: column;  
  height: 95%;  
  padding: 20px;  
  border: 1px solid #ccc;  
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  
  margin-top: -10px; 
  }  

  .top-section {  
    height: 20vh;
    background-color: #f5f5f5;  
    border-radius: 8px 8px 0 0;  
    padding: 10px;  
    border-bottom: 1px solid #ddd;  
  }   
    
  .bottom-section {  
    background-color: #f5f5f5;  
    border-radius: 0 0 8px 8px;  
    padding: 10px;  
    height: 70%;
    border-top: 1px solid #ddd;  
  }  
</style>

<template>
  <div class="overview-container">
    <header class="top-section">
      <TopSection />
    </header>
    <!-- <div class="middle-section">
      <aside class="left-section">
        <LeftSection />
      </aside>
      <main class="right-section">
        <RightSection />
      </main>
    </div> -->
    <footer class="bottom-section">
      <BottomSection />
    </footer>
  </div>
</template>

<script>
import TopSection from './TopSection.vue';
// import LeftSection from './LeftSection.vue';
// import RightSection from './RightSection.vue';
import BottomSection from './BottomSection.vue';

export default {
  name: 'OverView',
  components: { TopSection,  BottomSection },
};
</script>

<style scoped>
.overview-container {
  display: flex;  
  flex-direction: column;  
 

  border-radius: 8px;
 
  margin-top: -10px;
}  
  
.top-section {
  border-radius: 8px;  
  padding: 10px;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  border: 1px solid #ccc;  
}  
  
.middle-section {  
  display: flex;  
  flex: 1 1 auto;  
  margin-top: 20px;  
  
}  

.left-section {  
  flex: 0 0 200px;  
  background-color: #ecf5ff;  
  border-radius: 8px;  
  padding: 15px;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  
  margin-right: 20px;
  border: 1px solid #ccc;  
}  
  
.right-section {  
  flex: 1 1 auto;  
  background-color: #ecf5ff;  
  border-radius: 8px;  
  padding: 20px;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);  
  border: 1px solid #ccc;  
}  
  
.bottom-section {  
  flex: 1 1 auto; 
  background-color: #ecf5ff;  
  border-radius: 8px; 
  padding: 10px;  
  margin-top: 20px;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  border: 1px solid #ccc;  
}
</style>

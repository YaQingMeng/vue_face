<template>
  <div class="overview-container">
    <div class="middle-section">
      <div class="left-section">
        <LeftSection />
      </div>
      <div class="right-section">
        <RightSection />
      </div>
    </div>
    <div class="bottom-section">
      <BottomSection />
    </div>
  </div>
</template>

<script>
import LeftSection from './LeftSection.vue';
import RightSection from './RightSection.vue';
import BottomSection from './BottomSection.vue';

export default {
  name: 'AttendancePage',
  components: { LeftSection, RightSection, BottomSection },
};
</script>

<style scoped>
.overview-container {  
  display: flex;    
  flex-direction: column;    
  height: 95%;    
  padding: 20px;    
  border: 1px solid #ccc;    
  border-radius: 8px;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);    
  margin-top: -10px;  
}
  
.middle-section {    
  display: flex;    
  flex: 1 1 auto;    
  margin-top: 20px;    
}    
    
.left-section{     
  flex: 1 1 auto;
  background-color: #ecf5ff;    
  border-radius: 8px;    
  padding: 20px; /* 调整为一致，或根据需要调整 */  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);    
  margin-top: -10px;
  margin-right: 20px;
  border: 1px solid #ccc;  
}    
  
.right-section {     
  flex: 1 1 auto;  
  background-color: #ecf5ff;    
  border-radius: 8px;    
  padding: 20px; /* 调整为一致，或根据需要调整 */  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);    
  border: 1px solid #ccc;  
  margin-top: -10px;
}   
  
.bottom-section {    
  flex: 1 1 auto;
  background-color: #ecf5ff;    
  border-radius: 8px;    
  padding: 10px;    
  margin-top: 20px;     
  border: 1px solid #ccc;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);    
}  

</style>

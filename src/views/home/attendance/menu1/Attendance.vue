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
  flex:1 1 auto;  
  flex-direction: column;  
  /* border: solid #ff0000;   */
}
  
.middle-section {    
  display: flex;    
  flex:0 0 auto;
  height: 150px;
  margin-bottom: 10px;
  /* border: solid #ff0000;  */
}    

.left-section{
  display: flex;
  flex: 0 1 auto;
  background-color: #f5f5f5;     
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);    
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  /* border: solid #ff0000;  */
}    
  
.right-section {
  display: flex;  
  flex: 1 1 auto;  
  background-color: #f5f5f5;     
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);    
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  /* border: solid #ff0000;  */
}   
  
.bottom-section {
  display: flex;  
  flex: 1 1 auto;
  background-color: #f5f5f5;    
  border-radius: 10px;    
  padding: 10px;    
  border: 1px solid #ccc;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);    
  /* border: solid #ff0000;  */
}  

</style>

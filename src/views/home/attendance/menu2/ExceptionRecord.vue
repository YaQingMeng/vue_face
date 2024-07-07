<template>
  <div class="middle-section">
    <div class="left-section">
      <LeftSection />
    </div>
    <div class="right-section">
      <RightSection />
    </div>
  </div>

</template>

<script>
import LeftSection from './IdentifyException.vue';
import RightSection from './LateRecord.vue';

export default {
  name: 'ExceptionPage',
  components: { LeftSection, RightSection },
};
</script>

<style scoped>
  .middle-section {    
    display: flex;
    flex:1 0 auto;  
    /* border: solid #ff0000;   */ 
  }    
    
.left-section {
  display: flex;
  flex: 1 1 auto;
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

</style>

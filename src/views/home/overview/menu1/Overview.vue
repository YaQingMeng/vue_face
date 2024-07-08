<template>
  <div class="overview-container">
    <header class="top-section">
      <TopSection />
    </header>
    <div class="middle-section">
      <div class="left-section">
        <LeftSection />
      </div>
      <div class="right-section">
        <RightSection />
      </div>
    </div>
  </div>
</template>

<script>
import TopSection from './TopSection.vue';
import LeftSection from './LeftSection.vue';
import RightSection from './RightSection.vue';

export default {
  name: 'OverView',
  components: { TopSection,  LeftSection, RightSection },
};
</script>

<style scoped>
.overview-container {
  display: flex;
  flex:1 1 auto; 
  flex-direction: column;
  /* background-color: #fff;  */
  /* border: solid #ff0000; */
}  

.top-section {
  flex: 0 1 auto; 
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  border: 1px solid #ccc;
  /* background-color: #7c1212;  */
  /* border: solid #ff0000; */
}  
  
.middle-section {
    display: flex;
    flex: 0 1 auto;  
    /* border: solid #ff0000; */
    /* background-color: #fff;  */
  }

  .left-section{
    display: flex;
    flex: 1 1 auto;
    /* background-color: #f5f5f5;     */
    border: 1px solid #ccc;  
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    background-color: #fff; 
    /* border: solid #ff0000; */
  }

  .right-section{
    display: flex;
    flex:1 0 auto;
    /* background-color: #f5f5f5;     */
    border: 1px solid #ccc;  
    border-radius: 10px;
    padding: 10px;
    background-color: #fff; 
    /* border: solid #ff0000; */
  }
</style>
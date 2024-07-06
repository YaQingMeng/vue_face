<template>
  <div class="upload-container">
    <h2>上传图片</h2>
    <input type="file" @change="onFileChange" />
    <div v-if="previewUrl" class="preview">
      <img :src="previewUrl" alt="Image Preview" />
    </div>
    <button @click="uploadImage">上传</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      selectedFile: null,
      previewUrl: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        this.previewUrl = URL.createObjectURL(this.selectedFile);
      }
    },
    async uploadImage() {
      if (!this.selectedFile) {
        alert('请选择一个图片文件');
        return;
      }
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        console.log(formData);
        const response = await axios.post('http://192.168.1.207:5000/register_stu', formData, {
        });
        console.log('服务器响应:', response);
        // 上传成功后，可以清除预览
        this.previewUrl = null;
      } catch (error) {
        console.error('上传失败:', error);
      }
    },
  },
};
</script>

<style scoped>
.upload-container {
  display: flex;
  flex:1 1 auto;  
  flex-direction: column;
  padding: 10px;
  border: solid #ff0000;
}

input[type="file"] {
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

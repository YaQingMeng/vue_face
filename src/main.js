import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 创建 Vue 应用实例
const app = createApp(App);

// 使用 Vue Router
app.use(router);

// 使用 Element Plus
app.use(ElementPlus);

// 注册 Element Plus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 挂载 Vue 应用
app.mount('#app');

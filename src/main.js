import { createApp } from 'vue'
import App from './App.vue'
import router from './router';


const app = createApp(App)

app.use(router)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)

app.mount('#app')


// import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// import App from './App.vue'
// import router from './router'
// // const cors = require('cors');



// const app = createApp(App)

// // app.use(cors());
// app.use(ElementPlus)
// app.use(router)

// app.mount('#app')
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')



//To Do List: 
// 1. Once was met sfProText find and initialize font and apply to that one element in the project
// 2. Ask what to do with those hidden arrows in the project in figma 
// 3. In Navbar try to initialize the similar to catalog, arrow appearing, effect.(to both) 
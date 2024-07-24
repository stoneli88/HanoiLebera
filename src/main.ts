import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible/index.js'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

import './assets/main.css'
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
// import "https://fonts.googleapis.com/icon?family=Material+Icons"

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'


const app = createApp(App)

app.use(router)
app.mount('#app')

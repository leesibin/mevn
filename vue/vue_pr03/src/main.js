import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import io from 'socket.io-client'
const socket = io('http://localhost:8080', { transports: ['websocket'] })

const app = createApp(App)
app.config.globalProperties.$socket = socket

app.use(store).use(router).mount('#app')

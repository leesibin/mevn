import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import socket from 'vue-socket.io'

const app = createApp(App)

app.config.globalProperties.socket = socket

app.use(store).use(router).mount('#app')

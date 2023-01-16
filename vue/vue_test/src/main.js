import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

createApp(App).use(store).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './index.js'
import "bootstrap/dist/css/bootstrap.min.css"

import mitt from 'mitt'
const emitter = mitt()


const app = createApp(App)
app.config.globalProperties.emitter = emitter

app.use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/js/bootstrap.js"

import mitt from 'mitt'
const emitter = mitt()


const app = createApp(App)
app.config.globalProperties.emitter = emitter

app.use(router).mount('#app')

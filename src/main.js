import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/js/bootstrap.js"



createApp(App).use(router).mount('#app')

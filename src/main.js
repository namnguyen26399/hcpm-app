import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import mitt from "mitt";
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js' 

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);


const emitter = mitt();

AOS.init({
    duration: 800,
    offset: 80,
});

const app = createApp(App);
app.component("v-chart", ECharts);
app.config.globalProperties.emitter = emitter;
app.use(VueChartkick)

app.use(router).mount("#app");

<template>
    <div class="">
        <div class="bg-white flex w-full h-full" style="border: 12px solid #f3f4f4">
            <v-chart class="chart w-[80%] h-[400px] bg-white border-none" :option="option"> </v-chart>
            <bar-chart
                :colors="['#57C0EB', '#57C0EB']"
                loading="Loading..."
                :download="true"
                class="scale-[100%] bg-white w-fit mt-10 mr-10"
                :data="[
                    ['Mobile App ', 32],
                    ['Game', 46],
                    ['Web App', 28],
                    ['Technology Solutions', 5],
                    ['Digital Conversion', 15],
                    ['AI', 10],
                    ['Information Security', 25],
                ]"
            ></bar-chart>
        </div>
        <div class="text-center font-semibold text-xl bg-white h-[142px]" style="margin: 12px; margin-top: 0px">
            <div class="font-bold">Main Partner</div>
            <div id="partner" class="flex justify-around mt-3">
                <div>
                    <a href="#"> <img src="../assets/images/ct4.jpg" alt="" /></a>
                </div>
                <div>
                    <a href="#"> <img src="../assets/images/ct4.jpg" alt="" /></a>
                </div>
                <div>
                    <a href="#"> <img src="../assets/images/ct4.jpg" alt="" /></a>
                </div>
                <div>
                    <a href="#"> <img src="../assets/images/ct4.jpg" alt="" /></a>
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

export default defineComponent({
    name: "HelloWorld",
    components: {
        VChart,
    },
    provide: {
        // [THEME_KEY]: "light",
    },
    setup() {
        const option = ref({
            title: {
                text: "Customer structure",
                left: "150px",
                top: "10px",
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
            },
            series: [
                {
                    name: "Customer structure",
                    type: "pie",
                    radius: "55%",
                    center: ["55%", "50%"],
                    data: [
                        { value: 335, name: "Europe" },
                        { value: 310, name: "Asia	    " },
                        { value: 234, name: "North America	    " },
                        { value: 135, name: "South America	" },
                        { value: 148, name: "Africa	" },
                        { value: 148, name: "VietNam" },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        });

        return { option };
    },
});
</script>

<style scoped>
.chart {
    height: 400px;
}
#partner img {
    width: 200px;
    height: 80px;
}
#partner img:hover {
    cursor: pointer;
}
</style>

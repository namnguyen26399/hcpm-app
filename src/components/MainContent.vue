<template>
    <div class="w-full bg-gray-100">
        <Header></Header>
        <div class="w-full h-[50px] border-t-2 bg-white pl-3 font-medium text-base leading-[50px]">Các dự án của công ty</div>
        <router-view class="w-full h-full"></router-view>

        <!-- <Project></Project> -->
        <!-- <Staff />
        <ListStaff /> -->
    </div>
</template>

<script>
import Header from "./Header.vue";
import ListStaff from './ListStaff.vue';
import Project from "./Project.vue";
import Staff from './Staff.vue';
export default {
    components: {
        Header,
        Project,
        Staff,
        ListStaff,
    },
        created() {
        this.emitter.on("clickProject", () => {
            window.open("http://localhost:3000/project", "_self");
        });
    },
};
</script>

<style>
</style>
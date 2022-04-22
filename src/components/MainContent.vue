<template>
    <div class="w-full bg-blue-200">
        <Header></Header>
        <div class="w-full h-[50px] border-t-2 bg-white">abc</div>
        <router-view class="w-full h-full"></router-view>

        <!-- <Project></Project> -->
    </div>
</template>

<script>
import Header from "./Header.vue";
import Project from "./Project.vue";
export default {
    components: {
        Header,
        Project,
    },
};
</script>

<style>
</style>
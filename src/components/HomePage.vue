<template>
    <div class="w-full h-screen flex overflow-hidden"><SideBar></SideBar> <MainContent></MainContent></div>
</template>

<script>
import SideBar from "./SideBar.vue";
import MainContent from "./MainContent.vue";
export default {
    components: {
        SideBar,
        MainContent,
    },
};
</script>

<style></style>

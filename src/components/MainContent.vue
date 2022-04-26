<template>
    <div class="w-5/6 bg-gray-100">
        <Header></Header>
        <div class="w-full h-[50px] border-t-2 bg-white pl-3 font-medium text-base leading-[50px]">
            {{ namePage }}
        </div>
        <Project v-if="isProject"></Project>
        <Staff v-if="isStaff" />
        <ListStaff v-if="isListStaff" />
        <HomeContent v-if="isHomeContent" />
    </div>
</template>

<script>
import Header from "./Header.vue";
import ListStaff from "./ListStaff.vue";
import Project from "./Project.vue";
import Staff from "./Staff.vue";
import HomeContent from "./HomeContent.vue";
export default {
    components: {
        Header,
        Project,
        Staff,
        ListStaff,
        HomeContent,
    },
    created() {
        this.emitter.on("clickProject", () => {
            this.isProject = true;
            this.isStaff = false;
            this.isListStaff = false;
            this.isHomeContent = false;
        });
        this.emitter.on("clickList", () => {
            this.isListStaff = true;
            this.isProject = false;
            this.isStaff = false;
            this.isHomeContent = false;
        });
        this.emitter.on("clickStaff", () => {
            this.isStaff = true;
            this.isListStaff = false;
            this.isProject = false;
            this.isHomeContent = false;
        });
    },
    data() {
        return {
            isProject: false,
            isListStaff: false,
            isStaff: false,
            isHomeContent: true,
            namePage: "Khách hàng",
        };
    },
};
</script>

<style></style>

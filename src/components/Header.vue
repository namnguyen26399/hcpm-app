<template>
    <div class="w-full h-[61px] bg-white flex justify-between" style="align-items: center">
        <div class="ml-1">
            <button @click="emitter.emit('clickTogle')">
                <img class="w-10 h-10" style="width: 36px; height: 36px" src=".././assets/images/menu.png" alt="" />
            </button>
        </div>
        <div class="flex relative">
            <div class="mr-3 relative">
                <button>
                    <img src="../assets/images/mess.png" alt="" />
                </button>
            </div>
            <div class="mr-3">
                <button>
                    <img src="../assets/images/bell.png" alt="" />
                </button>
            </div>
            <div class="mr-3 relative">
                <img style="" src="../assets/images/avatar.png" alt="" />
                <img v-show="isOnline" class="absolute bottom-[80%] right-0" style="width: 12px; height: 12px " src="../assets/images/online.png" alt="" />
                <img v-show="isOffline" class="absolute bottom-[80%] right-0" style="width: 12px; height: 12px" src="../assets/images/offline.png" alt="" />
            </div>
            <div class="mr-12 font-medium flex">
                Nguyen Van A
                <img @click="emitter.emit('showProfile')" src="../assets/images/downward-arrow.png" class="mt-1 ml-1 cursor-pointer" style="width: 16px; height: 16px" alt="" />
            </div>
            <Profile id="profile" v-if="isShow"></Profile>
        </div>
    </div>
</template>

<script>

import Profile from "./Profile.vue";

export default {
    created() {
        this.emitter.on("showProfile", () => {
            this.isShow = !this.isShow;
        });
        this.emitter.on("clickStatus", () => {
            console.log("status");
            this.isOnline = !this.isOnline;
            this.isOffline = !this.isOffline;
        });
    },
    methods: {
        ClickTogle() {},
    },
    components: { Profile },
    data() {
        return {
            isShow: false,
            isOnline: true,
            isOffline: false,
        };
    },
};
</script>

<style scoped>
img {
    width: 24px;
    height: 24px;
}
</style>

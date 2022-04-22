<template>
<!-- <button @click="emitter.emit('say-hello', 'Hey, Stranger!')">Emit Event!</button> -->

    <div class="w-full h-[61px] bg-white flex justify-between" style="align-items: center">
        <div class="ml-1">
            <button @click="emitter.emit('clickTogle')">
                <img class="w-10 h-10"  style="width: 36px; height: 36px;" src=".././assets/images/menu.png" alt="" />
            </button>
        </div>
        <div class="flex ">
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
            <div class="mr-3 ">
                <img style="" src="../assets/images/avatar.png" alt="" />
            </div>
            <div class="mr-3 font-medium">Nguyen Van A</div>
        </div>
    </div>
</template>

<script>

export default {
    methods:{
        ClickTogle(){
            
        }
    }
};
</script>

<style scoped>
img {
    width: 24px;
    height: 24px;
}

</style>
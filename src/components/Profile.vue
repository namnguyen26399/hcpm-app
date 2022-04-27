<template>
    <div id="profile" class="absolute top-full bg-white w-[178px] h-auto left-[24%] rounded-[4px] z-50 shadow" style="border: 0.2px solid #f3f4f2">
        <div class="" style="border: none; height: auto">Signed in as :</div>
        <p class="font-semibold">namnguyen26399</p>
        <div @click="emitter.emit('clickStatus')" class="rounded h-8 py-1 flex" style="border: 1px solid #f3f4f2; line-height: 25px"><img class="w-5 h-5 mt-1 ml-5 mr-1" src="../assets/images/status.png" alt="" /> Set Status</div>
        <div>Your Profile</div>
        <div>Help</div>
        <div>Upgrade</div>
        <div style="">Setting</div>
        <div class="flex justify-around pl-4" style="">
            Sign out
            <img class="w-4 h-4 mt-[12px] ml-3" style="" src="../assets/images/logout.png" alt="" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
    text-align: center;
}
#profile div {
    height: 40px;
    border-bottom: 1px solid #f3f4f2;
    line-height: 40px;
    cursor: pointer;
    margin: 0 5px;
}
#profile div:hover {
    background-color: rgb(248, 246, 246);
}
#profile div:nth-child(1):hover {
    background-color: rgb(255, 255, 255);
    cursor: auto;
}
</style>

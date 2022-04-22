<template>
    <div
        v-if="isTogle"
        class="w-1/5 h-screen"
        style="background-color: #2f3c52"
    >
        <div id="logo" class="">
            <img
                class="w-[110px] h-[45px] mx-auto mt-2 mb-2"
                src=".././assets/images/logo.png"
                alt=""
            />
        </div>
        <div class="h-[85%]" style="background-color: #3a4b66">
            <div
                class="
                    sidebar-item
                    h-12
                    pl-3
                    text-base
                    font-normal
                    text-center text-white
                    flex
                    relative
                "
                style="align-items: center"
            >
                <img
                    class="w-5 h-5 ml-3 mr-4"
                    src="../assets/images/user1.png"
                    alt=""
                />
                Nhân viên
                <div
                    id="submenu-employee"
                    class="
                        absolute
                        bg-[#5388BB]
                        w-full
                        h-auto
                        top-[30%]
                        left-[100%]
                        rounded
                        hidden
                    "
                >
                    <div
                        @click="emitter.emit('clickList')"
                        class="submenu-item"
                    >
                        Danh sách nhân viên
                    </div>
                    <div
                        @click="emitter.emit('clickStaff')"
                        class="submenu-item"
                    >
                        Biểu đồ nhân viên
                    </div>
                    <div class="submenu-item">Thống kê</div>
                </div>
            </div>
            <div
                class="
                    sidebar-item
                    h-12
                    pl-3
                    text-base
                    font-normal
                    text-center text-white
                    flex
                    relative
                "
                style="align-items: center"
            >
                <img
                    class="w-5 h-5 ml-3 mr-4"
                    src="../assets/images/user1.png"
                    alt=""
                />
                Khách hàng
                <div
                    class="
                        absolute
                        bg-[#5388BB]
                        w-full
                        h-auto
                        top-[30%]
                        left-[100%]
                        rounded
                        hidden
                    "
                    id="submenu-customer"
                >
                    <div class="submenu-item">Danh sách nhân viên</div>
                    <div class="submenu-item">Biểu đồ nhân viên</div>
                    <div class="submenu-item">Thống kê</div>
                </div>
            </div>
            <div
                class="
                    sidebar-item
                    h-12
                    pl-3
                    text-base
                    font-normal
                    text-center text-white
                    flex
                    relative
                "
                style="align-items: center"
                @click="emitter.emit('clickProject')"
            >
                <img
                    class="w-5 h-5 ml-3 mr-4"
                    src="../assets/images/product.png"
                    alt=""
                />
                Dự án
                <!-- <div
                    class="
                        absolute
                        bg-[#5388BB]
                        w-full
                        h-auto
                        top-[30%]
                        left-[100%]
                        rounded
                        hidden
                    "
                    id="submenu-product"
                >
                    <div class="submenu-item">Danh sách nhân viên</div>
                    <div class="submenu-item">Biểu đồ nhân viên</div>
                    <div class="submenu-item">Thống kê</div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.emitter.on("clickTogle", () => {
            this.isTogle = !this.isTogle;
        });
    },
    data() {
        return {
            isTogle: true,
        };
    },
};
</script>

<style scoped>
.sidebar-item {
}
.sidebar-item:hover {
    background-color: #6271ff;
    cursor: pointer;
}
.submenu-item {
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 12px;
    border-bottom: 1px solid gray;
}
.submenu-item:nth-child(3) {
    border-bottom: 4px;
}
.submenu-item:hover {
    background-color: #579aff;
    border-radius: 4px;
}
.sidebar-item:hover #submenu-employee {
    display: inline;
}
.sidebar-item:hover #submenu-customer {
    display: inline;
}
.sidebar-item:hover #submenu-product {
    display: inline;
}
</style>
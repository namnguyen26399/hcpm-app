<template>
    <div
        v-if="isTogle"
        class="w-1/6 h-screen border-r-[1px]"
        style="background-color: #ffff"
    >
        <div id="logo" class="cursor-pointer" @click="clickHome">
            <img
                class="w-[110px] h-[45px] mx-auto mt-2 mb-2"
                src=".././assets/images/logo.png"
                alt=""
            />
        </div>
        <div class="h-[85%]" style="background-color: #ffff">
            <div
                @click="employeeSubmenu"
                class="
                    sidebar-item
                    h-12
                    pl-3
                    text-base
                    font-normal
                    text-center text-black
                    flex
                    relative
                "
                style="align-items: center"
            >
                <img
                    class="w-5 h-5 ml-3 mr-4"
                    src="../assets/images/user.png"
                    alt=""
                />
                Nhân viên
                <img class="ml-16" src="../assets/images/down.png" alt="" />
            </div>
            <div
                id="submenu-employee"
                class="bg-[#ffff] w-full h-auto rounded hidden"
            >
                <div @click="emitter.emit('clickList')" class="submenu-item">
                    Danh sách nhân viên
                </div>
                <div @click="emitter.emit('clickStaff')" class="submenu-item">
                    Biểu đồ nhân viên
                </div>
                <div class="submenu-item">Thống kê</div>
            </div>
            <div
                class="
                    sidebar-item
                    h-12
                    pl-3
                    text-base
                    font-normal
                    text-center
                    flex
                    relative
                "
                style="align-items: center"
            >
                <img
                    class="w-5 h-5 ml-3 mr-4"
                    src="../assets/images/user.png"
                    alt=""
                />
                Khách hàng
            </div>
            <div
                class="
                    sidebar-item
                    h-12
                    pl-3
                    text-base
                    font-normal
                    text-center
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
            num: 0,
        };
    },
    methods: {
        employeeSubmenu() {
            if (this.num % 2 == 0) {
                document.getElementById("submenu-employee").style.display =
                    "block";
                this.num++;
            } else {
                document.getElementById("submenu-employee").style.display =
                    "none";
                this.num++;
            }
        },
        clickHome() {
            window.open("http://localhost:3000/home", "_self");
        },
    },
};
</script>

<style scoped>
.sidebar-item {
    border-bottom: 1px solid gray;
}
.sidebar-item:nth-child(1){
    border-top: 1px solid gray;
}
.sidebar-item:hover {
    background-color: #e6e6e6;
    cursor: pointer;
}
.submenu-item {
    background: rgb(243, 243, 243);
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding-left: 12px;
    border-bottom: 1px solid gray;
    padding-right: 24px;
}
.submenu-item:nth-child(1) {
}
.submenu-item:hover {
    background-color: #d6d6d6;
    border-radius: 4px;
    cursor: pointer;
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

div {
    font-size: 16px;
    font-weight: 600;
}
</style>
<template>
    <div id="Login-form" class="w-[500px] min-h-[350px] mx-auto mt-[50px]">
        <div>
            <img class="mx-auto w-[160px] h-[70px] mb-3" src="../assets/images/logo.png" alt="">
        </div>
        <div id="Login-mode" class="w-[90%] h-[50px] bg-slate-300 flex mx-auto">
            <div
                id="Login"
                class="
                    mode
                    w-1/2
                    border-r-[1px]
                    text-center text-base
                    font-medium
                    pt-3
                "
                @click="LoginMode"
            >
                Đăng nhập
            </div>
            <div
                id="Regis"
                class="mode w-1/2 text-center text-base font-medium pt-3"
                @click="RegisMode"
            >
                Đăng ký
            </div>
        </div>
        <!-- //? Regis content -->

        <div
            v-if="isLogin"
            id="Login-content"
            class="flex flex-col justify-items-center"
        >
            <input
                type="text"
                name=""
                id=""
                class="w-[90%] border-[2px] h-[40px] mx-auto mt-20 pl-3 rounded"
                placeholder="Tên đăng nhập"
            />
            <input
                type="password"
                name=""
                id=""
                class="w-[90%] border-[2px] h-[40px] mx-auto mt-5 pl-3 rounded"
                placeholder="Mật khẩu"
            />
            <a
                class="
                    text-blue-600 text-xs text-right
                    mt-2
                    mr-10
                    cursor-pointer
                "
                >Quên mật khẩu ?</a
            >
            <button
                class="w-[90%] h-[40px] bg-red-600 mx-auto mt-5 rounded mb-10"
                @click="LoginEvent"
            >
                Đăng nhập
            </button>
        </div>
        <!-- //? Regis content -->
        <div
            v-if="isRegis"
            id="Regis-content"
            class="flex flex-col justify-items-center"
        >
            <input
                type="text"
                name=""
                id=""
                class="w-[90%] border-[2px] h-[40px] mx-auto mt-20 pl-3 rounded"
                placeholder="Tên đăng nhập"
            />
            <input
                type="text"
                name=""
                id=""
                class="w-[90%] border-[2px] h-[40px] mx-auto mt-5 pl-3 rounded"
                placeholder="Email"
            />
            <input
                type="text"
                name=""
                id=""
                class="w-[90%] border-[2px] h-[40px] mx-auto mt-5 pl-3 rounded"
                placeholder="Số điện thoại"
            />
            <input
                type="text"
                name=""
                id=""
                class="w-[90%] border-[2px] h-[40px] mx-auto mt-5 pl-3 rounded"
                placeholder="Mật khẩu"
            />

            <button
                class="w-[90%] h-[40px] bg-red-600 mx-auto mt-5 rounded mb-10"
            >
                Đăng ký
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        LoginMode() {
            this.isLogin = true;
            this.isRegis = false;
            document.getElementById("Login").style.borderBottom =
                "3px solid rgb(36, 204, 255) ";
            document.getElementById("Login").style.backgroundColor =
                "#C9D5E1";
            document.getElementById("Regis").style.borderBottom = "none";
            document.getElementById("Regis").style.backgroundColor = "#EEEEEB";
        },
        RegisMode() {
            this.isLogin = false;
            this.isRegis = true;
            document.getElementById("Regis").style.borderBottom =
                "3px solid rgb(36, 204, 255) ";
            document.getElementById("Regis").style.backgroundColor =
                "#C9D5E1";
            document.getElementById("Login").style.borderBottom = "none";
            document.getElementById("Login").style.backgroundColor = "#EEEEEB";
        },
        LoginEvent() {
            window.open("http://localhost:3000/home", "_self");
        },
    },
    data() {
        return {
            isLogin: true,
            isRegis: false,
        };
    },
};
</script>

<style scoped>
.mode:hover {
    cursor: pointer;
}
input:focus {
    outline: none;
    border: 2px solid rgb(137, 212, 241);
}
#Login {
    border-bottom: 3px solid rgb(36, 204, 255); 
}
#Regis{
    background-color: #EDEEE8;
}
</style>
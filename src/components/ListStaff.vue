<template>
    <div class="w-full h-[578px] bg-green-300" style="border: 12px solid gray; border-right: none">
        <div class="employee-list scroll h-full bg-blue-500 overflow-y-scroll" id="scroll">
            <table border="0" cellspacing="0" cellpadding="0">
                <thead class="theadRow">
                    <tr>
                        <th>
                        </th>
                        <th>Mã nhân viên</th>
                        <th>Ảnh</th>
                        <th>Tên nhân viên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Ngày vào</th>
                        <th>Tuổi</th>
                        <th>Bộ phận</th>
                        <th style="z-index: 1">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(staff, index) in staffs" :key="staff.id" @dblclick="rowOnDblClick(staff)">
                        <td>
                            <span><input id="$staff.id" @click="check(index)" type="checkbox" class="checked-box" /> </span>
                        </td>
                        <td>{{ staff.id }}</td>
                        <td><img class="w-10 h-10 rounded-[100%] mx-auto" :src="staff.imglink" alt="" /></td>
                        <td>{{ staff.name }}</td>
                        <td>{{ staff.phone }}</td>
                        <td>{{ staff.email }}</td>
                        <td>15/12/2014</td>
                        <td>{{ staff.age }}</td>
                        <td>Tester</td>
                        <td style="height: 40px; position: relative">
                            <p style="text-align: left; padding-left: 0px; color: blue">Sửa</p>
                            <button style="" class="btn-more-option" @click="more(index)"></button>
                            <button @click="del(staff)" class="delete" style="">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    created() {
        this.getData();
    },
    data() {
        return {
            staffs: [],
        };
    },
    methods: {
        getData() {
            var me = this;

            axios.get("https://61d573892b4f730017a82847.mockapi.io/api/nguyensynam/v1/staff").then(function (res) {
                me.staffs = res.data;
            });
        },
    },
};
</script>

<style scoped>
.employee-list {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 0, 0);
    position: relative;
}

th {
    background-color: #eceef1;
    border: none;
    border-right: 1px solid rgb(218, 218, 218);
    border-bottom: 1px solid rgb(218, 218, 218);
    border-top: 1px solid rgb(218, 218, 218);
    font-size: 13px;
    height: 40px;
    z-index: 1;
    text-align: center;
}

tr td {
    border: none;
    border-right: 1px solid rgb(218, 218, 218);
    text-align: center;
    height: 40px;
}

thead th:nth-child(1) {
    width: 42px;
}

thead th:nth-child(2) {
    width: 110px;
}

thead th:nth-child(3) {
    width: 110px;
}

thead th:nth-child(4) {
    width: 170px;
}

thead th:nth-child(5) {
    width: 110px;
}

thead th:nth-child(6) {
    width: 210px;
}

thead th:nth-child(7) {
    width: 110px;
}

thead th:nth-child(8) {
    width: 60px;
}
thead th:nth-child(9) {
    width: 120px;
}
thead th:nth-child(10) {
    width: 80px;
}

table {
    border-left: 1px solid rgb(218, 218, 218);
}

table tr td {
    border-bottom: 1px solid rgb(218, 218, 218);
}

span input {
    width: 20px;
    height: 20px;
}

tr {
    font-size: 12px;
}

tr:nth-child(2n) {
    background-color: #eceef1;
}

.theadRow {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 5;
}

tr td:hover {
    cursor: pointer;
}
  .btn-more-option {
        width: 30px;
        height: 20px;
        background: url(../.././assets/Sprites.64af8f61.svg) no-repeat;
        background-position: -890px -358px;
        margin-left: 10px;
        border: none;
        z-index: 2;
        position: absolute;
        right: 8px;
        top: 8px;
    }
    .delete {
        width: 94px;
        height: 36px;
        background-color: #eceeef;
        position: absolute;
        border: 1px solid #c0c0c0;
        z-index: 3;
        bottom: -30px;
        left: -10px;
        border-radius: 4px;
        display: none;
    }

</style>

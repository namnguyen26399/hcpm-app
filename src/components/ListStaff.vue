<template>
    <div class="staff">
        <div class="d-flex justify-content-between">
            <div class="">
                <button class="btn btn-outline-secondary">Import</button>
                <button class="btn btn-outline-secondary ms-3">Export</button>
            </div>
            <div class="input-group search">
                <input type="text" class="form-control" placeholder="Tìm khiếm...">
                <button class="btn btn-outline-secondary search-text" type="button"><i class="fa fa-search"></i></button>
            </div>
        </div>

        <table class="table">
            <tr class="table-heading">
                <th class="table-title">Mã</th>
                <th class="table-title">Ảnh</th>
                <th class="table-title">Họ và tên</th>
                <th class="table-title">Số điện thoại</th>
                <th class="table-title">Email</th>
                <th class="table-title">Tuổi</th>
                <th class="table-title">Bộ phận</th>
                <th class="table-title action">Action</th>
            </tr>
            <tr 
              v-for="staff in staffs" :key="staff.id" 
              style="border-top: 1px solid #8080808c; font-size: 14px"
            >
                <td class="table-content"> {{ staff.code }} </td>
                <td class="table-content"> {{ staff.image }} </td>
                <td class="table-content"> {{ staff.name }} </td>
                <td class="table-content"> {{ staff.phone }} </td>
                <td class="table-content"> {{ staff.mail }} </td>
                <td class="table-content"> {{ staff.age }} </td>
                <td class="table-content"> {{ staff.lang }} </td>
                <td class="table-content action"> {{ staff.action }} </td>
            </tr>
        </table>

        <div class="text-right">
            <nav class="text-right">
                <ul class="pagination">
                  <li class="page-item">
                   <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                   </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            staffs : [
                {
                    id: 0,
                    code: 'NV0001',
                    image: "",
                    name: 'nam',
                    phone: 19008098,
                    mail: 'a@gmail.com',
                    age: 18,
                    lang: 'Java',
                    action: 'Edit',
                },
                {
                    id: 1,
                    code: 'NV0001',
                    image: "",
                    name: 'nam',
                    phone: 19008098,
                    mail: 'a@gmail.com',
                    age: 18,
                    lang: 'Java',
                    action: 'Edit',
                },
                {
                    id: 2,
                    code: 'NV0001',
                    image: "",
                    name: 'nam',
                    phone: 19008098,
                    mail: 'a@gmail.com',
                    age: 18,
                    lang: 'Java',
                    action: 'Edit',
                },
            ]
        }
    }
}
</script>
<style>
@import "../assets/scss/_staff.scss";
</style>
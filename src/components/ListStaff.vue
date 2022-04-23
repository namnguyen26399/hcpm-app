<template>
    <div class="staff">
        <div class="d-flex justify-content-between">
            <div class="">
                <button class="btn btn-outline-secondary">Import</button>
                <button class="btn btn-outline-secondary ms-3">Export</button>
            </div>
            <div class="d-flex">
                <div class="input-group search me-3">
                    <input type="text" class="form-control" placeholder="Tìm kiếm...">
<!--                    <button class="btn btn-outline-secondary search-text" type="button">
                          <i class="fa fa-search"></i>
                    </button>-->
                </div>
                <AddStaff @addNewStaff="dataOfStaff"/>
            </div>
            
        </div>

        <table class="table" v-if="this.staffs.length">
            <tr class="table-heading row w-100 m-0">
                <th class="table-title col-1">Mã</th>
                <th class="table-title col-2">Ảnh</th>
                <th class="table-title col-2">Họ và tên</th>
                <th class="table-title col-1">Tuổi</th>
                <th class="table-title col-2">Số điện thoại</th>
                <th class="table-title col-2">Bộ phận</th>
                <th class="table-title action col-2">Action</th>
            </tr>
          <tr
              v-for="staff in staffs"
              :key="staff.id"
              style="border-top: 1px solid #8080808c; font-size: 14px"
              class="row m-0"
          >
            <td class="table-content col-1"> {{ staff.code }} </td>
            <td class="table-content col-2"> {{ staff.image }} </td>
            <td class="table-content col-2"> {{ staff.name }} </td>
            <td class="table-content col-1"> {{ staff.age }} </td>
            <td class="table-content col-2"> {{ staff.phone }} </td>
            <td class="table-content col-2"> {{ staff.lang }} </td>
            <td class="table-content action col-2"> <a href="#">Edit</a> </td>
          </tr>
        </table>

        <div class="text-center mt-5 mb-5" v-else>
          <h5 class="not-staff">Hiện tại chưa có nhân viên nào!</h5>
        </div>

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
import AddStaff from './AddStaff.vue'
export default {
    components: {
        AddStaff
    },
    data() {
        return {
            staffs : [],
        }
    },
  methods: {
    dataOfStaff(item) {
      this.staffs === this.staffs.unshift(item)
      this.staffs.lang = item.lang
      this.staffs.time = item.time
    }
  }
}
</script>
<style>
@import "../assets/scss/_staff.scss";
</style>
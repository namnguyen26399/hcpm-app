<template>
    <div class="staff">
        <div class="d-flex justify-content-between">
            <div class="">
                <button class="btn btn-outline-secondary">Import</button>
                <button class="btn btn-outline-secondary ms-3">Export</button>
            </div>
            <div class="d-flex">
                <div class="input-group search me-3">
                    <input type="text" class="form-control" placeholder="Tìm kiếm..." />
                    <!--                    <button class="btn btn-outline-secondary search-text" type="button">
                          <i class="fa fa-search"></i>
                    </button>-->
                </div>
                <AddStaff @addNewStaff="dataOfStaff" />
            </div>
        </div>


        <div class="table-box">
          <div class="table mb-0" v-if="this.staffs.length">
            <div class="table-heading fw-bold row w-100 m-0">
              <div class="table-title col-1">Mã</div>
              <div class="table-title col-1">Ảnh</div>
              <div class="table-title col-3">Họ và tên</div>
              <div class="table-title col-1">Tuổi</div>
              <div class="table-title col-2">Số điện thoại</div>
              <div class="table-title col-2">Bộ phận</div>
              <div class="table-title action col-2">Action</div>
            </div>
            <div
                class="table-item row m-0"
                v-for="staff in staffs"
                :key="staff.id"
                style="border-top: 1px solid #8080808c; font-size: 14px; align-items: center"
            >
              <div class="table-content col-1">HN{{ staff.id }}</div>
              <div class="table-content col-1">
                <div class="avatar-staff border-bottom-0 p-0">
                  <img class="w-100" :src="staff.imglink" alt="" />
                </div>
              </div>
              <div class="table-content col-3">{{ staff.name }}</div>
              <div class="table-content col-1">{{ staff.age }}</div>
              <div class="table-content col-2">{{ staff.phone }}</div>
              <div class="table-content col-2">{{ staff.lang }}</div>
              <div class="table-content action col-2">
                <a
                    href="#"
                    @click="showDetailStaff(id)"
                    class="border-bottom-0 icon-action-staff p-0 me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#editStaff"
                >
                  <img src="../assets/images/edit.png" class="w-100">
                </a>
                <a
                    href="#"
                    class="border-bottom-0 icon-action-staff p-0"
                    data-bs-toggle="modal"
                    data-bs-target="#removeStaff"
                >
                  <img src="../assets/images/bin.png" class="w-100">
                </a>
              </div>
              <!-- modal confirm delete staff -->
              <div class="modal fade" id="removeStaff" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog border-bottom-0">
                  <div class="modal-content modal-sm m-auto">
                    <div class="modal-header border-bottom-0">
                      <h5 class="modal-title">Thông báo</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p class="mb-0">Bạn có chắc chắn muốn xóa nhân viên này?</p>
                    </div>
                    <div class="modal-footer border-top-0">
                      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Hủy</button>
                      <button
                          type="button"
                          class="btn btn-success btn-sm"
                          data-bs-dismiss="modal"
                          @click="deleteStaff(staff)"
                      >
                        Đồng ý
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- modal edit staff -->
              <div class="modal fade" id="editStaff" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content modal-add-staff">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Chỉnh sửa thông tin nhân viên</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="text-center">
                        <label class="form-label">Ảnh đại diện</label>
                        <div class="avatar m-auto">
                          <img class="w-100" src="../assets/images/avatar.png" alt="avatar" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 col-sm-12">
                          <div class="form">
                            <label class="form-label mb-0">Họ và tên</label>
                            <input
                                type="text"
                                class="form-control fs-14 mt-1"
                                placeholder="Ví dụ: Nguyễn Văn A"
                                v-model="staff.name"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                          <div class="form">
                            <label class="form-label mb-0">Tuổi</label>
                            <input
                                type="text"
                                class="form-control fs-14 mt-1"
                                placeholder="Nhập tuổi (18 - 35)"
                                v-model="staff.age"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 col-sm-12">
                          <div class="form">
                            <label class="form-label mb-0">Số điện thoại</label>
                            <input
                                type="text"
                                class="form-control fs-14 mt-1"
                                placeholder="Nhập số điện thoại"
                                v-model="staff.phone"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                          <div class="form">
                            <label class="form-label mb-0">Email</label>
                            <input
                                type="text"
                                class="form-control fs-14 mt-1"
                                placeholder="Nhập email"
                                v-model="staff.email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 col-sm-12">
                          <div class="form">
                            <label class="form-label mb-0">Địa chỉ</label>
                            <input
                                type="text"
                                class="form-control fs-14 mt-1"
                                placeholder="Nhập địa chỉ"
                                v-model="staff.address"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                          <div class="form">
                            <label class="form-label mb-0">Thời gian tuyển</label>
                            <input type="date" class="form-control fs-14 mt-1" v-model="staff.time"/>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 col-sm-12">
                          <div class="form">
                            <label class="form-label mb-0">Bộ phận</label>
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-12"></div>
                      </div>
                      <div class="form">
                        <label class="form-label mb-0">Thông tin thêm</label>
                        <textarea class="form-control fs-14 mt-1" row="8"></textarea>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                      <button type="button" class="btn btn-success">Lưu</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="text-center mt-5 mb-5" v-else>
            <h5 class="not-staff">Hiện tại chưa có nhân viên nào!</h5>
          </div>
        </div>



    </div>
</template>
<script>
import axios from "axios";
import AddStaff from "./AddStaff.vue";
export default {
    created() {
        this.getData();
    },
    components: {
        AddStaff,
    },
    data() {
        return {
            isShowDetail: false,
            staffs: [],
        };
    },
    methods: {
        dataOfStaff(item) {
            this.staffs.unshift(item);
        },
        deleteStaff(staff) {
            var url = "https://61d573892b4f730017a82847.mockapi.io/api/nguyensynam/v1/staff/" + staff.id;
            axios.delete(url).then(function (res) {
                console.log("delete done");
                this.reloadData();
            });
        },
        showDetailStaff(id) {},
        hideStaffDetail() {
            this.isShowDetail = false;
        },

        getData() {
            var me = this;

            axios.get("https://61d573892b4f730017a82847.mockapi.io/api/nguyensynam/v1/staff").then(function (res) {
                me.staffs = res.data;
                me.staffs.forEach((item) => {
                    item.imglink = "https://qc-static.coccoc.com/a-images/46f/74b/46f74b9349efa9d711a8bca673444d2448da417ba53e51ee41eee3fe22d56390.jpg";
                });
                console.log("hello world");
            });
        },
        reloadData() {
            this.getData;
        },
    },
};
</script>
<style>
@import "../assets/scss/_staff.scss";
</style>

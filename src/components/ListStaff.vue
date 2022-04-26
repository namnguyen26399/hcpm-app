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
          <div class="table" v-if="this.staffs.length">
            <div class="table-heading row w-100 m-0">
              <div class="table-title col-1">Mã</div>
              <div class="table-title col-2">Ảnh</div>
              <div class="table-title col-2">Họ và tên</div>
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
              <div class="table-content col-1">{{ staff.id }}</div>
              <div class="table-content col-2">
                <div class="avatar-staff border-bottom-0">
                  <img class="w-100" :src="staff.imglink" alt="" />
                </div>
              </div>
              <div class="table-content col-2">{{ staff.name }}</div>
              <div class="table-content col-1">{{ staff.age }}</div>
              <div class="table-content col-2">{{ staff.phone }}</div>
              <div class="table-content col-2">{{ staff.lang }}</div>
              <div class="table-content action col-2">
                <a href="#" @click="showDetailStaff(id)" class="border-bottom-0">Chi tiết</a>
                <a href="#" @click="deleteStaff(staff)" class="border-bottom-0">Xóa </a>
              </div>
              <!--              <td class="table-content staff-detail w-100" v-if="isShowDetail">
                              <div class="row border-bottom-0">
                                <div class="col-3">
                                  <div class="avatar">
                                    <img class="w-100" src="../assets/images/avatar.png" alt="avatar" />
                                  </div>
                                </div>
                                <div class="col-9">
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <p>
                                        <span class="fw-bold">Họ và tên:</span>
                                        {{ staff.name }}
                                      </p>
                                      <p>
                                        <span class="fw-bold">Số điện thoại:</span>
                                        {{ staff.phone }}
                                      </p>
                                      <p>
                                        <span class="fw-bold">Email:</span>
                                        {{ staff.email }}
                                      </p>
                                      <p>
                                        <span class="fw-bold">Địa chỉ:</span>
                                        {{ staff.address }}
                                      </p>
                                    </div>
                                    <div class="col-lg-6">
                                      <p>
                                        <span class="fw-bold">Tuổi:</span>
                                        {{ staff.age }}
                                      </p>
                                      <p>
                                        <span class="fw-bold">Mã nhân viên:</span>
                                        HN{{ staff.id }}
                                      </p>
                                      <p>
                                        <span class="fw-bold">Bộ phận:</span>
                                        {{ staff.lang }}
                                      </p>
                                      <p>
                                        <span class="fw-bold">Thời gian tuyển:</span>
                                        {{ staff.time }}
                                      </p>
                                    </div>
                                    <p>
                                      <span class="fw-bold">Thông tin khác:</span>
                                      {{ staff.moreInfo }}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex justify-content-end border-bottom-0">
                                <button class="btn btn-secondary btn-sm" @click="hideStaffDetail">Đóng</button>
                                <button type="button" class="btn btn-primary btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#editStaff" @click="editStaff">Chỉnh sửa</button>
                                &lt;!&ndash;Modal edit&ndash;&gt;
                                <div class="modal fade" id="editStaff" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-xl">
                                    <div class="modal-content modal-add-staff">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                                              <input type="text" class="form-control fs-14 mt-1" placeholder="Ví dụ: Nguyễn Văn A" />
                                            </div>
                                          </div>
                                          <div class="col-lg-6 col-sm-12">
                                            <div class="form">
                                              <label class="form-label mb-0">Tuổi</label>
                                              <input type="text" class="form-control fs-14 mt-1" placeholder="Nhập tuổi (18 - 35)" />
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-lg-6 col-sm-12">
                                            <div class="form">
                                              <label class="form-label mb-0">Số điện thoại</label>
                                              <input type="text" class="form-control fs-14 mt-1" placeholder="Nhập số điện thoại" />
                                            </div>
                                          </div>
                                          <div class="col-lg-6 col-sm-12">
                                            <div class="form">
                                              <label class="form-label mb-0">Email</label>
                                              <input type="text" class="form-control fs-14 mt-1" placeholder="Nhập email" />
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-lg-6 col-sm-12">
                                            <div class="form">
                                              <label class="form-label mb-0">Địa chỉ</label>
                                              <input type="text" class="form-control fs-14 mt-1" placeholder="Nhập địa chỉ" />
                                            </div>
                                          </div>
                                          <div class="col-lg-6 col-sm-12">
                                            <div class="form">
                                              <label class="form-label mb-0">Thời gian tuyển</label>
                                              <input type="date" class="form-control fs-14 mt-1" />
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
                            </td>-->
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

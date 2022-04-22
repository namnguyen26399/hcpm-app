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

        <table>
            <tr>
                <th>name</th>
                <th>name</th>
                <th>name</th>
            </tr>
            <tr v-for="staff in staffs" :key="staff.id">
                <td>{{  staff.name }}</td>
                <td>{{  staff.age }}</td>
                <td>{{  staff.male }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            staffs : [
                {
                    id: 0,
                    name: 'nam',
                    age: 19,
                    male: 'male'
                },
                {
                    id: 1,
                    name: 'nam',
                    age: 19,
                    male: 'male'
                },
                {
                    id: 1,
                    name: 'nam',
                    age: 19,
                    male: 'male'
                }
            ]
        }
    }
}
</script>
<style>
@import "../assets/scss/_staff.scss";
</style>
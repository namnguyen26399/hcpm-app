<template>
    <div class="staff">
        <div class="row">
            <div class="col-6">
             <div class="chart text-center">
                 content
                 <div class="descriotion">
                     <p class="mb-0">Biểu đồ nhân viên theo bộ phận</p>
                 </div>
             </div>
            </div>

        <div class="col-6">
            <div class="chart">
                <select class="form-select select-language">
                    <option :value="option" v-for="(option, index) in language" :key="index">{{ option }}</option>
                </select>
                    

                 <div class="text-center">content</div>
                 <div class="descriotion">
                     <p class="mb-0">Line Chart</p>
                 </div>
             </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            language: [ 'Java', 'Reactjs', 'Angular',  'Manual test', 'Automation test', '.net']
        }
    }
}
</script>
<style>
@import "../assets/scss/_staff.scss";
</style>
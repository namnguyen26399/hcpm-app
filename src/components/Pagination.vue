<template >
    <div class="bg-slate-50 " style="border-bottom: 12px solid #F3F4F4;">
        <div class="pagination mx-auto w-fit">
            <a href="#">«</a>
            <a href="#">1</a>
            <a class="active" href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">»</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* thiết lập style cho thẻ a */
.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border-radius: 100%;
}
/* thiết lập style cho class active */
.pagination a.active {
    background-color: dodgerblue;
    color: white;
}
/* thêm màu nền khi người dùng hover vào class không active */
.pagination a:hover:not(.active) {
    background-color: #ddd;
}
</style>
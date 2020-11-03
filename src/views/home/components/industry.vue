<template>
    <!--行业情况-->
    <div class="industry-wrapper">
        <div class="top">
            <span>TOP3</span>
            <span> >> </span>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .industry-wrapper{
        background-image: url("../../../assets/con-item-bg1.png");
        background-size: 100% 100%;
        width: 204px;
        .top{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #00e3fc;
        }
    }
</style>

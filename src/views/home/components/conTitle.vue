<template>
    <div class="title-wrapper">
        <span>{{ title }}</span>
        <img src="../../../assets/con-title-bg.png">
    </div>
</template>
<script>
    export default {
        props: {
            title: String
        },
        data () {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .title-wrapper{
        display: flex;
        align-items: center;
        color: #ffbe30;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 10px;
        span{
            position: relative;
            box-sizing: border-box;
            padding: 0 10px 0 20px;
        }
        span::before{
            content: '';
            width: 2px;
            height: 17px;
            position: absolute;
            background: #ffbe30;
            left: 0;
        }
        img{
            height: 12px;
            display: flex;
        }
    }
</style>

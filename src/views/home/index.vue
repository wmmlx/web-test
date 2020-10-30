<template>
    <div class="home-wrapper">
        <top></top>
        <div class="content">
            <div class="t">
                <flash-cloud></flash-cloud>
            </div>
            <div class="b">
                <dynamic-list></dynamic-list>
                <circle-runway></circle-runway>
            </div>
        </div>
    </div>
</template>
<script>
    import top from './components/top'
    import dynamicList from "./components/dynamicList"
    import flashCloud from "./components/flashCloud"
    import circleRunway from "./components/circleRunway"
    export default {
        data () {
            return {}
        },
        components: {
            top,
            flashCloud,
            dynamicList,
            circleRunway
        }
    }

</script>
<style lang="scss" scoped>
    .home-wrapper{
        width: 100%;
        height: 100%;
        background-image: url("../../assets/page-bg.png");
        background-size: cover;
        background-position: center center;
        background-color: #000;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;
        .content{
            flex: 1;
            width: 100%;
            overflow: hidden;
            .t, .b{
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>

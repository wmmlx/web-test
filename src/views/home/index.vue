<template>
    <div class="home-wrapper">
        <top></top>
        <div class="content">
            <div class="t">
                <flash-cloud></flash-cloud>
                <c-map></c-map>
            </div>
            <div class="b">
                <dynamic-list></dynamic-list>
                <circle-runway></circle-runway>
                <scroll-list></scroll-list>
            </div>
        </div>
    </div>
</template>
<script>
    import top from './components/top'
    import dynamicList from "./components/dynamicList"
    import flashCloud from "./components/flashCloud"
    import circleRunway from "./components/circleRunway"
    import scrollList from "./components/scrollList"
    import cMap from "./components/map"
    export default {
        data () {
            return {}
        },
        components: {
            top,
            flashCloud,
            dynamicList,
            circleRunway,
            scrollList,
            cMap
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
            display: flex;
            flex-direction: column;
            overflow: hidden;
            .t, .b{
                width: 100%;
                display: flex;
            }
            .t{
                flex: 1;
            }
            .b{
                background-image: url("../../assets/border-bg.png");
                background-size: 100% 100%;
                box-sizing: border-box;
                padding: 10px;
            }
        }
    }
</style>

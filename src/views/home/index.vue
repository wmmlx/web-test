<template>
    <div class="home-wrapper">
        <top></top>
        <div class="content">
            <div class="t">
                <div class="l">
                    <con-title title="行业情况"></con-title>
                    <industry></industry>
                </div>
                <c-map></c-map>
                <div class="r">
                    <div>
                        <con-title title="测评情况"></con-title>
                        <situation></situation>
                    </div>
                    <div class="evaluation-wrapper">
                        <con-title title="测评概览"></con-title>
                        <evaluation></evaluation>
                    </div>
                </div>
            </div>
            <div class="b">
                <div class="l">
                    <con-title title="实时问题情况"></con-title>
                    <scroll-list></scroll-list>
                </div>
                <div>
                    <con-title title="等级占比"></con-title>
                    <dynamic-list></dynamic-list>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import top from './components/top'
    import dynamicList from "./components/dynamicList"
    import scrollList from "./components/scrollList"
    import cMap from "./components/map"
    import conTitle from "./components/conTitle"
    import industry from "./components/industry"
    import evaluation from "./components/evaluation"
    import situation from "./components/situation"
    export default {
        data () {
            return {}
        },
        components: {
            top,
            dynamicList,
            scrollList,
            cMap,
            conTitle,
            industry,
            evaluation,
            situation
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
        padding: 0 10px 10px;
        .content{
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            .t, .b{
                width: 100%;
                display: flex;
            }
            .t{
                flex: 1;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .l{
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .r{
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    .evaluation-wrapper{
                        flex: 1;
                        margin-top: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                }
            }
            .b{
                margin-top: 15px;
                height: 290px;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .l{
                    flex: 1;
                    margin-right: 10px;
                }
                >div{
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
            }
        }
    }
</style>

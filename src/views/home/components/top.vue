<template>
    <div class="top-wrapper">
        <div class="t">
            <img class="l" src="../../../assets/header-bg-l1.svg">
            <div class="center">
                <img src="../../../assets/header-bg-l2.svg">
                <span>大数据可视化平台</span>
                <img src="../../../assets/header-bg-r1.svg">
            </div>
            <img class="r" src="../../../assets/header-bg-l1.svg">
        </div>
        <div class="b">
            <img src="../../../assets/header-bg-c.svg">
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
    .top-wrapper{
        width: 100%;
        .t{
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            .l, .r{
                width: 33.3%;
                display: flex;
            }
            .r{
                transform: rotateY(180deg);
            }
            .center{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                color: #fff;
                font-size: 15px;
                img{
                    flex: 1;
                    height: 30px;
                    display: flex;
                }
                span{
                    box-sizing: border-box;
                    padding: 0 30px;
                }
            }
        }
        .b{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 300px;
                display: flex;
            }
        }
    }
</style>

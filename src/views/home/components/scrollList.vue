<template>
    <div class="list-wrapper">
        <div class="table-item table-title">
            <span>年份</span>
            <span>所属单位</span>
            <span>行业</span>
            <span>区域</span>
            <span>保护等级</span>
            <span>系统名称</span>
            <span>备案机构</span>
            <span>分数</span>
        </div>
        <vue-seamless-scroll :data="listData" :class-option="classOption" class="seamless-warp">
            <ul>
                <li v-for="(item, i) in listData" :key="i" class="table-item">
                    <span>{{ item.time }}</span>
                    <span>{{ item.unit }}</span>
                    <span>{{ item.industry }}</span>
                    <span>{{ item.area }}</span>
                    <span>{{ item.type }}</span>
                    <span>{{ item.sysName }}</span>
                    <span>{{ item.agency }}</span>
                    <span>{{ item.num }}</span>
                </li>
            </ul>
        </vue-seamless-scroll>
    </div>
</template>
<script>
    import vueSeamlessScroll from 'vue-seamless-scroll'
    export default {
        data () {
            return {
                listData: [{
                    time: '2020',
                    unit: '贵阳移动',
                    industry: '通信',
                    area: '贵阳市',
                    type: '三级',
                    sysName: 'OA系统',
                    agency: '贵阳市公安局',
                    num: 46
                }, {
                    time: '2020',
                    unit: '贵阳移动',
                    industry: '通信',
                    area: '贵阳市',
                    type: '三级',
                    sysName: 'OA系统',
                    agency: '贵阳市公安局',
                    num: 46
                }, {
                    time: '2020',
                    unit: '贵阳移动',
                    industry: '通信',
                    area: '贵阳市',
                    type: '三级',
                    sysName: 'OA系统',
                    agency: '贵阳市公安局',
                    num: 46
                }, {
                    time: '2020',
                    unit: '贵阳移动',
                    industry: '通信',
                    area: '贵阳市',
                    type: '三级',
                    sysName: 'OA系统',
                    agency: '贵阳市公安局',
                    num: 46
                }, {
                    time: '2020',
                    unit: '贵阳移动',
                    industry: '通信',
                    area: '贵阳市',
                    type: '三级',
                    sysName: 'OA系统',
                    agency: '贵阳市公安局',
                    num: 46
                }, {
                    time: '2020',
                    unit: '贵阳移动',
                    industry: '通信',
                    area: '贵阳市',
                    type: '三级',
                    sysName: 'OA系统',
                    agency: '贵阳市公安局',
                    num: 46
                }, {
                    time: '2020',
                    unit: '贵阳移动',
                    industry: '通信',
                    area: '贵阳市',
                    type: '三级',
                    sysName: 'OA系统',
                    agency: '贵阳市公安局',
                    num: 46
                }]
            }
        },
        computed: {
            classOption () {
                return {
                    direction: 1,
                    step: 1,
                    singleHeight: 90,
                    waitTime: 2000
                }
            }
        },
        components: {
            vueSeamlessScroll
        }
    }
</script>
<style lang="scss" scoped>
    .list-wrapper{
        width: 100%;
        flex: 1;
        box-sizing: border-box;
        padding: 15px;
        background-image: url("../../../assets/con-item-bg2.png");
        background-size: 100% 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        color: #0096ff;
        .seamless-warp{
            flex: 1;
            overflow: hidden;
            width: 100%;
        }
        .table-title{
            color: #00e3fc;
        }
        ul{
            height: 100%;
            margin: 0;
            padding: 0;
            width: 100%;
        }
        li{
            margin: 0;
            padding: 0;
            list-style: none;
            width: 100%;
        }
        .table-item{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            span{
                box-sizing: border-box;
                padding: 10px;
                word-break: break-all;
            }
        }
        .seamless-warp span:last-child{
            color: #ffbe30;
        }
    }
</style>

<template>
    <div class="list-wrapper">
        <div class="table-item table-title">
            <span>类型</span>
            <span>威胁源</span>
            <span>威胁IP</span>
            <span>时间</span>
            <span>风险</span>
        </div>
        <vue-seamless-scroll :data="listData" :class-option="classOption" class="seamless-warp">
            <ul>
                <li v-for="(item, i) in listData" :key="i" class="table-item">
                    <span>{{ item.type }}</span>
                    <span>{{ item.source }}</span>
                    <span>{{ item.ip }}</span>
                    <span>{{ item.time }}</span>
                    <span>{{ item.status }}</span>
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
                    type: '访问可疑服务器',
                    source: '172.231.104.119',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
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
        height: 300px;
        flex: 1;
        box-sizing: border-box;
        padding: 0 10px 0 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        color: #00aeef;
        .seamless-warp{
            flex: 1;
            overflow: hidden;
        }
        ul{
            height: 100%;
            margin: 0;
            padding: 0;
        }
        li{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .table-item{
            width: 100%;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            span{
                box-sizing: border-box;
                padding: 10px;
                word-break: break-all;
            }
            span:nth-child(1) {
                width: 100px;
            }
            span:nth-child(3) {
                width: 100px;
            }
            span:nth-child(4) {
                width: 100px;
            }
            span:nth-child(2) {
                width: 100px;
            }
            span:nth-child(5) {
                width: 100px;
            }
        }
    }
</style>

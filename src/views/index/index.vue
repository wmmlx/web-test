<template>
    <div class="container">
        <div class="header-wrapper">
            <b>威胁事件态势</b>
        </div>
        <div class="content">
            <div class="l">
                <div class="con-header">
                    热点威胁事件
                </div>
                <div class="t">
                    <!-- 轨道 -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="260" viewPort="0 0 600 260" version="1.1">
                        <ellipse xmlns="http://www.w3.org/2000/svg" cx="300" cy="130" rx="300" ry="130" stroke-width="1" stroke="#fff" stroke-opacity="0.5" stroke-dasharray="4, 15" fill="none">
                            <animate id="animate" attributeName="stroke-dashoffset" to="360" begin="0" dur="40s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse xmlns="http://www.w3.org/2000/svg" cx="300" cy="130" rx="250" ry="108.33"  stroke-width="1" stroke="#fff" stroke-opacity="0.4" stroke-dasharray="100, 80" fill="none">
                            <animate id="animate" attributeName="stroke-dashoffset" to="-360" begin="0" dur="30s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse xmlns="http://www.w3.org/2000/svg" cx="300" cy="130" rx="214.3" ry="92.6"  stroke-width="1" stroke="#fff" stroke-opacity="0.3" stroke-dasharray="100, 80" fill="none">
                            <animate id="animate" attributeName="stroke-dashoffset" to="360" begin="0" dur="35s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse xmlns="http://www.w3.org/2000/svg" cx="300" cy="130" rx="150" ry="65"  stroke-width="1" stroke="#fff" stroke-opacity="0.5" stroke-dasharray="100, 80" fill="none">
                            <animate id="animate" attributeName="stroke-dashoffset" to="-360" begin="0" dur="30s" repeatCount="indefinite" />
                        </ellipse>
                        <ellipse xmlns="http://www.w3.org/2000/svg" cx="300" cy="130" rx="60" ry="26"  stroke-width="1" stroke="#fff" stroke-opacity="0.1" stroke-dasharray="10, 2" fill="none">
                            <animate id="animate" attributeName="stroke-dashoffset" to="360" begin="0" dur="20s" repeatCount="indefinite" />
                        </ellipse>
                    </svg>
                    <div class="planet planet1">
                        <img src="../../assets/planet.svg">
                        <span>1</span>
                    </div>
                    <div class="planet planet2">
                        <img src="../../assets/planet.svg">
                        <span>2</span>
                    </div>
                    <div class="planet planet3">
                        <img src="../../assets/planet.svg">
                        <span>3</span>
                    </div>
                    <div class="planet planet4">
                        <img src="../../assets/planet.svg">
                        <span>4</span>
                    </div>
                    <div class="planet planet5">
                        <img src="../../assets/planet.svg">
                        <span>5</span>
                    </div>
                    <div class="planet planet6">
                        <img src="../../assets/planet.svg">
                        <span>6</span>
                    </div>
                    <div class="planet planet7">
                        <img src="../../assets/planet.svg">
                        <span>7</span>
                    </div>
                </div>
                <div class="con-header">实时威胁事件</div>
                <div class="b">
                    <div class="table-item table-title">
                        <span>威胁类型</span>
                        <span>威胁源</span>
                        <span>受威胁IP/资产名称</span>
                        <span>发生时间</span>
                        <span>资产风险</span>
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
            </div>
            <div class="r">
                <div class="con-header">威胁事件统计</div>
                <div class="t">
                    <div class="t-l">
                        <div class="img-box">
                            <img src="../../assets/loading.svg">
                            <img class="dun-pai" src="../../assets/dunpai.svg">
                        </div>
                        <div class="count">
                            <b>11,183</b>
                            <img src="../../assets/whiteLinearGradient.svg"/>
                            <span>威胁事件数</span>
                        </div>
                    </div>
                    <div class="t-r"></div>
                </div>
                <div class="con-header">区域威胁数TOP</div>
                <div class="c">
                    <div class="map">
                        <img src="../../assets/guizhou.png">
                    </div>
                    <div class="map-detail">
<!--                        <vue-seamless-scroll :data="mapData" :class-option="mapOption" class="map-item-warp">-->
<!--                            <ul :style="trackStyle">-->
<!--                                <li v-for="(item, i) in mapData" :key="i">-->
<!--                                    <em>{{ i + 1 }}</em>-->
<!--                                    <span>{{ item.name }}</span>-->
<!--                                    <b>{{ item.count }}</b>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </vue-seamless-scroll>-->
                        <div class="map-item-warp">
                            <ul :style="trackStyle">
                                <li v-for="(item, i) in mapData" :key="i">
                                    <em>{{ i + 1 }}</em>
                                    <span>{{ item.name }}</span>
                                    <b>{{ item.count }}</b>
                                </li>
                            </ul>
                        </div>
                        <transition name="slide">
                            <div v-if="showTips" class="map-tips">
                                <b></b>
                                <span>{{ mapData[count] ? mapData[count].tips : '' }}</span>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="con-header">威胁类型TOP</div>
                <div class="b">
                    <img src="../../assets/loading2.svg"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import vueSeamlessScroll from 'vue-seamless-scroll'
    export default {
        data () {
            return {
                listData: [{
                    type: '访问可疑服务器',
                    source: '172.231.104.119 美国',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119 美国',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119 美国',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119 美国',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119 美国',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119 美国',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }, {
                    type: '访问可疑服务器',
                    source: '172.231.104.119 美国',
                    ip: '172.231.104.119',
                    time: '2020/09/20 06:56:19',
                    status: '中危'
                }],
                mapData: [{
                    name: '土城矿',
                    count: 993,
                    tips: '1土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '2土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '3土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '4土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '5土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '6土城矿描述'
                },{
                    name: '土城矿',
                    count: 993,
                    tips: '1土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '2土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '3土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '4土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '5土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '6土城矿描述'
                },{
                    name: '土城矿',
                    count: 993,
                    tips: '1土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '2土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '3土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '4土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '5土城矿描述'
                }, {
                    name: '土城矿',
                    count: 993,
                    tips: '6土城矿描述'
                }],
                showTips: false,
                timeOut: null,
                offsetTimer: null,
                count: 0,
                offset: 0,
                trackStyle: {}
            }
        },
        computed: {
            classOption () {
                return {
                    direction: 0,
                    step: 1
                }
            },
            mapOption () {
                return {
                    step: 1,
                    singleHeight: 36,
                    waitTime: 2000
                }
            }
        },
        watch: {
            offset (newVal, oldVal) {
                this.trackStyle = {
                    transform: `translateY(${newVal}px)`
                }
            }
        },
        components: {
            vueSeamlessScroll
        },
        beforeDestroy () {
            this.offsetTimer && clearInterval(this.offsetTimer)
            this.timeOut && clearTimeout(this.timeOut)
        },
        mounted () {
            // this.$nextTick(() => {
            //     this.timer && clearInterval(this.timer)
            //     let timeOut = null
            //     this.timer = setInterval(() => {
            //         this.count += 1
            //         if (this.count >= this.mapData.length) {
            //             this.count = 0
            //         }
            //         this.showTips = true
            //         timeOut && clearTimeout(timeOut)
            //         timeOut = setTimeout(() => {
            //             this.showTips = false
            //         }, 1000)
            //     }, 2000)
            // })
            this.initialize(0)
        },
        methods: {
            initialize (active) {
                this.offsetTimer && clearTimeout(this.offsetTimer)
                let tempActive = active
                if (tempActive + 4 >= this.mapData.length) {
                    return
                }
                this.offset = -(36 * tempActive)
                this.showTips = true
                tempActive += 1
                this.count = tempActive
                this.timeOut && clearTimeout(this.timeOut)
                this.timeOut = setTimeout(() => {
                    this.showTips = false
                }, 2000)
                this.offsetTimer = setTimeout(() => {
                    this.initialize(tempActive)
                }, 4000)
            }
        }
    }
</script>
<style lang="scss">
    .container{
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right, #04103a, #061f5f, #04103a);
        color: #fff;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 10px 10px;
        overflow: hidden;
        .header-wrapper{
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-image: url("../../assets/header.png");
            background-size: 100% 100%;
            color: #fff;
            font-size: 20px;
        }
        ul, li{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .con-header{
            font-size: 14px;
            box-sizing: border-box;
            padding: 15px 20px;
            background-image: url("../../assets/titlebg.svg");
            background-size: 100% 100%;
        }
        .content{
            flex: 1;
            display: flex;
            overflow: hidden;
            .l, .r{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }
            .l{
                display: flex;
                flex-direction: column;
                .t{
                    position: relative;
                    box-sizing: border-box;
                    padding: 100px 0 20px 50px;
                    display: flex;
                }
                .b{
                    flex: 1;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    background: #05174b;
                    border-radius: 4px;
                    .seamless-warp{
                        flex: 1;
                        overflow: hidden;
                        box-sizing: border-box;
                        padding-top: 10px;
                    }
                    ul{
                        height: 100%;
                    }
                    .table-item{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        border: 0.5px solid #0b2a50;
                        box-sizing: border-box;
                        span{
                            box-sizing: border-box;
                            padding: 10px;
                            word-break: break-all;
                        }
                        span:nth-child(1) {
                            width: 140px;
                        }
                        span:nth-child(3) {
                            width: 170px;
                        }
                        span:nth-child(4) {
                            width: 180px;
                        }
                        span:nth-child(2) {
                            width: 180px;
                        }
                        span:nth-child(5) {
                            width: 100px;
                        }
                    }
                }
            }
            .r{
                flex: 1;
                overflow: hidden;
                margin-left: 10px;
                display: flex;
                justify-content: space-between;
                .t, .c, .b{
                    display: flex;
                    align-items: center;
                    background: rgba(3,13,53, .4);
                    width: 100%;
                    border-radius: 4px;
                }
                .t{
                    .t-l{
                        display: flex;
                        align-items: center;
                        .img-box{
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            img{
                                width: 140px;
                                display: flex;
                            }
                            .dun-pai{
                                position: absolute;
                                width: 50px;
                            }
                        }
                        .count{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            font-size: 14px;
                            position: relative;
                            left: -20px;
                            img{
                                margin: 10px 0;
                                display: flex;
                            }
                            b{
                                color: #07abcc;
                                font-size: 20px;
                            }
                        }
                    }
                }
                .c{
                    .map{
                        img{
                            width: 150px;
                        }
                    }
                    .map-detail{
                        position: relative;
                        flex: 1;
                        box-sizing: border-box;
                        padding-left: 40px;
                    }
                    .map-item-warp{
                        overflow: hidden;
                        height: 140px;
                        width: 100%;
                        ul{
                            width: 100%;
                            transition: transform 500ms ease-in;
                            li{
                                display: flex;
                                align-items: center;
                                box-sizing: border-box;
                                height: 36px;
                                em{
                                    font-size: 22px;
                                    font-style: normal;
                                }
                                span{
                                    font-size: 20px;
                                    box-sizing: border-box;
                                    padding: 0 10px 0 20px;
                                    position: relative;
                                    &::before{
                                        width: 10px;
                                        height: 1px;
                                        background: rgba(255,255,255,.8);
                                        content: '';
                                        position: absolute;
                                        top: 0;
                                        bottom: 0;
                                        margin: auto;
                                        left: 5px;
                                    }
                                }
                                b{
                                    color: #ff6666;
                                }
                            }
                        }
                    }
                    .map-tips{
                        position: absolute;
                        top: 10px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        height: 100%;
                        width: 100%;
                        b{
                            width: 100px;
                            height: 40px;
                            position: absolute;
                            opacity: 0;
                            animation: slide-in 1s 2 linear;
                            background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(7,171,204,1));
                        }
                        span{
                            color: #07abcc;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .planet {
            img{
                width: 100px;
                display: flex;
            }
            span{
                position: absolute;
            }
            position: absolute;
            color:#fff;
            font-size:22px;
            display:flex;
            align-items:center;
            justify-content:center;
            transform-origin: 0 130px;
        }
        @keyframes animX{
            0% {left: 0;}
            100% {left: 600px;}
        }
        @keyframes animY{
            0% {top: 0;}
            100% {top: 260px;}
        }


        @keyframes animX3{
            0% {left: 50px;}
            100% {left: 550px;}
        }
        @keyframes animY3{
            0% {top: 21.67px;}
            100% {top: 238.33px;}
        }

        @keyframes animX4{
            0% {left: 85.7px;}
            100% {left: 514.3px;}
        }
        @keyframes animY4{
            0% {top: 34.7px;}
            100% {top: 225.3px;}
        }

        @keyframes scale {
            0% {
                transform: scale(0.7)
            }
            50% {
                transform: scale(0.9)
            }
            100% {
                transform: scale(0.7)
            }
        }
        .planet1 {
            animation: animX4 24s cubic-bezier(0.3142, 0, 0.4571, 1) -12s infinite alternate,
            animY4 24s cubic-bezier(0.3142, 0, 0.4571, 1) 0s infinite alternate,
            scale 48s cubic-bezier(0.3142, 0, 0.4571, 1) 0s infinite alternate;
        }
        .planet2 {
            animation: animX 24s cubic-bezier(0.44, 0, 0.57, 1) -20s infinite alternate,
            animY 24s cubic-bezier(0.44, 0, 0.57, 1) -8s infinite alternate,
            scale 48s cubic-bezier(0.44, 0, 0.57, 1) -8s infinite alternate;
        }
        .planet3 {
            animation: animX3 24s cubic-bezier(0.366, 0, 0.533, 1) -28s infinite alternate,
            animY3 24s cubic-bezier(0.366, 0, 0.533, 1) -16s infinite alternate,
            scale 48s cubic-bezier(0.366, 0, 0.533, 1) -16s infinite alternate;
        }
        .planet4 {
            animation: animX 24s cubic-bezier(0.44, 0, 0.57, 1) -36s infinite alternate,
            animY 24s cubic-bezier(0.44, 0, 0.57, 1) -24s infinite alternate,
            scale 48s cubic-bezier(0.44, 0, 0.57, 1) -24s infinite alternate;
        }
        .planet5 {
            transform: scale(0.7);
            left: 315px;
            top: 135px;
        }
        .planet6 {
            animation: animX 24s cubic-bezier(0.44, 0, 0.57, 1) -44s infinite alternate,
            animY 24s cubic-bezier(0.44, 0, 0.57, 1) -32s infinite alternate,
            scale 48s cubic-bezier(0.44, 0, 0.57, 1) -32s infinite alternate;
        }

        .planet7 {
            animation: animX 24s cubic-bezier(0.44, 0, 0.57, 1) -52s infinite alternate,
            animY 24s cubic-bezier(0.44, 0, 0.57, 1) -40s infinite alternate,
            scale 48s cubic-bezier(0.44, 0, 0.57, 1) -40s infinite alternate;
        }
        .slide-enter-active {
            animation: fade-in 1s;
        }
        .slide-leave-active {
            animation: fade-in 1s reverse;
        }
        @keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes slide-in {
            0% {
                left: 0;
                opacity: 1;
            }
            100% {
                left: 100%;
                opacity: 0;
            }
        }
    }
</style>

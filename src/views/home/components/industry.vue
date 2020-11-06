<template>
    <!--行业情况-->
    <div class="industry-wrapper">
        <div class="top">
            <span>TOP3</span>
            <span> >> </span>
        </div>
        <div id="chart"></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                option: null
            }
        },
        mounted() {
            this.getEchart();
        },
        methods: {
            getEchart() {
                // 初始化echarts实例
                let myChart = echarts.init(document.getElementById('chart'))
                let xData2 = ["一级","二级","三级"]
                let data1 = [200,100,200]
                let data2 = [300,200,300]
                this.option = {
                    legend: {
                        top: '0',
                        left: '0',
                        data: ['一级', '二级', '三级']
                    },
                    tooltip: {
                        trigger: 'item',
                    },
                    xAxis: {
                        data: xData2,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                        }
                    },
                    yAxis: {
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        }
                    },
                    series: [
                        {
                            "name": "", //头部
                            "type": "pictorialBar",
                            "symbolSize": [30, 25],
                            "symbolOffset": [0, -10],
                            "z": 12,
                            "symbolPosition": "end",
                            itemStyle:{
                                color:'#163F7A',
                                opacity:1,
                            },
                            "data": data2
                        },
                        {
                            name: '',
                            type: 'bar',
                            barWidth: 30,
                            barGap: '-100%',
                            z:0,
                            itemStyle: {
                                color: '#163F7A',
                                opacity:.7,
                            },

                            data: data2
                        },
                        {//三个最低下的圆片
                            "name": "",
                            "type": "pictorialBar",
                            "symbolSize": [30, 25],
                            "symbolOffset": [0, 10],
                            "z": 12,
                            itemStyle:{
                                opacity:1,
                                color: function(params){
                                    var a = params.name.slice(0,2);
                                    if(a === '一级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#FF9A22' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#FFD56E'// 100% 处的颜色
                                        }], false)
                                    }else if(a === '二级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#00EC28' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#5DF076'// 100% 处的颜色
                                        }], false)
                                    }else if(a === '三级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#12B9DB' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#6F8EF2'// 100% 处的颜色
                                        }], false)
                                    }
                                }
                            },
                            "data": [1,1,1]
                        },


                        //下半截柱状图
                        {
                            name: '',
                            type: 'bar',
                            barWidth: 30,
                            barGap: '-100%',
                            itemStyle: {//lenged文本
                                opacity:.7,
                                color: function(params){
                                    var a = params.name.slice(0,2);
                                    if(a === '一级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#FF9A22' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#FFD56E'// 100% 处的颜色
                                        }], false)
                                    }else if(a === '二级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#00EC28' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#5DF076'// 100% 处的颜色
                                        }], false)
                                    }else if(a === '三级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#12B9DB' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#6F8EF2'// 100% 处的颜色
                                        }], false)
                                    }
                                }
                            },

                            data: data1
                        },

                        { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
                            type: 'bar',
                            barWidth: 30,
                            barGap: '-100%',
                            stack: '广告',
                            itemStyle: {
                                color: 'transparent'
                            },
                            data: data1
                        },

                        {
                            "name": "",
                            "type": "pictorialBar",
                            "symbolSize": [30, 25],
                            "symbolOffset": [0, -10],
                            "z": 12,
                            itemStyle:{
                                opacity:1,
                                color: function(params){
                                    var a = params.name.slice(0,2);
                                    if(a === '一级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#FF9A22' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#FFD56E'// 100% 处的颜色
                                        }], false)
                                    }else if(a === '二级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#00EC28' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#5DF076'// 100% 处的颜色
                                        }], false)
                                    }else if(a === '三级'){
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#12B9DB' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  '#6F8EF2'// 100% 处的颜色
                                        }], false)
                                    }
                                }
                            },
                            "symbolPosition": "end",
                            "data": data1
                        }
                    ]
                }

                // 使用制定的配置项和数据显示图表
                myChart.setOption(this.option, true)

                window.addEventListener('resize', () => {
                    myChart.resize()
                })

            }
        },
    }
</script>
<style lang="scss" scoped>
    .industry-wrapper{
        background-image: url("../../../assets/con-item-bg1.png");
        background-size: 100% 100%;
        width: 254px;
        flex: 1;
        max-height: 400px;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        flex-direction: column;
        .top{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #00e3fc;
        }
        #chart{
            flex: 1;
            width: 100%;
        }
    }
</style>

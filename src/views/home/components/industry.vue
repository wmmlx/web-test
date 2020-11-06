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
                let img1 = 'data:image/png;base64,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'
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
                            "symbolSize": [34, 25],
                            "symbolOffset": [0, -24],
                            "z": 12,
                            "symbolPosition": "end",
                            symbol: 'image://' + img1,
                            label: {
                                normal: {
                                    show: true,
                                    color: '#00e3fc',
                                    position: ['28%', '-20'],
                                }
                            },
                            "data": data2
                        },
                        {
                            name: '',
                            type: 'bar',
                            barWidth: 34,
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
                            "symbolSize": [34, 25],
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
                            barWidth: 34,
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
                            barWidth: 34,
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
                            "symbolSize": [34, 25],
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

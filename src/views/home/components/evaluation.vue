<template>
    <!--测评概览-->
    <div class="industry-wrapper">
        <div id="evaluation"></div>
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
            this.getEchart()
        },
        methods: {
            getEchart () {
                // 初始化echarts实例
                let myChart = echarts.init(document.getElementById('evaluation'));
                this.option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(0, 255, 233,0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(255, 255, 255,1)',
                                    }, {
                                        offset: 1,
                                        color: 'rgba(0, 255, 233,0)'
                                    }],
                                    global: false
                                }
                            },
                        },
                    },
                    grid: {
                        top: '5%',
                        left: '10%',
                        right: '5%',
                        bottom: '25%',
                    },
                    xAxis: [{
                        type: 'category',
                        axisLine: {
                            show: true
                        },
                        splitArea: {
                            // show: true,
                            color: '#f00',
                            lineStyle: {
                                color: '#f00'
                            },
                        },
                        axisLabel: {
                            color: '#6088aa'
                        },
                        splitLine: {
                            show: false
                        },
                        boundaryGap: false,
                        data: ['一月', '二月', '三月', '四月', '五月', '六月']
                    }],
                    legend: {
                        bottom: '0',
                        textStyle: {
                            color: '#00aeef',
                        },
                        data: ['二级', '三级']
                    },
                    yAxis: [{
                        type: 'value',
                        min: 0,
                        // max: 140,
                        splitNumber: 4,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(255,255,255,0.1)'
                            }
                        },
                        axisLine: {
                            show: true,
                        },
                        axisLabel: {
                            show: true,
                            margin: 10,
                            textStyle: {
                                color: '#6088aa',

                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    }],
                    series: [
                        {
                            name: '二级',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            symbol: 'circle',
                            symbolSize: 5,
                            lineStyle: {
                                normal: {
                                    color: "#c27f00",
                                    shadowColor: 'rgba(0, 0, 0, .3)',
                                    shadowBlur: 0,
                                    shadowOffsetY: 5,
                                    shadowOffsetX: 5,
                                },
                            },
                            label: {
                                show: false,
                                position: 'top',
                                textStyle: {
                                    color: '#c27f00',
                                }
                            },
                            itemStyle: {
                                color: "#c27f00"
                            },
                            tooltip: {
                                show: false
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(194,127,0,0.3)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(194,127,0,0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(194,127127,0, 0.9)',
                                    shadowBlur: 20
                                }
                            },
                            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
                        },
                        {
                            name: '三级',
                            type: 'line',
                            showAllSymbol: true,
                            symbol: 'circle',
                            smooth: true, //是否平滑
                            symbolSize: 5,
                            lineStyle: {
                                normal: {
                                    color: "#9e2a53",
                                    shadowColor: 'rgba(0, 0, 0, .3)',
                                    shadowBlur: 0,
                                    shadowOffsetY: 5,
                                    shadowOffsetX: 5,
                                },
                            },
                            label: {
                                show: false,
                                position: 'top',
                                textStyle: {
                                    color: '#9e2a53',
                                }
                            },

                            itemStyle: {
                                color: "#9e2a53"
                            },
                            tooltip: {
                                show: false
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(158,42,83,0.3)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(158,42,83,0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(158,42,83, 0.9)',
                                    shadowBlur: 20
                                }
                            },
                            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
                        }
                    ]
                }
                // 使用制定的配置项和数据显示图表
                myChart.setOption(this.option, true)
                window.addEventListener('resize', () => {
                    myChart.resize()
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .industry-wrapper{
        background-image: url("../../../assets/con-item-bg2.png");
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 10px;
        flex: 1;
        max-height: 200px;
        #evaluation{
            width: 400px;
            height: 100%;
        }
    }
</style>

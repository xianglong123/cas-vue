<template>
  <div style="width:355px;height:280px" ref="chart"></div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      initCharts() {
        let myChart = this.$echarts.init(this.$refs.chart, "shine");
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [{
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [{
              value: 748,
              name: '北京'
            },
              {
                value: 410,
                name: '天津'
              },
              {
                value: 234,
                name: '深圳'
              },
              {
                value: 335,
                name: '张家口'
              },
              {
                value: 445,
                name: '石家庄'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
            }
          }]
        });
      },
    },
    mounted() {
      this.initCharts();
    },
  }
</script>


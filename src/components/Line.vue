<template>
  <div style="width:355px;height:280px" ref="line"></div>
</template>

<script>
  export default {
    name: "Line",
    data(){},
    methods: {
      initCharts() {
        let myChart = this.$echarts.init(this.$refs.line, "line");
        // 绘制图表
        myChart.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        });
      },
    },
    mounted() {
      this.initCharts();
    },
  }
</script>

<style scoped>

</style>


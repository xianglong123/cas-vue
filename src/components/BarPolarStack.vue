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
          angleAxis: {
          },
          radiusAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四'],
            z: 10
          },
          polar: {
          },
          series: [{
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
          }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
          }, {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
          }],
          legend: {
            show: true,
            data: ['A', 'B', 'C']
          }
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


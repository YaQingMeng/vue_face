<template>
    <div id="line-chart" class="chart1"></div>
</template>
  
<script>
import * as echarts from 'echarts';
  
export default {
  name: 'BottomSection',
  mounted() {
    this.initLineChart();
  },
  methods: {
    initLineChart() {
      var chartDom = document.getElementById('line-chart');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: '人流量图',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '03:00', '05:00', '08:00', '11:00', '13:00', '16:00', '19:00', '21:00', '00:00']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} 人数'
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: 'green'
            },
            {
              gt: 50,
              lte: 1000,
              color: 'red'
            },
          ],
        },
        
        series: [
          {
            name: '人数',
            type: 'line',
            smooth: true,
            data: [0, 0, 0, 260, 100, 200, 100, 300, 260, 50],
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: [
                [
                  {
                    name: 'Morning Peak',
                    xAxis: '07:30'
                  },
                  {
                    xAxis: '10:00'
                  }
                ],
                [
                  {
                    name: 'Evening Peak',
                    xAxis: '17:30'
                  },
                  {
                    xAxis: '21:15'
                  }
                ]
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    },
  }
};
</script>
  
<style scoped>
  .chart1 {
      flex: 1 1 auto;
      /* border: solid #ff0000; */
  }
</style>
  
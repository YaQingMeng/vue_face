<template>
  <div id="line-chart" class="chart1"></div>
</template>

<script>
  import * as echarts from 'echarts';
  import axios from 'axios';

  export default {
    name: 'BottomSection',
    data() {
      return {
        data_1: '',
        data_2: '',
      }
    },
    created() {
      this.fetchChartData();
    },
    methods: {
      async fetchChartData() {
        const response = await axios.get("http://192.168.1.207:5000/flow_change");
        this.data_1 = response.data.array1;
        this.data_2 = response.data.array2;
        this.initLineChart();
      },
      initLineChart() {
        var chartDom = document.getElementById('line-chart');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
          title: {
            text: '学生流量图',
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
          legend: {
            data: ['出寝人数', '入寝人数'],
            top: 'bottom'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00']
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
          series: [
            {
              name: '出寝人数',
              type: 'line',
              smooth: true,
              data: this.data_1,
              itemStyle: {
                color: 'green'
              }
            },
            {
              name: '入寝人数',
              type: 'line',
              smooth: true,
              data: this.data_2,
              itemStyle: {
                color: 'blue'
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
  }
</style>
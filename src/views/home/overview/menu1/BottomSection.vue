<template>
  <div class="Bottom-section-content">
    <div id="line-chart" class="chart1"></div>
    <div id="pie-chart" class="chart2"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'BottomSection',
  mounted() {
    this.initLineChart();
    this.initPieChart();
  },
  methods: {
    initLineChart() {
      var chartDom = document.getElementById('line-chart');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: 'Distribution of Electricity',
          subtext: 'Fake Data'
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
            formatter: '{value} W'
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
              lte: 6,
              color: 'green'
            },
            {
              gt: 6,
              lte: 8,
              color: 'red'
            },
            {
              gt: 8,
              lte: 14,
              color: 'green'
            },
            {
              gt: 14,
              lte: 17,
              color: 'red'
            },
            {
              gt: 17,
              color: 'green'
            }
          ]
        },
        series: [
          {
            name: 'Electricity',
            type: 'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390],
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
    initPieChart() {
      var chartDom = document.getElementById('pie-chart');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: 'Nightingale Chart',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: [
            'rose1',
            'rose2',
            'rose3',
            'rose4',
            'rose5',
            'rose6',
            'rose7',
            'rose8'
          ]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Radius Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 33, name: 'rose 2' },
              { value: 28, name: 'rose 3' },
              { value: 22, name: 'rose 4' },
              { value: 20, name: 'rose 5' },
              { value: 15, name: 'rose 6' },
              { value: 12, name: 'rose 7' },
              { value: 10, name: 'rose 8' }
            ]
          },
          {
            name: 'Area Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 30, name: 'rose 1' },
              { value: 28, name: 'rose 2' },
              { value: 26, name: 'rose 3' },
              { value: 24, name: 'rose 4' },
              { value: 22, name: 'rose 5' },
              { value: 20, name: 'rose 6' },
              { value: 18, name: 'rose 7' },
              { value: 16, name: 'rose 8' }
            ]
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
.Bottom-section-content {
  display: flex;
  flex: 1 1 auto;
  padding: 10px;
}

.chart1 {

  width: 550px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 10px;
  /* border: solid #ff0000; */
}

.chart2 {
  flex: 1 1 auto;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  border: 1px solid #ccc;
  border-radius: 10px;
  /* border: solid #ff0000; */
}
</style>

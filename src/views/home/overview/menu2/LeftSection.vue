<template>
  <div class="left-section-content">
    <div class="charts-container">
      <div id="main" class="chart"></div>
      <div id="gauge" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'LeftSection',
  mounted() {
    // Line Chart
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: '寝室门禁流量'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['进入', '离开']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '00:00',
          '2:00',
          '4:00',
          '6:00',
          '8:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
          '24:00'
        ]
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} 人'
        }
      },
      series: [
        {
          name: '进入',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210, 122, 255, 450, 124, 99, 100]
        },
        {
          name: '离开',
          type: 'line',
          stack: 'Total',
          data: [420, 432, 301, 234, 190, 130, 120, 120, 132, 101, 154, 90, 200]
        }
      ]
    };

    option && myChart.setOption(option);


    // Gauge Chart
    var gaugeDom = document.getElementById('gauge');
    var gaugeChart = echarts.init(gaugeDom);
    var gaugeOption;

    gaugeOption = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: '竹园4栋',
          type: 'gauge',
          progress: {
            show: true
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}'
          },
          data: [
            {
              value: 50,
              name: '在寝人数'
            }
          ]
        }
      ]
    };

    gaugeOption && gaugeChart.setOption(gaugeOption);
  }
};
</script>

<style>
.left-section-content {
  padding: 20px;
}

.charts-container {
  display: flex;
  justify-content: space-between;
}

.chart {
  width: 12%; /* 将宽度减少一半 */
  height: 50px; /* 将高度减少一半 */
}

</style>

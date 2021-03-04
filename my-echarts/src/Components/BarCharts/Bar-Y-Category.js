import React, { Component } from "react";
import * as echarts from "echarts";

class BarYCategory extends Component {
  
  componentDidMount() {
    var chartDom = document.getElementById('bar-y-cat');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: 'Bar-Y-Category',
            subtext: 'Total world population'
        },
        toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2011', '2012']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'United States', 'India', 'China', 'World population']
        },
        series: [
            {
                name: '2011',
                type: 'bar',
                data: [18203, 23489, 28034, 104970, 151744, 630230]
            },
            {
                name: '2012',
                type: 'bar',
                data: [19325, 239638, 31000, 121594, 134141, 781807]
            }
        ]
    };

    option && myChart.setOption(option);

  };

  render() {
    return (
      <div>
        <div>
          <div id="bar-y-cat" style={{ width: 710, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default BarYCategory;

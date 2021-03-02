import React, { Component } from "react";
import * as echarts from "echarts";

class StackedLineChart extends Component {

  componentDidMount() {
    var stackedLine = document.getElementById("stackedLine");
    var myChart = echarts.init(stackedLine);
    var option;

    option = {
      title: {
        text: "Stacked Line Chart"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        data: ["A", "B", "C", "D", "E"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "A",
          type: "line",
          stack: "total",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "B",
          type: "line",
          stack: "total",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "C",
          type: "line",
          stack: "total",
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "D",
          type: "line",
          stack: "total",
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "E",
          type: "line",
          stack: "total",
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    option && myChart.setOption(option);
  };

  render() {
    return (
      <div>
        <div>
          <div id="stackedLine" style={{ width: 710, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default StackedLineChart;

import React, { Component } from "react";
import * as echarts from "echarts";

class LineChart extends Component {
  
  componentDidMount() {
    let linechart = document.getElementById("line");
    const myChart = echarts.init(linechart);
    let lineChartoptions;
    lineChartoptions = {
      title: {
        text: "Line Chart"
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };
    lineChartoptions && myChart.setOption(lineChartoptions);
  };

  render() {
    return (
      <div>
        <div>
          <div id="line" style={{ width: 710, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default LineChart;

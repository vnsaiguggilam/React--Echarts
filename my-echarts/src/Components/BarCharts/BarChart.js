import React, { Component } from "react";
import * as echarts from "echarts";

class BarChart extends Component {
  
  componentDidMount() {
    let barChart = document.getElementById("bar");
    const myChart = echarts.init(barChart);
    let barChartoptions;
    barChartoptions = {
      title: {
        text: "Bar Chart"
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
          data: [620, 732, 222, 934, 1290, 1666, 1226],
          type: "bar",
        }
      ]
    };
    barChartoptions && myChart.setOption(barChartoptions);
  };

  render() {
    return (
      <div>
        <div>
          <div id="bar" style={{ width: 710, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default BarChart;

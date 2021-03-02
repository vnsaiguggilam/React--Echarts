import React, { Component } from "react";
import * as echarts from "echarts";

class SmothLineChart extends Component {
  
  componentDidMount() {

    var smothChart = document.getElementById("smothLine");
    var myChart = echarts.init(smothChart);
    var option;

    option = {
      title: {
        text: "Smoth Line Chart"
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
          type: "line",
          smooth: true
        }
      ]
    };

    option && myChart.setOption(option);
  };

  render() {
    return (
      <div>
        <div>
          <div id="smothLine" style={{ width: 710, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default SmothLineChart;

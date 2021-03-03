import React, { Component } from "react";
import * as echarts from "echarts";

class BarChartBg extends Component {
  
  componentDidMount() {
    let barChartBg = document.getElementById("barBg");
    const myChart = echarts.init(barChartBg);
    let barChartBgoptions;
    barChartBgoptions = {
      title: {
        text: "Bar Chart BackGround"
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
          showBackground: true,
          backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
        }
      ]
    };
    barChartBgoptions && myChart.setOption(barChartBgoptions);
  };

  render() {
    return (
      <div>
        <div>
          <div id="barBg" style={{ width: 710, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default BarChartBg;

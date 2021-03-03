import React, { Component } from "react";
import * as echarts from "echarts";

class LineAreaChart extends Component {

    componentDidMount = () => {
        let areaChart = document.getElementById("LineArea");
        let myChart = echarts.init(areaChart);
        let areaChartoption;

        areaChartoption = {
        title: {
            text: "Line Area Chart"
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: { color: "#7fcaeb" }
            }
        ]
    };
    areaChartoption && myChart.setOption(areaChartoption);
  };

  render() {
    return (
      <div>
        <div>
          <div id="LineArea" style={{ width: 710, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default LineAreaChart;

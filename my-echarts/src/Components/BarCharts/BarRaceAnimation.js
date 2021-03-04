import React, { Component } from "react";
import * as echarts from "echarts";

class BarRaceAnimation extends Component {
  
  componentDidMount() {
    var chartDom = document.getElementById('barRace');
    var myChart = echarts.init(chartDom);
    var option;
    
    var data = [];
    for (let i = 0; i < 6; ++i) {
        data.push(Math.round(Math.random() * 200));
    }
    
    option = {
        title: {
            text: "Bar Race Animation"
        },
        // toolbox: {
        //     feature: {
        //       saveAsImage: {}
        //     }
        // },
        xAxis: {
            max: 'dataMax',
        },
        yAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E', 'F'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 6 // only the largest 6 bars will be displayed
        },
        series: [{
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }],
        legend: {
            show: true
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };
    
    function run () {
        var data = option.series[0].data;
        for (var i = 0; i < data.length; ++i) {
            if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
            }
            else {
                data[i] += Math.round(Math.random() * 200);
            }
        }
        myChart.setOption(option);
    }
    
    setTimeout(function() {
        run();
    }, 0);
    setInterval(function () {
        run();
    }, 3000);
    
    option && myChart.setOption(option);
    

  };

  render() {
    return (
      <div>
        <div>
          <div id="barRace" style={{ width: 700, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default BarRaceAnimation;

import React, { Component } from 'react';
// import { Doughnut, Bar, Pie, Line } from 'react-chartjs-2';
import LineChart from './LineChart';
import ChartDesign from './ChartDesign';

const expData = {
  labels: ["긍정적", "부정적", "보통", "낙천적", '민은빈'],
  datasets: [
    {
      labels: ["긍정적", "부정적", "보통", "낙천적", '민은빈'],
      data: [20, 13, 17, 10, 50],
      borderWidth: 1,
      hoverBorderWidth: 3,
      backgroundColor: [
        "rgba(238, 102, 121, 1)",
        "rgba(98, 181, 229, 1)",
        "rgba(255, 198, 0, 1)",
        "rgba(255, 100, 0, 1)",
        "rgba(200, 100, 0, 1)"
      ],
      fill: true,
      listeners: {
        // called only for labels of the 1st dataset 
        click: function() { alert('context'); }
      }
    }
  ]
};

export class Chart extends Component {

  handleChartClick(element) {
    if (element.length > 0) {
      const { datasets } = element[0]._chart.tooltip._data;
      const datasetIndex = element[0]._datasetIndex;
      const { data, labels } = datasets[datasetIndex];
      const dataIndex = element[0]._index;

      alert(`${labels[dataIndex]}: ${data[dataIndex]}`);
    }
  }

  render() {
    return (
      <div>
        <ChartDesign
          data={expData}
          handleChartClick={element => this.handleChartClick(element)}
        />
        <LineChart
          data={expData}
          handleChartClick={element => this.handleChartClick(element)}
        />
      </div>
    )
  }
}

export default Chart

import React, { Component } from 'react';
import _ from 'lodash';
import { Bar } from 'react-chartjs-2';

const monitoringData = [
  {
    "date": "202001",
    "allNic": 10,
    "allPre": 30,
    "allNormal": 50,
    "dsNic": 5,
    "dsPre": 15,
    "dsNormal": 25,
    "lakeNic": 7,
    "lakePre": 17,
    "lakeNormal": 27
  },
  {
    "date": "202002",
    "allNic": 10,
    "allPre": 50,
    "allNormal": 20,
    "dsNic": 5,
    "dsPre": 25,
    "dsNormal": 35,
    "lakeNic": 17,
    "lakePre": 27,
    "lakeNormal": 57
  },
  {
    "date": "202003",
    "allNic": 10,
    "allPre": 10,
    "allNormal": 30,
    "dsNic": 5,
    "dsPre": 5,
    "dsNormal": 15,
    "lakeNic": 7,
    "lakePre": 7,
    "lakeNormal": 17
  },
  {
    "date": "202004",
    "allNic": 10,
    "allPre": 20,
    "allNormal": 40,
    "dsNic": 5,
    "dsPre": 35,
    "dsNormal": 15,
    "lakeNic": 7,
    "lakePre": 27,
    "lakeNormal": 37
  },
  {
    "date": "202005",
    "allNic": 10,
    "allPre": 30,
    "allNormal": 50,
    "dsNic": 5,
    "dsPre": 15,
    "dsNormal": 25,
    "lakeNic": 7,
    "lakePre": 17,
    "lakeNormal": 27
  },
  {
    "date": "202006",
    "allNic": 30,
    "allPre": 10,
    "allNormal": 10,
    "dsNic": 15,
    "dsPre": 25,
    "dsNormal": 35,
    "lakeNic": 17,
    "lakePre": 27,
    "lakeNormal": 37
  },
]
const options = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
        stacked: true
    }],
    yAxes: [{
        stacked: true,
         scaleLabel: {
            display: true,
            labelString: '건수'
          }
    }]
  }
}

export class StackBarChart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       sourceDetailData: {}
    }
  }
  
  componentDidMount(){
    this.makeSourceDetailData();
  }

  makeSourceDetailData = () => {
    const labels =[];
    let addList = [];
    const sourceDetailData = {};
    const dataList = [
      {label: 'allNic', stack: 1, backgroundColor: 'red', data:[]},
      {label: 'allPre', backgroundColor: 'blue', stack: 1, data:[]},
      {label: 'allNormal', backgroundColor: 'yellow', stack: 1, data:[]},
      {label: 'dsNic', stack: 2, backgroundColor: 'red', data:[]},
      {label: 'dsPre', stack: 2, backgroundColor: 'blue', data:[]},
      {label: 'dsNormal', stack: 2, backgroundColor: 'yellow', data:[]},
      {label: 'lakeNic', stack: 3, backgroundColor: 'red', data:[]},
      {label: 'lakePre', stack: 3, backgroundColor: 'blue', data:[]},
      {label: 'lakeNormal', stack: 3, backgroundColor: 'yellow', data:[]}
    ];
    _.forEach(monitoringData, (item) => {
      labels.push(item.date.substr(0,4) + '-' + item.date.substr(4,2));
      _.forEach(item, (value, key) => {
        switch (key) {
          case "allNic":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;
          case "allPre":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;
          case "allNormal":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;
          case "dsNic":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;
          case "dsPre":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;
          case "dsNormal":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;
          case "lakeNic":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;
          case "lakePre":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;
          case "lakeNormal":
            addList = dataList.filter(item => item.label === key);
            addList[0].data.push(value);
            break;        
          default:
            break;
        }
      });
    });
    sourceDetailData.labels = labels;
    sourceDetailData.datasets = dataList;
    this.setState({
      sourceDetailData
    })
  }

  render() {
    const { sourceDetailData } = this.state;
    return (
      <div>
        <Bar
          data={sourceDetailData}
          options={options}
        />
      </div>
    )
  }
}

export default StackBarChart;

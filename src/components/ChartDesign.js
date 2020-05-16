import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';

export class LineChart extends Component {
  render() {
    return (
      <div>
        <div style={{
          width: '45%', float: 'left', border: '1px solid #ccc',
          margin: '20px', paddingBottom: '20px' }}>
        <div style={{ 
          backgroundColor: 'rgb(126, 245, 188)', height: '35px',
          textAlign: 'center', paddingTop: '10px', marginBottom: '20px' }}
        >
          <span>Catalog Registration Status</span>
        </div>  
          <Pie
            id='myChart'
            options={{
              title: {
                display: false,
                fontSize: 20
              },
              legend: {
                display: false,
                position: "right",
                
              },
              plugins: {
                labels: [
                  {
                    render: 'label',
                    position: 'outside',
                    arc: true,
                    outsidePadding: 4
                  },
                  {
                    render: 'value'
                  }
                ]
              }              
            }}
            data={this.props.data}
            getElementAtEvent={this.props.handleChartClick}
          />
        </div>
        <div style={{ 
          width: '45%', float: 'right', border: '1px solid #ccc', margin: '20px', paddingBottom: '20px' }}>
        <div style={{ 
          backgroundColor: 'rgb(126, 245, 188)', height: '35px',
          textAlign: 'center', paddingTop: '10px', marginBottom: '20px' }}
        >
          <span>Catalog Using Status</span>
        </div>
          <Bar
            id='myChart'
            options={{
              legend: {
                display: false
              }
            }}
            data={this.props.data}
            getElementAtEvent={this.props.handleChartClick}
          /> 
        </div>
      </div>
    )
  }
}

export default LineChart

import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

export class LineChart extends Component {
  render() {
    return (
      <div>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '20px' }}>
                <div>
                  <h2 style={{ textAlign: 'center' }}>DS Catalog</h2>
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
                      
                    }
                  }}
                  data={this.props.data}
                  getElementAtEvent={this.props.handleChartClick}
                />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '20px' }}>
                <div>
                  <h2 style={{ textAlign: 'center' }}>DS Catalog Using</h2>
                </div>
                <Bar
                  id='myChart'
                  options={{
                    title: {
                      display: false,
                      text: 'DS Catalog Useing',
                      fontSize: 20
                    },
                    legend: {
                      display: false,
                      position: "right",
                      
                    }
                  }}
                  data={this.props.data}
                  getElementAtEvent={this.props.handleChartClick}
                />
              </td>
            </tr>
          </tbody>
        </table>        
      </div>
    )
  }
}

export default LineChart

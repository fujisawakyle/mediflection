import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

import * as actions from '../../actions';
import { ComponentBackground, FlexColumn } from '../../styles/layoutStyles';
import { ChartContainer } from './WeekChart.style';

defaults.global.defaultFontFamily = 'Nixie One';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class WeekChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      chartData: {
        labels: [days[0], days[1], days[2], days[3], days[4], days[5], days[6]],
        datasets: [
          {
            label: 'minutes',
            data: this.props.weekChartArray,
            backgroundColor: 'rgba(74, 144, 226, 0.68)'
          }
        ]
      },
      options: {
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: 'white',
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: 'white'
              }
            }
          ]
        }
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      chartData: {
        labels: [days[0], days[1], days[2], days[3], days[4], days[5], days[6]],
        datasets: [
          {
            label: 'minutes',
            data: nextProps.weekChartArray,
            backgroundColor: 'rgba(74, 144, 226, 0.68)'
          }
        ]
      }
    });
  }

  render() {
    let chartData;
    this.props.today
      ? (chartData = (
          <ChartContainer>
            <Bar
              redraw={true}
              data={this.state.chartData}
              options={this.state.options}
            />
          </ChartContainer>
        ))
      : (chartData = (
          <ChartContainer>
            <Bar data={this.state.chartData} options={this.state.options} />
          </ChartContainer>
        ));

    return (
      <ComponentBackground>
        <FlexColumn>
          <h3>This week's practice</h3>
          {chartData}
        </FlexColumn>
      </ComponentBackground>
    );
  }
}
function mapStateToProps({ weekChartArray }) {
  return {
    weekChartArray
  };
}

export default connect(mapStateToProps, actions)(WeekChart);

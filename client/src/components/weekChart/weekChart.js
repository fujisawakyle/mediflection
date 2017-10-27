import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import styled from 'styled-components';

import * as actions from '../../actions';
const Container = styled.div`width: 100%;`;

defaults.global.defaultFontFamily = 'Bungee Hairline, cursive';
defaults.global.responsive = true;

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
            data: this.props.chartArray,
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
    console.log('nextProps', nextProps);
    this.setState({
      chartData: {
        labels: [days[0], days[1], days[2], days[3], days[4], days[5], days[6]],
        datasets: [
          {
            label: 'minutes',
            data: nextProps.chartArray,
            backgroundColor: 'rgba(74, 144, 226, 0.68)'
          }
        ]
      }
    });
  }

  render() {
    console.log('chartArray', this.props.chartArray);
    let chartData;
    if (this.props.today) {
      console.log('today');
      chartData = (
        <div>
          <Bar
            redraw={true}
            data={this.state.chartData}
            options={this.state.options}
          />
        </div>
      );
    } else {
      chartData = (
        <div>
          <Bar data={this.state.chartData} options={this.state.options} />
        </div>
      );
    }
    return (
      <Container>
        <h3 className="testingkyle">This week's practice</h3>
        {chartData}
      </Container>
    );
  }
}
function mapStateToProps({ chartArray }) {
  return {
    chartArray
  };
}

export default connect(mapStateToProps, actions)(WeekChart);

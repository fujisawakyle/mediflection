import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import Reflection from './Reflection/Reflection';
import ShowDate from './ShowDate/ShowDate';
import Meditation from './Meditation/Meditation';
import WeekChart from './WeekChart/WeekChart';

import {
  FlexColumn,
  ComponentBackground,
  MediaFlex,
  ComponentColumn,
  ComponentColumn2,
  LoginScreenContainer
} from '../styles/layout';

import '../styles/globalStyle';

import googleLogo from '../images/google-white.png';

const today = String(new Date()).slice(0, 15);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDate: String(new Date()).slice(0, 15),
      today: true,
      showInput: true,
      chartArray: [],
      style: 0
    };
  }
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchMediflections(() => {
      this.clickDay(new Date());
      this.props.updateDaysArray(
        _.keys(this.props.mediflections).map(date => new Date(date))
      );
      this.generateChartDatesArray(
        this.props.mediflections,
        this.props.daysArray
      );
    });
  }

  clickDay = date => {
    date = String(date).slice(0, 15);

    if (today === date) {
      this.setState({ today: true, showInput: true });
    } else {
      this.setState({ today: false, showInput: false });
    }

    this.setState({
      showDate: date
    });
    this.props.fetchMediflection(date, this.props.mediflections[date]);
  };

  generateChartDatesArray = (mediflections, daysArray) => {
    const chartArray = [0, 0, 0, 0, 0, 0, 0];
    daysArray = daysArray.toString().split(',');

    for (let i = 0; i < 7; i++) {
      let weekDay = new Date();
      weekDay.setHours(0, 0, 0, 0);
      weekDay.setDate(weekDay.getDate() - weekDay.getDay() + i);
      weekDay = String(weekDay);
      let indexSearch = daysArray.indexOf(weekDay);

      if (indexSearch >= 0) {
        chartArray[i] = mediflections[weekDay.slice(0, 15)].time;
      }
    }
    this.props.createChartArray(chartArray);
  };

  renderLogin() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <FlexColumn>
            <LoginScreenContainer>
              <h1>Welcome to Mediflection</h1>
              <h3>Track your meditation, track your reflection</h3>
              <br />
              <a href="/auth/google">
                <img src={googleLogo} width="160" alt="Google" />
              </a>
            </LoginScreenContainer>
          </FlexColumn>
        );
      default:
        return;
    }
  }

  renderContent() {
    if (
      this.props.user &&
      !_.isEmpty(this.props.selectedMediflection) &&
      this.props.chartArray.length > 0
    ) {
      return (
        <FlexColumn>
          <div>
            <ShowDate today={this.state.today} date={this.state.showDate} />
          </div>
          <MediaFlex>
            <ComponentColumn>
              <Calendar
                daysArray={this.props.daysArray}
                clickDay={this.clickDay}
              />
              <WeekChart today={this.state.today} />
            </ComponentColumn>
            <ComponentColumn2>
              <Meditation
                today={this.state.today}
                showInput={this.state.showInput}
                selectedMediflection={this.props.selectedMediflection}
              />
              <Reflection
                selectedMediflection={this.props.selectedMediflection}
              />
            </ComponentColumn2>
          </MediaFlex>
        </FlexColumn>
      );
    } else if (!this.props.user) {
      return <div />;
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }

  shiftStyle = () => {
    if (this.state.style === 1) {
      this.setState({ style: 0 });
    } else {
      this.setState({ style: this.state.style + 1 });
    }
  };

  render() {
    return (
      <div>
        <Header />
        {this.renderLogin()}
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({
  user,
  mediflections,
  selectedMediflection,
  daysArray,
  chartArray
}) {
  return {
    user,
    mediflections,
    selectedMediflection,
    daysArray,
    chartArray
  };
}

export default connect(mapStateToProps, actions)(App);

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
  ComponentsContainer,
  ComponentColumn,
  ComponentColumn2
} from '../styles/layoutStyles';

import {
  LoginScreenContainer,
  Loading,
  GoogleLogo
} from '../styles/loginStyles';

import '../styles/globalStyle';

import googleLogo from '../images/google-white.png';

const today = String(new Date()).slice(0, 15);

class App extends Component {
  state = {
    showDate: today,
    today: true,
    showInput: true,
    chartArray: [],
    style: 0
  };
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchMediflections(() => {
      this.clickCalendarDate(new Date());
      this.props.updateCalendarDaysArray(
        _.keys(this.props.mediflections).map(date => new Date(date))
      );
      this.generateWeekChartArray(
        this.props.mediflections,
        this.props.calendarDaysArray
      );
    });
  }

  clickCalendarDate = date => {
    date = String(date).slice(0, 15);

    today === date
      ? this.setState({ today: true, showInput: true })
      : this.setState({ today: false, showInput: false });

    this.props.fetchMediflection(date, this.props.mediflections[date]);

    this.setState({
      showDate: date
    });
  };

  generateWeekChartArray = (mediflections, calendarDaysArray) => {
    const weekChartArray = [0, 0, 0, 0, 0, 0, 0];
    calendarDaysArray = calendarDaysArray.toString().split(',');

    //populate meditation times for last week to weekChartArray
    for (let i = 0; i < 7; i++) {
      let weekDay = new Date();
      weekDay.setHours(0, 0, 0, 0);
      weekDay.setDate(weekDay.getDate() - weekDay.getDay() + i);
      weekDay = String(weekDay);
      let indexSearch = calendarDaysArray.indexOf(weekDay);

      if (indexSearch >= 0) {
        weekChartArray[i] = mediflections[weekDay.slice(0, 15)].time;
      }
    }
    this.props.createWeekChartArray(weekChartArray);
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
              <h3>Track your meditations, track your reflections</h3>
              <a href="/auth/google">
                <GoogleLogo src={googleLogo} width="160" alt="Google" />
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
      this.props.weekChartArray.length > 0
    ) {
      return (
        <FlexColumn>
          <div>
            <ShowDate today={this.state.today} date={this.state.showDate} />
          </div>
          <ComponentsContainer>
            <ComponentColumn>
              <Calendar
                calendarDaysArray={this.props.calendarDaysArray}
                clickCalendarDate={this.clickCalendarDate}
              />
              <WeekChart today={this.state.today} />
            </ComponentColumn>
            <ComponentColumn2 className="c-site__component--timer">
              <Meditation
                today={this.state.today}
                showInput={this.state.showInput}
                selectedMediflection={this.props.selectedMediflection}
              />
              <Reflection
                selectedMediflection={this.props.selectedMediflection}
              />
            </ComponentColumn2>
          </ComponentsContainer>
        </FlexColumn>
      );
    } else if (!this.props.user) {
      return <div />;
    } else {
      return <Loading>Loading...</Loading>;
    }
  }

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
  calendarDaysArray,
  weekChartArray
}) {
  return {
    user,
    mediflections,
    selectedMediflection,
    calendarDaysArray,
    weekChartArray
  };
}

export default connect(mapStateToProps, actions)(App);

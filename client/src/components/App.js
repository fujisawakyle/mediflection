import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import Isvg from 'react-inlinesvg';

import Header from '../containers/Header/Header';
import Entry from './reflection/Entry';
import ShowDate from './ShowDate/ShowDate';
import Meditation from './meditation/Meditation';
import WeekChart from './weekChart/WeekChart';

import { ComponentsContainer } from '../styles/layout';

import '../styles/globalStyle';
import 'react-day-picker/lib/style.css';

const today = String(new Date()).slice(0, 15);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDate: String(new Date()).slice(0, 15),
      today: true,
      showInput: true,
      chartArray: []
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

    if (today == date) {
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
          <ComponentsContainer>
            <h1>Welcome to Mediflection</h1>
            <h4>Track your meditation, track your reflection</h4>

            <a href="/auth/google">
              <h4>Login with Google</h4>
            </a>
          </ComponentsContainer>
        );
    }
  }

  renderContent() {
    if (
      this.props.user &&
      !_.isEmpty(this.props.selectedMediflection) &&
      this.props.chartArray.length > 0
    ) {
      return (
        <ComponentsContainer>
          <h4>You are signed in</h4>
          <ShowDate date={this.state.showDate} />
          <DayPicker
            todayButton="current month"
            selectedDays={this.props.daysArray}
            onDayClick={date => this.clickDay(date)}
          />
          <h3>Entry</h3>
          <Entry selectedMediflection={this.props.selectedMediflection} />
          <Meditation
            today={this.state.today}
            showInput={this.state.showInput}
            selectedMediflection={this.props.selectedMediflection}
          />
          <WeekChart today={this.state.today} />
        </ComponentsContainer>
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

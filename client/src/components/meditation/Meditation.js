import React, { Component } from 'react';
import { connect } from 'react-redux';

import pluralize from 'pluralize';
import Sound from 'react-sound';

import ShowTracked from './showTracked';
import ShowRemaining from './ShowRemaining';

import {
  ComponentBackground,
  ComponentButton,
  ComponentTitle
} from '../../styles/layout';
import { Container, Input } from './Meditation.style';

import * as actions from '../../actions';

let timerStopped = false;

class Meditation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 60,
      logTime: 60,
      showInput: this.props.showInput,
      showTimer: false,
      startCountdown: false,
      timerDoneFlag: false,
      value: 1,
      timer: 0,
      time: this.props.selectedMediflection.time
    };
  }

  handleChange = event => {
    event.preventDefault();
    //set input lower bound to 1
    if (event.target.value < 1) {
      event.target.value = 1;
    }
    this.setState({
      value: event.target.value,
      seconds: event.target.value * 60
    });
  };

  startTimer = e => {
    e.preventDefault();
    this.setState({
      showTimer: true,
      showInput: false,
      startCountdown: true,
      timerDoneFlag: false,
      timeLeft: this.secondsToTime(this.state.value * 60)
    });
    this.handleSongStartPlaying();

    if (this.state.timer == 0) {
      this.state.timer = setInterval(this.countDown, 1000);
    }
  };

  continueTimer = e => {
    this.setState({
      startCountdown: true
    });
    e.preventDefault();
    if (this.state.timer == 0) {
      this.state.timer = setInterval(this.countDown, 1000);
    }
  };

  pauseTimer = e => {
    clearInterval(this.state.timer);
    this.state.timer = 0;
    this.setState({
      startCountdown: false
    });
  };

  exitTimer = e => {
    this.handleSongFinishedPlaying();
    clearInterval(this.state.timer);
    this.state.timer = 0;
    this.setState({
      showTimer: false,
      startCountdown: false,
      showInput: true,
      logTime: 60
    });
    timerStopped = true;
  };

  handleSongStartPlaying = () => {
    this.setState({
      playStatus: Sound.status.PLAYING
    });
  };

  handleSongFinishedPlaying = () => {
    this.setState({
      playStatus: Sound.status.STOPPED
    });
  };

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let log = this.state.logTime - 1;
    this.setState({
      timeLeft: this.secondsToTime(seconds),
      seconds: seconds,
      logTime: log
    });

    // Check if the session is done.
    if (seconds === 0) {
      clearInterval(this.state.timer);
      this.setState({
        timerDoneFlag: true,
        playStatus: Sound.status.PLAYING
      });
      // this.handleSongStartPlaying();
    }

    //log time every 1 minute
    if (log === 0) {
      this.setState({
        logTime: 60,
        time: this.state.time + 1
      });

      //log database
      const updatedMediflection = this.props.selectedMediflection;
      updatedMediflection.time = this.state.time;
      this.props.updateMediflection(updatedMediflection);
      this.props.updateDaysArray([
        new Date(this.props.selectedMediflection.date)
      ]);
      this.props.updateChartArray(this.props.selectedMediflection.time);
    }
  };

  render() {
    const { time } = this.props.selectedMediflection;

    let minutesInput = ' minute';
    if (this.state.value != 1) {
      minutesInput = ' minutes';
    }

    let timeInput;
    if (this.state.showInput && this.props.today) {
      timeInput = (
        <div className="clockBox">
          <Input
            className="component component__field component__field--timer"
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
          {minutesInput}
        </div>
      );
    } else {
      timeInput = <div> </div>;
    }

    let buttonDisplay;
    const startButton = (
      <ComponentButton className="button startButton" onClick={this.startTimer}>
        Start
      </ComponentButton>
    );
    const continueButton = (
      <ComponentButton
        className="button continueButton"
        onClick={this.continueTimer}
      >
        Continue
      </ComponentButton>
    );
    const exitButton = (
      <ComponentButton
        className="button timer__exit timer__exit--active"
        onClick={this.exitTimer}
      >
        X
      </ComponentButton>
    );
    const pauseButton = (
      <ComponentButton className="button" onClick={this.pauseTimer}>
        Pause
      </ComponentButton>
    );
    if (this.props.today) {
      //CASE: timer in session - check for finished
      if (this.state.startCountdown && this.state.showTimer) {
        // console.log(' 1');
        if (this.state.timerDoneFlag) {
          buttonDisplay = <div>{exitButton}</div>;
        } else {
          buttonDisplay = (
            <div>
              {pauseButton} {exitButton}
            </div>
          );
        }
        // CASE: timer has not started
      } else if (!this.state.startCountdown && !this.state.showTimer) {
        buttonDisplay = <div>{startButton}</div>;
        // CASE: timer is paused
      } else if (!this.state.startCountdown && this.state.showTimer) {
        buttonDisplay = (
          <div>
            {continueButton} {exitButton}
          </div>
        );
      }
    }

    return (
      <Container>
        <ComponentTitle>Meditation</ComponentTitle>
        <ShowTracked time={time} />
        {timeInput}
        {this.state.showTimer && (
          <ShowRemaining
            hours={this.state.timeLeft.h}
            minutes={this.state.timeLeft.m}
            seconds={this.state.timeLeft.s}
            logTime={this.state.logTime}
          />
        )}
        {buttonDisplay}
        <Sound
          url="sessionBell.mp3"
          playStatus={this.state.playStatus}
          playFromPosition={0 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </Container>
    );
  }
}

function mapStateToProps({ selectedMediflection }) {
  return {
    selectedMediflection
  };
}

Meditation = connect(mapStateToProps, actions)(Meditation);

export default Meditation;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sound from 'react-sound';

import ShowTracked from './showTracked';
import ShowRemaining from './ShowRemaining';

import { ComponentButton, ComponentTitle } from '../../styles/layoutStyles';
import { Container, Input } from './Meditation.style';

import * as actions from '../../actions';

class Meditation extends Component {
  state = {
    seconds: 60,
    logTime: 60,
    showInput: this.props.showInput,
    showTimer: false,
    startCountdown: false,
    timerDone: false,
    value: 1,
    timer: 0,
    time: this.props.selectedMediflection.time
  };

  handleChange = e => {
    e.preventDefault();
    //set input lower bound to 1
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    this.setState({
      value: e.target.value,
      seconds: e.target.value * 60
    });
  };

  startTimer = e => {
    e.preventDefault();

    this.handleSongStartPlaying();

    this.setState({
      showTimer: true,
      showInput: false,
      startCountdown: true,
      timerDone: false,
      timeLeft: this.secondsToTime(this.state.value * 60),
      seconds: this.state.value * 60
    });

    if (this.state.timer === 0) {
      this.setState({
        timer: setInterval(this.countDown, 1000)
      });
    }
  };

  continueTimer = e => {
    e.preventDefault();

    this.setState({
      startCountdown: true
    });

    if (this.state.timer === 0) {
      this.setState({
        timer: setInterval(this.countDown, 1000)
      });
    }
  };

  pauseTimer = e => {
    e.preventDefault();

    clearInterval(this.state.timer);

    this.setState({
      startCountdown: false,
      timer: 0
    });
  };

  exitTimer = e => {
    e.preventDefault();

    this.handleSongFinishedPlaying();

    clearInterval(this.state.timer);
    this.setState({
      timer: 0,
      showTimer: false,
      startCountdown: false,
      showInput: true,
      logTime: 60
    });
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
    let seconds = this.state.seconds - 1;
    let log = this.state.logTime - 1;
    this.setState({
      timeLeft: this.secondsToTime(seconds),
      seconds: seconds,
      logTime: log
    });

    //log time every 1 minute
    if (log === 0) {
      this.setState({
        logTime: 60,
        time: this.state.time + 1
      });
      const updatedMediflection = this.props.selectedMediflection;
      updatedMediflection.time = this.state.time;

      this.props.updateMediflection(updatedMediflection);
      this.props.updateCalendarDaysArray([
        new Date(this.props.selectedMediflection.date)
      ]);
      this.props.updateWeekChartArray(this.props.selectedMediflection.time);
    }

    // Check if the session is done.
    if (seconds === 0) {
      clearInterval(this.state.timer);

      this.handleSongStartPlaying();

      this.setState({
        timerDone: true
      });
    }
  };

  render() {
    let minutesInput = ' minute';
    if (this.state.value !== 1) {
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
      <ComponentButton onClick={this.startTimer}>Start</ComponentButton>
    );
    const continueButton = (
      <ComponentButton onClick={this.continueTimer}>Continue</ComponentButton>
    );
    const exitButton = (
      <ComponentButton onClick={this.exitTimer}>X</ComponentButton>
    );
    const pauseButton = (
      <ComponentButton onClick={this.pauseTimer}>Pause</ComponentButton>
    );
    if (this.props.today || this.state.showTimer) {
      //CASE: timer in session - check for finished
      if (this.state.startCountdown && this.state.showTimer) {
        //CASE: timer is done
        if (this.state.timerDone) {
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
        <ShowTracked time={this.props.selectedMediflection.time} />
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

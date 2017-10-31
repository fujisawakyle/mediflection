import React, { Component } from 'react';

import { TimeRemaining } from './Meditation.style';

export default class ShowRemaining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: this.props.hours,
      minutes: this.props.minutes,
      seconds: this.props.seconds
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        hours: nextProps.hours,
        minutes: nextProps.minutes,
        seconds: nextProps.seconds
      });
    }
  }

  render() {
    let seconds = this.state.seconds;
    if (seconds === 0) {
      seconds = '00';
    } else if (seconds < 10) {
      seconds = '0' + seconds;
    }

    let showRemaining;

    if (
      this.state.hours === 0 &&
      this.state.minutes === 0 &&
      this.state.seconds === 0
    ) {
      showRemaining = 'Session over';
    } else if (this.state.hours === 0) {
      showRemaining = `${this.state.minutes}:${seconds}`;
    } else {
      showRemaining = `${this.state.hours}:${this.state.minutes}:${this.state
        .seconds}`;
    }
    return <TimeRemaining>{showRemaining}</TimeRemaining>;
  }
}

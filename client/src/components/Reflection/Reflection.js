import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import {
  FlexColumn,
  ComponentBackground,
  ComponentButton,
  ComponentTitle
} from '../../styles/layoutStyles';

import { Text, ReflectionComponent, Message } from './Reflection.style';

class Entry extends Component {
  state = {
    entry: this.props.selectedMediflection.entry,
    message: ''
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ entry: nextProps.selectedMediflection.entry });
  }

  handleChange = event => {
    this.setState({
      entry: event.target.value
    });
  };

  update = entry => {
    const updatedMediflection = this.props.selectedMediflection;
    updatedMediflection.entry = entry;
    this.props.updateMediflection(updatedMediflection);
    this.props.updateCalendarDaysArray([
      new Date(this.props.selectedMediflection.date)
    ]);
    this.setState({ message: 'Saved!' });
    setTimeout(
      function() {
        this.setState({ message: '' });
      }.bind(this),
      1000
    );
  };
  render() {
    return (
      <ReflectionComponent>
        <FlexColumn>
          <ComponentTitle>Reflection</ComponentTitle>
          <Text
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.entry}
            placeholder="Today's meditation was:"
          />
          <Message>{this.state.message}</Message>
          <ComponentButton
            onClick={() => this.update(this.state.entry)}
            type="submit"
          >
            Submit
          </ComponentButton>
        </FlexColumn>
      </ReflectionComponent>
    );
  }
}

function mapStateToProps({ selectedMediflection, daysArray }) {
  return {
    selectedMediflection,
    daysArray
  };
}

Entry = connect(mapStateToProps, actions)(Entry);

export default Entry;

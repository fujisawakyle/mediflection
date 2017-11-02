import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import {
  FlexColumn,
  ComponentBackground,
  ComponentButton,
  ComponentTitle
} from '../../styles/layoutStyles';

import { Text } from './Reflection.style';

class Entry extends Component {
  state = {
    entry: this.props.selectedMediflection.entry
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
  };
  render() {
    return (
      <ComponentBackground>
        <FlexColumn>
          <ComponentTitle>Reflection</ComponentTitle>
          <Text
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.entry}
            placeholder="Today's meditation was:"
          />
          <ComponentButton
            onClick={() => this.update(this.state.entry)}
            type="submit"
          >
            Submit
          </ComponentButton>
        </FlexColumn>
      </ComponentBackground>
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

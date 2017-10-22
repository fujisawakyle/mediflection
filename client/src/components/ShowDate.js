import React, { Component } from 'react';
import { Container } from '../layout';

class ShowDate extends Component {
  render() {
    return (
      <Container>
        <h4> {this.props.date}</h4>
      </Container>
    );
  }
}

export default ShowDate;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { HeaderStyle } from '../layout';

import * as actions from '../actions';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
`;

class Header extends Component {
  renderUserStatus() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <div>
            <a href="/auth/google">Login With Google</a>
          </div>
        );
      default:
        return (
          <div>
            <a href="/api/logout">Logout</a>
          </div>
        );
    }
  }
  render() {
    return (
      <HeaderStyle>
        <Title>Mediflection</Title>
        {this.renderUserStatus()}
      </HeaderStyle>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(Header);

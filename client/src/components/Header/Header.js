import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderContainer, HeaderTitle, HeaderButton } from './Header.style';

import * as actions from '../../actions';

class Header extends Component {
  renderUserStatus() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return <div />;
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
      <HeaderContainer>
        <HeaderTitle>Mediflection</HeaderTitle>
        <HeaderButton>{this.renderUserStatus()}</HeaderButton>
      </HeaderContainer>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Header extends Component {
  navbarLinks() {
    if (this.props.authenticated) {
      return (
        <Nav>
          <NavItem><NavLink to="/signout" tag={RRNavLink}>Sign out</NavLink></NavItem>
        </Nav>
      );
    }
    return (
      <Nav>
        <NavItem><NavLink to="/signin" tag={RRNavLink}>Sign in</NavLink></NavItem>
      </Nav>
    );
  }

  render() {
    return (
      <Navbar>
        <Container>
          <NavbarBrand><NavLink to="/" tag={RRNavLink}>Home</NavLink></NavbarBrand>
          {this.navbarLinks()}
        </Container>
      </Navbar>

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Header);

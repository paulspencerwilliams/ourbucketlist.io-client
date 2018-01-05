import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navbar extends Component {
  navbarLinks() {
    if (this.props.authenticated) {
      return (
        <ul>
          <li key="homepage"><Link to="/homepage">Homepage</Link></li>
          <li key="signout"><Link to="/signout">Sign out</Link></li>
        </ul>
      );
    }
    return (
      <ul>
        <li key="signin"><Link to="/signin">Sign in</Link></li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/"><span className="brand">ourbucketlist</span></Link>
          <ul>
            {this.navbarLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Navbar);

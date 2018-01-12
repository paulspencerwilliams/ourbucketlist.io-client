import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOutAction } from '../../actionCreators/auth';

class SignOut extends Component {
  componentDidMount() {
    this.props.signOutAction();
  }

  render() {
    return (
      <p>You have successfully signed out.</p>
    );
  }
}

SignOut.propTypes = {
  signOutAction: PropTypes.func.isRequired,
};

export default connect(null, { signOutAction })(SignOut);

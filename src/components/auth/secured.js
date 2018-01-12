import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (WrappedComponent) {
  class Protected extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  Protected.propTypes = {
    history: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired,
  };

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Protected);
}

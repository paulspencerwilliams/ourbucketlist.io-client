import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveRecommendationAction } from '../actionCreators/recommendation';

class Recommendation extends Component {
  componentDidMount() {
    this.props.retrieveRecommendationAction();
  }

  render() {
    return (
      this.props.recommendation
        ? <p>{this.props.recommendation.action}</p>
        : <p>Not yet retrieved</p>
    );
  }
}
Recommendation.defaultProps = {
  recommendation: null,
};

Recommendation.propTypes = {
  retrieveRecommendationAction: PropTypes.func.isRequired,
  recommendation: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    recommendation: state.recommendation.recommendation,
    errorMessage: state.recommendation.error,
  };
}

export default connect(mapStateToProps, { retrieveRecommendationAction })(Recommendation);

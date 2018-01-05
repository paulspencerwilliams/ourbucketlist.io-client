import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signInAction } from '../../actionCreators/auth';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    this.props.signInAction(values, this.props.history);
  }

  errorMessage() {
    return (
      this.props.errorMessage
        ? <div>{this.props.errorMessage} </div>
        : null
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <div className="container">
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit(this.submit)}>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign In</button>
          </form>
          {this.errorMessage()}
        </div>
      </div>
    );
  }
}

Signin.defaultProps = {
  errorMessage: null,
};

Signin.propTypes = {
  signInAction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
  form: 'signin',
})(Signin);

export default connect(mapStateToProps, { signInAction })(reduxFormSignin);

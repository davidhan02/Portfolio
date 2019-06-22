import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitLogin } from '../../actions/auth';
import { clearError } from '../../actions/error';
import Login from './Component';

class LoginContainer extends Component {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  redirectIfLoggedIn() {
    const { token, history } = this.props;
    if (token) history.push('/dashboard');
  }

  onSubmit = formValues => {
    this.props.submitLogin(formValues);
  };

  render() {
    const { handleSubmit, loading } = this.props;
    return <Login loading={loading} handleSubmit={handleSubmit(this.onSubmit)} />;
  }
}

const mapStateToProps = ({ auth }) => ({
  token: auth.token,
  loading: auth.loading
});

const mapDispatchToProps = { submitLogin, clearError };

const enhance = compose(
  reduxForm({ form: 'login' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(LoginContainer);

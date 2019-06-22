import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitRegister, clearError } from '../../actions/auth';
import Register from './Component';
import validate from './validate';

class RegisterContainer extends Component {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    const { token, history } = this.props;
    if (token) history.push('/dashboard');
  }

  onSubmit = formValues => {
    this.props.submitRegister(formValues);
  };

  render() {
    const { handleSubmit, loading } = this.props;
    return <Register loading={loading} handleSubmit={handleSubmit(this.onSubmit)} />;
  }
}

const mapStateToProps = ({ auth }) => ({
  token: auth.token,
  loading: auth.loading
});

const mapDispatchToProps = { submitRegister, clearError };

const enhance = compose(
  reduxForm({ form: 'register', validate }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(RegisterContainer);

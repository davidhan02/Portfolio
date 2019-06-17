import React, { Component } from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import ServerError from '../shared/ServerError';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

import { usernameValidator, passwordValidator } from '../../util/validators';

class Register extends Component {
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
    const { history, isAuthenticated } = this.props;
    if (isAuthenticated) history.push('/dashboard');
  }

  onSubmit = formValues => {
    this.props.submitRegister(formValues);
  };

  render() {
    const { error, handleSubmit, loading } = this.props;
    return (
      <Form loading={loading} onSubmit={handleSubmit(this.onSubmit)} wide>
        <Field
          type="text"
          name="username"
          label="username"
          component={renderField}
          validate={usernameValidator}
        />
        <Field
          type="password"
          name="password"
          label="password"
          component={renderField}
          validate={passwordValidator}
        />
        <Field
          type="password"
          name="password2"
          label="confirm password"
          component={renderField}
          validate={passwordValidator}
        />
        {error && <ServerError>{error.msg}</ServerError>}
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    );
  }
}

export default Register;

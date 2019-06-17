import React, { Component } from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import ServerError from '../shared/ServerError';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';
import { usernameValidator, passwordValidator } from '../../util/validators';

class Login extends Component {
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
    if (token) history.push('/');
  }

  onSubmit = formValues => {
    this.props.submitLogin(formValues);
  };

  render() {
    const { error, handleSubmit, loading } = this.props;
    return (
      <Form loading={loading} onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          type="username"
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
        {error && <ServerError>{error.message}</ServerError>}
        <SubmitButton type="submit">Log in</SubmitButton>
      </Form>
    );
  }
}

export default Login;

import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';
import { usernameValidator, passwordValidator } from '../../util/validators';

const Login = ({ loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit}>
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
    <SubmitButton type="submit">Log in</SubmitButton>
  </Form>
);

export default Login;

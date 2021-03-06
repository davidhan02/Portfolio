import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';
import { usernameValidator, passwordValidator } from '../../util/validators';

const Register = ({ loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit} wide>
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
    <Field
      type="password"
      name="adminKey"
      label="admin key"
      component={renderField}
    />
    <SubmitButton type="submit">Register</SubmitButton>
  </Form>
);

export default Register;

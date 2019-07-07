import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const CertForm = ({ loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit} wide>
    <Field
      type="text"
      name="title"
      label="title"
      placeholder="Full Stack Developer, Web Technician, etc..."
      component={renderField}
    />
    <Field type="date" name="issued" label="issued" component={renderField} />
    <Field
      type="text"
      name="from"
      label="from"
      placeholder="Udemy, freeCodeCamp, Coursera, etc..."
      component={renderField}
    />
    <Field
      type="url"
      name="url"
      label="url"
      placeholder="https://www.freecodecamp.org/certification..."
      component={renderField}
    />
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);

export default CertForm;

import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const LinksForm = ({ loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit} wide>
    <Field
      type="url"
      name="linkedin"
      label="linkedin"
      placeholder="https://linkedin.com/..."
      component={renderField}
    />
    <Field
      type="url"
      name="github"
      label="github"
      placeholder="https://github.com/..."
      component={renderField}
    />
    <Field
      type="url"
      name="instagram"
      label="instagram"
      placeholder="https://instagram.com/..."
      component={renderField}
    />
    <Field
      type="url"
      name="glitch"
      label="glitch"
      placeholder="https://glitch.me/..."
      component={renderField}
    />
    <Field
      type="url"
      name="codepen"
      label="codepen"
      placeholder="https://codepen.io/..."
      component={renderField}
    />
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);

export default LinksForm;

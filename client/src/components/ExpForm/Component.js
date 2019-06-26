import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';
import currentOpts from '../../util/currentOpts';

const ExpForm = ({ form, loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit} wide>
    <Field
      type="radiogroup"
      name="current"
      label="current"
      component={renderField}
      options={currentOpts}
    />
    <Field
      type="text"
      name="company"
      label="company"
      placeholder="Company name"
      component={renderField}
    />
    <Field type="date" name="from" label="from" component={renderField} />
    {form.values.current === 'false' && (
      <Field type="date" name="to" label="to" component={renderField} />
    )}
    <Field
      type="text"
      name="title"
      label="title"
      placeholder="Developer, CPA, Intern, etc..."
      component={renderField}
    />
    <Field
      type="text"
      name="location"
      label="location"
      placeholder="San Francisco, CA"
      component={renderField}
    />
    <Field
      type="textarea"
      name="description"
      label="description"
      placeholder="Describe what you worked on and your time here"
      component={renderField}
    />
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);

export default ExpForm;

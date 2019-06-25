import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const currentOpts = [
  {
    label: 'yes',
    value: 'true'
  },
  {
    label: 'no',
    value: 'false'
  }
];

const EduForm = ({ loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit} wide>
    <Field
      type="text"
      name="school"
      label="school"
      placeholder="Santa Clara University"
      component={renderField}
    />
    <Field
      type="text"
      name="degree"
      label="degree"
      placeholder="Bachelors, Masters, None, etc..."
      component={renderField}
    />
    <Field
      type="text"
      name="major"
      label="major"
      placeholder="Biology, Computer Science, etc..."
      component={renderField}
    />
    <Field
      type="text"
      name="categories"
      label="categories"
      placeholder="HTML, CSS, JavaScript, etc..."
      component={renderField}
    />
    <Field type="date" name="from" label="from" component={renderField} />
    <Field type="date" name="to" label="to" component={renderField} />
    <Field
      type="radiogroup"
      name="current"
      label="current"
      component={renderField}
      options={currentOpts}
    />
    <Field
      type="textarea"
      name="description"
      label="description"
      placeholder="Describe what you studied and your time here"
      component={renderField}
    />
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);

export default EduForm;

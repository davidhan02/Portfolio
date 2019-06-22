import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const ProjectForm = ({ loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit} wide>
    <Field type="text" name="title" label="title" component={renderField} />
    <Field type="text" name="url" label="link" component={renderField} />
    <Field type="text" name="code" label="code" component={renderField} />
    <Field type="text" name="categories" label="skills" component={renderField} />
    <Field type="text" name="text" label="description" component={renderField} />
    <Field type="date" name="created" label="created" component={renderField} />
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);

export default ProjectForm;

import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const ProjectForm = ({ loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit} wide>
    <Field
      type="text"
      name="title"
      label="title"
      placeholder="Project Title"
      component={renderField}
    />
    <Field type="date" name="created" label="created" component={renderField} />
    <Field
      type="text"
      name="url"
      label="link"
      placeholder="Link to the project"
      component={renderField}
    />
    <Field
      type="text"
      name="code"
      label="code"
      placeholder="Link to the project's code"
      component={renderField}
    />
    <Field
      type="textarea"
      rows={3}
      name="categories"
      label="categories"
      placeholder="HTML, CSS, JavaScript, etc..."
      component={renderField}
    />
    <Field
      type="textarea"
      name="text"
      label="description"
      placeholder="Describe the details of the project"
      component={renderField}
    />
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);

export default ProjectForm;

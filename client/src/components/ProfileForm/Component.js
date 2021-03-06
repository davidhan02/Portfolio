import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const ProfileForm = ({ loading, handleSubmit }) => (
  <Form loading={loading} onSubmit={handleSubmit} wide>
    <Field
      type="text"
      name="name"
      label="name"
      placeholder="Full name"
      component={renderField}
    />
    <Field
      type="text"
      name="email"
      label="email"
      placeholder="johndoe@gmail.com"
      component={renderField}
    />
    <Field
      type="date"
      name="birthday"
      label="date of birth"
      component={renderField}
    />
    <Field
      type="text"
      name="status"
      label="current status"
      placeholder="Developer, Student, Manager, etc..."
      component={renderField}
    />
    <Field
      type="text"
      name="company"
      label="company"
      placeholder="ABCD Financial Consultants"
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
      type="text"
      name="number"
      label="number"
      placeholder="123 - 456 - 7890"
      component={renderField}
    />
    <Field
      type="text"
      name="hours"
      label="work hours"
      placeholder="Mon - Fri, 9am - 5pm"
      component={renderField}
    />
    <Field
      type="url"
      name="photo"
      label="photo"
      placeholder="https://your-photo-url-here..."
      component={renderField}
    />
    <Field
      type="textarea"
      rows={3}
      name="skills"
      label="skills"
      placeholder="HTML, CSS, JavaScript, etc..."
      component={renderField}
    />
    <Field
      type="textarea"
      name="bio"
      label="description"
      placeholder="Write information about yourself here"
      component={renderField}
    />
    <SubmitButton type="submit">Submit</SubmitButton>
  </Form>
);

export default ProfileForm;

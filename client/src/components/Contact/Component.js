import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';
import ContactHeader from './Header';

const Contact = ({ loading, profile, handleSubmit }) => (
  <>
    {profile && <ContactHeader profile={profile} />}
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
        placeholder="Email for response"
        component={renderField}
      />
      <Field
        type="text"
        name="subject"
        label="subject"
        placeholder="Message subject"
        component={renderField}
      />
      <Field
        type="textarea"
        name="body"
        label="body"
        placeholder="What can I help you with?"
        component={renderField}
      />
      <SubmitButton type="submit">Contact Me</SubmitButton>
    </Form>
  </>
);

export default Contact;

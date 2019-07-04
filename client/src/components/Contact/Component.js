import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

import styled from 'styled-components/macro';

const ContactHeader = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 24px;
  line-height: 30px;
  padding: 18px 0;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.foreground};
  border-radius: 2px;
  @media (max-width: 600px) {
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
`;

const HeaderRow = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 24px;
`;

const HeaderLabel = styled.span`
  margin-right: 50px;
  text-transform: uppercase;
  color: ${props => props.theme.mutedText};
`;

const HeaderContent = styled.span`
  font-size: 15px;
  letter-spacing: 0.02rem;
  color: ${props => props.theme.normalText};
`;

const Contact = ({ loading, handleSubmit }) => (
  <>
    <ContactHeader>
      <HeaderRow>
        <HeaderLabel>number: </HeaderLabel>
        <HeaderContent>650 - 815- 9091</HeaderContent>
      </HeaderRow>
      <HeaderRow>
        <HeaderLabel>available: </HeaderLabel>
        <HeaderContent>Mon - Fri, 9am - 5pm</HeaderContent>
      </HeaderRow>
      <HeaderRow>
        <HeaderLabel>email: </HeaderLabel>
        <HeaderContent>davidhan.5.25@gmail.com</HeaderContent>
      </HeaderRow>
      <HeaderRow>
        <HeaderLabel>location: </HeaderLabel>
        <HeaderContent>Santa Clara, California</HeaderContent>
      </HeaderRow>
    </ContactHeader>
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

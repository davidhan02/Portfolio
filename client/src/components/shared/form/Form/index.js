import React from 'react';
import FormWrapper from './Wrapper';
import styled from 'styled-components/macro';
import { transition } from '../../../../styles/helpers';
import LoadingSpinner from '../Loading/Spinner';

const StyledForm = styled.form`
  ${transition('filter')};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${props =>
    props.loading &&
    'pointer-events: none; filter: blur(5px) opacity(0.6) grayscale(0.5)'};
`;

const Form = ({ className, wide, ...props }) => (
  <FormWrapper className={className} wide={wide}>
    <StyledForm {...props} />
    {props.loading && <LoadingSpinner />}
  </FormWrapper>
);

export default Form;

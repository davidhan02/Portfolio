import React from 'react';
import styled from 'styled-components';
import { transition, wideFont } from '../../../../styles/helpers';

const Label = styled.label`
  ${wideFont};
  ${transition('color', 'background-color')};

  border: 1px solid ${props => props.theme.accent};
  color: ${props => (props.active ? '#ffffff' : props.theme.accent)};
  background: ${props => (props.active ? props.theme.accent : 'transparent')};

  width: 100%;
  padding: 8px;
  display: block;
  flex: 1 1 100%;
  cursor: pointer;
  text-align: center;
  outline: 0;

  :first-of-type {
    border-radius: 3px 0 0 3px;
  }
  :last-of-type {
    border-radius: 0 3px 3px 0;
  }
  :not(:first-of-type) {
    border-left: 0;
  }
  @media (hover: hover) {
    :hover {
      color: #ffffff;
      background: ${props => props.theme.accent};
    }
  }
`;

const RadioGroupOption = props => (
  <>
    <input
      type="radio"
      name="radiogroup"
      id={props.value}
      onChange={props.onClick}
    />
    <Label htmlFor={props.value} active={props.active}>
      {props.label}
    </Label>
  </>
);

export default RadioGroupOption;

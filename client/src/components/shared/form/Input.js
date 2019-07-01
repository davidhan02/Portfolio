import styled from 'styled-components/macro';
import { transition } from '../helpers';

const Input = styled.input`
  ${transition('border', 'box-shadow')};

  --border: ${props => (props.error ? props.theme.error : props.theme.accent)};
  --shadow: ${props =>
    props.error ? props.theme.error + '4d' : props.theme.accent + '4d'};

  ${props =>
    props.error
      ? `border: 1px solid var(--border)`
      : `border: 1px solid ${props.theme.border}`};

  display: block;
  width: 100%;
  padding: 8px;
  font-size: 15px;
  font-family: Roboto;
  resize: vertical;
  outline: none;
  appearance: none;
  border-radius: 3px;
  ${props => props.search && 'border-radius: 0 3px 3px 0'};
  color: ${props => props.theme.normalText};
  background-color: ${props => props.theme.inputBackground};

  :hover,
  :focus {
    border: 1px solid var(--border);
  }

  :focus {
    box-shadow: 0 0 0 2px var(--shadow);
  }
`;

export default Input;

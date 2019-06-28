import styled from 'styled-components/macro';
import { transition, wideFont } from '../shared/helpers';

const Button = styled.button`
  font-size: 14px;
  text-transform: uppercase;
  ${transition('filter', 'box-shadow')};

  border: none;
  border-radius: 3px;
  padding: 12px 18px;

  cursor: pointer;
  outline: none;

  color: #ffffff;
  background-color: ${props => props.theme.accent};

  :hover {
    filter: brightness(110%);
  }
  :active {
    filter: brightness(90%);
  }
  :focus {
    box-shadow: 0 0 0 2px ${props => props.theme.accent + '4d'};
  }
`;

export default Button;

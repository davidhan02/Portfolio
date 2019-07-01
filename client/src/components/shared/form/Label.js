import styled from 'styled-components/macro';
import { smallFont } from '../helpers';

const Label = styled.label`
  ${smallFont};

  display: block;
  margin-bottom: 8px;
  color: ${props => props.theme.mutedText};
  ${props =>
    props.search &&
    `
      margin: 0;
      padding: 10px 17px;
      font-size: 14px; 
      font-weight: 400;
      border: 1px solid ${props.theme.border};
      border-right: none;
      border-radius: 3px 0 0 3px;
      background: ${props.theme.foreground};
    `};
  @media (max-width: 575px) {
    ${props => props.search && 'display: none'};
  }
`;

export default Label;

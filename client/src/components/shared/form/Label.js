import styled from 'styled-components/macro';
import { smallFont } from '../helpers';

const Label = styled.label`
  ${smallFont};

  display: block;
  margin-bottom: 8px;
  color: ${props => props.theme.mutedText};
  ${props =>
    props.search && 'margin: 0 24px 0 0; font-size: 16px; font-weight: 400'};
  @media (max-width: 575px) {
    ${props => props.search && 'display: none'};
  }
`;

export default Label;

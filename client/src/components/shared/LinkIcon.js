import styled from 'styled-components/macro';
import { transition } from './helpers';

const LinkIcon = styled.svg`
  width: 24px;
  height: 24px;

  & path {
    ${transition('fill')};
    fill: ${props => props.theme.mutedText};
  }
`;

export default LinkIcon;

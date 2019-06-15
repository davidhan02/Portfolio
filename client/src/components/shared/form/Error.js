import styled from 'styled-components/macro';
import { fade, smallFont } from '../../../styles/helpers';

const Error = styled.span`
  ${fade};
  ${smallFont};

  position: absolute;
  top: 0;
  right: 0;
  color: ${props => props.theme.error};
`;

export default Error;

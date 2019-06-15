import styled from 'styled-components/macro';
import { fade, smallFont } from '../../styles/helpers';

const ServerError = styled.span`
  ${fade};
  ${smallFont};

  margin: 0 auto 10px;

  color: ${props => props.theme.error};
`;

export default ServerError;

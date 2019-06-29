import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from '../../../shared/helpers';

export const AuthLinks = styled.span`
  min-width: 90px;
  display: flex;
  justify-content: space-between;
`;

export const AuthLink = styled(Link)`
  ${link};
  font-size: 14px;
  text-transform: uppercase;
  color: ${props => props.theme.normalText};
`;

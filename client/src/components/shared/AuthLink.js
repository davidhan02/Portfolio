import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from './helpers';

export const AuthLinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;
`;

export const AuthLink = styled(Link)`
  ${link};
  font-size: 14px;
  text-transform: uppercase;
  color: ${props => props.theme.normalText};
`;

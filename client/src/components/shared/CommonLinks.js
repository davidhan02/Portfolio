import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const TitleLink = styled(Link)`
  color: ${props => props.theme.normalText};
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.accent};
  }
`;

export const DeleteLink = styled(TitleLink)`
  margin-left: auto;
  &:hover {
    color: ${props => props.theme.error};
  }
`;

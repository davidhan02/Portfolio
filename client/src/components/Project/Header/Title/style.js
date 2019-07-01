import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from '../../../shared/helpers';

export const BackLink = styled(Link)`
  ${link};
  min-width: 90px;
  font-size: 14px;
  @media (max-width: 575px) {
    display: none;
  }
`;

export const TitleLink = styled(Link)`
  font-size: 18px;
  color: ${props => props.theme.normalText};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.accent};
  }
`;

export const BigTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.normalText};
`;

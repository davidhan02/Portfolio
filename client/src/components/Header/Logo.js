import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { headerItem } from '../../styles/helpers';

const Logo = styled(Link)`
  ${headerItem};

  color: ${props => props.theme.normalText};

  font-size: 20px;
  font-weight: 500;
  margin-right: auto;
  text-decoration: none;

  @media (max-width: 425px) {
    padding: 0 8px 0 16px;
    font-size: 19px;
  }
`;

const HeaderLogo = () => <Logo to="/">HeaderLogo</Logo>;

export default HeaderLogo;

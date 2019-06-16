import React from 'react';
import styled from 'styled-components/macro';
import { headerItem } from '../../shared/helpers';
import NavDarkButtonIcon from './Icon';

const DarkButton = styled.span`
  ${headerItem};

  padding: 0 8px;
  cursor: pointer;

  @media (hover: hover) {
    :hover path {
      fill: ${props => props.theme.accent};
    }
  }
`;

const NavDarkButton = ({ onClick }) => (
  <DarkButton onClick={onClick}>
    <NavDarkButtonIcon />
  </DarkButton>
);

export default NavDarkButton;

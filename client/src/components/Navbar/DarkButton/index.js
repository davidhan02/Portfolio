import React from 'react';
import NavDarkButtonIcon from './Icon';
import { DarkButton } from '../style';

const NavDarkButton = ({ onClick }) => (
  <DarkButton onClick={onClick}>
    <NavDarkButtonIcon />
  </DarkButton>
);

export default NavDarkButton;

import React from 'react';
import { Button } from './style';
import ButtonIcon from './Icon';

const NavButton = ({ open, onClick }) => (
  <Button
    active={open}
    aria-expanded="false"
    aria-controls="nav-list"
    aria-label="Toggle navigation"
    onClick={onClick}
  >
    <ButtonIcon />
  </Button>
);

export default NavButton;

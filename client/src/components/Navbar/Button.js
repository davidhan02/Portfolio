import React from 'react';
import { Button } from './style';

const NavButton = ({ open, onClick }) => (
  <Button
    active={open}
    aria-expanded="false"
    aria-controls="nav-list"
    aria-label="Toggle navigation"
    onClick={onClick}
  >
    +
  </Button>
);

export default NavButton;

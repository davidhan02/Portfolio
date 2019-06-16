import React from 'react';
import { Button } from './style';

const NavButton = ({ open }) => (
  <Button
    active={open}
    aria-expanded="false"
    aria-controls="nav-list"
    aria-label="Toggle navigation"
  >
    +
  </Button>
);

export default NavButton;

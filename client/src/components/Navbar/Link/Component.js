import React from 'react';
import { ListItem, ListLink } from './style';

const NavLink = ({ to, label, text, onClick, closeMenu }) => (
  <ListItem onClick={onClick}>
    <ListLink exact to={to} aria-label={label} onClick={closeMenu}>
      {text}
    </ListLink>
  </ListItem>
);

export default NavLink;

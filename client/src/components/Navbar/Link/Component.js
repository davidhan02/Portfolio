import React from 'react';
import { ListItem, ListLink } from './style';

const NavLink = ({ to, exact, label, text, onClick, closeMenu }) => (
  <ListItem onClick={onClick}>
    <ListLink to={to} exact={exact} aria-label={label} onClick={closeMenu}>
      {text}
    </ListLink>
  </ListItem>
);

export default NavLink;

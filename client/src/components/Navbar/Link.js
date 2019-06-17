import React from 'react';
import { ListItem, ListLink } from './style';

const NavLink = ({ onClick, to, label, text }) => (
  <ListItem>
    <ListLink exact to={to} aria-label={label} onClick={onClick}>
      {text}
    </ListLink>
  </ListItem>
);

export default NavLink;

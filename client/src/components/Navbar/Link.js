import React from 'react';
import { ListItem, ListLink } from './style';

const NavLink = ({ to, label, text }) => (
  <ListItem>
    <ListLink to={to} aria-label={label}>
      {text}
    </ListLink>
  </ListItem>
);

export default NavLink;

import React from 'react';
import { List, ListContainer } from './style';

const NavList = ({ open, token, children }) => (
  <ListContainer id="nav-list" open={open} token={token}>
    <List>{children}</List>
  </ListContainer>
);

export default NavList;

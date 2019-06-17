import React from 'react';
import { List, ListContainer } from './style';

const NavList = ({ open, token, onClick, children }) => (
  <ListContainer id="nav-list" open={open} token={token}>
    <List onClick={onClick}>{children}</List>
  </ListContainer>
);

export default NavList;

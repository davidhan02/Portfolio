import React from 'react';
import { List, ListContainer } from './style';

const NavList = ({ open, onClick, children }) => (
  <ListContainer id="nav-list" open={open}>
    <List onClick={onClick}>{children}</List>
  </ListContainer>
);

export default NavList;

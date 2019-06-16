import React from 'react';
import { ListContainer, List, ListItem, ListLink } from './style';

const NavLinks = ({ open, onClick }) => (
  <ListContainer id="nav-list" open={open}>
    <List onClick={onClick}>
      <ListItem>
        <ListLink href="#home" aria-label="Return home">
          HOME
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href="#about" aria-label="Read my resume">
          RESUME
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href="#services" aria-label="Check out my projects">
          PROJECTS
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href="#promise" aria-label="My promise">
          PROMISE
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href="#contact" aria-label="Contact me">
          CONTACT
        </ListLink>
      </ListItem>
    </List>
  </ListContainer>
);

export default NavLinks;

import React from 'react';
import { useState } from 'react';
import NavBrand from './Brand';
import NavList from './List';
import NavLink from './Link';
import NavButton from './Button';
import NavDarkButton from './DarkButton';
import { NavWrapper, NavContainer } from './style';

const Navbar = ({ token, logout, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>
    window.innerWidth < 800 && setIsMenuOpen(!isMenuOpen);
  return (
    <NavWrapper>
      <NavContainer>
        <NavBrand text={'David Han'} />
        <NavDarkButton onClick={toggleTheme} />
        <NavList open={isMenuOpen} onClick={toggleMenu}>
          <NavLink
            to={'/home'}
            label={'Return back to the top'}
            text={'Home'}
          />
          <NavLink
            to={'/resume'}
            label={'Read over my resume'}
            text={'Resume'}
          />
          <NavLink
            to={'/projects'}
            label={'Check out my projects'}
            text={'Projects'}
          />
          <NavLink
            to={'/promise'}
            label={'Here is my promise'}
            text={'Promise'}
          />
          <NavLink
            to={'/contact'}
            label={'How you can contact me'}
            text={'Contact'}
          />
        </NavList>
        <NavButton open={isMenuOpen} onClick={toggleMenu} />
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;

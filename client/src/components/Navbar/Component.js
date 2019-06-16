import React from 'react';
import { useState } from 'react';
import NavBrand from './Brand';
import NavLinks from './Links';
import NavButton from './Button';
import NavDarkButton from './DarkButton';
import { NavWrapper, NavContainer } from './style';

const Navbar = ({ auth, logout, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>
    window.innerWidth < 800 && setIsMenuOpen(!isMenuOpen);
  return (
    <NavWrapper>
      <NavContainer>
        <NavBrand />
        <NavDarkButton onClick={toggleTheme} />
        <NavLinks open={isMenuOpen} onClick={toggleMenu} />
        <NavButton open={isMenuOpen} onClick={toggleMenu} />
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;

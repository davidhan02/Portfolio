import React from 'react';
import { useState } from 'react';
import Logo from './Logo.png';
import NavDarkButton from './DarkButton';
import {
  NavWrapper,
  NavContainer,
  NavBrand,
  NavBrandLink,
  NavBrandLogo,
  NavBrandText,
  NavDarkButton,
  NavListContainer,
  NavList,
  NavListItem,
  NavListLink,
  NavButton
} from './style';

const Navbar = ({ auth, logout, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>
    window.innerWidth < 800 && setIsMenuOpen(!isMenuOpen);
  return (
    <NavWrapper>
      <NavContainer>
        <NavBrand>
          <NavBrandLink href="/" aria-label="Refresh website">
            <NavBrandLogo src={Logo} alt="David Han Logo" />
            <NavBrandText>&nbsp;DAVID HAN</NavBrandText>
          </NavBrandLink>
        </NavBrand>
        <NavDarkButton onClick={toggleTheme} />
        <NavListContainer id="nav-list" open={isMenuOpen}>
          <NavList onClick={toggleMenu}>
            <NavListItem>
              <NavListLink href="#home" aria-label="Return home">
                HOME
              </NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink href="#about" aria-label="Read my resume">
                RESUME
              </NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink href="#services" aria-label="Check out my projects">
                PROJECTS
              </NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink href="#promise" aria-label="My promise">
                PROMISE
              </NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink href="#contact" aria-label="Contact me">
                CONTACT
              </NavListLink>
            </NavListItem>
          </NavList>
        </NavListContainer>
        <NavButton
          active={isMenuOpen}
          aria-expanded="false"
          aria-controls="nav-list"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <i class="fas fa-caret-down" aria-hidden="true" />
        </NavButton>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;

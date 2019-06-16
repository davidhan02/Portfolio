import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { trueCenter } from '../shared/helpers';
import Logo from './Logo.png';

import HeaderDarkButton from './DarkButton';

const NavWrapper = styled.nav`
  background: ${props => props.theme.foreground};
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  transition: all 0.1s ease;
  border-bottom: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  width: 100%;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1150px;
  height: 65px;
  padding: 0 10px;
`;

const NavBrand = styled.div`
  margin-right: auto;
  ${trueCenter};
  transition: transform 0.1s linear;
  :hover,
  :focus,
  :active {
    transform: skew(-10deg);
  }
`;

const NavBrandLink = styled.a`
  text-decoration: none;
  ${trueCenter};
  color: #000;
`;

const NavBrandLogo = styled.img`
  height: 45px;
  width: auto;
  ${props => props.theme.imageFilter}
`;

const NavBrandText = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: ${props => props.theme.normalText};
`;

const NavListContainer = styled.div`
  ${trueCenter};
  position: relative;

  @media (max-width: 800px) {
    ${trueCenter};
    position: absolute;
    top: 65px;
    background: ${props => props.theme.foreground};
    box-shadow: 0 8px 10px 0 ${props => props.theme.shadow};

    width: 80%;
    left: 10%;
    height: 0;

    overflow: hidden;
    text-align: center;
    transition: all 0.1s ease, height 0.5s ease;
    border: 1px solid ${props => props.theme.border};
    border-top: 0px;
    ${props =>
      props.open &&
      `height: 280px; border-top: 1px solid ${props.theme.foreground};`}
  }
`;

const NavList = styled.ul`
  list-style-type: none;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const NavListItem = styled.li`
  display: inline;
  margin-left: 5px;

  @media (max-width: 800px) {
    display: block;
    margin-top: 10px;
    :last-child {
      margin-bottom: 10px;
    }
  }
`;

const NavListLink = styled.a`
  color: ${props => props.theme.mutedText};
  position: relative;
  text-decoration: none;
  display: inline-block;
  padding: 7px 10px;
  margin: 0;
  transition: all 0.3s ease;

  :hover {
    color: ${props => props.theme.accent};
  }
  :before,
  :after {
    position: absolute;
    content: '';
    opacity: 0;
    left: 0px;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.accent};
    transition: all 0.4s ease;
  }
  :before {
    top: 0px;
    transform: translateY(15px);
  }
  :after {
    bottom: 0px;
    transform: translateY(-15px);
  }
  :hover:before,
  :hover:after {
    opacity: 1;
    transform: translateY(0px);
  }
  @media (max-width: 800px) {
    font-size: 1.4rem;
    font-weight: 300;
    width: 75%;
  }
`;

const NavButton = styled.button`
  display: none;
  padding: 10px 14px;
  margin-left: 10px;
  background: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.mutedText};
  color: ${props => props.theme.mutedText};
  transition: transform 0.5s ease;
  border-radius: 50%;

  :focus {
    outline: none;
  }
  @media (max-width: 800px) {
    display: inline;
  }
  ${props => props.active && 'transform: rotate(-180deg);'}
`;

const Header = ({ auth, logout, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavWrapper>
      <NavContainer>
        <NavBrand>
          <NavBrandLink href="/" aria-label="Refresh website">
            <NavBrandLogo src={Logo} alt="David Han Logo" />
            <NavBrandText>&nbsp;DAVID HAN</NavBrandText>
          </NavBrandLink>
        </NavBrand>
        <HeaderDarkButton onClick={toggleTheme} />
        <NavListContainer id="nav-list" open={isMenuOpen}>
          <NavList>
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          +
        </NavButton>
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;

import React from 'react';
import NavBrand from './Brand';
import NavList from './List';
import NavButton from './Button';
import NavDarkButton from './DarkButton';
import NavLinkContainer from './Link/Container';
import { NavWrapper, NavContainer } from './style';

const Navbar = ({ open, token, logout, toggleMenu, toggleTheme }) => {
  return (
    <NavWrapper>
      <NavContainer>
        <NavBrand text={'David Han'} />
        <NavDarkButton onClick={toggleTheme} />
        <NavButton open={open} onClick={toggleMenu} />
        <NavList open={open} token={token}>
          <NavLinkContainer
            exact
            to={'/'}
            label={'Return back to landing page'}
            text={'Home'}
          />
          <NavLinkContainer
            to={'/profile'}
            label={'Read over my profile'}
            text={'Profile'}
          />
          <NavLinkContainer
            to={'/projects'}
            label={'Check out my work'}
            text={'Projects'}
          />
          <NavLinkContainer
            to={'/contact'}
            label={'How to contact me'}
            text={'Contact'}
          />
          {token && (
            <>
              <NavLinkContainer
                to={'/dashboard'}
                label={'Admin Dashboard'}
                text={'Admin'}
              />
              <NavLinkContainer
                to={'/login'}
                label={'Log Out'}
                text={'Exit'}
                onClick={logout}
              />
            </>
          )}
        </NavList>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;

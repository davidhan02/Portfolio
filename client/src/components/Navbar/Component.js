import React from 'react';
import NavBrand from './Brand';
import NavList from './List';
import NavLink from './Link';
import NavButton from './Button';
import NavDarkButton from './DarkButton';
import { NavWrapper, NavContainer } from './style';

const Navbar = ({ open, token, logout, toggleMenu, toggleTheme }) => {
  const toggleCheck = () => {
    if (window.innerWidth < 800) toggleMenu();
  };
  return (
    <NavWrapper>
      <NavContainer>
        <NavBrand text={'David Han'} />
        <NavDarkButton onClick={toggleTheme} />
        <NavList token={token} open={open} onClick={toggleCheck}>
          <NavLink
            to={'/'}
            label={'Return back to landing page'}
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
          {token && (
            <>
              <NavLink
                to={'/dashboard'}
                label={'Admin Dashboard'}
                text={'Admin'}
              />
              <NavLink
                onClick={logout}
                to={'/'}
                label={'Log Out'}
                text={'Logout'}
              />
            </>
          )}
        </NavList>
        <NavButton open={open} onClick={toggleCheck} />
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;

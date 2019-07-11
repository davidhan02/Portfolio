import React from 'react';
import { FooterSection, FooterLink } from '../style';

const FooterAuthLinks = ({ token, logout }) => (
  <FooterSection>
    <span>&copy; David Han, Arctaras LLC</span>
    <span>Icons from FlatIcon</span>
    {token ? (
      <>
        <FooterLink to="/dashboard">DASHBOARD</FooterLink>
        <FooterLink to="/login" onClick={logout}>
          LOGOUT
        </FooterLink>
      </>
    ) : (
      <>
        <FooterLink to="/register">REGISTER</FooterLink>
        <FooterLink to="/login">LOGIN</FooterLink>
      </>
    )}
  </FooterSection>
);

export default FooterAuthLinks;

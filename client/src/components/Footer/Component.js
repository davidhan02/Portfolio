import React from 'react';
import Links from '../Links';
import FooterPageLinks from './PageLinks';
import FooterAuthLinks from './AuthLinks';
import { FooterWrapper, FooterSection } from './style';

const Footer = ({ token, profile, logout }) => (
  <FooterWrapper>
    <FooterPageLinks />
    <FooterSection>
      <Links social={profile.social} footer />
    </FooterSection>
    <FooterAuthLinks token={token} logout={logout} />
    <FooterPageLinks />
  </FooterWrapper>
);

export default Footer;

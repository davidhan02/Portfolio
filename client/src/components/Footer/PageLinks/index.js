import React from 'react';
import { FooterSection, FooterLink } from '../style';

const FooterPageLinks = () => (
  <FooterSection>
    <FooterLink to="/">HOME</FooterLink>
    <FooterLink to="/profile">PROFILE</FooterLink>
    <FooterLink to="/projects">PROJECTS</FooterLink>
    <FooterLink to="/contact">CONTACT ME</FooterLink>
  </FooterSection>
);

export default FooterPageLinks;

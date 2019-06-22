import React from 'react';
import Logo from './Logo.png';
import { Brand, BrandLink, BrandLogo, BrandText } from './style';

const NavBrand = ({ text }) => (
  <Brand>
    <BrandLink href="/" aria-label="Refresh website">
      <BrandLogo src={Logo} alt="David Han Logo" />
      <BrandText>&nbsp;{text}</BrandText>
    </BrandLink>
  </Brand>
);

export default NavBrand;

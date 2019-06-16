import React from 'react';
import Logo from './Logo.png';
import { Brand, BrandLink, BrandLogo, BrandText } from './style';

const NavBrand = () => (
  <Brand>
    <BrandLink href="/" aria-label="Refresh website">
      <BrandLogo src={Logo} alt="David Han Logo" />
      <BrandText>&nbsp;DAVID HAN</BrandText>
    </BrandLink>
  </Brand>
);

export default NavBrand;

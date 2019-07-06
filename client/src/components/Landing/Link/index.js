import React from 'react';
import { SpanLink } from './style';

const LandingLink = ({ to, text }) => (
  <SpanLink to={to}>
    <span />
    <span />
    <span />
    <span />
    <p>{text}</p>
  </SpanLink>
);

export default LandingLink;

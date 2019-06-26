import React from 'react';

const Links = ({ social }) => (
  <>
    <br />
    Links:&nbsp;
    {social.linkedin && social.linkedin}&nbsp;
    {social.instagram && social.instagram}&nbsp;
    {social.github && social.github}&nbsp;
    {social.glitch && social.glitch}&nbsp;
    {social.codepen && social.codepen}&nbsp;
    <br />
  </>
);

export default Links;

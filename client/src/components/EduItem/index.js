import React from 'react';
import EduItemHeaderContainer from './Header/Container';

const EduItem = ({ edu }) => (
  <>
    <br />
    <EduItemHeaderContainer eduId={edu.id} school={edu.school} />
    <br />
    Degree: {edu.degree}
    <br />
    Major: {edu.major}
    <br />
    From: {edu.from.split('T')[0]}
    <br />
    To: {(edu.current && 'current') || (edu.to && edu.to.split('T')[0])}
    <br />
    {edu.description}
    <br />
  </>
);

export default EduItem;

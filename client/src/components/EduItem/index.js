import React from 'react';
import EduItemHeaderContainer from './Header/Container';
import { Line, NameLine } from '../Profile/Side';

const EduItem = ({ edu }) => (
  <>
    <NameLine>
      <EduItemHeaderContainer eduId={edu.id} school={edu.school} />
    </NameLine>
    <Line>Degree: {edu.degree}</Line>
    <Line>Major: {edu.major}</Line>
    <Line>From: {edu.from.split('T')[0]}</Line>
    <Line>To: {(edu.current && 'current') || (edu.to && edu.to.split('T')[0])}</Line>
    <Line>{edu.description}</Line>
  </>
);

export default EduItem;

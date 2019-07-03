import React from 'react';
import EduItemHeaderContainer from './Header/Container';
import { Line, Row, LineWrapper } from '../shared/Line';

const EduItem = ({ edu }) => (
  <LineWrapper>
    <EduItemHeaderContainer edu={edu} />
    <Row>
      <span>Degree: {edu.degree}</span>
      <span>
        {edu.from.split('T')[0]} to{' '}
        {(edu.current && 'current') || (edu.to && edu.to.split('T')[0])}
      </span>
    </Row>
    <Line>{edu.description}</Line>
  </LineWrapper>
);

export default EduItem;

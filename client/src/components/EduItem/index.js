import React from 'react';
import moment from 'moment';
import EduItemHeaderContainer from './Header/Container';
import { Line, Row, LineWrapper } from '../shared/Line';

const EduItem = ({ edu }) => (
  <LineWrapper>
    <EduItemHeaderContainer edu={edu} />
    <Row as="div">
      <span>Degree: {edu.degree}</span>
      <span>
        {moment(edu.from).format('MMM YYYY')} -{' '}
        {(edu.current && 'current') || (edu.to && moment(edu.to).format('MMM YYYY'))}
      </span>
    </Row>
    <Line>{edu.description}</Line>
  </LineWrapper>
);

export default EduItem;

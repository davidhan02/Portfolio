import React from 'react';
import ExpItemHeaderContainer from './Header/Container';
import { Line, Row, LineWrapper } from '../shared/Line';

const ExpItem = ({ exp }) => (
  <LineWrapper>
    <ExpItemHeaderContainer exp={exp} />
    <Row>
      <span>Title: {exp.title}</span>
      <span>
        {exp.from.split('T')[0]} to{' '}
        {(exp.current && 'current') || (exp.to && exp.to.split('T')[0])}
      </span>
    </Row>
    <Line>{exp.description}</Line>
  </LineWrapper>
);

export default ExpItem;

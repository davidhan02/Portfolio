import React from 'react';
import moment from 'moment';
import ExpItemHeaderContainer from './Header/Container';
import { Line, Row, LineWrapper } from '../shared/Line';

const ExpItem = ({ exp }) => (
  <LineWrapper>
    <ExpItemHeaderContainer exp={exp} />
    <Row as="div">
      <span>{exp.title}</span>
      <span>
        {moment(exp.from).format('MMM YYYY')} -{' '}
        {(exp.current && 'current') || (exp.to && moment(exp.to).format('MMM YYYY'))}
      </span>
    </Row>
    <Line>{exp.description}</Line>
  </LineWrapper>
);

export default ExpItem;

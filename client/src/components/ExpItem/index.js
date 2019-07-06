import React from 'react';
import moment from 'moment';
import ExpItemHeaderContainer from './Header/Container';
import { Line, Row, NoWrap, LineWrapper } from '../shared/Line';

const ExpItem = ({ exp }) => (
  <LineWrapper>
    <ExpItemHeaderContainer exp={exp} />
    <Row as="div">
      <NoWrap>{exp.title}</NoWrap>
      <NoWrap>
        {moment(exp.from).format('MMM YYYY')} -{' '}
        {(exp.current && 'current') || (exp.to && moment(exp.to).format('MMM YYYY'))}
      </NoWrap>
    </Row>
    <Line>{exp.description}</Line>
  </LineWrapper>
);

export default ExpItem;

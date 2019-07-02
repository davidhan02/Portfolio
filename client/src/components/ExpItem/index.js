import React from 'react';
import ExpItemHeaderContainer from './Header/Container';
import { Line, NameLine } from '../Profile/Side';

const ExpItem = ({ exp }) => (
  <>
    <NameLine>
      <ExpItemHeaderContainer expId={exp.id} company={exp.company} />
    </NameLine>
    <Line>Title: {exp.title}</Line>
    <Line>In: {exp.location}</Line>
    <Line>From: {exp.from.split('T')[0]}</Line>
    <Line>To: {(exp.current && 'current') || (exp.to && exp.to.split('T')[0])}</Line>
    <Line>{exp.description}</Line>
  </>
);

export default ExpItem;

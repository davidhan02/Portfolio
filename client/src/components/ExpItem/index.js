import React from 'react';
import ExpItemHeaderContainer from './Header/Container';

const ExpItem = ({ exp }) => (
  <>
    <br />
    <ExpItemHeaderContainer expId={exp.id} company={exp.company} />
    <br />
    Title: {exp.title}
    <br />
    In: {exp.location}
    <br />
    From: {exp.from.split('T')[0]}
    <br />
    To: {(exp.current && 'current') || (exp.to && exp.to.split('T')[0])}
    <br />
    {exp.description}
    <br />
  </>
);

export default ExpItem;

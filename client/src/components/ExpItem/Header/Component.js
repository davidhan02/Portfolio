import React from 'react';
import { Row, Title } from '../../shared/Line';
import { AuthLink, AuthLinkBox } from '../../shared/AuthLink';

const ExpItemHeader = ({ token, profile, exp, deleteExp }) => (
  <Row as="div">
    <Title>{exp.company}</Title>
    {token ? (
      <AuthLinkBox>
        <AuthLink to={`/profile/expform/${exp.id}`}>Edit</AuthLink>&nbsp;
        <AuthLink to="/profile" onClick={() => deleteExp(profile.id, exp.id)}>
          Delete
        </AuthLink>
      </AuthLinkBox>
    ) : (
      <span>{exp.location}</span>
    )}
  </Row>
);

export default ExpItemHeader;

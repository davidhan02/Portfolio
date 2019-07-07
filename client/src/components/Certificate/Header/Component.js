import React from 'react';
import { Row, Title } from '../../shared/Line';
import { AuthLink, AuthLinkBox } from '../../shared/AuthLink';

const Certificate = ({ token, profile, cert, deleteCert }) => (
  <Row as="div">
    <Title>{cert.title}</Title>
    {token ? (
      <AuthLinkBox>
        <AuthLink to={`/profile/certform/${cert.id}`}>Edit</AuthLink>
        <AuthLink to="/profile" onClick={() => deleteCert(profile.id, cert.id)}>
          Delete
        </AuthLink>
      </AuthLinkBox>
    ) : (
      <span>{cert.from}</span>
    )}
  </Row>
);

export default Certificate;

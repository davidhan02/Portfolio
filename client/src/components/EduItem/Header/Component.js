import React from 'react';
import { Row, Title } from '../../shared/Line';
import { AuthLink, AuthLinkBox } from '../../shared/AuthLink';

const EduItemHeader = ({ token, profile, edu, deleteEdu }) => (
  <Row as="div">
    <Title>{edu.school}</Title>
    {token ? (
      <AuthLinkBox>
        <AuthLink to={`/profile/eduform/${edu.id}`}>Edit</AuthLink>
        <AuthLink to="/profile" onClick={() => deleteEdu(profile.id, edu.id)}>
          Delete
        </AuthLink>
      </AuthLinkBox>
    ) : (
      edu.major
    )}
  </Row>
);

export default EduItemHeader;

import React from 'react';
import { Link } from 'react-router-dom';

const EduHeader = ({ token, profile, eduId, school, deleteEdu }) => (
  <>
    {school}&nbsp;
    {token && (
      <>
        <Link to={`/profile/eduform/${eduId}`}>Edit</Link>&nbsp;
        <Link to="/profile" onClick={() => deleteEdu(profile.id, eduId)}>
          Delete
        </Link>
      </>
    )}
  </>
);

export default EduHeader;

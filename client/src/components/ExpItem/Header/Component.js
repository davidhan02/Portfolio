import React from 'react';
import { Link } from 'react-router-dom';

const ExpItemHeader = ({ token, profile, expId, company, deleteExp }) => (
  <>
    {company}&nbsp;
    {token && (
      <>
        <Link to={`/profile/expform/${expId}`}>Edit</Link>&nbsp;
        <Link to="/profile" onClick={() => deleteExp(profile.id, expId)}>
          Delete
        </Link>
      </>
    )}
  </>
);

export default ExpItemHeader;

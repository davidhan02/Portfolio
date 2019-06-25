import React from 'react';
import EduHeaderContainer from '../EduHeader/Container';

const ProfileEduList = ({ education }) =>
  education.map(edu => (
    <div key={edu.id}>
      <br />
      <EduHeaderContainer eduId={edu.id} school={edu.school} />
      <br />
      Degree: {edu.degree}
      <br />
      Major: {edu.major}
      <br />
      From: {edu.from.split('T')[0]}
      <br />
      To: {(edu.to && edu.to.split('T')[0]) || edu.current.toString()}
      <br />
      {edu.description}
      <br />
    </div>
  ));

export default ProfileEduList;

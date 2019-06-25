import React from 'react';

const ProfileEduList = ({ education }) =>
  education.map(edu => (
    <div key={edu.id}>
      <br />
      {edu.school}
      <br />
      {edu.degree}
      <br />
      {edu.major}
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

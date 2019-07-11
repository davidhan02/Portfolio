import React from 'react';
import EduItem from '../../EduItem';
import { ListWrapper, ListItem } from '../../shared/ListAssets';

const ProfileEdu = ({ eduList }) => (
  <ListWrapper as="ol">
    {eduList.map(edu => (
      <ListItem key={edu.id}>
        <EduItem edu={edu} />
      </ListItem>
    ))}
  </ListWrapper>
);

export default ProfileEdu;

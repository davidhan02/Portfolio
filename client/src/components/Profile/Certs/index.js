import React from 'react';
import Certificate from '../../Certificate';
import { ListWrapper, ListItem } from '../../shared/ListAssets';

const ProfileCerts = ({ certList }) => (
  <ListWrapper as="ol">
    {certList.map(cert => (
      <ListItem key={cert.id}>
        <Certificate cert={cert} />
      </ListItem>
    ))}
  </ListWrapper>
);

export default ProfileCerts;

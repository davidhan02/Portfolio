import React from 'react';
import ExpItem from '../../ExpItem';
import { ListWrapper, ListItem } from '../../shared/ListAssets';

const ProfileExp = ({ expList }) => (
  <ListWrapper as="ol">
    {expList.map(exp => (
      <ListItem key={exp.id}>
        <ExpItem exp={exp} />
      </ListItem>
    ))}
  </ListWrapper>
);

export default ProfileExp;

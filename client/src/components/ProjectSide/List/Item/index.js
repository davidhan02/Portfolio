import React from 'react';
import { Item } from './style';

const ProjectSideListItem = ({ category }) => {
  const isAll = category === 'All';
  return (
    <Item exact={isAll} to={isAll ? '/projects' : `/projects/cat/${category}`}>
      {category}
    </Item>
  );
};

export default ProjectSideListItem;

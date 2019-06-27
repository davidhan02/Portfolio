import React from 'react';
import Project from '../Project/Component';
import { List, ListItem } from './style';

const ProjectList = ({ list }) => (
  <List>
    {list.map(project => (
      <ListItem key={project.id}>
        <Project project={project} preview />
      </ListItem>
    ))}
  </List>
);

export default ProjectList;

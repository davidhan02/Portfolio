import React from 'react';
import Project from '../Project/Component';
import { List, ListItem } from './style';

const ProjectList = ({ list }) => (
  <List>
    {list.map(project => (
      <ListItem>
        <Project key={project.id} project={project} />
      </ListItem>
    ))}
  </List>
);

export default ProjectList;

import React from 'react';
import Project from '../Project/Component';
import { List, ListItem } from './style';

import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
`;

const Thumbnail = styled.div`
  padding: 5px;
  border-right: 1px solid ${props => props.theme.border};
`;

const ProjectList = ({ list }) => (
  <List>
    {list.map(project => (
      <ListItem key={project.id}>
        <Wrapper>
          <Thumbnail>imghereadfsdf</Thumbnail>
          <Project project={project} preview />
        </Wrapper>
      </ListItem>
    ))}
  </List>
);

export default ProjectList;

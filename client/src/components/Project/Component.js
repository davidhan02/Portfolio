import React from 'react';
import ProjectHeaderContainer from './Header/Container';
import Category from '../shared/Category';

import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: ${props => props.theme.foreground};

  padding: 10px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-flow: row-wrap;
  padding: 4px 0;
`;

const Project = ({ project }) => (
  <Wrapper>
    <ProjectHeaderContainer project={project} />
    <CategoryWrapper>
      {project.categories.map(category => (
        <Category key={category + project.id} category={category} />
      ))}
    </CategoryWrapper>
    <div>
      {project.url}
      <br />
      {project.code}
      <br />
      {project.created.split('T')[0]}
      <br />
      {project.text}
      <br />
    </div>
  </Wrapper>
);

export default Project;

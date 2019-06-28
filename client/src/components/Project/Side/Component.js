import React from 'react';
import styled from 'styled-components/macro';
import ProjectSideCreateButton from './CreateButton';
import ProjectSideCategoryList from './CategoryList';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;

  flex-basis: 240px;
  margin-left: 14px;

  border-radius: 3px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProjectSide = ({ token }) => (
  <Wrapper>
    {token && <ProjectSideCreateButton />}
    <ProjectSideCategoryList />
  </Wrapper>
);

export default ProjectSide;

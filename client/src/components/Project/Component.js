import React from 'react';
import ProjectHeaderContainer from './Header/Container';
import Category from '../shared/Category';
import styled from 'styled-components/macro';
import { link, wideFont } from '../shared/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 10px;
  background-color: ${props => props.theme.foreground};
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-flow: row-wrap;
  padding: 4px 0;
`;

const ProjectLinks = styled.div`
  display: flex;
`;

const SiteLink = styled.a`
  ${link};
  width: 100%;
  padding: 10px 8px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px;
  margin-right: 5px;
  text-align: center;
  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

const CodeLink = styled.a`
  ${link};
  width: 100%;
  padding: 10px 8px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px;
  margin-left: 5px;
  text-align: center;
  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

const ProjectText = styled.div`
  display: flex;
  padding: 5px 0 8px;
  border-radius: 4px;
  color: ${props => props.theme.mutedText};
  background: ${props => props.theme.pageBackground};
`;

const Project = ({ project }) => (
  <Wrapper>
    <ProjectHeaderContainer project={project} />
    <CategoryWrapper>
      {project.categories.map(category => (
        <Category key={category + project.id} category={category} />
      ))}
    </CategoryWrapper>
    <ProjectText preview>{project.text}</ProjectText>
    <ProjectLinks>
      <SiteLink href={project.url}>Go to Site</SiteLink>
      <CodeLink href={project.code}>View the Code</CodeLink>
    </ProjectLinks>
  </Wrapper>
);

export default Project;

import React from 'react';
import ProjectHeaderContainer from './Header/Container';
import Category from '../shared/Category';
import styled from 'styled-components/macro';
import { link, overflow } from '../shared/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 10px;
  background-color: ${props => props.theme.foreground};
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
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
  display: block;
  padding: 10px 0px;
  border-radius: 4px;
  white-space: pre-wrap;
  ${props => props.preview && overflow};
  ${props => props.preview && 'max-width: 600px'};
  color: ${props => props.theme.mutedText};
`;

const Project = ({ project, preview }) => (
  <Wrapper>
    <ProjectHeaderContainer project={project} />
    <CategoryWrapper>
      {project.categories.map(category => (
        <Category key={category + project.id} category={category} />
      ))}
    </CategoryWrapper>
    <ProjectText preview={preview}>{project.text}</ProjectText>
    <ProjectLinks>
      <SiteLink href={project.url}>Go to Site</SiteLink>
      <CodeLink href={project.code}>View the Code</CodeLink>
    </ProjectLinks>
  </Wrapper>
);

export default Project;

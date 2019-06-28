import React from 'react';
import ProjectHeaderContainer from './Header/Container';
import Category from '../shared/Category';
import styled from 'styled-components/macro';
import { link, overflow } from '../shared/helpers';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 10px;
  background-color: ${props => props.theme.foreground};
  border 1px solid ${props => props.theme.border};
  ${props => props.preview && 'border: none'};
  overflow: hidden;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2px 0 3px;
  ${props => props.preview && 'display: block; margin-top: 3px;'};
  ${props => props.preview && overflow};
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
  width: 100%;
  display: block;
  padding: 10px 0px;
  padding-right: 20px;
  border-radius: 4px;
  white-space: pre-wrap;
  ${props => props.preview && overflow};
  color: ${props => props.theme.mutedText};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
`;

const Project = ({ project, preview }) => (
  <Wrapper preview={preview}>
    <ProjectHeaderContainer project={project} />
    <CategoryWrapper preview={preview}>
      {project.categories.map(category => (
        <Category key={category + project.id} category={category} />
      ))}
    </CategoryWrapper>
    {!preview && (
      <ProjectImage src={project.screenshot} alt={`${project.title} screenshot`} />
    )}
    <ProjectText preview={preview}>{project.text}</ProjectText>
    <ProjectLinks>
      <SiteLink href={project.url}>Go to Site</SiteLink>
      <CodeLink href={project.code}>View the Code</CodeLink>
    </ProjectLinks>
  </Wrapper>
);

export default Project;

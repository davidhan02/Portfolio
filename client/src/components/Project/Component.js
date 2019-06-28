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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2px 0 3px;
  ${props => props.preview && 'display: block; margin-top: 3px;'};
  ${props => props.preview && overflow};
`;

const ProjectLinks = styled.div`
  display: flex;
`;

const ProjectLink = styled.a`
  ${link};
  width: 100%;
  padding: 10px 8px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px;
  text-align: center;
  :not(:first-child) {
    margin-left: 10px;
  }
  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

const ProjectText = styled.div`
  width: 100%;
  display: block;
  padding: 15px;
  padding-right: 20px;
  border 1px solid ${props => props.theme.border};
  border-radius: 4px;
  white-space: pre-wrap;
  margin: 10px 0;
  background: ${props => props.theme.pageBackground};
  color: ${props => props.theme.normalText};
  ${props =>
    props.preview &&
    `${overflow} color: ${
      props.theme.mutedText
    }; background: none; border: none; margin: 0; padding: 10px 5px`};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
`;

const Project = ({ project, preview }) => (
  <Wrapper preview={preview}>
    <ProjectHeaderContainer project={project} preview={preview} />
    <CategoryWrapper preview={preview}>
      {project.categories.map(category => (
        <Category key={category + project.id} category={category} />
      ))}
    </CategoryWrapper>
    {!preview && project.screenshot && (
      <ProjectImage src={project.screenshot} alt={`${project.title} screenshot`} />
    )}
    <ProjectText preview={preview}>{project.text}</ProjectText>
    <ProjectLinks>
      <ProjectLink href={project.url} target="_blank" rel="noreferrer noopener">
        Go to Site
      </ProjectLink>
      <ProjectLink href={project.code} target="_blank" rel="noreferrer noopener">
        View the Code
      </ProjectLink>
    </ProjectLinks>
  </Wrapper>
);

export default Project;

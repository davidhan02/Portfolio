import React from 'react';
import ProjectSideListItem from './Item';
import categories from '../../../util/categories';
import { ProjectSideListWrapper, ProjectSideListHeader } from './style';

const mapCategories = categories =>
  categories.map((category, index) => (
    <ProjectSideListItem key={index} category={category} />
  ));

const ProjectSideList = () => (
  <ProjectSideListWrapper>
    <ProjectSideListHeader>categories</ProjectSideListHeader>
    {mapCategories(['All', ...categories])}
  </ProjectSideListWrapper>
);

export default ProjectSideList;

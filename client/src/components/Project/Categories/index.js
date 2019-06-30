import React from 'react';
import Category from '../../shared/Category';
import { CategoryWrapper } from './style';

const ProjectCategories = ({ project, preview }) => (
  <CategoryWrapper preview={preview}>
    {project.categories.map(category => (
      <Category key={category + project.id} category={category} />
    ))}
  </CategoryWrapper>
);

export default ProjectCategories;

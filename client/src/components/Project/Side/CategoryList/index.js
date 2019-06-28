import React from 'react';
import styled from 'styled-components/macro';
import SideCategoryListItem from './Item';
import SideCategoryListHeader from './Header';
import categories from '../../../../util/categories';

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const mapCategories = categories =>
  categories.map((category, index) => (
    <SideCategoryListItem key={index} category={category} />
  ));

const ProjectSideCategoryList = () => (
  <CategoryList>
    <SideCategoryListHeader />
    {mapCategories(['All', ...categories])}
  </CategoryList>
);

export default ProjectSideCategoryList;

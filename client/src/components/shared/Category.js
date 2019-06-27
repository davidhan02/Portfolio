import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

export const CatLink = styled(NavLink).attrs({ activeClassName })`
  margin-top: 5px;
  padding: 3px 5px;
  border-radius: 4px;
  background: ${props => props.theme.accent};
  color: #fff;

  text-decoration: none;
  font-size: 14px;

  &.${activeClassName}, &:hover {
    background: ${props => props.theme.addIcon};
  }
  & + & {
    margin-left: 6px;
  }
`;

const Category = ({ category }) => (
  <CatLink to={`/projects/cat/${category}`}>{category}</CatLink>
);

export default Category;

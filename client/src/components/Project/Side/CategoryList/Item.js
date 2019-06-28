import React from 'react';
import styled from 'styled-components/macro';
import NavLink from '../../../shared/NavLink';

const Item = styled(NavLink)`
  padding: 12px;
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.theme.normalText};

  ::after {
    top: 0;
    bottom: 0;
    left: -1px;
    border-left: 3px solid ${props => props.theme.accent};
  }
`;

const SideCategoryListItem = ({ category }) => {
  const isAll = category === 'all';
  return (
    <Item exact={isAll} to={isAll ? '/projects' : `/projects/cat/${category}`}>
      {category}
    </Item>
  );
};

export default SideCategoryListItem;

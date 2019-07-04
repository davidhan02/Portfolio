import React from 'react';
import { Dropdown } from './style';
import history from '../../../util/history';
import categories from '../../../util/categories';
import SelectWrapper from '../../shared/form/SelectWrapper';

const ProjectSelectDropdown = ({ token, category }) => {
  const handleOnChange = event => {
    const eventCat = event.target.value;
    if (eventCat !== category) {
      const url = eventCat === 'All' ? '/projects' : `/projects/cat/${eventCat}`;
      history.push(url);
    }
  };
  return (
    <SelectWrapper flex>
      <Dropdown value={category} onChange={handleOnChange} token={token}>
        {['All', ...categories].map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </Dropdown>
    </SelectWrapper>
  );
};

export default ProjectSelectDropdown;

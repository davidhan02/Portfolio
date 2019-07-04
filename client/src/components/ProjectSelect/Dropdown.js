import React, { Component } from 'react';
import styled from 'styled-components/macro';
import categories from '../../util/categories';
import SelectWrapper from '../shared/form/SelectWrapper';

const Dropdown = styled.select`
  font-family: Roboto;
  font-size: 15px;
  width: 100%;
  padding: 10px 10px;

  border: 1px solid ${props => props.theme.border};
  border-left: none;

  border-radius: 0 3px 0 0;
  appearance: none;

  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.normalText};
`;

class ProjectSelectDropdown extends Component {
  mapCategories = () =>
    ['All', ...categories].map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  handleOnChange = event => {
    const category = event.target.value;
    if (category !== this.props.category) {
      const url = category === 'All' ? '/projects' : `/projects/cat/${category}`;
      this.props.history.push(url);
    }
  };

  render() {
    return (
      <SelectWrapper flex>
        <Dropdown value={this.props.category} onChange={this.handleOnChange}>
          {this.mapCategories()}
        </Dropdown>
      </SelectWrapper>
    );
  }
}

export default ProjectSelectDropdown;

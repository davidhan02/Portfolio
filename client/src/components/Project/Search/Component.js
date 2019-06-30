import React from 'react';
import { Field } from 'redux-form';
import renderField from '../../shared/form/renderField';
import { SearchForm, SearchButton } from './style';

const ProjectSearch = ({ handleSubmit }) => (
  <SearchForm onSubmit={handleSubmit}>
    <Field
      type="text"
      name="category"
      label="category:"
      placeholder="Search by project category..."
      component={renderField}
      isSearch
    />
    <SearchButton type="submit">Search</SearchButton>
  </SearchForm>
);

export default ProjectSearch;

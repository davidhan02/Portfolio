import React from 'react';
import { Field } from 'redux-form';
import renderField from '../../shared/form/renderField';
import OutlineButton from '../../shared/OutlineButton';
import { link } from '../../shared/helpers';

import styled from 'styled-components/macro';

const SearchForm = styled.form`
  max-width: 1130px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 14px auto;
`;

const SearchButton = styled(OutlineButton)`
  width: auto;
  margin-left: 14px;
  font-size: 14px;
  font-weight: 400;
  ${link};
  color: ${props => props.theme.mutedText};
`;

const Search = ({ handleSubmit }) => (
  <SearchForm onSubmit={handleSubmit}>
    <Field
      type="text"
      name="category"
      placeholder="Search by project category..."
      component={renderField}
      nobottom
    />
    <SearchButton type="submit">Search</SearchButton>
  </SearchForm>
);

export default Search;

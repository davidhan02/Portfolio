import styled from 'styled-components/macro';
import { link } from '../../shared/helpers';
import OutlineButton from '../../shared/OutlineButton';

export const SearchForm = styled.form`
  max-width: 1150px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 14px auto;
`;

export const SearchButton = styled(OutlineButton)`
  width: auto;
  margin-left: 24px;
  font-size: 14px;
  font-weight: 400;
  ${link};
  color: ${props => props.theme.mutedText};
`;

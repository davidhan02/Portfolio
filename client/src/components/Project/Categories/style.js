import styled from 'styled-components/macro';
import { overflow } from '../../shared/helpers';

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2px 0 3px;
  ${props => props.preview && 'display: block; margin-top: 3px;'};
  ${props => props.preview && overflow};
`;

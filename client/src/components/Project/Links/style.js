import styled from 'styled-components/macro';
import { link } from '../../shared/helpers';

export const LinksWrapper = styled.div`
  display: flex;
`;

export const ProjectLink = styled.a`
  ${link};
  width: 100%;
  padding: 10px 8px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px;
  text-align: center;
  :not(:first-child) {
    margin-left: 10px;
  }
  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

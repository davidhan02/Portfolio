import styled from 'styled-components/macro';

export const ProjectListWrapper = styled.ul`
  width: 100%;
  list-style: none;
  background: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-radius: 3px;
`;

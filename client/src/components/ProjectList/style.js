import styled from 'styled-components/macro';

export const List = styled.ul`
  width: 100%;
  list-style: none;
  background: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
`;

export const ListItem = styled.li`
  :not(:first-child) {
    border-top: 1px solid ${props => props.theme.border};
  }
`;

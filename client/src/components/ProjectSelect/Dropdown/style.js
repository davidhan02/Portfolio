import styled from 'styled-components/macro';

export const Dropdown = styled.select`
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
  ${props => props.token && 'border-radius: 0px; border-right: none'};
`;

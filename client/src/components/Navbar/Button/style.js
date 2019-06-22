import styled from 'styled-components/macro';
import { transition } from '../../shared/helpers';

export const MenuIcon = styled.svg`
  width: 13px;
  height: 13px;

  & path {
    ${transition('fill')};
    fill: ${props => props.theme.mutedText};
  }
`;

export const Button = styled.button`
  display: none;
  padding: 12px 12px 8px;
  margin-left: 10px;
  background: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.mutedText};
  color: ${props => props.theme.mutedText};
  transition: transform 0.5s ease;
  border-radius: 50%;

  :focus {
    outline: none;
  }
  @media (max-width: 800px) {
    display: inline;
  }
  ${props => props.active && 'transform: rotate(-180deg);'}
`;

import styled from 'styled-components/macro';
import { NavLink as RouterNavLink } from 'react-router-dom';

const activeClassName = 'active';

export const ListItem = styled.li`
  display: inline;
  margin-left: 5px;

  @media (max-width: 800px) {
    display: block;
    margin-top: 10px;
    margin-left: 0px;
    :last-child {
      margin-bottom: 10px;
    }
  }
`;

export const ListLink = styled(RouterNavLink).attrs({ activeClassName })`
  color: ${props => props.theme.mutedText};
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  padding: 7px 10px;
  margin: 0;
  transition: color 0.1s ease;
  background: ${props => props.theme.foreground};

  :hover,
  &.${activeClassName} {
    color: ${props => props.theme.accent};
  }
  :before,
  :after {
    position: absolute;
    content: '';
    opacity: 0;
    left: 0px;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.accent};
    transition: all 0.4s ease, color 0.1s ease;
  }
  :before {
    top: 0px;
    transform: translateY(15px);
  }
  :after {
    bottom: 0px;
    transform: translateY(-15px);
  }
  :hover:before,
  :hover:after,
  &.${activeClassName}:before, &.${activeClassName}:after {
    opacity: 1;
    transform: translateY(0px);
  }
  @media (max-width: 800px) {
    font-size: 1.4rem;
    font-weight: 300;
    width: 75%;
  }
`;

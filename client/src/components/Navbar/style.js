import styled from 'styled-components/macro';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { trueCenter } from '../shared/helpers';

export const NavWrapper = styled.nav`
  background: ${props => props.theme.foreground};
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  width: 100%;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1150px;
  height: 65px;
  padding: 0 10px;
`;

export const List = styled.ul`
  list-style-type: none;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

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

const activeClassName = 'active';

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

export const ListContainer = styled.div`
  ${trueCenter};
  position: relative;

  @media (max-width: 800px) {
    ${trueCenter};
    position: absolute;
    top: 65px;
    background: ${props => props.theme.foreground};
    box-shadow: 2px 8px 10px ${props => props.theme.shadow};

    width: 80%;
    left: 10%;
    height: 0;

    overflow: hidden;
    text-align: center;
    transition: box-shadow 0.1s ease, height 0.5s ease;
    border: 1px solid ${props => props.theme.border};
    border-top: 0px;
    ${props =>
      props.open &&
      `
      border-top: 1px solid ${props.theme.foreground};
      height: ${props.token ? '385px' : '280px'}; 
      `}
  }
`;

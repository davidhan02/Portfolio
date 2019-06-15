import { NavLink as RouterNavLink } from 'react-router-dom';
import { link, transition } from '../../styles/helpers';
import styled from 'styled-components/macro';

const activeClassName = 'active';

const NavLink = styled(RouterNavLink).attrs({ activeClassName })`
  ${link};

  position: relative;

  ::after {
    ${transition('opacity')};

    content: '';
    position: absolute;
    opacity: 0;
  }

  &.${activeClassName} {
    background-color: ${props => props.theme.activeBackground};

    ::after {
      opacity: 1;
    }
  }
`;

export default NavLink;

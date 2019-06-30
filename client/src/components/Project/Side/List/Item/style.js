import styled from 'styled-components/macro';
import NavLink from '../../../../shared/NavLink';

export const Item = styled(NavLink)`
  padding: 12px;
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.theme.normalText};

  ::after {
    top: 0;
    bottom: 0;
    left: -1px;
    border-left: 3px solid ${props => props.theme.accent};
  }
`;

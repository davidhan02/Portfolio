import styled from 'styled-components/macro';
import HeaderNavLink from '../NavLink';

const HeaderUsernameWrapper = styled(HeaderNavLink)`
  min-width: 0;
  flex-shrink: 1;
  border-left: 1px solid ${props => props.theme.border};
  border-right: 1px solid ${props => props.theme.border};
`;

export default HeaderUsernameWrapper;

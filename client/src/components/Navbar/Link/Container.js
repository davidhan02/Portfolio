import { closeMenu } from '../../../actions/menu';
import { connect } from 'react-redux';
import NavLink from './Component';

const mapDispatchToProps = { closeMenu };

const NavLinkContainer = connect(
  null,
  mapDispatchToProps
)(NavLink);

export default NavLinkContainer;

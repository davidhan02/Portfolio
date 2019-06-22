import { toggleTheme } from '../../actions/theme';
import { toggleMenu } from '../../actions/menu';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import Navbar from './Component';

const mapStateToProps = ({ menu: { open }, auth: { token } }) => ({
  open,
  token
});

const mapDispatchToProps = { toggleMenu, toggleTheme, logout };

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;

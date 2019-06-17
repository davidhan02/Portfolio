import { toggleTheme } from '../../actions/theme';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import Navbar from './Component';

const mapStateToProps = ({ token }) => ({ token });

const mapDispatchToProps = { toggleTheme, logout };

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;

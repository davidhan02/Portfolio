import { toggleTheme } from '../../actions/theme';
import { toggleMenu } from '../../actions/menu';
import { logout, testJWT } from '../../actions/auth';
import { connect } from 'react-redux';
import Navbar from './Component';

const mapStateToProps = ({ menu: { open }, auth: { token } }) => ({
  token,
  open
});

const mapDispatchToProps = { testJWT, toggleMenu, toggleTheme, logout };

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;

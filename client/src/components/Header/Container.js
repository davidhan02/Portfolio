import { toggleTheme } from '../../actions/theme';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import Header from './Component';

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = { toggleTheme, logout };

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default AppContainer;

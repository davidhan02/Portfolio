import { connect } from 'react-redux';
import { deleteProfile } from '../../../actions/profile';
import AuthLinks from './Component';

const mapStateToProps = null;

const mapDispatchToProps = { deleteProfile };

const AuthLinksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLinks);

export default AuthLinksContainer;

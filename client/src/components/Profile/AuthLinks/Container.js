import { connect } from 'react-redux';
import { deleteProfile } from '../../../actions/profile';
import { deleteSocial } from '../../../actions/social';
import AuthLinks from './Component';

const mapStateToProps = null;

const mapDispatchToProps = { deleteProfile, deleteSocial };

const AuthLinksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLinks);

export default AuthLinksContainer;

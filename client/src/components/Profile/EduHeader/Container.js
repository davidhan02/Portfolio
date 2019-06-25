import { connect } from 'react-redux';
import EduHeader from './Component';
import { deleteEdu } from '../../../actions/edu';

const mapStateToProps = ({ auth, profile }) => ({
  token: auth.token,
  profile: profile.single
});

const mapDispatchToProps = { deleteEdu };

const EduHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EduHeader);

export default EduHeaderContainer;

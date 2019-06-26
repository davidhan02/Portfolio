import { connect } from 'react-redux';
import EduItemHeader from './Component';
import { deleteEdu } from '../../../actions/edu';

const mapStateToProps = ({ auth, profile }) => ({
  token: auth.token,
  profile: profile.single
});

const mapDispatchToProps = { deleteEdu };

const EduItemHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EduItemHeader);

export default EduItemHeaderContainer;

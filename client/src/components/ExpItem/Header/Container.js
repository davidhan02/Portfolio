import { connect } from 'react-redux';
import ExpItemHeader from './Component';
import { deleteExp } from '../../../actions/exp';

const mapStateToProps = ({ auth, profile }) => ({
  token: auth.token,
  profile: profile.single
});

const mapDispatchToProps = { deleteExp };

const ExpItemHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpItemHeader);

export default ExpItemHeaderContainer;

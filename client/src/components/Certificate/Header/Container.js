import { connect } from 'react-redux';
import CertificateHeader from './Component';
import { deleteCert } from '../../../actions/cert';

const mapStateToProps = ({ auth, profile }) => ({
  token: auth.token,
  profile: profile.single
});

const mapDispatchToProps = { deleteCert };

const CertificateHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CertificateHeader);

export default CertificateHeaderContainer;

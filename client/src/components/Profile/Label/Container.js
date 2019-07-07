import { compose } from 'redux';
import { connect } from 'react-redux';
import ProfileLabel from './Component';

const mapStateToProps = ({ auth: { token } }) => ({ token });

const mapDispatchToProps = null;

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const ProfileLabelContainer = enhance(ProfileLabel);

export default ProfileLabelContainer;

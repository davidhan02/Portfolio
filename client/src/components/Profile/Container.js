import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Links from '../Links';
import Profile from './Component';
import EduItem from '../EduItem';
import ExpItem from '../ExpItem';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';
import { BodyWrapper, MainSection } from './style';
import AuthLinksContainer from './AuthLinks/Container';
import { getFirstProfile, clearProfile } from '../../actions/profile';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getFirstProfile();
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  render() {
    const { loading, profile, token } = this.props;
    if (loading) return <Loading />;
    if (!profile) return <NotFound />;
    return (
      <BodyWrapper>
        <MainSection>
          {token && <AuthLinksContainer id={profile.id} />}
          <Profile profile={profile} />
          {profile.social && <Links social={profile.social} />}
          <br />
          Education:
          <hr />
          {profile.education.length > 0 &&
            profile.education.map(edu => <EduItem key={edu.id} edu={edu} />)}
          <br />
          Experience:
          <hr />
          {profile.experience.length > 0 &&
            profile.experience.map(exp => <ExpItem key={exp.id} exp={exp} />)}
        </MainSection>
      </BodyWrapper>
    );
  }
}

const mapStateToProps = ({ auth, profile }) => ({
  token: auth.token,
  profile: profile.single,
  loading: profile.loading
});

const mapDispatchToProps = { getFirstProfile, clearProfile };

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProfileContainer);
